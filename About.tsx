import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

function Counter({ end, suffix = "", duration = 2 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Easing function
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step);
        }
      };

      animationFrame = requestAnimationFrame(step);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function About() {
  return (
    <section id="about" className="py-32 bg-[#0D1B2A] relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">Who I Am</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I'm a Delhi NCR-based digital marketer who specialises in influencer ecosystems, AI-powered campaigns, and making regulated brands actually interesting. I've worked across pharma, FMCG, travel, and tech — managing everything from celebrity influencer deals to Facebook Live productions to launching an entire influencer vertical from scratch.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="glass-card p-8 flex flex-col justify-center min-h-[160px]">
              <div className="text-5xl font-display font-bold text-white mb-2">
                <Counter end={7} suffix="M+" />
              </div>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Views (Dreame Tech x Amazon Prime Day)</p>
            </div>
            
            <div className="glass-card p-8 flex flex-col justify-center min-h-[160px]">
              <div className="text-5xl font-display font-bold text-accent mb-2">
                <Counter end={300} suffix="+" />
              </div>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Influencer Network (built & managed)</p>
            </div>

            <div className="glass-card p-8 flex flex-col justify-center min-h-[160px]">
              <div className="text-2xl font-display font-bold text-primary mb-2 leading-tight">
                Pitch of the Quarter
              </div>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Won at SPAG Finn Partners</p>
            </div>

            <div className="glass-card p-8 flex flex-col justify-center min-h-[160px]">
              <div className="text-2xl font-display font-bold text-white mb-2 leading-tight">
                Best Place to Work 2024
              </div>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">AstraZeneca India contribution</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative pl-8 py-6 border-l-4 border-primary bg-card/20 pr-6 rounded-r-lg"
        >
          <div className="absolute inset-y-0 left-0 w-[1px] bg-primary shadow-[0_0_15px_rgba(124,58,237,1)]" />
          <p className="text-xl md:text-2xl text-white font-display font-medium leading-relaxed">
            Contributed to FinnFluence — helped build SPAG Finn Partners' influencer vertical from zero. Processes, creator frameworks, and reporting standards now used across every account.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
