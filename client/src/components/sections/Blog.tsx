import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    title: "The Future of Web Development",
    excerpt: "Exploring upcoming trends and technologies in web development for 2025 and beyond.",
    date: "March 1, 2025",
    readTime: "5 min read",
    link: "#",
  },
  {
    title: "Best Practices for Modern React Applications",
    excerpt: "A comprehensive guide to building scalable and maintainable React applications.",
    date: "February 15, 2025",
    readTime: "8 min read",
    link: "#",
  },
  {
    title: "Optimizing Performance in Web Applications",
    excerpt: "Essential techniques and tools for improving web application performance.",
    date: "January 30, 2025",
    readTime: "6 min read",
    link: "#",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Blog</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground">
            Sharing thoughts and insights about technology, development, and industry trends.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col">
                <CardContent className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <p className="text-foreground/80 mb-4">{post.excerpt}</p>
                  <Button variant="link" className="p-0" asChild>
                    <a href={post.link}>Read More →</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
