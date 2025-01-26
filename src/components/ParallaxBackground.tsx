import { useEffect, useState } from 'react';

const ParallaxBackground = () => {
  const [position, setPosition] = useState({ x: 0, y: 0, scroll: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position as percentage of screen width/height
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setPosition(prev => ({ ...prev, x, y }));
    };

    const handleScroll = () => {
      const scrolled = window.scrollY;
      setPosition(prev => ({ ...prev, scroll: scrolled * 0.1 })); // Adjust multiplier for effect intensity
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
      style={{
        backgroundImage: `url('/background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transform: `
          translate(
            ${(position.x - 50) * -0.05}px, 
            ${(position.y - 50) * -0.05 - position.scroll}px
          )
        `,
        transition: 'transform 0.2s cubic-bezier(0.33, 1, 0.68, 1)',
      }}
    >
      <div 
        className="absolute inset-0 bg-gradient-to-b from-background/95 to-background/90 backdrop-blur-sm"
        style={{
          transform: `translateY(${position.scroll * 0.5}px)`,
        }}
      />
    </div>
  );
};

export default ParallaxBackground;