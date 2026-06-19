// app/services/[slug]/page.tsx
import { notFound } from "next/navigation";
import { CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { use } from "react";


const serviceDetails: Record<string, { title: string; overview: string; features: string[]; benefits: string[] }> = {
  "lead-generation": {
    title: "Lead Generation Engine",
    overview: "Drive measurable business growth with ROI-focused digital advertising and lead generation campaigns.",
    features: ["Target Audience Deep Research", "Multi-Stage Lead Funnel Creation", "Landing Pages"],
    benefits: ["100K+ Qualified Leads Generated", "Higher Conversion Rates"]
  },
  "performance-marketing": {
    title: "Performance Marketing Solutions",
    overview: "Optimize your enterprise ad spend footprint across primary semantic search engine ad placements and social discovery graphs.",
    features: ["Google Ads Campaign Matrix", "Meta Ads Demographic Scaling", "LinkedIn B2B Conversion Funnels"],
    benefits: ["Maximize Return on Ad Spend (ROAS)", "Explosive Online Brand Visibility Metrics"]
  },
  "ai-automation": {
    title: "AI & Automation Systems",
    overview: "Automate repetitive tasks and improve operational efficiency with intelligent AI workflows and custom LLM agent chatbots.",
    features: ["Intelligent Chatbots", "Multi-App Automated Workflow Relays", "CRM Platform Action Triggers"],
    benefits: ["90% Reduced Manual Work Hours", "Instant Customer Response Times"]
  },
  "startup-mvp": {
    title: "Startup / MVP Launch Kit",
    overview: "Accelerated technical, strategic, and brand tracking workflows designed to deploy stable minimal prototypes directly into native markets swiftly.",
    features: ["Rapid Production MVP Development", "Corporate Visual Brand Identity", "High-Performance Modern Website"],
    benefits: ["Faster Go-To-Market Velocity", "Reduced Capital Capital Development Risks"]
  },
  "crm-software": {
    title: "Business Software & CRM Solutions",
    overview: "Unify segmented database sheets and platforms into centralized, real-time custom customer relationship management setups.",
    features: ["Custom Software Layer Engineering", "Centralized CRM Setup Architectures", "Pipeline Sales Force Automations"],
    benefits: ["Unified Internal Single Source of Truth", "Significantly Higher Closing Speed Ratios"]
  },
  "cloud-devops": {
    title: "Cloud & DevOps Infrastructure",
    overview: "Provision high-availability, low-latency, and distributed server containers configured via automated pipelines.",
    features: ["Automated Cloud Resource Provisioning", "Zero-Downtime Application Deployment", "Multi-Zone High-Availability Layouts"],
    benefits: ["Infinite Structural Scale Thresholds", "Eliminated Costly Server Downtime Crashes"]
  },
  "ecommerce-growth": {
    title: "E-Commerce Growth System",
    overview: "Optimize transactional velocity across checkout conversion points by linking cart recovery parameters and store configuration analytics.",
    features: ["Advanced Storefront Application Assembly", "Automated Checkout Optimization Passes", "Smart Abandoned Cart Funnel Triggers"],
    benefits: ["Immediate Net Transactional Volume Gains", "Drastically Reduced Cart Abandonment Ratios"]
  },
  "content-branding": {
    title: "Content & Personal Branding System",
    overview: "Construct authoritative positioning indices across web footprints via structured asset curation timelines.",
    features: ["Strategic C-Suite Authority Outlining", "Systematic High-Volume Asset Curations", "Professional Video Production Guidelines"],
    benefits: ["Organic Organic High-Value Inbound Lead Loops", "Bulletproof Industry Competitive Defense Moats"]
  },
  "sales-funnel": {
    title: "Sales Funnel & Closing System",
    overview: "Transform passive user actions into predictable operational business cashflow pipelines via deterministic tracking.",
    features: ["Targeted Customer Nurturing Scripts", "Interactive Multi-Stage Sales Funnels", "Automatic Contextual Email Triggers"],
    benefits: ["Predictable Month-Over-Month Revenues", "Optimized Pipeline Deal Velocity Metrics"]
  },
  "data-analytics": {
    title: "Data & Analytics Intelligence",
    overview: "Consolidate disparate visual endpoints into single-pane custom analytical data dashboards to back capital deployment operations.",
    features: ["Real-Time Business Intel Dashboards", "Cross-Platform Pipeline Data Scraping", "Predictive Trend Modeling Frameworks"],
    benefits: ["Absolute Elimination of Operational Dark Spots", "Swift Data-Driven Resource Allocations"]
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ServiceDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const service = serviceDetails[slug]

  if (!service) {
    notFound()
  }


  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0f1117] py-20 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-6xl hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to all services
        </Link>
        <div className="border border-slate-200 bg-white p-8 md:p-12 rounded-2xl shadow-xl">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-[#EDEDED] mb-6">{service.title}</h1>
          <p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed mb-8">{service.overview}</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold mb-4">Core Deliverables</h2>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-6xl">
                    <CheckCircle className="w-4 h-4 animated-gradient-text shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h2 className="text-xl font-bold mb-4">Business Value</h2>
              <ul className="space-y-3">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="text-sm text-slate-700 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
