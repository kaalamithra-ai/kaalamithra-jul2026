// app/page.tsx
import FlipCard from "@/components/ui/flipCard";
import Link from "next/link"
import { ArrowRight, Bot, Zap, Users, BarChart3, Sparkles, CheckCircle, Phone } from "lucide-react"

const services = [
  {
    icon: Bot,
    title: "AI & Automation",
    description: "Automate repetitive tasks and improve operational efficiency with intelligent AI workflows and chatbots.",
  },
  {
    icon: Zap,
    title: "CRM Solutions",
    description: "Build systems that streamline operations and improve customer management and sales automation.",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    description: "Drive measurable business growth with ROI-focused digital advertising and lead generation campaigns.",
  },
  {
    icon: Users,
    title: "Technology Solutions",
    description: "Custom software, cloud infrastructure, and end-to-end technology solutions for your business.",
  },
]

const statistics = [
  { value: "100+", label: "Projects Completed" },
  { value: "50+", label: "Businesses Served" },
  { value: "100K+", label: "Leads Generated" },
  { value: "10M+", label: "Reach Generated" },
]

const techStack = [
  {
    category: "Marketing",
    items: ["Google Ads", "Meta Ads", "LinkedIn Ads", "SEO Tools", "Marketing Automation"],
  },
  {
    category: "CRM",
    items: ["Salesforce", "HubSpot", "Zoho CRM", "Custom CRM", "Sales Automation"],
  },
  {
    category: "Development",
    items: ["React/Next.js", "Python/Django", "Node.js", "Flutter", "Tailwind CSS"],
  },
  {
    category: "Cloud",
    items: ["AWS", "Google Cloud", "Azure", "Docker/K8s", "DevOps Pipelines"],
  },
  {
    category: "Analytics",
    items: ["Google Analytics", "Power BI", "Tableau", "Custom Dashboards", "Data Pipelines"],
  },
]

const resources = [
  "Custom AI & Automation Audit",
  "Technology Stack Assessment",
  "Growth Opportunities Report",
  "Custom Roadmap Creation",
  "Expert Consultation Call",
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background relative">
      {/* Target Anchor for Home Link */}
      <div id="home" className="absolute top-0 left-0" />

      {/* Hero Section */}
      <section className="relative py-32 md:py-48 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(110, 231, 183,0.08)_0%,transparent_60%)]" />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#6EE7B7]/10 text-[#6EE7B7] text-sm font-medium px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4" />
            AI-Powered Growth Solutions
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-[#0A0A0A] dark:text-[#EDEDED] mb-6 leading-tight tracking-tight">
            AI-Powered Growth,<br />
            <span className="animated-gradient-text">Automation & Technology</span> Solutions
          </h1>
          <p className="text-lg md:text-xl text-[#6B7280] mb-4 max-w-2xl mx-auto leading-relaxed">
            AI • Automation • CRM • Marketing • Technology Solutions
          </p>
          <p className="text-base md:text-lg text-[#6B7280] mb-12 max-w-xl mx-auto leading-relaxed">
            Empowering businesses with cutting-edge technology to automate, grow, and scale.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/consultation"
              className="inline-flex items-center justify-center bg-[#0A0A0A] hover:bg-[#1f1f1f] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/15"
            >
              Get Free Audit
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-[#E5E7EB] dark:border-gray-600 hover:border-[#0A0A0A] dark:hover:border-[#EDEDED] text-[#0A0A0A] dark:text-[#EDEDED] font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg"
            >
              Book Consultation
            </Link>
            <a
              href="tel:8884014055"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#E5E7EB] dark:border-gray-600 hover:border-[#6EE7B7] text-[#0A0A0A] dark:text-[#EDEDED] font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-6 bg-[#F5F5F5] dark:bg-[#1a1d28]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#6EE7B7] mb-2">{stat.value}</div>
                <div className="text-sm text-[#6B7280]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Anchor for Services Link */}
      <div id="services" className="scroll-mt-20" />
      
      {/* Services Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] dark:text-[#EDEDED] mb-4">
              Our Core <span className="animated-gradient-text">Solutions</span>
            </h2>
            <p className="text-lg text-[#6B7280] max-w-xl mx-auto">
              End-to-end solutions to accelerate your digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-[#F5F5F5] dark:bg-[#1a1d28] hover:bg-[#F0F0F0] dark:hover:bg-[#2a2d3a] transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#6EE7B7]/10 flex items-center justify-center mb-6 group-hover:bg-[#6EE7B7]/20 transition-colors">
                  <service.icon className="w-7 h-7 text-[#6EE7B7]" />
                </div>
                <h3 className="text-xl font-semibold text-[#0A0A0A] dark:text-[#EDEDED] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Anchor for the Work Link */}
      <div id="work" className="scroll-mt-20" />

      {/* Technology Stack / Work Section */}
      <section className="py-24 px-6 bg-[#F5F5F5] dark:bg-[#1a1d28]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] dark:text-[#EDEDED] mb-4">
              Our Technology <span className="animated-gradient-text">Stack</span>
            </h2>
            <p className="text-lg text-[#6B7280] max-w-xl mx-auto">
              Modern tools and platforms we use to deliver results
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.category}
                className="p-6 rounded-2xl bg-white dark:bg-[#1a1d28] border border-gray-100 dark:border-[#2a2d3a] hover:border-[#6EE7B7]/30 transition-all duration-300"
              >
                <h3 className="text-sm font-semibold text-[#6EE7B7] uppercase tracking-wider mb-4">
                  {tech.category}
                </h3>
                <ul className="space-y-2">
                  {tech.items.map((item) => (
                    <li key={item} className="text-sm text-[#6B7280] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6EE7B7]/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Anchor for the Contact Link */}
      <div id="contact" className="scroll-mt-20" />

      {/* Free Business Audit / Contact Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] dark:text-[#EDEDED] mb-6">
                Get a Free Business <span className="animated-gradient-text">Audit</span>
              </h2>
              <p className="text-lg text-[#6B7280] mb-8 leading-relaxed">
                Understand where your workflows are bleeding resources. Get an engineering overview detailing optimization pathways.
              </p>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource} className="flex items-center gap-3 text-sm text-[#6B7280]">
                    <CheckCircle className="w-5 h-5 text-[#6EE7B7] shrink-0" />
                    {resource}
                  </li>
                ))}
              </ul>
            </div>
            
              <div className="bg-[#F5F5F5] dark:bg-[#1a1d28] p-8 rounded-2xl border border-gray-200/50 dark:border-[#2a2d3a]">
              <h3 className="text-xl font-bold mb-4">Connect Directly</h3>
              <p className="text-sm text-[#6B7280] mb-6">Our system architects are standing by to inspect your layout operations.</p>
              <div className="p-4 bg-card rounded-xl border border-gray-100">
                <span className="text-xs font-mono uppercase tracking-wider text-[#6B7280]">Contact Hotline</span>
                <p className="text-lg font-bold text-[#0A0A0A] mt-1">📞 +91 88840 14055</p>
                <p className="text-xs text-muted-foreground mt-1">Email: info@kaalamithra.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
            Join 50+ businesses that trust KAALAMITHRA for their growth and technology needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/consultation"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-200 text-[#0A0A0A] font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg"
            >
              Get Free Audit
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-gray-700 hover:border-white text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg"
            >
              Book Consultation
            </Link>
            <a
              href="tel:8884014055"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-700 hover:border-white text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}