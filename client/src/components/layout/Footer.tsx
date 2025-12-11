import { companyInfo } from "@/lib/data";
import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* About Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src={companyInfo.logo} alt="AGS Logo" className="h-10 w-10 bg-white rounded-full p-1" />
              <span className="font-heading font-bold text-xl uppercase tracking-wider">AGS Staffing</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Connecting exceptional talent with world-class organizations. We specialize in building the teams that build the future.
            </p>
            <div className="flex gap-4">
              <a href={companyInfo.socials.facebook} className="p-2 bg-white/10 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors"><Facebook size={18} /></a>
              <a href={companyInfo.socials.twitter} className="p-2 bg-white/10 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors"><Twitter size={18} /></a>
              <a href={companyInfo.socials.linkedin} className="p-2 bg-white/10 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors"><Linkedin size={18} /></a>
              <a href={companyInfo.socials.instagram} className="p-2 bg-white/10 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 border-l-4 border-secondary pl-3">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="/specializations" className="hover:text-secondary transition-colors">Specializations</Link></li>
              <li><Link href="/job-seekers" className="hover:text-secondary transition-colors">Job Seekers</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Specializations */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 border-l-4 border-secondary pl-3">Industries</h3>
            <ul className="space-y-3">
              <li><Link href="/specializations/it" className="hover:text-secondary transition-colors">Information Technology</Link></li>
              <li><Link href="/specializations/healthcare" className="hover:text-secondary transition-colors">Healthcare</Link></li>
              <li><Link href="/specializations/finance" className="hover:text-secondary transition-colors">Finance & Accounts</Link></li>
              <li><Link href="/specializations/engineering" className="hover:text-secondary transition-colors">Engineering & Logistics</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 border-l-4 border-secondary pl-3">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-secondary shrink-0 mt-1" size={18} />
                <span className="text-primary-foreground/80">{companyInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-secondary shrink-0" size={18} />
                <span className="text-primary-foreground/80">{companyInfo.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-secondary shrink-0" size={18} />
                <span className="text-primary-foreground/80">{companyInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} AGS Staffing Agency. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
