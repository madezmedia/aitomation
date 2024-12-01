"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const features = [
  {
    name: "Social Media Automation",
    lifetime: true,
    regular: true
  },
  {
    name: "Email Marketing Suite",
    lifetime: true,
    regular: true
  },
  {
    name: "Content Creation AI",
    lifetime: true,
    regular: false
  },
  {
    name: "E-commerce Integration",
    lifetime: true,
    regular: false
  },
  {
    name: "SEO Tools",
    lifetime: true,
    regular: false
  },
  {
    name: "Analytics Dashboard",
    lifetime: true,
    regular: true
  },
  {
    name: "Priority Support",
    lifetime: true,
    regular: false
  },
  {
    name: "Future Updates",
    lifetime: true,
    regular: false
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
            🎉 Limited Time Offer
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Special Launch Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lock in lifetime access at our lowest price ever
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Regular Plan</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$97</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {features.map((feature) => (
                    <li key={feature.name} className="flex items-center space-x-3">
                      {feature.regular ? (
                        <Check className="h-5 w-5 text-primary" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground" />
                      )}
                      <span className="text-muted-foreground">{feature.name}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-primary">
              <CardHeader>
                <div className="text-sm font-medium text-primary mb-2">Best Value</div>
                <CardTitle className="text-xl">Lifetime Access</CardTitle>
                <div className="mt-4">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-2xl line-through text-muted-foreground">$997</span>
                    <span className="text-5xl font-bold text-primary">$27</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">One-time payment</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {features.map((feature) => (
                    <li key={feature.name} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span>{feature.name}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-primary">
                  Get Lifetime Access Now
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-4">
                  🔒 Secure Payment - 30-Day Money-Back Guarantee
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}