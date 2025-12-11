import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { teamMembers } from "@/lib/data";
import { X } from "lucide-react";

export default function About() {
  const [selectedStory, setSelectedStory] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-primary text-primary-foreground pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-heading font-bold mb-6"
          >
            About AGS Staffing
          </motion.h1>
          <p className="text-xl max-w-2xl mx-auto text-primary-foreground/80">
            Building the future of work, one connection at a time.
          </p>
        </div>
      </section>

      {/* Our Story Card */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            layoutId="story-card"
            className="bg-white shadow-xl rounded-2xl overflow-hidden cursor-pointer max-w-4xl mx-auto border hover:shadow-2xl transition-shadow"
            onClick={() => setSelectedStory(true)}
          >
            <div className="md:flex">
              <div className="md:w-1/2 h-64 md:h-auto bg-muted">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Our Story" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <h2 className="text-2xl font-bold font-heading mb-4 text-primary">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 2010, AGS Staffing started with a simple mission: to bring a human touch back to the recruitment process. Click to read more...
                </p>
                <span className="text-secondary font-bold uppercase tracking-wider text-sm">Read Full Story</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expanded Story Modal */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div 
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStory(false)}
          >
            <motion.div 
              layoutId="story-card"
              className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedStory(false)}
                className="absolute top-4 right-4 p-2 bg-black/10 rounded-full hover:bg-black/20 transition-colors z-10"
              >
                <X size={20} />
              </button>
              
              <div className="h-64 sm:h-80 w-full relative">
                 <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Our Story" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end p-8">
                  <h2 className="text-4xl font-bold text-white font-heading">Our Story</h2>
                </div>
              </div>

              <div className="p-8 md:p-12 space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">The Beginning</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Founded in 2010, AGS Staffing began in a small shared office with just two recruiters and a shared vision: to treat every resume as a person and every job opening as an opportunity to change a life. We saw a gap in the market for a recruitment agency that truly understood the technical nuances of the industries it served while maintaining a deeply personal approach.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-muted/30 p-6 rounded-xl border border-muted">
                    <h3 className="text-xl font-bold text-secondary mb-2">Our Vision</h3>
                    <p className="text-muted-foreground">
                      To be the world's most trusted partner in talent acquisition, creating an ecosystem where businesses thrive through exceptional people.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-xl border border-muted">
                    <h3 className="text-xl font-bold text-secondary mb-2">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To empower organizations by connecting them with the talent they need to innovate, grow, and lead in their respective industries.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-primary mb-6">Meet The Team</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {teamMembers.map((member) => (
                      <div key={member.name} className="text-center">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                        </div>
                        <h4 className="font-bold text-lg">{member.name}</h4>
                        <span className="text-secondary font-medium text-sm block mb-2">{member.role}</span>
                        <p className="text-sm text-muted-foreground">{member.bio}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
