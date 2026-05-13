import React from "react";
import { motion } from "framer-motion";

export function Background() {
  return (
    <section id="background" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Where I Come From</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 border-l-4 border-l-primary"
          >
            <h3 className="text-xl font-display font-bold text-white mb-2">AAFT — Asian Academy of Film & Television</h3>
            <p className="text-primary font-medium mb-4 text-sm tracking-wider uppercase">Batch Topper &middot; TV Journalism & Mass Communication</p>
            <p className="text-muted-foreground">Directed content, anchored, ran ENG ops for AAFT 24x7 YouTube.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 border-l-4 border-l-accent"
          >
            <div className="mb-6">
              <h3 className="text-xl font-display font-bold text-white mb-2">IIDE</h3>
              <p className="text-accent font-medium mb-4 text-sm tracking-wider uppercase">Digital Marketing Masterclass</p>
            </div>
            
            <div>
              <h3 className="text-xl font-display font-bold text-white mb-2">Bhagwati College</h3>
              <p className="text-accent font-medium text-sm tracking-wider uppercase">BA English</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
