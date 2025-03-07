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
                I am a Senior Software Engineer with extensive experience in full-stack development 
                and cloud architecture. Throughout my career, I've focused on building scalable, 
                enterprise-level applications and leading development teams to success.
              </p>
              <p className="mb-4">
                My expertise spans across modern web technologies, cloud platforms, and DevOps practices. 
                I'm particularly passionate about creating efficient, maintainable solutions that solve 
                real business problems.
              </p>
              <p>
                I thrive in collaborative environments where I can contribute both technical expertise 
                and leadership skills to drive projects forward. I'm always eager to learn new 
                technologies and share knowledge with my team.
              </p>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}