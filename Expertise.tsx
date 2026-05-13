import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Shield, Zap, Share2, BarChart2 } from "lucide-react";

export function Expertise() {
  const skills = [
    {
      title: "Influencer Marketing",
      description: "End-to-end management, micro to celebrity partnerships. Built networks from scratch.",
      icon: Users
    },
    {
      title: "Campaign Strategy",
      description: "Multi-vertical, multi-brand strategy across pharma, travel, tech, and FMCG.",
      icon: Target
    },
    {
      title: "Pharma & Regulated Marketing",
      description: "Navigating strict compliance for giants like AZ, Roche, Novo Nordisk, and Ozempic.",
      icon: Shield
    },
    {
      title: "AI & Prompt Engineering",
      description: "2 years applied experience integrating AI into real-world marketing workflows.",
      icon: Zap
    },
    {
      title: "Social Media & Content",
      description: "Platform strategy, community management, and large-scale live productions.",
      icon: Share2
    },
    {
      title: "Performance Analytics",
      description: "Deep data analysis using Meltwater, Meta Business Suite, and native insights.",
      icon: BarChart2
    }
  ];

  return (
    <section id="expertise" className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">What I Do</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">{skill.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
