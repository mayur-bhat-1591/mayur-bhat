import { useEffect, useState } from 'react';

const ParallaxBackground = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position as percentage of screen width/height
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        backgroundImage: `url('/background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transform: `translate(${(position.x - 50) * -0.05}px, ${(position.y - 50) * -0.05}px)`,
        transition: 'transform 0.2s cubic-bezier(0.33, 1, 0.68, 1)',
      }}
    >
      <div className="absolute inset-0 bg-background/95 backdrop-blur-sm" />
    </div>
  );
};

export default ParallaxBackground;