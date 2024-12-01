"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Zap, Clock, DollarSign } from "lucide-react";

const benefits = [
  {
    title: "Increased Efficiency",
    description: "Reduce manual tasks by up to 80% with intelligent automation",
    icon: Zap,
  },
  {
    title: "Time Savings",
    description: "Save hundreds of hours monthly on repetitive processes",
    icon: Clock,
  },
  {
    title: "Cost Reduction",
    description: "Lower operational costs by automating routine tasks",
    icon: DollarSign,
  },
  {
    title: "Improved Accuracy",
    description: "Eliminate human error with precise AI-driven processes",
    icon: CheckCircle2,
  },
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Why Choose AI-TOMATION?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your business with proven benefits that drive real results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="flex items-start space-x-4 pt-6">
                  <benefit.icon className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
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