import React from "react";
import { motion } from "framer-motion";

export function Campaigns() {
  const campaigns: { brand: string; type: string; result: string; tags: string[]; span: number; highlight?: boolean }[] = [
    {
      brand: "AstraZeneca India",
      type: "Employer Branding",
      result: "Architected the full employer branding ecosystem. AZ India won Best Place to Work 2024.",
      tags: ["Pharma", "Internal Comms"],
      span: 1
    },
    {
      brand: "Dreame Tech",
      type: "Amazon Prime Day",
      result: "Curated influencer partnerships drove 7M+ views in a single activation. Contributed to the launch strategy featuring brand ambassador Kriti Sanon. Collaborated with large-scale influencers as well as regional influencers.",
      tags: ["Tech", "Influencer", "E-commerce"],
      span: 2
    },
    {
      brand: "Roche — AccuChek Campaign",
      type: "Celebrity Influencer",
      result: "Led end-to-end campaign featuring Mandira Bedi. Significant reach uplift for diabetes messaging.",
      tags: ["Pharma", "Celebrity Marketing"],
      span: 1
    },
    {
      brand: "AstraZeneca Malaysia",
      type: "Breast Cancer Awareness",
      result: "Digital campaign driving patient education across social platforms in a regulated market.",
      tags: ["Pharma", "Social", "Healthcare"],
      span: 1
    },
    {
      brand: "Novo Nordisk",
      type: "Facebook Live",
      result: "Produced & hosted large-scale Facebook Lives — pharma-compliant, high viewership & engagement.",
      tags: ["Pharma", "Social Media"],
      span: 1
    },
    {
      brand: "Four Seasons",
      type: "Travel Influencer Marketing",
      result: "Partnered with top travel creators for aspirational, conversion-driven content at scale.",
      tags: ["Travel", "Influencer", "Luxury"],
      span: 2
    },
    {
      brand: "Usha & Honeywell",
      type: "Influencer Marketing",
      result: "Multi-tier influencer strategy (micro + macro) across lifestyle, home & tech. Built 300+ network.",
      tags: ["FMCG", "Influencer"],
      span: 1
    },
    {
      brand: "BD Becton Dickinson",
      type: "Be A Hero",
      result: "Managed Be A Hero Facebook page — grew engagement through audience-first storytelling.",
      tags: ["Healthcare", "Social Media"],
      span: 1
    },
    {
      brand: "Ozempic & Wegovy",
      type: "India Launch",
      result: "Supported launch strategy for two of India's most regulated and high-profile healthcare product rollouts — navigating complex compliance requirements while driving awareness at scale.",
      tags: ["Pharma", "Launch Strategy"],
      span: 2,
      highlight: true
    },
    {
      brand: "Pitch of the Quarter",
      type: "Agency Win",
      result: "Won Pitch of the Quarter — contributed to pitches for Four Seasons, Medtronic, Onida, Tefal, Kidzoala & Azerbaijan Tourism.",
      tags: ["New Business", "Strategy"],
      span: 2
    }
  ];

  return (
    <section id="campaigns" className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">Work That Actually Did Something</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
          {campaigns.map((campaign, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`glass-card p-8 flex flex-col ${campaign.span === 2 ? 'md:col-span-2' : 'col-span-1'} ${campaign.highlight ? 'border border-accent/40 shadow-[0_0_30px_rgba(0,245,196,0.15)] relative overflow-hidden' : ''}`}
            >
              {campaign.highlight && (
                <div className="absolute top-0 right-0 bg-accent text-[#0A0A0F] text-xs font-bold px-4 py-1.5 tracking-widest uppercase">
                  Monumental
                </div>
              )}
              <div className="mb-4">
                <h3 className={`text-2xl font-display font-bold mb-1 ${campaign.highlight ? 'text-accent' : 'text-white'}`}>{campaign.brand}</h3>
                <p className="text-primary font-medium">{campaign.type}</p>
              </div>
              
              <p className="text-muted-foreground leading-relaxed flex-grow mb-6 text-lg">
                {campaign.result}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {campaign.tags.map(tag => (
                  <span key={tag} className={`px-3 py-1 rounded-full text-xs font-medium ${campaign.highlight ? 'bg-accent/10 border border-accent/30 text-accent' : 'bg-white/5 border border-white/10 text-white/80'}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
