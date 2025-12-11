import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import WhoWeAre from "@/components/home/WhoWeAre";
import SpecializationPreview from "@/components/home/SpecializationPreview";
import { Link } from "wouter";
import { Button, buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <WhoWeAre />
        <SpecializationPreview />
        
        {/* Testimonials Preview (Simplifying for batch limit, can expand later) */}
        <section className="py-24 bg-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-primary mb-8">What People Say</h2>
            <Link href="/testimonials" className={buttonVariants({ variant: "outline" })}>
                Read Reviews
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-heading font-bold mb-6">Ready to Transform Your Team?</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Whether you're looking for top talent or your next career move, AGS Staffing is your partner in success.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/contact" className={buttonVariants({ size: "lg", className: "bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-8" })}>
                  Get Started
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
