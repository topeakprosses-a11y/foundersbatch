import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export interface CanvasSettings {
  mode: 'constellation' | 'neural' | 'hypergrid';
  colorTheme: 'cyber' | 'violet' | 'gold';
  speed: number;
}

interface CosmicCanvas3DProps {
  settings?: CanvasSettings;
}

export const CosmicCanvas3D: React.FC<CosmicCanvas3DProps> = ({
  settings = { mode: 'constellation', colorTheme: 'cyber', speed: 1.0 },
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const settingsRef = useRef(settings);
  settingsRef.current = settings;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect software WebGL to cap expensive features
    const isSoftwareGl = (() => {
      try {
        const gl = document.createElement('canvas').getContext('webgl2');
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return false;
      }
    })();

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.0018);

    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // Root 3D container group for smooth mouse & scroll transformations
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Color definitions
    const COLOR_VIOLET = new THREE.Color('#8B5CF6');
    const COLOR_CYAN = new THREE.Color('#06B6D4');
    const COLOR_GOLD = new THREE.Color('#F59E0B');
    const COLOR_WHITE = new THREE.Color('#F8FAFC');

    // 1. Generate Interconnected Spherical Particle Mesh
    const sphereRadius = 7.5;
    const nodeCount = 180;
    const nodePositions: THREE.Vector3[] = [];
    const nodeBasePositions: THREE.Vector3[] = [];
    const nodeColors: number[] = [];

    // Golden spiral sphere distribution for uniform, elegant spacing
    const phi = Math.PI * (Math.sqrt(5) - 1);
    for (let i = 0; i < nodeCount; i++) {
      const y = 1 - (i / (nodeCount - 1)) * 2; // -1 to 1
      const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      // Slight organic radius variation
      const r = sphereRadius * (0.92 + Math.random() * 0.16);
      const pos = new THREE.Vector3(x * r, y * r, z * r);
      nodePositions.push(pos.clone());
      nodeBasePositions.push(pos.clone());

      // Vertex color distribution: cyber theme has violet, cyan, and accents of gold
      const rnd = Math.random();
      let c = COLOR_VIOLET;
      if (rnd < 0.45) c = COLOR_CYAN;
      else if (rnd < 0.85) c = COLOR_VIOLET;
      else c = COLOR_GOLD;

      nodeColors.push(c.r, c.g, c.b);
    }

    // Nodes BufferGeometry
    const nodeGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(nodeCount * 3);
    for (let i = 0; i < nodeCount; i++) {
      posArray[i * 3] = nodePositions[i].x;
      posArray[i * 3 + 1] = nodePositions[i].y;
      posArray[i * 3 + 2] = nodePositions[i].z;
    }
    nodeGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    nodeGeometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(nodeColors), 3));

    // Procedural circular texture for crisp glowing nodes
    const makePointTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.3, 'rgba(200, 220, 255, 0.85)');
        gradient.addColorStop(0.6, 'rgba(139, 92, 246, 0.4)');
        gradient.addColorStop(1, 'rgba(6, 182, 212, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
      }
      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      return texture;
    };

    const nodeTexture = makePointTexture();
    const nodeMaterial = new THREE.PointsMaterial({
      size: 0.55,
      vertexColors: true,
      map: nodeTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const nodesMesh = new THREE.Points(nodeGeometry, nodeMaterial);
    mainGroup.add(nodesMesh);

    // 2. Interconnected Line Segments (Constellation Mesh Grid)
    const maxDistance = 3.6;
    const maxConnections = 4;
    const linePositions: number[] = [];
    const lineColors: number[] = [];

    for (let i = 0; i < nodeCount; i++) {
      let connections = 0;
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = nodePositions[i].distanceTo(nodePositions[j]);
        if (dist < maxDistance && connections < maxConnections) {
          linePositions.push(
            nodePositions[i].x,
            nodePositions[i].y,
            nodePositions[i].z,
            nodePositions[j].x,
            nodePositions[j].y,
            nodePositions[j].z
          );

          // Line vertex colors matching connected nodes
          const c1 = new THREE.Color(nodeColors[i * 3], nodeColors[i * 3 + 1], nodeColors[i * 3 + 2]);
          const c2 = new THREE.Color(nodeColors[j * 3], nodeColors[j * 3 + 1], nodeColors[j * 3 + 2]);
          lineColors.push(c1.r, c1.g, c1.b, c2.r, c2.g, c2.b);
          connections++;
        }
      }
    }

    const linesGeometry = new THREE.BufferGeometry();
    linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    linesGeometry.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));

    const linesMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.32,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
    mainGroup.add(linesMesh);

    // 3. Ambient Outer Stardust & Deep Cosmic Particles Field
    const starCount = 380;
    const starGeometry = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      // Wider spherical shell
      const u = Math.random();
      const v = Math.random();
      const th = u * 2.0 * Math.PI;
      const ph = Math.acos(2.0 * v - 1.0);
      const rad = 11 + Math.random() * 22;

      starPos[i * 3] = rad * Math.sin(ph) * Math.cos(th);
      starPos[i * 3 + 1] = rad * Math.sin(ph) * Math.sin(th);
      starPos[i * 3 + 2] = rad * Math.cos(ph);

      const colorPick = Math.random();
      const c = colorPick < 0.5 ? COLOR_CYAN : colorPick < 0.8 ? COLOR_VIOLET : COLOR_WHITE;
      starColors[i * 3] = c.r;
      starColors[i * 3 + 1] = c.g;
      starColors[i * 3 + 2] = c.b;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 0.32,
      vertexColors: true,
      map: nodeTexture,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const starsMesh = new THREE.Points(starGeometry, starMaterial);
    scene.add(starsMesh);

    // 4. Inner Luminous Core (Glowing geometric nucleus)
    const coreGeometry = new THREE.IcosahedronGeometry(2.6, 1);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.16,
      blending: THREE.AdditiveBlending,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    mainGroup.add(coreMesh);

    // Dynamic Interaction State (Mouse Parallax & Scroll)
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let scrollProgress = 0;
    let targetScale = 1.0;

    const handlePointerMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseX = normX;
      mouseY = normY;
      targetRotationY = normX * 0.45;
      targetRotationX = -normY * 0.35;
    };

    const handleScroll = () => {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const current = window.scrollY;
      scrollProgress = Math.min(1, Math.max(0, current / maxScroll));
      
      // On window scroll: smoothly expand scale & tilt mesh
      targetScale = 1.0 + scrollProgress * 0.55;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Window Resize Handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Animation & Pacing Loop
    let animationFrameId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();
      const speedMult = settingsRef.current.speed || 1.0;

      // Smooth mouse parallax damping
      mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * (delta * 3.0);
      mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * (delta * 3.0);

      // Base idle continuous rotation
      mainGroup.rotation.y += delta * 0.14 * speedMult;
      mainGroup.rotation.z += delta * 0.04 * speedMult;

      // Scroll-driven scale and tilt reactions
      const currentScale = mainGroup.scale.x;
      const newScale = THREE.MathUtils.damp(currentScale, targetScale, 4.0, delta);
      mainGroup.scale.set(newScale, newScale, newScale);

      // Scroll tilt and vertical subtle drift
      mainGroup.position.y = THREE.MathUtils.damp(
        mainGroup.position.y,
        -scrollProgress * 2.2 + Math.sin(elapsed * 0.8) * 0.3,
        3.0,
        delta
      );

      // Gentle counter-rotation for deep outer stars
      starsMesh.rotation.y -= delta * 0.02 * speedMult;
      starsMesh.rotation.x += delta * 0.01 * speedMult;

      // Core subtle breathing
      coreMesh.rotation.x += delta * 0.25;
      coreMesh.rotation.y -= delta * 0.3;
      const corePulse = 1.0 + Math.sin(elapsed * 2.0) * 0.08;
      coreMesh.scale.set(corePulse, corePulse, corePulse);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Memory cleanup
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      nodeTexture.dispose();
      linesGeometry.dispose();
      linesMaterial.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};
