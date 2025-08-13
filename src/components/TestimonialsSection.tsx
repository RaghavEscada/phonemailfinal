"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Government Employee",
    image: "https://avatars.githubusercontent.com/u/1234567?v=4",
    content: "PhoneMail has revolutionized how I receive official documents. No more waiting for postal mail or missing important transfer letters. Everything arrives instantly on my phone."
  },
  {
    name: "Rajesh Kumar",
    role: "Rural Teacher",
    image: "https://avatars.githubusercontent.com/u/2345678?v=4",
    content: "Finally, an email system that actually works for people like me. Using my phone number as email ID is brilliant - no complex passwords to remember."
  },
  {
    name: "Dr. Anita Mehta",
    role: "Medical Officer",
    image: "https://avatars.githubusercontent.com/u/3456789?v=4",
    content: "Receiving lab reports and medical documents through PhoneMail has streamlined my practice. The security and simplicity are exactly what healthcare needed."
  },
  {
    name: "Sunil Verma",
    role: "Bank Manager",
    image: "https://avatars.githubusercontent.com/u/4567890?v=4",
    content: "Our branch has started using PhoneMail for customer communications. The Aadhaar-linked verification gives us confidence in secure document delivery."
  },
  {
    name: "Kavita Singh",
    role: "Legal Clerk",
    image: "https://avatars.githubusercontent.com/u/5678901?v=4",
    content: "Court orders and legal notices now reach clients instantly through PhoneMail. The digital transformation in legal communication has been remarkable."
  },
  {
    name: "Amit Patel",
    role: "IT Administrator",
    image: "https://avatars.githubusercontent.com/u/6789012?v=4",
    content: "PhoneMail's enterprise integration capabilities have helped us digitize our entire document delivery system. It's the future of official communication in India."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 overflow-hidden bg-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-normal mb-4">Trusted by Indians</h2>
          <p className="text-muted-foreground text-lg">
            Join millions of Indians embracing digital communication with PhoneMail
          </p>
        </motion.div>

        <div className="relative flex flex-col antialiased">
          <div className="relative flex overflow-hidden py-4">
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-1`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-2`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;