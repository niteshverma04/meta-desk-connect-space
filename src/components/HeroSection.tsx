import { Button } from "@/components/ui/button";
import Scene3D from "./Scene3D";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* 3D Scene */}
      <Scene3D />
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-metadesk-purple to-metadesk-dark-purple">
              Virtual Collaboration
            </span>
            <br />
            <span>Reimagined for the Future of Work</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Connect freelancers, companies, and remote employees in an immersive digital workspace designed to foster productivity and collaboration.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-metadesk-purple hover:bg-metadesk-dark-purple text-white text-lg px-8 py-6 h-auto">
              Get Started for Free
            </Button>
            <Button variant="outline" className="border-metadesk-purple text-metadesk-purple hover:bg-metadesk-purple/10 text-lg px-8 py-6 h-auto">
              Watch Demo
            </Button>
          </div>
          <div className="mt-12 animate-pulse-soft">
            <p className="text-sm text-gray-500 mb-2">Trusted by innovative teams worldwide</p>
            <div className="flex justify-center items-center flex-wrap gap-8">
              {/* Logos would go here - replaced with placeholders */}
              <div className="h-8 w-24 bg-gray-200 rounded"></div>
              <div className="h-8 w-20 bg-gray-200 rounded"></div>
              <div className="h-8 w-28 bg-gray-200 rounded"></div>
              <div className="h-8 w-24 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
