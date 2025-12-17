import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ApplicationFormComponent from "@/components/shared/ApplicationFormComponent";
import { specializations } from "@/lib/data";
import { useRoute, useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button, buttonVariants } from "@/components/ui/button";

export default function ApplicationForm() {
  const [match, params] = useRoute("/apply/:id");
  const [, setLocation] = useLocation();
  const id = match ? params.id : null;
  const spec = specializations.find((s) => s.id === id);

  if (!spec) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Specialization Not Found</h1>
        <Link href="/specializations" className={buttonVariants({})}>
          Back to All Specializations
        </Link>
      </div>
    );
  }

  const handleFormSuccess = () => {
    // Redirect back to the specializations page with the applied card highlighted
    setLocation(`/specializations?applied=${spec.id}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <div className="relative h-[40vh] min-h-[300px]">
        <img
          src={spec.image}
          alt={spec.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />

        <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-20">
          <Link href="/specializations" className="text-white/70 hover:text-white flex items-center gap-2 mb-6 transition-colors w-fit">
             {/* <ArrowLeft size={20} /> Back to All Specializations*/}
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold text-white mb-4"
          >
            Apply for {spec.title}
          </motion.h1>
          <p className="text-xl text-white/90 max-w-2xl">Submit your application and resume to join our talent pool.</p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-muted">
              <h2 className="text-2xl font-bold mb-2">Application Form</h2>
              <p className="text-muted-foreground mb-6 text-sm">
                Fill out the form below to submit your application for {spec.title}. We'll review your details and get back to you soon.
              </p>
              <ApplicationFormComponent specializationId={spec.id} onSuccess={handleFormSuccess} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
