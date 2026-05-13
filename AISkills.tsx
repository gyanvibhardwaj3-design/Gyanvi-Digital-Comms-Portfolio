import React from "react";
import { motion } from "framer-motion";

export function AISkills() {
  const skills = [
    {
      title: "Prompt Engineering",
      desc: "Brief writing, outreach copy, creative ideation, report automation"
    },
    {
      title: "Generative AI",
      desc: "ChatGPT, Claude, Midjourney, DALL-E for content & visual ideation"
    },
    {
      title: "AI Agents & Automation",
      desc: "Lightweight agent workflows for research, social listening, influencer shortlisting"
    },
    {
      title: "AI in Campaign Ops",
      desc: "Auto-summarised reporting, anomaly flagging, saving 4–6 hrs/week"
    }
  ];

  return (
    <section id="ai" className="py-32 relative overflow-hidden bg-[#0A0A0F]">
      {/* Radial glow background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.15)_0%,transparent_70%)]" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">AI-Powered. Before It Was Cool.</h2>
          <p className="text-xl text-muted-foreground font-display">
            2 years of applied AI experience in real marketing campaigns — not just experimenting.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8 text-center flex flex-col items-center group"
            >
              <h3 className="text-xl font-display font-bold text-primary mb-4 group-hover:text-accent transition-colors">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="bg-accent/10 border border-accent/30 text-accent px-6 py-3 rounded-full font-medium text-sm shadow-[0_0_20px_rgba(0,245,196,0.15)]">
            Currently upskilling in LangChain-based agent frameworks
          </div>
        </motion.div>
      </div>
    </section>
  );
}
