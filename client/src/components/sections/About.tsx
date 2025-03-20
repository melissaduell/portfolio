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
                I love solving real problems. I'm an experienced leader in the federal and academic sectors with an ever-growing background in applied AI and data analytics. My expertise spans domains including federal HR, international affairs, and
                transportation planning.
              </p>
              <p className="mb-4">
                My skills shine in end to end project delivery. I'm a big picture thinker - data informed policy,  research and discovery, strategic plans, risk assessment - but I'm also skilled within the operational side of the house, from managing products and projects to applying AI and developing solutions from the ground up.
              </p>
              <p>
                My approach builds on creating relationships to identify the highest priority real world problems, breaking down complex issues into actionable steps, and communicating technical information clearly to inform better decisions.  </p>
               <p>
                I thrive in cutting edge environments filled with uncertainty where no one really knows the best answer yet - but I'm here to help figure it out!
              </p>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
