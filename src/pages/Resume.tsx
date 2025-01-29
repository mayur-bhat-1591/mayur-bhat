import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import * as THREE from "three";
import { FloatingShape } from "../components/FloatingShapes";

const Resume = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  // Dynamic color transition based on mouse position
  const getGradient = (x: number, y: number) => {
    const normalizedX = (x / window.innerWidth) * 100;
    const normalizedY = (y / window.innerHeight) * 100;
    return `linear-gradient(${normalizedX}deg, rgba(155, 135, 245, ${normalizedY / 100}) 0%, rgba(214, 188, 250, ${(100 - normalizedY) / 100}) 100%)`;
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 3D Elements setup
  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth / 3, window.innerHeight / 3);
    containerRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
    const material = new THREE.MeshPhongMaterial({
      color: 0x9b87f5,
      wireframe: true,
    });
    
    const shape = new THREE.Mesh(geometry, material);
    scene.add(shape);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1);
    scene.add(light);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      shape.rotation.x += 0.001;
      shape.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth / 3, window.innerHeight / 3);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div 
      className="animate-fadeIn max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative min-h-screen"
      style={{ background: getGradient(mousePosition.x, mousePosition.y) }}
    >
      {/* Floating shapes */}
      <FloatingShape type="pentagon" className="w-32 h-32 top-20 left-[8%] bg-primary/10 animate-float" />
      <FloatingShape type="square" className="w-24 h-24 bottom-40 right-[12%] bg-secondary/10 animate-float delay-400" />
      <FloatingShape type="triangle" className="w-20 h-20 top-[35%] right-[25%] bg-accent/10 animate-float delay-700" />

      {/* 3D Canvas Container */}
      <div 
        ref={containerRef} 
        className="absolute top-0 right-0 opacity-30 pointer-events-none"
      />

      <motion.div 
        style={{ y, opacity }}
        className="flex justify-between items-center mb-8"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-foreground"
        >
          Resume
        </motion.h1>
        <Button
          variant="outline"
          onClick={() => window.open("https://www.overleaf.com/read/ckmtsfwkbjyz#eceefa", "_blank")}
          className="flex items-center gap-2 hover:scale-105 transition-transform"
        >
          View on Overleaf <ExternalLink className="h-4 w-4" />
        </Button>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="bg-background/50 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:border-primary/50">
          <div className="aspect-[8.5/11] w-full relative">
            <iframe
              src="/Mayur_s_Resume_ATS_2025 (1).pdf#view=FitH"
              className="w-full h-full absolute inset-0"
              onLoad={() => setIsLoading(false)}
              style={{ opacity: isLoading ? 0 : 1 }}
              title="Resume"
            />
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-pulse text-muted-foreground">
                  Loading resume...
                </div>
              </div>
            )}
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default Resume;