"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Sparkles, Scale, Zap, Lightbulb } from "lucide-react";

const features = [
  {
    title: "Innovation",
    description: "Stay ahead with cutting-edge AI technology that evolves with your needs",
    icon: Sparkles,
  },
  {
    title: "Reliability",
    description: "Enterprise-grade infrastructure ensuring 99.9% uptime and data security",
    icon: Scale,
  },
  {
    title: "Scalability",
    description: "Grow seamlessly with a platform that scales with your business demands",
    icon: Zap,
  },
  {
    title: "Simplicity",
    description: "Intuitive interface designed for ease of use without sacrificing power",
    icon: Lightbulb,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Core Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what makes AI-TOMATION the leading choice for businesses seeking intelligent automation solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <feature.icon className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}