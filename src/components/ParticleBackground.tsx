import React from 'react';
// @ts-ignore: MouseParticles has no type definitions
import MouseParticles from 'react-mouse-particles';

const ParticleBackground: React.FC = () => {
  return (
    <MouseParticles
      g={1}
      num={6}
      radius={4}
      life={0.2}
      v={2}
      color={["#7B68EE", "#9370DB", "#8A2BE2"]} // Purple shades
      alpha={0.4}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
};

export default ParticleBackground;
