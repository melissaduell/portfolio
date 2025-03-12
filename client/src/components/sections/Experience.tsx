import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Rocket, Microscope, LineChart, Globe } from "lucide-react";

const experiences = [
  {
    company: "U.S. Office of Personal Management",
    role: "AI/ML Product Incubation Lead",
    period: "Jan 2024 - Mar 2025",
    description:
      "Led fully remote multi-disciplinary team of 16 for experimenting with applied AI in federal HR. Collaborated with domain experts to prioritize AI use cases, refine requirements, and develop experimental solutions.",
    icon: Rocket,
  },
  {
    company: "U.S. Office of Personal Management",
    role: "Data Product Team Manager",
    period: "2023 - 2024",
    description:
      "Managed customer data requests for complex federal hiring datasets. Established processes for responding to requests for data and reports by clarifying objectives and implementing agile workflow methods.",
    icon: Brain,
  },
  {
    company: "U.S. Office of Personal Management",
    role: "AI/ML Data Product Owner",
    period: "2021 - 2022",
    description:
      "Provided matrixed data support to govt hiring IT systems. Built expertise in the federal hiring process to support data-driven insights and machine learning applications.",
    icon: LineChart,
  },
  {
    company: "U.S. Department of State",
    role: "Conflict Data Analyst",
    period: "2016 - 2021",
    description:
      "Led Instability Monitoring and Analysis Platform (IMAP), coordinating analytics for conflict risk assessment; built suite of interactive dashboards for real-time conflict monitoring..",
    icon: Globe,
  },
  {
    company: "Research Centre for Integrated Transport Innovation",
    role: "Postdoctoral Research Associate",
    period: "2015 - 2016",
    description:
      "Led technical research on transport planning models, managing multi-member teams and delivering nine journal/conference publications plus reports for city sponsored projects.",
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