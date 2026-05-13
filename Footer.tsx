import React from "react";
import { Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050508] py-12 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-heading font-bold text-primary tracking-tighter">
            GB
          </span>
          <span className="text-sm text-muted-foreground">
            &copy; 2025 Gyanvi Bhardwaj &middot; Built with intention &middot; Delhi NCR, India
          </span>
        </div>
        
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href="https://in.linkedin.com/in/gyanvi-bhardwaj-92674b297" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:Gyanvi63@gmail.com" className="hover:text-white transition-colors" aria-label="Email">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
