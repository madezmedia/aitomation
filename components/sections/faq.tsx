"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What's included in the lifetime access?",
    answer: "You get permanent access to our complete AI automation suite, including all current features and future updates. This includes social media automation, email marketing, content creation, e-commerce tools, and SEO optimization features."
  },
  {
    question: "Is this really a one-time payment?",
    answer: "Yes! Pay just $27 once and get lifetime access to AI-TOMATION. No hidden fees, no recurring charges, and no upsells."
  },
  {
    question: "What if I'm not satisfied?",
    answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with AI-TOMATION, simply contact our support team for a full refund."
  },
  {
    question: "Will I get future updates?",
    answer: "Absolutely! Your lifetime access includes all future updates and new features we add to the platform."
  },
  {
    question: "How long will this offer last?",
    answer: "This is a limited-time launch offer and will only be available for a short period. Once it ends, the price will increase significantly."
  }
];

export function FaqSection() {
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
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about the AI-TOMATION lifetime offer
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}