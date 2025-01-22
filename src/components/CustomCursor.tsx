import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleCursorStyle = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      setIsPointer(
        window.getComputedStyle(hoveredElement || document.body).cursor === 'pointer'
      );
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleCursorStyle);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleCursorStyle);
    };
  }, [position.x, position.y]);

  return (
    <>
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`rounded-full bg-white transition-all duration-200 ease-out ${
            isPointer ? 'w-6 h-6' : 'w-4 h-4'
          }`}
        />
      </div>
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className="w-8 h-8 rounded-full border border-white transition-all duration-500 ease-out"
          style={{
            transform: `scale(${isPointer ? 1.5 : 1})`,
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;