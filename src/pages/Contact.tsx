import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { motion } from "framer-motion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";
import { FloatingShape } from "../components/FloatingShapes";
import { Linkedin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  useEffect(() => {
    // Initialize Calendly widget
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Initialize LinkedIn badge
    const linkedinScript = document.createElement("script");
    linkedinScript.src = "https://platform.linkedin.com/badges/js/profile.js";
    linkedinScript.async = true;
    linkedinScript.defer = true;
    document.body.appendChild(linkedinScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(linkedinScript);
    };
  }, []);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    form.reset();
  };

  const formFieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl animate-fadeIn relative overflow-hidden">
      {/* Floating shapes */}
      <FloatingShape type="triangle" className="w-32 h-32 top-20 left-[5%] bg-primary/10 animate-float" />
      <FloatingShape type="square" className="w-28 h-28 bottom-20 right-[10%] bg-secondary/10 animate-float delay-300" />
      <FloatingShape type="hexagon" className="w-20 h-20 top-[40%] right-[20%] bg-accent/10 animate-float delay-600" />

      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Get in Touch
      </motion.h1>
      
      <div className="grid md:grid-cols-2 gap-16">
        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8 bg-background/50 p-8 rounded-lg backdrop-blur-sm border border-white/10"
        >
          <div className="space-y-4">
            <p className="text-muted-foreground">
              I'd love to hear from you! Fill out the form below with some info about yourself and what you'd like to discuss.
            </p>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Or connect with me on</span>
              <a 
                href="https://linkedin.com/in/iammayurbhat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <Linkedin size={20} />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <motion.div
                variants={formFieldVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 }}
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your name" 
                          {...field} 
                          className="transition-all duration-300 focus:scale-[1.02] focus:shadow-lg"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
              
              <motion.div
                variants={formFieldVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="your.email@example.com" 
                          {...field} 
                          className="transition-all duration-300 focus:scale-[1.02] focus:shadow-lg"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
              
              <motion.div
                variants={formFieldVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
              >
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company (Optional)</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your company" 
                          {...field} 
                          className="transition-all duration-300 focus:scale-[1.02] focus:shadow-lg"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
              
              <motion.div
                variants={formFieldVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
              >
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="What would you like to discuss?"
                          className="min-h-[120px] transition-all duration-300 focus:scale-[1.02] focus:shadow-lg"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button 
                  type="submit" 
                  className="w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                >
                  Send Message
                </Button>
              </motion.div>
            </form>
          </Form>
        </motion.div>

        {/* Calendar Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8 bg-background/50 p-8 rounded-lg backdrop-blur-sm border border-white/10"
        >
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold">Schedule a Meeting</h2>
            <p className="text-muted-foreground">
              Prefer to have a conversation? Book a time that works best for you.
            </p>
            
            {/* LinkedIn Badge */}
            <div className="flex justify-center mt-6">
              <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="VERTICAL" data-vanity="bhatm" data-version="v1">
                <a className="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/bhatm?trk=profile-badge">Mayur Bhat</a>
              </div>
            </div>
          </div>
          
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/iammayurbhat/30min?hide_gdpr_banner=1&background_color=1a1f2c&text_color=ffffff&primary_color=3b82f6"
            style={{ minWidth: '320px', height: '600px' }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;