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
import FlipBook from "@/components/shared/FlipBook";
import "@/flipbook.css";

export default function JobSeekers() {
  const faqs = [
    {
      q: "What does AGS Staffing Agency do?",
      a: "AGS Staffing Agency connects businesses with qualified, pre-vetted professionals across multiple US industries. We provide direct hire, contract, temporary, remote staffing, and high-volume recruitment solutions for companies of all sizes."
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
    },
     {
      q: "I’m a job seeker. How do I apply?",
      a: "You can apply through our Job Seekers Page, submit your resume, or contact our recruiters directly. We will match you with suitable roles."
    }
    ,
     {
      q: "Does AGS support high-volume or bulk hiring?",
      a: "Yes. We specialize in high-volume recruitment for call centers, warehouses, customer support teams, seasonal operations, and large-scale business expansions."
    }
    ,
     {
      q: "Can I request customized staffing solutions?",
      a: "Definitely. Our team creates personalized hiring plans based on your company’s goals, timelines, and budget."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="bg-primary text-primary-foreground pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-heading font-bold mb-6">WHY CHOOSE AGS?</h1>
          <p className="text-xl max-w-2xl mx-auto  text-yellow-400 text-primary-foreground/80 "style={{
      fontFamily: "'DM Serif Display', serif",
      fontWeight: 400,
      letterSpacing: "0.05em",
    }}
          >
            Find your dream job with AGS Staffing. We connect you with top employers who value your skills.
          </p>
        </div>
      </section>

      {/* Why Choose AGS */}
      <section className="py-20">
        <div className="container mx-auto px-4">
           {/* <h2 className="text-3xl font-heading font-bold text-center text-primary mb-16">Why Choose AGS?</h2>*/}
          
          <FlipBook />

          <div className="text-center bg-muted p-12 rounded-3xl">
             <h2 className="text-2xl font-bold mb-4">Ready to start?</h2>
             <Link href="/contact" className={buttonVariants({ size: "lg", className: "rounded-full px-8" })}>
               Submit Your Resume
             </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
    {/* 
      <section className="py-20 bg-white">
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
      </section>*/}
      {/*  <section className="py-20 bg-white ">
  <div className="container mx-auto px-4 max-w-3xl">
    <h2 className="text-3xl font-heading font-bold text-center text-primary mb-12">
      Frequently Asked Questions
    </h2>

    <Accordion
      type="single"
      collapsible
      className="w-full bg-white rounded-2xl shadow-lg divide-y"
    >
      {faqs.map((faq, i) => (
        <AccordionItem key={i} value={`item-${i}`} className="px-6">
          <AccordionTrigger
            className="
              text-left font-medium text-lg py-5
              hover:text-primary transition-colors
            "
          >
            {faq.q}
          </AccordionTrigger>

          <AccordionContent className="text-muted-foreground text-base pb-5 leading-relaxed">
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
</section>*/}
{/* <section className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-3xl">
    <h2 className="text-3xl font-heading font-bold text-center text-primary mb-12">
      Frequently Asked Questions
    </h2>

    <Accordion type="single" collapsible className="w-full bg-white p-6 rounded-xl shadow-sm">
      {faqs.map((faq, i) => (
        <AccordionItem key={i} value={`item-${i}`}>
          <AccordionTrigger className="text-left font-medium text-lg text-black">
            {faq.q}
          </AccordionTrigger>

          <AccordionContent className="text-yellow-600 text-base">
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
</section>*/}
<section
  className="py-20 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url(https://plus.unsplash.com/premium_photo-1663032623832-6972fc36dc86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZhcXxlbnwwfHwwfHx8MA%3D%3D)" }}
>
  <div className="container mx-auto px-4 max-w-3xl">
    <h2 className="text-3xl font-heading font-bold text-center text-white mb-12">
      Frequently Asked Questions
    </h2>

    <Accordion
      type="single"
      collapsible
      className="w-full bg-white/90 backdrop-blur p-6 rounded-xl shadow-lg"
    >
      {faqs.map((faq, i) => (
        <AccordionItem key={i} value={`item-${i}`}>
          <AccordionTrigger className="text-left font-medium text-lg text-black">
            {faq.q}
          </AccordionTrigger>

          <AccordionContent className="text-yellow-600 text-base">
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
