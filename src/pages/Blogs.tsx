import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const Blogs = () => {
  return (
    <div className="animate-fadeIn max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-foreground mb-8"
      >
        Blog Posts
      </motion.h1>
      
      <Card className="w-full bg-background/50 backdrop-blur-sm border-primary/20">
        <iframe
          src="https://mayurbhat.hashnode.dev/"
          className="w-full h-[800px] border-0"
          title="Mayur's Blog"
        />
      </Card>
    </div>
  );
};

export default Blogs;