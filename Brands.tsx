import React from "react";
import { motion } from "framer-motion";

export function Brands() {
  const brands = [
    "AstraZeneca", "Roche AccuChek", "Novo Nordisk", "Four Seasons Hotels", 
    "Dreame Tech", "Usha", "Honeywell", "BD Becton Dickinson", 
    "Ozempic", "Wegovy", "Medtronic", "Onida", "Cialis", "Tefal", 
    "Kidzoala", "Azerbaijan Tourism"
  ];

  // Double the array for seamless looping
  const marqueeBrands = [...brands, ...brands];

  return (
    <section id="brands" className="py-24 bg-[#12082A] overflow-hidden flex flex-col justify-center border-y border-white/5">
      <div className="container mx-auto px-6 mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading font-bold text-center text-white"
        >
          Brands I've Worked With
        </motion.h2>
      </div>

      <div className="relative w-full overflow-hidden py-4 flex mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)">
        <div className="flex w-max animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
          {marqueeBrands.map((brand, i) => (
            <div 
              key={`${brand}-${i}`}
              className="mx-4 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm whitespace-nowrap text-lg font-medium text-white/90 shadow-[0_0_15px_rgba(124,58,237,0.1)] transition-colors hover:border-primary/50 hover:bg-white/10 cursor-default"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground uppercase tracking-widest text-sm font-semibold"
        >
          Across pharma, travel, lifestyle, home & tech verticals
        </motion.p>
      </div>
    </section>
  );
}
