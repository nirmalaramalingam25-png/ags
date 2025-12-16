import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { companyInfo } from "@/lib/data";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    { name: "Admin", path: "/admin" },
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

        {/* Burger Menu Toggle */}
        <button 
          className="p-2 text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className={scrolled ? "text-foreground" : "text-white"} />
        </button>
      </div>

      {/* Mobile Menu - Right side drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
             // className="fixed right-0 top-0 h-full w-full sm:w-96 bg-black z-50 shadow-lg flex flex-col p-6"
           className="fixed right-0 top-0 h-full w-full sm:w-96 bg-black z-50 shadow-lg flex flex-col p-6"
  style={{
    fontFamily: "'Dancing Script', cursive",
    fontSize: "58px",
    fontWeight: 600, // Dancing Script supports real bold
    lineHeight: "1.2",
    textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
  }}
            >
              <button 
                className="ml-auto mb-8"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="text-white" size={28} />
              </button>
              
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`text-3xl font-semibold transition-colors ${
                      location === link.path
                        ? "text-secondary"
                        : "text-white hover:text-secondary"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
