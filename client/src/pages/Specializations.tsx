import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { specializations } from "@/lib/data";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";


export default function Specializations() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const appliedId = urlParams.get('applied');
    if (appliedId) {
      const element = document.getElementById(`spec-${appliedId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Remove the query param after scrolling
        const newUrl = window.location.pathname;
        window.history.replaceState({}, '', newUrl);
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="bg-primary text-primary-foreground pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          {/* <h1 className="text-5xl font-heading font-bold mb-6">Our Specializations</h1>*/}
          {/*<p className="text-xl max-w-2xl mx-auto text-primary-foreground/80">
            We offer specialized staffing solutions tailored to your industry's unique needs.
          </p>*/}
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {specializations.map((spec, index) => (
              <motion.div
                id={`spec-${spec.id}`}
                key={spec.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={spec.image} 
                    alt={spec.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold font-heading mb-3 text-primary">{spec.title}</h3>
                  <p className="text-muted-foreground mb-6 line-clamp-2">{spec.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-sm text-foreground mb-2">Roles we place:</h4>
                    <div className="flex flex-wrap gap-2">
                      {spec.roles.slice(0, 3).map((role) => (
                        <span key={role} className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">
                          {role}
                        </span>
                      ))}
                      {spec.roles.length > 3 && (
                        <span className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">
                          +{spec.roles.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <Link href={`/apply/${spec.id}`}>
                    <Button className="w-full">
                      View Details <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
}
