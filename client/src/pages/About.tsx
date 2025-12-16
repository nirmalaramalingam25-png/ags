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
      <section className="bg-primary text-primary-foreground pt-20 pb-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-heading font-bold mb-6"
          >
            
          </motion.h1>
          <p className="text-xl max-w-2xl mx-auto text-primary-foreground/80">
          
          </p>
        </div>
      </section>

      {/* Our Story Card */}
      <section className="py-10 relative">
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
              {/* <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <h2 className="text-2xl font-bold font-heading mb-4 text-primary">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                Ageatia is a leading workforce and staffing company. Founded in 2002 with the mission of providing world-class technical consultants to our clients, our goal is to exceed client expectations in all aspects of workforce solutions. We seek to understand client needs and use innovative ways to source and qualify the best candidates.. Click to read more...
                </p>
                <span className="text-secondary font-bold uppercase tracking-wider text-sm">Read Full Story</span>
              </div> */}
<div
  className="p-8 md:w-1/2 flex flex-col justify-start mt-8 md:mt-12"
  style={{ fontFamily: "'DM Serif Display', serif" }}
>
   <h2 className="text-2xl font-bold mb-4 text-primary text-center -mt-16"style={{ fontFamily: "'DM Serif Display', serif" }}>
    Our Story
  </h2>

  <p className="text-muted-foreground mb-4 leading-relaxed text-justify">
    Ageatia is a leading workforce and staffing company. Founded in 2002 with
    the mission of providing world-class technical consultants to our clients,
    our goal is to exceed client expectations in all aspects of workforce
    solutions. We seek to understand client needs and use innovative ways to
    source and qualify the best candidates. Click to read more...
  </p>

  <span className="text-secondary font-bold uppercase tracking-wider text-sm">
    Read Full Story
  </span>
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
                  {/*<h2 className="text-4xl font-bold text-white font-heading">Our Story</h2> */}
                </div>
              </div>

              <div className="p-8 md:p-12 space-y-8">
                <div
  className="p-8 md:p-12 space-y-8"
  style={{ fontFamily:  "'DM Serif Display', serif" }}
>
  <div>
  {/*  <h3
  className="text-3xl md:text-4xl text-primary mb-8 text-center "
  style={{
    fontFamily: "'DM Serif Display', serif",
    fontWeight: 600,
    letterSpacing: "0.05em",
  }}
>
  ABOUT US
</h3>*/}
  <h3
    className="text-3xl md:text-4xl text-yellow-400 mb-8 text-center -mt-14"
    style={{
      fontFamily: "'DM Serif Display', serif",
      fontWeight: 600,
      letterSpacing: "0.05em",
    }}
  >
    ABOUT US
  </h3>


    <p className="text-lg text-muted-foreground leading-relaxed text-justify">
      Ageatia is a leading workforce and staffing company. Founded in 2002 with
      the mission of providing world-class technical consultants to our clients,
      our goal is to exceed client expectations in all aspects of workforce
      solutions. We seek to understand client needs and use innovative ways to
      source and qualify the best candidates.
    </p><br/>

    <p className="text-lg text-muted-foreground leading-relaxed text-justify">
      From tech and healthcare to logistics, finance, and corporate roles, we
      help companies solve hiring challenges with precision and speed. Our team
      combines industry-specific recruiters, deep market insights, and a
      nationwide talent network to ensure every placement is the right fit —
      not just on paper, but culturally and long-term.
    </p><br/>

    <p className="text-lg text-muted-foreground leading-relaxed text-justify">
      At AGS, we believe staffing is more than filling positions; it’s about
      building careers, strengthening teams, and enabling businesses to grow
      without hiring delays. Whether supporting high-volume workforce needs or
      sourcing hard-to-find specialists, we deliver tailored solutions that
      improve productivity, reduce time-to-hire, and elevate workforce quality.
    </p><br/>
  </div>
</div>


                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-muted/30 p-6 rounded-xl border border-muted hover:scale-120 hover:shadow-lg hover:bg-yellow-500 hover:text-black transition-all duration-2s transform:scale(1,3)">
                    <h3 className="text-xl font-bold text-black mb-2 text-center "  style={{
      fontFamily: "'DM Serif Display', serif",
      fontWeight: 600,
      letterSpacing: "0.05em",
    }}>Our Vision</h3>
                    <p className="text-muted-foreground text-justify"style={{
      fontFamily: "'DM Serif Display', serif",
      fontWeight: 600,
      letterSpacing: "0.05em",
    }}>Our vision is to become a trusted, forward-thinking staffing partner in the United States—combining human expertise and modern technology to connect exceptional talent with inspiring career opportunities.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-xl border border-muted hover:scale-120 hover:shadow-lg hover:bg-yellow-500 hover:text-black transition-all duration-300">
                    <h3 className="text-xl font-bold text-black  mb-2 text-center"
                     style={{
      fontFamily: "'DM Serif Display', serif",
      fontWeight: 600,
      letterSpacing: "0.05em",
    }}>Our Mission</h3>
                    <p className="text-muted-foreground text-justify"style={{
      fontFamily: "'DM Serif Display', serif",
      fontWeight: 600,
      letterSpacing: "0.05em",
    }}>
                      Our mission is to deliver reliable, high-quality staffing solutions that help businesses grow and professionals achieve meaningful careers.
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
