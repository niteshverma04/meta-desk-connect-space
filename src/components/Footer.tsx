
import { Twitter, Linkedin, Facebook, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 text-foreground border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <a href="/" className="inline-block mb-6">
              <span className="font-bold text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-metadesk-purple to-metadesk-dark-purple">
                MetaDesk
              </span>
            </a>
            <p className="text-foreground/70 mb-6 max-w-md">
              Bringing together freelancers, companies, and remote workers in a virtual 
              coworking platform designed for the future of work.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground/90 text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Integrations</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Changelog</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground/90 text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Press</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground/90 text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Community</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Webinars</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} MetaDesk. All rights reserved.
          </p>
          
          <div className="flex items-center">
            <span className="text-foreground/60 text-sm mr-2">Stay updated:</span>
            <div className="flex items-center bg-muted/50 rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent pl-4 pr-2 py-2 text-sm focus:outline-none text-foreground w-36 sm:w-auto"
              />
              <button className="bg-metadesk-purple hover:bg-metadesk-dark-purple text-white p-2 rounded-full">
                <Mail size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
