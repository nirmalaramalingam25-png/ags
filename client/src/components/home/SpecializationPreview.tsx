import { specializations } from "@/lib/data";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function SpecializationPreview() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-secondary font-bold tracking-widest uppercase mb-2">Our Expertise</h2>
          <h3 className="text-4xl font-heading font-bold text-primary mb-4">Specialized Staffing Solutions</h3>
          <p className="text-muted-foreground">
            We provide tailored recruitment services across key industries, ensuring you get professionals who understand your specific challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specializations.map((spec, index) => (
            <Link key={spec.id} href={`/specializations/${spec.id}`}>
              <motion.div
                className="group relative block h-96 rounded-xl overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Background Image */}
                <img 
                  src={spec.image} 
                  alt={spec.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-xl font-bold text-white mb-2">{spec.title}</h4>
                  <p className="text-white/80 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {spec.description}
                  </p>
                  <span className="inline-flex items-center text-secondary text-sm font-bold uppercase tracking-wider">
                    Explore <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/specializations" className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors">
              View All Specializations <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
