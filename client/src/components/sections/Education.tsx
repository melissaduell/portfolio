import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const educationItems = [
  {
    degree: "Doctor of Philosophy in Transportation Engineering",
    institution: "University of New South Wales",
    period: "2011 - 2015",
    description: "Developed novel transport planning models addressing uncertainty in travel demand.",
  },

  {
    degree: "Bachelors in Civil Engineering and Plan II Honors",
    institution: "University of Texas at Austin",
    period: "2006 - 2011",
    description: "Focused on transportation engineering and liberal arts honors. Graduated with honors.",
  },
  // Add more education items as needed
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="space-y-6">
          {educationItems.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl text-primary">
                      <GraduationCap className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {edu.institution} | {edu.period}
                      </p>
                      <p className="text-foreground/80">{edu.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
