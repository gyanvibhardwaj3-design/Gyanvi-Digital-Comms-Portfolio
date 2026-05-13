import React from "react";
import { motion } from "framer-motion";

const timelineEvents = [
  {
    year: "2020–2022",
    title: "AAFT — Asian Academy of Film & Television",
    role: "TV Journalism & Mass Communication",
    detail: "Graduated as Batch Topper. Directed content, anchored live shows, and ran ENG operations for AAFT 24x7 YouTube. Built the storytelling instincts that now power every campaign.",
    tag: "Education",
    accent: "primary",
    side: "left",
  },
  {
    year: "2022–2023",
    title: "IIDE · Digital Marketing Masterclass",
    role: "BA English, Bhagwati College",
    detail: "Pivoted from broadcast to digital. Completed IIDE's intensive masterclass while finishing BA English — turning a media background into a full-stack marketing foundation.",
    tag: "Education",
    accent: "accent",
    side: "right",
  },
  {
    year: "May – Aug 2023",
    title: "SPAG Finn Partners",
    role: "Digital Marketing Intern",
    detail: "Hit the ground running on SEO, content planning, and campaign reporting. Contributed to the Pitch of the Quarter win during intern tenure. Converted to full-time AE on the strength of performance.",
    tag: "Internship",
    accent: "primary",
    side: "left",
  },
  {
    year: "Oct 2023 – Present",
    title: "SPAG Finn Partners",
    role: "Senior Account Executive — Digital & Influencer Marketing",
    detail: "End-to-end ownership across pharma, FMCG, travel & tech. Managed 300+ influencer network, drove 7M+ views, contributed to FinnFluence, and embedded AI workflows across the team — saving 4–6 hrs/week.",
    tag: "Current Role",
    accent: "accent",
    side: "right",
    current: true,
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="py-32 bg-[#0D1B2A] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(124,58,237,0.08)_0%,transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-primary font-display font-medium tracking-[0.2em] uppercase text-sm mb-3">Career Journey</p>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">
            The Road<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">So Far.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Central spine */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent" />

          <div className="flex flex-col gap-12 md:gap-0">
            {timelineEvents.map((event, index) => {
              const isLeft = event.side === "left";
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                  className={`relative md:grid md:grid-cols-2 md:gap-16 items-center ${index > 0 ? "md:-mt-4" : ""}`}
                >
                  {/* Dot on spine */}
                  <div
                    className={`hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-5 h-5 rounded-full ${event.current ? "bg-accent shadow-[0_0_20px_rgba(0,245,196,0.8)]" : "bg-primary shadow-[0_0_12px_rgba(124,58,237,0.7)]"}`}
                  >
                    {event.current && (
                      <span className="absolute w-full h-full rounded-full bg-accent animate-ping opacity-40" />
                    )}
                  </div>

                  {/* Left slot */}
                  <div className={`${isLeft ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"} md:py-10`}>
                    {isLeft ? (
                      <Card event={event} />
                    ) : (
                      <div className="hidden md:block" />
                    )}
                  </div>

                  {/* Right slot */}
                  <div className={`${isLeft ? "hidden md:block" : "md:col-start-2 md:pl-12"} md:py-10`}>
                    {!isLeft ? (
                      <Card event={event} />
                    ) : null}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ event }: { event: typeof timelineEvents[number] }) {
  const isAccent = event.accent === "accent";
  return (
    <div
      className={`relative glass-card p-7 md:p-8 group transition-all duration-300 hover:-translate-y-1 ${
        event.current
          ? "border border-accent/40 shadow-[0_0_24px_rgba(0,245,196,0.12)]"
          : "border border-primary/20 hover:border-primary/40"
      }`}
    >
      {event.current && (
        <span className="absolute top-4 right-4 flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-accent">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Now
        </span>
      )}

      <div className="flex items-start gap-3 mb-4 flex-wrap">
        <span
          className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase ${
            isAccent
              ? "bg-accent/10 text-accent border border-accent/30"
              : "bg-primary/10 text-primary border border-primary/30"
          }`}
        >
          {event.tag}
        </span>
        <span className="text-sm text-muted-foreground font-display pt-[3px]">{event.year}</span>
      </div>

      <h3 className={`text-xl md:text-2xl font-display font-bold mb-1 ${isAccent ? "text-accent" : "text-white"}`}>
        {event.title}
      </h3>
      <p className="text-primary font-medium text-sm mb-4">{event.role}</p>
      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{event.detail}</p>
    </div>
  );
}
