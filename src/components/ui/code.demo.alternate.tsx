
'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
 
export function SplineSceneAlternate() {
  return (
    <Card className="w-full h-[500px] bg-gradient-to-br from-blue-900 to-black relative overflow-hidden">
      <Spotlight
        className="top-20 right-20 md:top-40 md:right-40"
      />
      
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Explore Outer Space
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
            Embark on an intergalactic journey with immersive 3D experiences that take you beyond the stars.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/0L-hzKS4SlGVOsR4/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}
