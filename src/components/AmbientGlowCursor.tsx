import React, { useEffect, useRef, useState } from 'react';

export const AmbientGlowCursor: React.FC = () => {
  const [hasPointer, setHasPointer] = useState(false);
  const glowRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable if pointer device supports hover
    if (window.matchMedia('(hover: none)').matches) return;
    setHasPointer(true);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let coreX = mouseX;
    let coreY = mouseY;
    let isVisible = false;

    const onPointerMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        if (glowRef.current) glowRef.current.style.opacity = '1';
        if (coreRef.current) coreRef.current.style.opacity = '1';
      }
    };

    const onMouseLeave = () => {
      isVisible = false;
      if (glowRef.current) glowRef.current.style.opacity = '0';
      if (coreRef.current) coreRef.current.style.opacity = '0';
    };

    window.addEventListener('mousemove', onPointerMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    let frameId: number;
    const updatePosition = () => {
      // Fluid spring lerp interpolation for soft trail effect
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;

      coreX += (mouseX - coreX) * 0.18;
      coreY += (mouseY - coreY) * 0.18;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }
      if (coreRef.current) {
        coreRef.current.style.transform = `translate3d(${coreX}px, ${coreY}px, 0) translate(-50%, -50%)`;
      }

      frameId = requestAnimationFrame(updatePosition);
    };

    frameId = requestAnimationFrame(updatePosition);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', onPointerMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  if (!hasPointer) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden" aria-hidden="true">
      {/* Broad Ambient Cosmic Nebula Glow */}
      <div
        ref={glowRef}
        className="absolute top-0 left-0 w-[550px] h-[550px] rounded-full opacity-0 transition-opacity duration-700 blur-[80px]"
        style={{
          background:
            'radial-gradient(circle, rgba(139, 92, 246, 0.16) 0%, rgba(6, 182, 212, 0.1) 40%, rgba(245, 158, 11, 0.03) 65%, transparent 80%)',
          willChange: 'transform',
        }}
      />

      {/* Tighter Interactive Cyan/Violet Aura Core */}
      <div
        ref={coreRef}
        className="absolute top-0 left-0 w-[180px] h-[180px] rounded-full opacity-0 transition-opacity duration-300 blur-[35px]"
        style={{
          background:
            'radial-gradient(circle, rgba(6, 182, 212, 0.28) 0%, rgba(139, 92, 246, 0.18) 50%, transparent 75%)',
          willChange: 'transform',
        }}
      />
    </div>
  );
};
