
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Settings as SettingsIcon } from "lucide-react";
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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-0 bg-transparent"
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
            <Link to="/features" className="text-foreground/70 hover:text-primary font-medium transition-colors">
              Features
            </Link>
            <Link to="/personas" className="text-foreground/70 hover:text-primary font-medium transition-colors">
              For You
            </Link>
            <Link to="/pricing" className="text-foreground/70 hover:text-primary font-medium transition-colors">
              Pricing
            </Link>
            <Link to="/about" className="text-foreground/70 hover:text-primary font-medium transition-colors">
              About
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <Link to="/settings">
              <Button variant="ghost" size="icon" aria-label="Settings">
                <SettingsIcon className="h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <Link to="/settings">
              <Button variant="ghost" size="icon" aria-label="Settings">
                <SettingsIcon className="h-5 w-5" />
              </Button>
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 bg-background/98 backdrop-blur-lg shadow-lg transition-all z-50 border-b border-border">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <Link to="/features" className="block py-2 text-foreground/80 hover:text-primary font-medium" onClick={() => setMobileMenuOpen(false)}>
              Features
            </Link>
            <Link to="/personas" className="block py-2 text-foreground/80 hover:text-primary font-medium" onClick={() => setMobileMenuOpen(false)}>
              For You
            </Link>
            <Link to="/pricing" className="block py-2 text-foreground/80 hover:text-primary font-medium" onClick={() => setMobileMenuOpen(false)}>
              Pricing
            </Link>
            <Link to="/about" className="block py-2 text-foreground/80 hover:text-primary font-medium" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
