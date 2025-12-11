import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "wouter";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Briefcase, Zap, Globe, Users } from "lucide-react";

export default function JobSeekers() {
  const faqs = [
    {
      q: "Is there a fee for job seekers?",
      a: "No, our services are completely free for job seekers. We are paid by the employers to find great talent like you."
    },
    {
      q: "How long does the process take?",
      a: "The timeline varies depending on the role and the client's hiring process. However, we strive to get you feedback within 24-48 hours of submission."
    },
    {
      q: "Do you offer remote positions?",
      a: "Yes! We work with many companies that offer remote, hybrid, and on-site opportunities across the globe."
    },
    {
      q: "What industries do you cover?",
      a: "We specialize in IT, Healthcare, Finance, and Engineering, but we also handle roles in Administration, HR, and Sales."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="bg-primary text-primary-foreground pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-heading font-bold mb-6">For Job Seekers</h1>
          <p className="text-xl max-w-2xl mx-auto text-primary-foreground/80">
            Find your dream job with AGS Staffing. We connect you with top employers who value your skills.
          </p>
        </div>
      </section>

      {/* Why Choose AGS */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center text-primary mb-16">Why Choose AGS?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-muted hover:border-secondary transition-colors">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <Briefcase size={32} />
              </div>
              <h3 className="font-bold text-xl mb-3">Exclusive Roles</h3>
              <p className="text-muted-foreground">Access to unadvertised positions from top companies.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-muted hover:border-secondary transition-colors">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <Zap size={32} />
              </div>
              <h3 className="font-bold text-xl mb-3">Fast Placement</h3>
              <p className="text-muted-foreground">We speed up the hiring process to get you working sooner.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-muted hover:border-secondary transition-colors">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <Users size={32} />
              </div>
              <h3 className="font-bold text-xl mb-3">Career Coaching</h3>
              <p className="text-muted-foreground">Resume tips and interview prep from expert recruiters.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-muted hover:border-secondary transition-colors">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <Globe size={32} />
              </div>
              <h3 className="font-bold text-xl mb-3">Global Network</h3>
              <p className="text-muted-foreground">Opportunities across the country and around the world.</p>
            </div>
          </div>

          <div className="text-center bg-muted p-12 rounded-3xl">
             <h2 className="text-2xl font-bold mb-4">Ready to start?</h2>
             <Link href="/contact" className={buttonVariants({ size: "lg", className: "rounded-full px-8" })}>
               Submit Your Resume
             </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-center text-primary mb-12">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="w-full bg-white p-6 rounded-xl shadow-sm">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-medium text-lg">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
}
