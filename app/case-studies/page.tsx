import Link from "next/link"
import { ArrowRight, TrendingUp, Users, BarChart3, Target } from "lucide-react"

const caseStudies = [
  {
    company: "Real Estate Agency",
    industry: "Real Estate",
    challenge: "The client was struggling with low-quality leads and an inefficient manual follow-up process. Their sales team was spending 70% of their time on administrative tasks instead of closing deals.",
    solution: "We implemented a comprehensive lead generation system with AI-powered chatbots, automated CRM workflows, and targeted Meta advertising campaigns. The system automatically qualified leads, scheduled follow-ups, and nurtured prospects through personalized email sequences.",
    results: [
      "250% Increase in qualified leads",
      "60% reduction in response time",
      "Automated 80% of follow-up tasks",
      "3x ROI on ad spend within 90 days",
    ],
    metric: "250%",
    metricLabel: "Lead Increase",
  },
  {
    company: "Educational Institution",
    industry: "Education",
    challenge: "A growing educational institution was facing declining admission inquiries and struggling to compete with larger institutions. Their marketing efforts were fragmented and not data-driven.",
    solution: "We developed a multi-channel digital marketing strategy including Google Ads, social media campaigns, and a lead nurturing system. We also implemented a CRM to track and manage the entire admissions pipeline from first touch to enrollment.",
    results: [
      "180% Increase in admission inquiries",
      "45% improvement in conversion rate",
      "Reduced cost per lead by 35%",
      "Streamlined admissions process",
    ],
    metric: "180%",
    metricLabel: "Inquiry Increase",
  },
  {
    company: "Retail Brand",
    industry: "E-Commerce",
    challenge: "An established retail brand was experiencing flat online sales growth. Their website had high traffic but low conversion rates, and they lacked a systematic approach to customer retention.",
    solution: "We built a complete e-commerce growth system including website optimization, conversion rate optimization (CRO), email marketing automation, and a customer loyalty program. We also implemented analytics to track and optimize every stage of the customer journey.",
    results: [
      "300% Revenue growth in 6 months",
      "52% increase in average order value",
      "40% customer retention improvement",
      "Automated marketing campaigns saving 20+ hours/week",
    ],
    metric: "300%",
    metricLabel: "Revenue Growth",
  },
]

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Case <span className="text-primary">Studies</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Real results from real businesses we've helped transform
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="space-y-12 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="rounded-2xl bg-card border border-border overflow-hidden"
              >
                <div className="grid md:grid-cols-3">
                  {/* Metric Sidebar */}
                  <div className="bg-primary/5 p-8 md:p-10 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-border">
                    <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                      {study.metric}
                    </div>
                    <div className="text-muted-foreground text-lg">{study.metricLabel}</div>
                    <div className="mt-6 text-sm text-muted-foreground bg-primary/10 px-4 py-2 rounded-full">
                      {study.industry}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2 p-8 md:p-10">
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                      {study.company}
                    </h2>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Challenge</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Solution</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{study.solution}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Results</h3>
                        <ul className="space-y-2">
                          {study.results.map((result) => (
                            <li key={result} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Let's discuss how we can help your business achieve similar results.
            </p>
            <Link
              href="/consultation"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-4 text-lg rounded-lg transition-all duration-300"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}