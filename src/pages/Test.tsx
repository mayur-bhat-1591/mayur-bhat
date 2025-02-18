
import { SplineSceneBasic } from "@/components/ui/code.demo";
import { SplineSceneAlternate } from "@/components/ui/code.demo.alternate";

const Test = () => {
  return (
    <div className="min-h-screen bg-black p-8 space-y-8">
      <h1 className="text-3xl font-bold text-white mb-8">Spline Scene Demos</h1>
      
      <div className="space-y-8 max-w-6xl mx-auto">
        <div>
          <h2 className="text-xl text-white mb-4">Basic Scene</h2>
          <SplineSceneBasic />
        </div>
        
        <div>
          <h2 className="text-xl text-white mb-4">Alternate Scene</h2>
          <SplineSceneAlternate />
        </div>
      </div>
    </div>
  );
};

export default Test;
