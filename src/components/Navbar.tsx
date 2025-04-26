
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-0 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="font-bold text-xl sm:text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-metadesk-purple to-metadesk-dark-purple">
                MetaDesk
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link to="/features" className="text-gray-300 hover:text-metadesk-purple font-medium transition-colors">
              Features
            </Link>
            <Link to="/personas" className="text-gray-300 hover:text-metadesk-purple font-medium transition-colors">
              For You
            </Link>
            <Link to="/pricing" className="text-gray-300 hover:text-metadesk-purple font-medium transition-colors">
              Pricing
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-metadesk-purple font-medium transition-colors">
              About
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <Link to="/login" tabIndex={-1}>
              <Button
                variant="outline"
                className="text-sm lg:text-base border-metadesk-purple text-metadesk-purple hover:bg-metadesk-purple/10 bg-[#F1F0FB]"
              >
                Login
              </Button>
            </Link>
            <Link to="/login" tabIndex={-1}>
              <Button className="text-sm lg:text-base bg-metadesk-purple hover:bg-metadesk-dark-purple text-white">
                Get Started
              </Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 bg-black/90 backdrop-blur-lg shadow-lg transition-all z-50">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <Link to="/features" className="block py-2 text-gray-300 hover:text-metadesk-purple font-medium" onClick={() => setMobileMenuOpen(false)}>
              Features
            </Link>
            <Link to="/personas" className="block py-2 text-gray-300 hover:text-metadesk-purple font-medium" onClick={() => setMobileMenuOpen(false)}>
              For You
            </Link>
            <Link to="/pricing" className="block py-2 text-gray-300 hover:text-metadesk-purple font-medium" onClick={() => setMobileMenuOpen(false)}>
              Pricing
            </Link>
            <Link to="/about" className="block py-2 text-gray-300 hover:text-metadesk-purple font-medium" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Link to="/login" tabIndex={-1} onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant="outline"
                  className="w-full border-metadesk-purple text-metadesk-purple hover:bg-metadesk-purple/10 bg-[#F1F0FB]"
                >
                  Login
                </Button>
              </Link>
              <Link to="/login" tabIndex={-1} onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-metadesk-purple hover:bg-metadesk-dark-purple text-white">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
