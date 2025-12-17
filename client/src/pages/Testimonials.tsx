import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { testimonials } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="bg-primary text-primary-foreground pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-heading font-bold mb-6">Success Stories</h1>
          <p className="text-xl max-w-2xl mx-auto text-primary-foreground/80">
            Don't just take our word for it. Hear from the businesses we've helped and the professionals we've placed.
          </p>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="clients" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-12 h-14">
              <TabsTrigger value="clients" className="text-lg">Client Reviews</TabsTrigger>
              <TabsTrigger value="candidates" className="text-lg">Candidate Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="clients" className="space-y-8">
              {testimonials.clients.map((review, i) => (
                <motion.div 
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-8 md:p-12 relative overflow-hidden">
                      <Quote className="absolute top-6 left-6 text-primary/10 w-24 h-24 -z-0" />
                      <div className="relative z-10">
                        <p className="text-xl md:text-2xl text-foreground font-medium italic mb-8 leading-relaxed">
                          "{review.content}"
                        </p>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }, (_, i) => (
                            <Star
                              key={i}
                              className={`w-6 h-6 ${
                                i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>
            
            <TabsContent value="candidates" className="space-y-8">
              {testimonials.candidates.map((review, i) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="border-none shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                    <CardContent className="p-8 md:p-12 relative overflow-hidden">
                      <Quote className="absolute top-6 left-6 text-secondary/10 w-24 h-24 -z-0" />
                      <div className="relative z-10">
                        <p className="text-xl md:text-2xl text-foreground font-medium italic mb-8 leading-relaxed">
                          "{review.content}"
                        </p>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }, (_, i) => (
                            <Star
                              key={i}
                              className={`w-6 h-6 ${
                                i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
}
