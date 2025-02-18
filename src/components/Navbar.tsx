
import { useState } from "react";
import { Menu, X, Home, User, Briefcase, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { NavBar } from "./ui/tubelight-navbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "About", url: "/about", icon: User },
    { name: "Agents", url: "/projects", icon: Briefcase },
    { name: "Contact", url: "/contact", icon: Mail },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Desktop navigation */}
      <div className="hidden md:block">
        <NavBar items={navItems} />
      </div>

      {/* Mobile navigation */}
      <nav className="md:hidden fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
                Mayur Bhat
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-secondary hover:text-primary transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.url}
                  className={`flex items-center gap-2 px-3 py-2 ${
                    isActive(item.url)
                      ? "text-primary font-medium"
                      : "text-secondary hover:text-primary"
                  } transition-colors`}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
