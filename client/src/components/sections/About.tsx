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
                Experienced in the federal and academic sectors, I have a strong background in data analytics and applied AI. My experience ranges from federal HR, international affairs, and
                transportation planning.
              </p>
              <p className="mb-4">
                My expertise spans from the strategic - data informed policy and analysis - to the operational - managing products and projects, applying AI, and buliding data products from the ground up.
              </p>
              <p>
                I thrive in on building relationships to solve real world problems, breaking down complex issues into actional next steps, and communicating technical information clearly to enable decision making. I'm always eager to learn new technologies and share
                knowledge with my team.
              </p>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
