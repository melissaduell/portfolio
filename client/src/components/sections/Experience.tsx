import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Rocket, Microscope, LineChart, Globe, Map } from "lucide-react";

const experiences = [
  {
    company: "Mobility Thinking America",
    role: "President",
    period: "Mar 2025 - Present",
    description:
      "A new business entity currently in development offering solutions in planning, applied AI, and consulting  for better transport services and organization effectiveness.",
    icon: Map,
    url: "https://mobilitythinking.com",
  },
  {
    company: "Data Science Institute, Brown University",
    role: "Adjunct Faculty",
    period: "April 2025 - Present",
    description:
      "Developing and facilitating novel course highlighting role of data and machine learning in evidence driven policy making for a new online data science masters program.",
    icon: Brain,
  },
  {
    company: "U.S. Office of Personal Management",
    role: "AI/ML Product Incubation Director",
    period: "Jan 2024 - Mar 2025 (admin leave through Sept)",
    description:
      "Led govt team experimenting with applied AI in HR and successfully developed multiple cutting edge AI prototypes.",
    icon: Rocket,
  },
  {
    company: "U.S. Office of Personal Management",
    role: "Data Product Owner and Manager",
    period: "2021 - 2024",
    description:
      "Managed customer data requests for complex federal hiring datasets using Agile and Scrum style workflows. Also led the charge to experiment with AI/ML use cases.",
    icon: LineChart,
  },
  {
    company: "U.S. Department of State",
    role: "Conflict Data Analyst and Team Lead",
    period: "2016 - 2021",
    description:
       "Analytics and analysis for conflict risk assessment via data products aimed at policy-makers.",
    icon: Globe,
  },
  {
    company: "Research Centre for Integrated Transport Innovation",
    role: "Postdoctoral Transport Research Associate",
    period: "2015 - 2016",
    description:
      "Led technical research on transport planning models, applying research to real-world networks for city planning.",
    icon: Microscope,
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
                        {exp.url ? (
                          <a href={exp.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                            {exp.company}
                          </a>
                        ) : (
                          exp.company
                        )} | {exp.period}
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