import heroVideo from '@assets/generated_videos/cinematic_timelapse_of_modern_business_people_walking_in_a_busy_office_lobby.mp4';
import { Button, buttonVariants } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full bg-black/40 z-10" />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-20 h-full container mx-auto px-4 flex flex-col justify-center items-start text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <h2 className="text-lg md:text-xl font-medium tracking-widest uppercase mb-4 text-secondary">
            Global Staffing Solutions
          </h2>
          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6">
            Connecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-200">Talent</span> <br />
            With Opportunity.
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl leading-relaxed">
            We bridge the gap between world-class organizations and exceptional professionals across IT, Healthcare, Finance, and Engineering.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className={buttonVariants({ size: "lg", className: "bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6 h-auto font-bold rounded-full" })}>
                Hire Talent
            </Link>
            <Link href="/job-seekers" className={buttonVariants({ size: "lg", variant: "outline", className: "border-white text-primary hover:bg-white hover:text-primary text-lg px-8 py-6 h-auto font-bold rounded-full backdrop-blur-sm" })}>
                Find Jobs <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-12 bg-gradient-to-b from-secondary to-transparent"
        />
      </motion.div>
    </section>
  );
}
