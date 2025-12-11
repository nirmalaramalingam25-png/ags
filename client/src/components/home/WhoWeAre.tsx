import { motion } from "framer-motion";
import { companyInfo } from "@/lib/data";
import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function WhoWeAre() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-secondary font-bold tracking-widest uppercase mb-2">Who We Are</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Empowering Business Through People
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At AGS Staffing, we believe that the right people are the catalyst for business growth. Since our inception, we have been dedicated to bridging the gap between exceptional talent and industry-leading organizations.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {['Industry Experts', 'Global Reach', 'Rapid Placement', 'Quality Assured'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-secondary w-6 h-6" />
                  <span className="font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Link href="/about" className={buttonVariants({ size: "lg", className: "rounded-full px-8" })}>
                Read Our Story <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team Meeting" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary font-bold text-2xl">15+</div>
                <div className="text-sm font-medium text-muted-foreground">Years of Excellence</div>
              </div>
              <p className="text-sm text-foreground">Delivering top-tier staffing solutions to Fortune 500 companies.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
