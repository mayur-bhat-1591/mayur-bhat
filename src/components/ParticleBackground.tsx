import React from 'react';
// @ts-ignore
import MouseParticles from 'react-mouse-particles';

interface ParticleBackgroundProps {
  colors?: string[];
}

const ParticleBackground = ({ colors = ["#7B68EE", "#9370DB", "#8A2BE2"] }: ParticleBackgroundProps) => {
  return (
    <MouseParticles
      g={1}
      num={6}
      radius={6}
      life={1.5}
      v={2}
      color={colors}
      alpha={0.4}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
};

export default ParticleBackground;