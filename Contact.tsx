import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Linkedin, MessageCircle, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "I'll be in touch soon.",
        className: "bg-card border-primary text-white",
      });
      form.reset();
    }, 500);
  }

  return (
    <section id="contact" className="py-32 bg-[#0D1B2A] relative overflow-hidden">
      {/* Background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-heading font-black text-white opacity-[0.03] pointer-events-none whitespace-nowrap select-none">
        HIRE ME
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">Let's build something that gets noticed.</h2>
          <p className="text-xl text-muted-foreground font-display max-w-2xl mx-auto">
            Open to Senior AE roles, freelance campaigns, and AI marketing collabs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 md:p-12 mb-12"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/80">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className="bg-black/20 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-primary h-12" {...field} />
                      </FormControl>
                      <FormMessage className="text-destructive" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/80">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" className="bg-black/20 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-primary h-12" {...field} />
                      </FormControl>
                      <FormMessage className="text-destructive" />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/80">Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell me about your project..." 
                        className="bg-black/20 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-primary min-h-[150px] resize-none" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage className="text-destructive" />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full h-14 text-lg bg-primary hover:bg-primary/90 text-white rounded-none shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all" data-testid="button-send-message">
                Send Message
              </Button>
            </form>
          </Form>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80"
        >
          <a href="mailto:Gyanvi63@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors group">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <span className="font-display">Gyanvi63@gmail.com</span>
          </a>
          <a href="https://wa.me/917017048767" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent transition-colors group">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <MessageCircle className="w-5 h-5" />
            </div>
            <span className="font-display">+91 7017048767</span>
          </a>
          <a href="https://in.linkedin.com/in/gyanvi-bhardwaj-92674b297" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent transition-colors group">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <Linkedin className="w-5 h-5" />
            </div>
            <span className="font-display">linkedin.com/in/gyanvi-bhardwaj</span>
          </a>
          <div className="flex items-center gap-3 text-white/50">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="font-display">Delhi NCR, India</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
