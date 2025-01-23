import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Resume = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="animate-fadeIn max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-foreground">Resume</h1>
        <Button
          variant="outline"
          onClick={() => window.open("https://www.overleaf.com/read/ckmtsfwkbjyz#eceefa", "_blank")}
          className="flex items-center gap-2"
        >
          View on Overleaf <ExternalLink className="h-4 w-4" />
        </Button>
      </div>
      
      <Card className="bg-background/50 backdrop-blur-sm border border-white/10">
        <div className="aspect-[8.5/11] w-full relative">
          <iframe
            src="/resume.pdf#view=FitH"
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
    </div>
  );
};

export default Resume;
