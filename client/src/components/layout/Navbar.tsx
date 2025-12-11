import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { companyInfo } from "@/lib/data";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Specialization", path: "/specializations" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Job Seekers", path: "/job-seekers" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
            <motion.img 
              src={companyInfo.logo} 
              alt="Logo" 
              className={`transition-all duration-300 object-contain ${scrolled ? "h-12" : "h-24"}`}
            />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 relative group
                  ${location === link.path 
                    ? "text-secondary" 
                    : scrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
                  }`}
            >
                {link.name}
                {location === link.path && (
                  <motion.div 
                    layoutId="underline" 
                    className="absolute bottom-1 left-4 right-4 h-0.5 bg-secondary" 
                  />
                )}
            </Link>
          ))}
          <Link href="/admin" className={`ml-4 px-4 py-1.5 rounded border text-xs font-bold transition-all
               ${scrolled 
                 ? "border-primary text-primary hover:bg-primary hover:text-white" 
                 : "border-white/50 text-white hover:bg-white hover:text-primary"
               }`}>
              Admin
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={scrolled ? "text-foreground" : "text-white"} />
          ) : (
            <Menu className={scrolled ? "text-foreground" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <nav className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  href={link.path}
                  className={`p-3 rounded-lg hover:bg-muted ${location === link.path ? "text-primary font-bold bg-muted/50" : "text-foreground"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                    {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
