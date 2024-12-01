"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Timer } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Bot className="h-12 w-12 text-primary" />
              <Timer className="h-8 w-8 text-red-500 animate-pulse" />
            </div>
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              🔥 Limited Time Offer: Lifetime Access for Just $27
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Transform Your Business with
              <span className="text-primary block mt-2">AI-TOMATION</span>
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Get lifetime access to our complete AI automation suite. 
              Save countless hours and boost productivity with our cutting-edge platform.
              <span className="block mt-2 text-primary font-semibold">
                Regular Price: $997 - Today Only: $27
              </span>
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
              <Button size="lg" className="group bg-primary">
                Claim Your Lifetime Access Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              🔒 Secure Payment - 30-Day Money-Back Guarantee
            </p>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    </section>
  );
}