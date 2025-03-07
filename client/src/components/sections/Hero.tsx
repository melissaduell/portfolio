import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-background">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 text-transparent bg-clip-text">
                Melissa Berlin (Duell)
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8">
              Software Engineer with expertise in web development and innovative solutions
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
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
              <span className="text-6xl">👩‍💻</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}