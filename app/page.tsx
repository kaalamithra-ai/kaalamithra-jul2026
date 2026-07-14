// app/page.tsx
"use client"
import Link from "next/link"
import { ArrowRight, Bot, Zap, Users, BarChart3, Sparkles, CheckCircle, Phone } from "lucide-react"
import TiltCard from "@/components/tiltCard"
import BookConsultation from "@/components/bookConsultation"

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
      <section className="relative py-32 md:py-48 px-6 overflow-hidden perspective-[1200px]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.06)_0%,transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(0,212,255,0.08)_0%,transparent_60%)]" />
        <div className="absolute inset-0 dark:bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.06)_0%,transparent_50%)]" />
        
        {/* 3D floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/5 dark:bg-[#00D4FF]/5 blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-secondary/5 dark:bg-[#8B5CF6]/5 blur-3xl animate-float-slower" />
        
        <div className="relative max-w-5xl mx-auto text-center" style={{ transformStyle: "preserve-3d" }}>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full mb-8" style={{ transform: "translateZ(40px)" }}>
            <Sparkles className="w-4 h-4" />
            AI-Powered Growth Solutions
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight tracking-tight" style={{ transform: "translateZ(60px)" }}>
            AI-Powered Growth,<br />
            <span className="animated-gradient-text">Automation & Technology</span> Solutions
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed" style={{ transform: "translateZ(30px)" }}>
            AI • Automation • CRM • Marketing • Technology Solutions
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed" style={{ transform: "translateZ(20px)" }}>
            Empowering businesses with cutting-edge technology to automate, grow, and scale.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4" style={{ transform: "translateZ(50px)" }}>
            <Link
              href="/consultation"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
            >
              Get Free Audit
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-border hover:border-primary text-foreground font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg hover:scale-105"
            >
              Book Consultation
            </Link>
            <a
              href="tel:8884014055"
              className="inline-flex items-center justify-center gap-2 border-2 border-border hover:border-secondary text-foreground font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-6 bg-muted/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat) => (
              <div key={stat.label} className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-base md:text-lg text-muted-foreground">{stat.label}</div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Core <span className="animated-gradient-text">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto">
              End-to-end solutions to accelerate your digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <TiltCard key={index} tiltDegree={10} glare={true}>
                <div className="p-8 rounded-2xl bg-card hover:bg-muted transition-colors duration-300 group border border-border/50 hover:border-primary/30 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors" style={{ transform: "translateZ(20px)" }}>
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3" style={{ transform: "translateZ(15px)" }}>
                    {service.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed" style={{ transform: "translateZ(10px)" }}>
                    {service.description}
                  </p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Target Anchor for the Work Link */}
      <div id="work" className="scroll-mt-20" />

      {/* Technology Stack / Work Section */}
      <section className="py-24 px-6 bg-muted/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Technology <span className="animated-gradient-text">Stack</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto">
              Modern tools and platforms we use to deliver results
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {techStack.map((tech, idx) => (
              <TiltCard key={idx} tiltDegree={6} glare={true}>
                <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors duration-300 h-full">
                  <h3 className="text-base font-semibold text-primary uppercase tracking-wider mb-4" style={{ transform: "translateZ(15px)" }}>
                    {tech.category}
                  </h3>
                  <ul className="space-y-2">
                    {tech.items.map((item, i) => (
                      <li key={i} className="text-base text-muted-foreground flex items-center gap-2" style={{ transform: `translateZ(${5 + i * 2}px)` }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Target Anchor for the Contact Link */}
      <div id="contact" className="scroll-mt-20" />

      {/* Book Consultation Section - matched from book.png design */}
      <BookConsultation />
    </main>
  )
}