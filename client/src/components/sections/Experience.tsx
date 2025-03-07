import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Code2, Terminal } from "lucide-react";

const experiences = [
  {
    company: "Google",
    role: "Senior Frontend Developer",
    period: "2021 - Present",
    description:
      "Lead development of key features for Google Cloud Platform's web console. Improved performance metrics by 40%.",
    icon: Terminal,
  },
  {
    company: "Microsoft",
    role: "Full Stack Developer",
    period: "2019 - 2021",
    description:
      "Developed and maintained enterprise-level applications using React and .NET Core. Led a team of 5 developers.",
    icon: Code2,
  },
  {
    company: "Amazon",
    role: "Software Developer",
    period: "2017 - 2019",
    description:
      "Built microservices and frontend components for Amazon's retail platform. Implemented CI/CD pipelines.",
    icon: Building2,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl text-primary">
                      <exp.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {exp.company} | {exp.period}
                      </p>
                      <p className="text-foreground/80">{exp.description}</p>
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