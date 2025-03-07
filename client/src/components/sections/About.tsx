import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <Card>
          <CardContent className="p-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <p className="mb-4">
                I'm a Full Stack Developer with over 5 years of experience in building web applications.
                My journey in tech started with a deep curiosity about how things work on the internet,
                which led me to pursue a career in web development.
              </p>
              <p className="mb-4">
                I specialize in creating responsive, user-friendly applications using modern
                technologies. My approach combines technical expertise with a keen eye for design,
                ensuring that the end product is both functional and aesthetically pleasing.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open-source projects, writing
                technical articles, or exploring new technologies to stay at the cutting edge of web
                development.
              </p>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
