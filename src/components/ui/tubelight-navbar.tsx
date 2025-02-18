
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

interface NavItem {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface NavBarProps {
  items: NavItem[];
}

export const NavBar = ({ items }: NavBarProps) => {
  const location = useLocation();

  return (
    <motion.div 
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center space-x-4 bg-background/60 backdrop-blur-md px-6 py-3 rounded-full border border-primary/20">
        {items.map((item, idx) => {
          const isActive = location.pathname === item.url;
          const Icon = item.icon;
          
          return (
            <motion.a
              key={item.name}
              href={item.url}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Icon className="w-4 h-4" />
                <span>{item.name}</span>
              </span>
              {isActive && (
                <motion.div
                  layoutId="bubble"
                  className="absolute inset-0 bg-muted rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
};
