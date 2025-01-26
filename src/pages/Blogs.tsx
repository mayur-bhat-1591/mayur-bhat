import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useState, useEffect } from "react";

const Blogs = () => {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // Check if the iframe can load
    const timer = setTimeout(() => {
      const iframe = document.querySelector('iframe');
      if (iframe) {
        setIsError(!iframe.contentWindow);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="animate-fadeIn max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <h1 className="text-4xl font-bold text-foreground mb-8">
          Blog Posts
        </h1>
        
        {isError ? (
          <Alert variant="destructive" className="bg-background/50 backdrop-blur-sm border-destructive/50">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Connection Error</AlertTitle>
            <AlertDescription>
              Unable to connect to mayurbhat.hashnode.dev. Please try again later or visit{' '}
              <a 
                href="https://mayurbhat.hashnode.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-primary transition-colors"
              >
                the blog directly
              </a>.
            </AlertDescription>
          </Alert>
        ) : (
          <Card className="w-full bg-background/50 backdrop-blur-sm border-primary/20 overflow-hidden rounded-lg">
            <div className="relative w-full h-[800px]">
              <iframe
                src="https://mayurbhat.hashnode.dev/"
                className="w-full h-full border-0"
                title="Mayur's Blog"
                onError={() => setIsError(true)}
              />
              {/* Loading overlay */}
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ delay: 1 }}
                className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center"
              >
                <div className="w-6 h-6 border-2 border-primary rounded-full animate-spin border-t-transparent" />
              </motion.div>
            </div>
          </Card>
        )}
      </motion.div>
    </div>
  );
};

export default Blogs;