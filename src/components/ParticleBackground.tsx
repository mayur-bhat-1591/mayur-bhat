import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup with fog for depth
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2('#000', 0.001);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Create particle system
    const geometry = new THREE.BufferGeometry();
    const particleCount = 15000;
    
    // Create a cube of particles
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    const color = new THREE.Color();

    for (let i = 0; i < particleCount * 3; i += 3) {
      // Position particles in a cube
      positions[i] = Math.random() * 100 - 50;     // x
      positions[i + 1] = Math.random() * 100 - 50; // y
      positions[i + 2] = Math.random() * 100 - 50; // z

      // Give each particle a slightly different purple hue
      color.setHSL(0.75 + Math.random() * 0.05, 0.8, 0.6);
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.01;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.01;
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Animation
    const animate = () => {
      targetX = mouseX * 0.2;
      targetY = mouseY * 0.2;

      // Rotate based on mouse position with smooth interpolation
      particles.rotation.y += (targetX - particles.rotation.y) * 0.05;
      particles.rotation.x += (targetY - particles.rotation.x) * 0.05;

      // Continuous gentle rotation
      particles.rotation.y += 0.002;

      // Make particles move in a wave pattern
      const positions = geometry.attributes.position.array as Float32Array;
      const time = Date.now() * 0.00005;

      for (let i = 0; i < particleCount * 3; i += 3) {
        const x = positions[i];
        const z = positions[i + 2];
        positions[i + 1] = Math.sin(x * 0.1 + z * 0.1 + time) * 5;
      }
      geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-10" />;
};

export default ParticleBackground;