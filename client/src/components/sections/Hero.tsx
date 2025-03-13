import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 bg-background overflow-hidden">
      {/* Simple background */}
      <div className="absolute inset-0 z-0 bg-background">
        {/* Light gradient for visual interest */}
        <div className="absolute inset-0 bg-gradient-to-br from-background to-background/90" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap items-baseline gap-x-2">
              <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm</h1>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 text-transparent bg-clip-text whitespace-nowrap">
                Melissa Duell Berlin
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 mt-4">
            Technical expert with cross-domain experience applying data, analytics, and AI to solve real world problems
            </p>
            <div className="space-x-4">
              <Button asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <div className="w-full h-full rounded-full overflow-hidden">
              <img 
                src="/attached_assets/IMG_7694_2.PNG" 
                alt="Melissa Duell Berlin" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}