import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/shared/ContactForm";
import { companyInfo } from "@/lib/data";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="bg-primary text-primary-foreground pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-heading font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto text-primary-foreground/80">
            We'd love to hear from you. Reach out to us for any inquiries.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Info */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-8">Get In Touch</h2>
              <p className="text-lg text-muted-foreground mb-10">
                Whether you're an employer looking for talent or a professional looking for your next opportunity, our team is here to help.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                    <p className="text-muted-foreground">{companyInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Call Us</h3>
                    <p className="text-muted-foreground">{companyInfo.phone}</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri from 8am to 5pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Us</h3>
                    <p className="text-muted-foreground">{companyInfo.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-muted">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
