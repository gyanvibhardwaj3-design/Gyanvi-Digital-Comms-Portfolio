import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="container relative z-10 mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold leading-[1.1] tracking-tight mb-6">
            <span className="block text-white">I build campaigns</span>
            <span className="block text-white/90">that make brands</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              impossible to ignore.
            </span>
          </motion.h1>

          <motion.p variants={item} className="text-lg md:text-xl text-muted-foreground mb-10 font-display">
            Senior Digital & Influencer Marketer &middot; AI-Powered Strategist &middot; Pharma, FMCG & Tech
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="h-14 px-8 text-base bg-primary hover:bg-primary/90 text-white rounded-none shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] transition-all">
              <a href="#campaigns" data-testid="link-view-work">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base border-primary/50 text-white hover:bg-primary/10 rounded-none transition-all">
              <a href="/Gyanvi_Bhardwaj_Resume.docx" download data-testid="link-download-resume">
                Download Resume
                <Download className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative lg:ml-auto w-full max-w-md aspect-[3/4]"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 transform rotate-3 scale-105 blur-xl -z-10" />
          <div 
            className="w-full h-full bg-card border border-white/10 relative overflow-hidden"
            style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}
          >
            <img 
              src="/gyanvi-photo.png" 
              alt="Gyanvi Bhardwaj" 
              className="w-full h-full object-cover object-top opacity-90 hover:opacity-100 transition-opacity duration-700" 
            />
            <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)]" />
          </div>

          {/* Floating Pills */}
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 -left-12 glass-card px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg"
          >
            7M+ Views
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 15, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-32 -right-8 glass-card px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg"
          >
            300+ Influencers
          </motion.div>

          <motion.div 
            animate={{ y: [0, -12, 0] }} 
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-6 left-10 glass-card px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg border-accent/30"
          >
            2 Yrs AI Experience
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
