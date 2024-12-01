"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Timer, ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <Card className="bg-primary text-primary-foreground p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <Timer className="h-12 w-12 animate-pulse" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Don't Miss This Opportunity!
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Get lifetime access to AI-TOMATION for just $27. This offer won't last long!
            </p>
            <div className="space-y-4">
              <Button size="lg" variant="secondary" className="group">
                Claim Your Lifetime Access Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <p className="text-sm opacity-75">
                🔒 Secure Payment - 30-Day Money-Back Guarantee
              </p>
            </div>
          </motion.div>
        </Card>
      </div>
    </section>
  );
}