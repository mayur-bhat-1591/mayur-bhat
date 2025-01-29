import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { FloatingShape } from "../components/FloatingShapes";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Scroll-based animations
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  // Dynamic color transition based on mouse position
  const getGradient = (x: number, y: number) => {
    const normalizedX = (x / window.innerWidth) * 100;
    const normalizedY = (y / window.innerHeight) * 100;
    return `linear-gradient(${normalizedX}deg, rgba(139, 92, 246, ${normalizedY / 100}) 0%, rgba(147, 51, 234, ${(100 - normalizedY) / 100}) 100%)`;
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
    
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    containerRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(1, 0);
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
      renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div 
      className="animate-fadeIn relative min-h-screen overflow-hidden"
      style={{ background: getGradient(mousePosition.x, mousePosition.y) }}
    >      
      <FloatingShape type="hexagon" className="w-32 h-32 top-20 left-[10%] bg-primary/10 animate-float" />
      <FloatingShape type="triangle" className="w-24 h-24 bottom-40 right-[15%] bg-secondary/10 animate-float delay-300" />
      <FloatingShape type="pentagon" className="w-20 h-20 top-[40%] right-[25%] bg-accent/10 animate-float delay-700" />

      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: `url('/background.jpg')`,
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center relative">
          {/* 3D Canvas Container */}
          <div 
            ref={containerRef} 
            className="absolute top-0 left-0 w-full h-full -z-10 opacity-30"
          />
          
          <motion.p 
            style={{ y, opacity }}
            className="text-2xl md:text-3xl lg:text-4xl text-foreground mb-12 max-w-3xl mx-auto font-medium leading-relaxed tracking-wide"
          >
            I build AI agents that solve real-world business problems and drive growth.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center gap-6 mb-12"
          >
            <a
              href="https://github.com/mayur-bhat-1591"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-all duration-300 transform hover:scale-110"
            >
              <Github className="w-6 h-6 text-primary" />
            </a>
            <a
              href="https://linkedin.com/in/bhatm"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-primary" />
            </a>
            <a
              href="mailto:iammayurbhat@gmail.com"
              className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="w-6 h-6 text-primary" />
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 bg-[#8B5CF6] text-white px-8 py-4 rounded-lg hover:bg-[#7C3AED] transition-all duration-300 transform hover:shadow-lg hover:shadow-primary/20 text-lg font-medium"
            >
              View My Agents
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;