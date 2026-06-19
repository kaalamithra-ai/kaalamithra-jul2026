"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle, ArrowRight, Mail, Phone } from "lucide-react"
import Link from "next/link"

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We provide AI, Automation, CRM, Marketing, Software Development, Cloud Solutions, and Data Analytics services. Our comprehensive offerings include Lead Generation, Performance Marketing, AI & Automation Systems, Startup/MVP Launch Kits, Business Software & CRM Solutions, Cloud & DevOps Infrastructure, E-Commerce Growth Systems, Content & Personal Branding, Sales Funnel & Closing Systems, and Data & Analytics Intelligence.",
  },
  {
    question: "How much does it cost?",
    answer: "Pricing depends on project scope and business requirements. We offer customized solutions tailored to your specific needs and budget. Contact us for a detailed quote after understanding your requirements.",
  },
  {
    question: "How long does implementation take?",
    answer: "Most projects are completed within 2–12 weeks depending on complexity. Simple automation setups may take 2-4 weeks, while comprehensive software development projects may take 8-12 weeks or more. We provide detailed timelines during the planning phase.",
  },
  {
    question: "Do you provide support?",
    answer: "Yes, we provide ongoing support, maintenance, and optimization for all our solutions. We offer various support packages to ensure your systems run smoothly and continue to deliver value over time.",
  },
  {
    question: "Can you work with startups?",
    answer: "Absolutely. We offer dedicated Startup & MVP Launch solutions designed specifically for early-stage companies. We understand the unique challenges startups face and provide scalable, cost-effective solutions to help you grow.",
  },
  {
    question: "How do I get started?",
    answer: "Book a free consultation and business audit with our team. We'll analyze your current situation, identify opportunities, and create a customized roadmap for your digital transformation journey.",
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our services, process, and how we can help your business grow.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl bg-card border border-border overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-accent transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-semibold text-foreground">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 pl-14">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Still have questions?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Our team is here to help. Reach out to us directly or book a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link
                href="mailto:tech@kaalamithra-ai.com"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                tech@kaalamithra-ai.com
              </Link>
              <Link
                href="tel:8884014055"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                8884014055
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-4 text-lg rounded-lg neon-glow transition-all duration-300"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-border hover:bg-accent text-foreground font-semibold px-10 py-4 text-lg rounded-lg transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}