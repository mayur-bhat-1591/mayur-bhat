import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FloatingShape = ({ className }: { className?: string }) => (
  <motion.div
    className={`absolute rounded-lg bg-primary/20 backdrop-blur-sm ${className}`}
    animate={{
      y: ["0%", "-50%", "0%"],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    }}
  />
);

const Chatbot = () => {
  return (
    <div className="container mx-auto px-4 py-8 relative min-h-[80vh] overflow-hidden">
      {/* Floating shapes */}
      <FloatingShape className="w-24 h-24 top-20 left-[10%] animate-float" />
      <FloatingShape className="w-32 h-32 bottom-20 right-[10%] animate-float delay-200" />
      <FloatingShape className="w-16 h-16 top-40 right-[20%] animate-float delay-500" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-primary">
              AI Chatbot
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-lg">
              Coming soon: An interactive AI chatbot to assist you with your queries.
              Experience the future of conversational AI with our advanced natural
              language processing capabilities.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Chatbot;