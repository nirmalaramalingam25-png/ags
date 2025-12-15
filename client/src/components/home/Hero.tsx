import heroVideo from '@assets/generated_videos/cinematic_timelapse_of_modern_business_people_walking_in_a_busy_office_lobby.mp4';
import { Button, buttonVariants } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const lines = [
  {
    text: "We don't just fill roles—we build IT teams that move businesses forward.",
    className: "text-2xl md:text-4xl font-bold text-white leading-tight",
    isHeading: true
  },
  {
    text: "Connecting forward-thinking companies with IT talent that delivers.",
    className: "text-xl md:text-2xl text-white/90",
    isHeading: false
  },
  {
    text: "Matching the right IT minds with the right missions across the U.S.",
    className: "text-xl md:text-2xl text-white/90",
    isHeading: false
  },
  {
    text: "Where skilled IT professionals and growing businesses come together.",
    className: "text-xl md:text-2xl text-secondary font-semibold",
    isHeading: false
  }
];

export default function Hero() {
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % lines.length);
    }, 3000); // Change line every 3 seconds

    return () => clearInterval(timer);
  }, []);

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
      <div className="relative z-20 h-full container mx-auto px-4 flex flex-col justify-center items-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl min-h-32 text-center"
        >
          {/* Animated Text Lines - One at a time */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentLine}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              {lines[currentLine].isHeading ? (
                <h2 className={lines[currentLine].className}>
                  {lines[currentLine].text}
                </h2>
              ) : (
                <p className={lines[currentLine].className}>
                  {lines[currentLine].text}
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Find Jobs Button - Centered above scroll */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-40 left-1/2 -translate-x-1/2 z-20"
      >
        <Link href="/job-seekers" className={buttonVariants({ size: "lg", variant: "outline", className: "border-white text-primary hover:bg-white hover:text-primary text-lg px-8 py-6 h-auto font-bold rounded-full backdrop-blur-sm whitespace-nowrap" })}>
            Find Jobs <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
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
