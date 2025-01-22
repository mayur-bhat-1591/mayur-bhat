import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import CustomCursor from "./components/CustomCursor";
import ParticleBackground from "./components/ParticleBackground";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  
  const getParticleColors = (pathname: string) => {
    switch(pathname) {
      case '/':
        return ["#7B68EE", "#9370DB", "#8A2BE2"]; // Original purple
      case '/projects':
        return ["#6E59A5", "#8B5CF6", "#7E69AB"]; // Different purple shade
      case '/about':
        return ["#9b87f5", "#8677D9", "#7B68EE"]; // Lighter purple
      case '/resume':
        return ["#6E59A5", "#5D4A94", "#4C3B83"]; // Darker purple
      case '/contact':
        return ["#A78BFA", "#9061F9", "#7C3AED"]; // Vibrant purple
      default:
        return ["#7B68EE", "#9370DB", "#8A2BE2"];
    }
  };

  return (
    <div className="relative">
      <CustomCursor />
      <ParticleBackground colors={getParticleColors(location.pathname)} />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;