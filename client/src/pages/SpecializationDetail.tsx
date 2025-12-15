import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/shared/ContactForm";
import { specializations } from "@/lib/data";
import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { Check, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button, buttonVariants } from "@/components/ui/button";

export default function SpecializationDetail() {
  const [match, params] = useRoute("/specializations/:id");
  const id = match ? params.id : null;
  const spec = specializations.find((s) => s.id === id);

  if (!spec) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Specialization Not Found</h1>
        <Link href="/specializations" className={buttonVariants({})}>
          Back to All Specializations
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px]">
        <img 
          src={spec.image} 
          alt={spec.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
        
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-20">
          <Link href="/specializations" className="text-white/70 hover:text-white flex items-center gap-2 mb-6 transition-colors w-fit">
              <ArrowLeft size={20} /> Back to All Specializations
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-bold text-white mb-4"
          >
            {spec.title}
          </motion.h1>
          <p className="text-xl text-white/90 max-w-2xl">{spec.description}</p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Content */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                {spec.details}
              </p>

              <h3 className="text-xl font-bold text-primary mb-6">Roles We Commonly Place</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {spec.roles.map((role) => (
                  <div key={role} className="flex items-center gap-3 bg-muted/50 p-4 rounded-lg">
                    <div className="bg-secondary/20 p-2 rounded-full text-secondary-foreground">
                      <Check size={16} />
                    </div>
                    <span className="font-medium">{role}</span>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 p-8 rounded-xl border border-primary/10">
                <h3 className="font-bold text-primary text-xl mb-4">Why Choose AGS for {spec.title}?</h3>
                <p className="text-muted-foreground">
                  Our dedicated recruiters have industry-specific experience, meaning we understand the technical requirements and soft skills needed for success in {spec.title}.
                </p>
              </div>
            </div>

            {/* Form */}
            <div id="contact-form" className="bg-white p-8 rounded-2xl shadow-xl border border-muted sticky top-24">
              <h2 className="text-2xl font-bold mb-2">Get In Touch</h2>
              <p className="text-muted-foreground mb-6 text-sm">
                Looking for talent or a new role in {spec.title}? Upload your resume or send us a message.
              </p>
              <ContactForm withResume={true} />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
