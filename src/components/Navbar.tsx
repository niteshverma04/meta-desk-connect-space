
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="font-bold text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-metadesk-purple to-metadesk-dark-purple">
                MetaDesk
              </span>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-metadesk-purple font-medium transition-colors">
              Features
            </a>
            <a href="#personas" className="text-gray-700 hover:text-metadesk-purple font-medium transition-colors">
              For You
            </a>
            <a href="#" className="text-gray-700 hover:text-metadesk-purple font-medium transition-colors">
              Pricing
            </a>
            <a href="#" className="text-gray-700 hover:text-metadesk-purple font-medium transition-colors">
              About
            </a>
          </nav>

          {/* CTAs only, theme toggle removed */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-metadesk-purple text-metadesk-purple hover:bg-metadesk-purple/10">
              Login
            </Button>
            <Button className="bg-metadesk-purple hover:bg-metadesk-dark-purple text-white">
              Get Started
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg transition-all">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <a href="#features" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>
              Features
            </a>
            <a href="#personas" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>
              For You
            </a>
            <a href="#" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>
              Pricing
            </a>
            <a href="#" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>
              About
            </a>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="border-metadesk-purple text-metadesk-purple hover:bg-metadesk-purple/10 w-full">
                Login
              </Button>
              <Button className="bg-metadesk-purple hover:bg-metadesk-dark-purple text-white w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
