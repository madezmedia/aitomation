"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Clock, DollarSign, TrendingDown } from "lucide-react";

const painPoints = [
  {
    title: "Time Drain",
    description: "Hours wasted on repetitive tasks that could be automated",
    icon: Clock,
  },
  {
    title: "Lost Revenue",
    description: "Missing opportunities due to slow response times and manual processes",
    icon: DollarSign,
  },
  {
    title: "Growth Barriers",
    description: "Unable to scale operations efficiently with current manual systems",
    icon: TrendingDown,
  },
  {
    title: "Competitive Risk",
    description: "Falling behind competitors who are leveraging AI automation",
    icon: AlertTriangle,
  },
];

export function PainPointsSection() {
  return (
    <section className="py-16 md:py-24 bg-destructive/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block rounded-full bg-destructive/10 px-4 py-1.5 text-sm font-semibold text-destructive mb-4">
            ⚠️ Warning: Don't Ignore These Signs
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Are These Challenges Holding Your Business Back?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Identify the costly inefficiencies that are preventing your business from reaching its full potential
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="flex items-start space-x-4 pt-6">
                  <point.icon className="h-6 w-6 text-destructive mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                    <p className="text-muted-foreground">{point.description}</p>
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