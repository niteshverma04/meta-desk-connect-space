
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Shape 1 */}
        <div className="shape shape-1 absolute top-1/3 left-[15%] animate-float-slower animate-rotate-slow">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-metadesk-purple/5 rounded-full"></div>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#9b87f5" strokeWidth="1" strokeDasharray="5,5" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg sm:text-xl text-metadesk-purple font-medium">Connect</span>
            </div>
          </div>
        </div>
        
        {/* Shape 2 */}
        <div className="shape shape-2 absolute top-1/4 right-[20%] animate-float animate-rotate-slow">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-metadesk-light-blue/20 rounded-full"></div>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#D3E4FD" strokeWidth="1" strokeDasharray="3,3" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg sm:text-xl text-metadesk-purple font-medium">Create</span>
            </div>
          </div>
        </div>
        
        {/* Shape 3 */}
        <div className="shape shape-3 absolute bottom-1/3 left-[30%] animate-float-slow animate-rotate-slow">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-metadesk-soft-green/20 rounded-full"></div>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#F2FCE2" strokeWidth="1" strokeDasharray="4,2" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg sm:text-xl text-metadesk-purple font-medium">Grow</span>
            </div>
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-metadesk-purple/30 animate-float"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 rounded-full bg-metadesk-purple/20 animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-metadesk-light-blue/30 animate-float-slower"></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 rounded-full bg-metadesk-soft-green/30 animate-float"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-metadesk-purple to-metadesk-dark-purple">
              Virtual Collaboration
            </span>
            <br />
            <span className="text-foreground/90">Reimagined for the Future of Work</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/75 mb-8 max-w-3xl mx-auto">
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
            <p className="text-sm text-muted-foreground mb-2">Trusted by innovative teams worldwide</p>
            <div className="flex justify-center items-center flex-wrap gap-8">
              {/* Logos would go here - replaced with placeholders */}
              <div className="h-8 w-24 bg-muted rounded"></div>
              <div className="h-8 w-20 bg-muted rounded"></div>
              <div className="h-8 w-28 bg-muted rounded"></div>
              <div className="h-8 w-24 bg-muted rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
