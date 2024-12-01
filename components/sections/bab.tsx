"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, XCircle, CheckCircle } from "lucide-react";

const beforeAfterPoints = [
  {
    before: "Spending hours on manual data entry and repetitive tasks",
    after: "AI automation handles all routine tasks, saving 20+ hours weekly",
  },
  {
    before: "Inconsistent social media presence and engagement",
    after: "Automated posting schedule maintains consistent brand presence",
  },
  {
    before: "Struggling to scale operations with limited resources",
    after: "AI-powered systems scale effortlessly with your business growth",
  },
  {
    before: "Missing opportunities due to delayed responses",
    after: "Instant automated responses capture every opportunity",
  },
];

export function BabSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Transform Your Business Operations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how AI-TOMATION bridges the gap between your current challenges and future success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-destructive/10 border-destructive">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2 mb-6">
                <XCircle className="h-6 w-6 text-destructive" />
                <h3 className="text-xl font-semibold">Before AI-TOMATION</h3>
              </div>
              <ul className="space-y-4">
                {beforeAfterPoints.map((point, index) => (
                  <motion.li
                    key={`before-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-2"
                  >
                    <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{point.before}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-primary/10 border-primary">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2 mb-6">
                <CheckCircle className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">After AI-TOMATION</h3>
              </div>
              <ul className="space-y-4">
                {beforeAfterPoints.map((point, index) => (
                  <motion.li
                    key={`after-${index}`}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-2"
                  >
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{point.after}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Card className="bg-secondary">
            <CardContent className="py-6">
              <h3 className="text-xl font-semibold mb-2">
                Bridge the Gap with AI-TOMATION
              </h3>
              <p className="text-muted-foreground">
                Don't let manual processes hold your business back. Join thousands of successful 
                entrepreneurs who have transformed their operations with our AI Automation Bundle.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}