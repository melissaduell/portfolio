
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 bg-background">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left column: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Melissa Duell Berlin</span>
            </h1>
            <p className="text-xl mb-6">
              Data and AI Professional
            </p>
            <p className="text-muted-foreground mb-8">
              Expert in data-informed policy, analytics, and artificial intelligence with 
              experience in federal government and academia.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#projects">View My Work</a>
              </Button>
            </div>
          </motion.div>

          {/* Right column: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20">
              <img 
                src="attached_assets/IMG_7694 2.PNG" 
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
