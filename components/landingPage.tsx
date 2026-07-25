"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import {
  Rocket,
  Sparkles,
  Zap,
  Target,
  BarChart3,
  ShieldCheck,
  ArrowRight,
  Phone,
  Mail,
  CheckCircle,
  Send,
  Lock,
  BrainCircuit,
  MessageSquare,
  TrendingUp,
  Megaphone,
  Bot,
  Cog,
  Users,
  ChevronDown,
  Gift,
  ClipboardCheck,
  LayoutDashboard,
  Globe,
  Search,
  MapPin,
  Image,
  Settings,
  DollarSign,
  Download,
  Menu,
  FileText,
  Cloud,
  ShoppingCart,
} from "lucide-react"

const growthSystems = [
  {
    number: "1",
    icon: TrendingUp,
    title: "Lead Generation Engine",
    description: "Generate high-quality leads with our proven strategies",
  },
  {
    number: "2",
    icon: Megaphone,
    title: "Performance Marketing",
    description: "Data-driven campaigns that deliver measurable ROI",
  },
  {
    number: "3",
    icon: Bot,
    title: "AI & Automation Systems",
    description: "Intelligent automation to scale your operations",
  },
  {
    number: "4",
    icon: Rocket,
    title: "Startup & MVP Launch Kit",
    description: "From idea to launch with our comprehensive kit",
  },
  {
    number: "5",
    icon: Cog,
    title: "Business Software & CRM",
    description: "Custom CRM solutions to manage customer relationships",
  },
  {
    number: "6",
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and DevOps pipelines",
  },
  {
    number: "7",
    icon: ShoppingCart,
    title: "E-Commerce Growth",
    description: "Strategies to scale your online store and sales",
  },
  {
    number: "8",
    icon: FileText,
    title: "Content & Branding",
    description: "Compelling content and brand identity creation",
  },
  {
    number: "9",
    icon: TrendingUp,
    title: "Sales Funnel & Closing",
    description: "Optimized funnels to convert leads into customers",
  },
  {
    number: "10",
    icon: BarChart3,
    title: "Data & Analytics",
    description: "Data-driven insights to fuel business decisions",
  },
  {
    number: "11",
    icon: Cog,
    title: "Industry Automation",
    description: "Tailored automation solutions for your industry",
  },
]

const startupServices = [
  "Professional Logo Design",
  "Google Business Profile Setup",
  "Google Maps Listing",
  "Google Search Visibility Setup",
  "Social Media Account Setup",
  "Business Email Configuration",
  "Lead Collection Forms",
  "Technical Support",
  "Sales Funnel Setup",
  "Email Marketing Setup",
]

const qrSteps = [
  {
    number: "1",
    icon: Search,
    title: "Explore Services",
    description: "Browse our services",
  },
  {
    number: "2",
    icon: ClipboardCheck,
    title: "Select Your Requirements",
    description: "Choose what you need",
  },
  {
    number: "3",
    icon: Users,
    title: "Create Your Account",
    description: "Quick registration",
  },
  {
    number: "4",
    icon: MessageSquare,
    title: "Speak With Our Expert",
    description: "Free consultation call",
  },
  {
    number: "5",
    icon: Rocket,
    title: "Launch and Grow",
    description: "Start your journey",
  },
]

const trustFeatures = [
  { icon: ShieldCheck, title: "Select & Reliable", description: "Secure and trustworthy solutions" },
  { icon: Users, title: "Expert Technology Team", description: "Skilled professionals at work" },
  { icon: TrendingUp, title: "Long-Term Partnership", description: "Your growth is our priority" },
]

export default function LandingPage() {
  const formRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    businessStage: "",
    interestedService: "",
    requirements: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setStatusMessage("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus("success")
        setStatusMessage("Thank you! We'll contact you within 24 hours.")
        setFormData({ name: "", email: "", phone: "", company: "", businessStage: "", interestedService: "", requirements: "" })
      } else {
        setStatus("error")
        setStatusMessage(data.error || "Something went wrong. Please try again.")
      }
    } catch {
      setStatus("error")
      setStatusMessage("Network error. Please check your connection.")
    }
  }

  return (
    <div>
      {/* ========== HERO SECTION ========== */}
      <section className="relative w-full min-h-screen flex items-center pt-28 md:pt-36 pb-16 overflow-hidden">
        {/* Hero Banner Background */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/hero1.jpg')" }}
          />
          <div className="absolute inset-0 bg-background/40" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* LEFT COLUMN - Text Content */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground leading-[1.1] tracking-tight">
                    Launch,<br />
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      Automate
                    </span>
                    <br />
                    and{" "}
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      Grow
                    </span>{" "}
                    Your Business
                  </h1>
                  <p className="mt-2 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
                    Technology, strategy, marketing, software and automation solutions designed to transform ideas into scalable businesses.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-start gap-6 mt-22">
                  <button onClick={scrollToForm} className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/100 hover:to-secondary/100 text-primary-foreground font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-secondary/40 hover:scale-[1.03]">
                    Claim Your Startup Benefits
                  </button>
                  <button onClick={scrollToContact} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-border hover:border-primary/50 text-foreground font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:scale-[1.03]">
                    Talk to a Startup Expert
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

              {/* RIGHT COLUMN - Floating Badge */}
              <div className="relative hidden lg:flex items-center justify-center">
                <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/10 border border-yellow-500/40 rounded-xl p-5 backdrop-blur-sm shadow-lg animate-float-slow">
                  <div className="flex items-center gap-3">
                    <Gift className="w-8 h-8 text-yellow-500" />
                    <div>
                      <p className="text-sm font-bold text-foreground">Startup & MVP Kit</p>
                      <p className="text-xs text-muted-foreground">10 Powerful Services Included</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* ========== 11 GROWTH SYSTEMS SECTION ========== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              11 Growth Systems. One Technology Partner.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {growthSystems.map((system) => (
              <div
                key={system.number}
                className="group bg-card/90 border border-border hover:border-primary/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">{system.number}</span>
                  </div>
                  <system.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">{system.title}</h3>
                <p className="text-xs text-muted-foreground mb-4">{system.description}</p>
                <button onClick={scrollToForm} className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 font-medium transition-colors">
                  I'm Interested <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* ========== LAUNCH YOUR DREAM STARTUP ========== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Launch Your Dream Startup
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get essential technology, branding, marketing, and growth systems in one powerful startup package.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT - Gift Box + Services */}
            <div className="space-y-6">
              {/* Gift Box Illustration */}
              <div className="bg-card/80 border border-border rounded-2xl p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Gift className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Everything You Need</h3>
                  <p className="text-sm text-muted-foreground mb-4">10 essential services to launch your startup</p>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {startupServices.map((service, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-card/60 border border-border rounded-xl p-3"
                  >
                    <CheckCircle className="w-4 h-4 text-yellow-500 shrink-0" />
                    <span className="text-sm text-foreground">{service}</span>
                  </div>
                ))}
              </div>

              {/* Ribbon */}
              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/10 border border-yellow-500/30 rounded-xl p-4 text-center">
                <div className="inline-flex items-center gap-2 text-yellow-500 font-semibold text-sm">
                  <CheckCircle className="w-4 h-4" />
                  10 Startup Services Included
                </div>
              </div>
            </div>

            {/* RIGHT - CTA Card */}
            <div className="bg-card/90 border border-border rounded-2xl p-8 space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Rocket className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Startup & MVP Launch Kit</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Services are available to eligible Startup & MVP Kit customers. Scope and eligibility will be confirmed during consultation.
              </p>
              <ul className="space-y-2">
                {[
                  "Professional Logo Design",
                  "Google Business Profile Setup",
                  "Google Maps Listing",
                  "Google Search Visibility Setup",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                    {item}
                  </li>
                ))}
              </ul>
              <button onClick={scrollToForm} className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-secondary/40">
                Register for Startup & MVP Kit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FROM QR SCAN TO BUSINESS GROWTH ========== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              From QR Scan to Business Growth
            </h2>
          </div>

          {/* Timeline Steps */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-20">
            {qrSteps.map((step, idx) => (
              <div key={step.number} className="relative text-center group">
                {/* Arrow connector */}
                {idx < qrSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/40 to-transparent" />
                )}
                {/* Circle */}
                <div className="relative mx-auto mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center text-primary font-bold text-sm mx-auto group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                </div>
                <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-xs text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          {/* ========== FORM + LOGIN SECTION ========== */}
          <div ref={formRef} className="max-w-5xl mx-auto">
            <div className="bg-card/90 border border-border rounded-2xl overflow-hidden shadow-xl shadow-primary/5">
              <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border">
                {/* LEFT - Lead Form */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6">Tell Us About Your Business</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 placeholder:text-muted-foreground/60"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Mobile Number <span className="text-primary">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 placeholder:text-muted-foreground/60"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Email Address</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 placeholder:text-muted-foreground/60"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Company or Startup Name</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 placeholder:text-muted-foreground/60"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Business Stage</label>
                      <select
                        value={formData.businessStage}
                        onChange={(e) => setFormData({ ...formData, businessStage: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                      >
                        <option value="">Select stage</option>
                        <option value="idea">Idea Stage</option>
                        <option value="mvp">MVP / Development</option>
                        <option value="launch">Launching Soon</option>
                        <option value="growth">Scaling / Growth</option>
                        <option value="established">Established Business</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Interested Service</label>
                      <select
                        value={formData.interestedService}
                        onChange={(e) => setFormData({ ...formData, interestedService: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                      >
                        <option value="">Select service</option>
                        <option value="lead-gen">Lead Generation</option>
                        <option value="marketing">Performance Marketing</option>
                        <option value="ai-automation">AI & Automation</option>
                        <option value="startup-kit">Startup & MVP Kit</option>
                        <option value="crm">Business Software & CRM</option>
                        <option value="crm">Cloud & DevOps</option>
                        <option value="crm">E-Commerce Growth</option>
                        <option value="crm">Content & Branding</option>
                        <option value="crm">Sales Funnel & Closing</option>
                        <option value="crm">Data & Analytics</option>
                        <option value="crm">Industry Automation</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Business Requirement</label>
                      <textarea
                        rows={3}
                        value={formData.requirements}
                        onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none placeholder:text-muted-foreground/60"
                        placeholder="Tell us about your business needs..."
                      />
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 rounded border-border bg-background text-primary focus:ring-primary/40" />
                      <span className="text-xs text-muted-foreground">
                        I agree to the Terms & Conditions and Privacy Policy
                      </span>
                    </div>

                    {status === "success" && (
                      <div className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
                        <CheckCircle className="w-4 h-4" />
                        {statusMessage}
                      </div>
                    )}
                    {status === "error" && (
                      <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                        <MessageSquare className="w-4 h-4" />
                        {statusMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary/20 disabled:opacity-50"
                    >
                      {status === "loading" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit and Verify Mobile <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-1">
                      <Lock className="w-3 h-3" />
                      No spam. Your information is protected.
                    </p>
                  </form>
                </div>

{/* RIGHT - Customer Login + Dashboard */}
                <div className="p-6 md:p-8 space-y-6">
                  <h3 className="text-xl font-bold text-foreground">Customer Login</h3>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                      Mobile Number or Email
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        className="flex-1 px-4 py-2.5 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 placeholder:text-muted-foreground/60"
                        placeholder="Enter phone or email"
                      />
                      <button onClick={() => alert("OTP feature coming soon. Please use the contact form to reach us.")} className="px-4 py-2.5 bg-gradient-to-r from-primary to-secondary text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
                        Send OTP
                      </button>
                    </div>
                  </div>

                  {/* Dashboard Preview Cards */}
                  <h4 className="text-sm font-semibold text-foreground pt-2">Dashboard Preview</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-card/60 border border-border rounded-xl p-3">
                      <LayoutDashboard className="w-4 h-4 text-primary mb-2" />
                      <p className="text-[10px] text-muted-foreground">Selected Services</p>
                      <p className="text-sm font-bold text-foreground">3</p>
                    </div>
                    <div className="bg-card/60 border border-border rounded-xl p-3">
                      <MessageSquare className="w-4 h-4 text-yellow-500 mb-2" />
                      <p className="text-[10px] text-muted-foreground">Enquiry Status</p>
                      <p className="text-sm font-bold text-yellow-500">In Progress</p>
                    </div>
                    <div className="bg-card/60 border border-border rounded-xl p-3">
                      <Users className="w-4 h-4 text-green-500 mb-2" />
                      <p className="text-[10px] text-muted-foreground">Assigned Consultant</p>
                      <p className="text-sm font-bold text-green-500">Available</p>
                    </div>
                    <div className="bg-card/60 border border-border rounded-xl p-3">
                      <FileText className="w-4 h-4 text-purple-500 mb-2" />
                      <p className="text-[10px] text-muted-foreground">Proposal Status</p>
                      <p className="text-sm font-bold text-purple-500">Pending</p>
                    </div>
                  </div>

                  <button onClick={() => alert("Dashboard login coming soon. Please use the contact form to get started.")} className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg shadow-primary/20">
                    Login to Dashboard
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* ========== TRUST FEATURES ========== */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {trustFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-card/80 border border-border rounded-xl p-5 text-center hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-xs text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA + CONTACT SECTION ========== */}
      <section ref={contactRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT - CTA */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Ready to Turn Your Idea Into Reality?
              </h2>
              <p className="text-muted-foreground max-w-lg">
                Register now and let our startup and technology experts understand your business requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={scrollToForm} className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-secondary/40">
                  Get Started
                </button>
                <a href="https://wa.me/918884014055" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-green-600/20">
                  <MessageSquare className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* RIGHT - Contact Cards */}
            <div className="bg-card/90 border border-border rounded-2xl p-6 md:p-8 space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border/50">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <a href="tel:8884014055" className="text-sm font-semibold text-foreground hover:text-primary">8884014055</a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border/50">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">WhatsApp</p>
                  <a href="https://wa.me/918884014055" className="text-sm font-semibold text-foreground hover:text-green-500">Chat with us</a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border/50">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Website</p>
                  <a href="https://kaalamithra-ai.com" className="text-sm font-semibold text-foreground hover:text-purple-500">kaalamithra-ai.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border/50">
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-pink-500" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <a href="mailto:info@kaalamithra-ai.com" className="text-sm font-semibold text-foreground hover:text-pink-500">info@kaalamithra-ai.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* ========== FOOTER ========== */}
      <footer className="relative bg-card/90 border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo + Description + Social */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <BrainCircuit className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">KAALA</h3>
                  <p className="text-xs text-muted-foreground -mt-1">MITHRA</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-6 max-w-xs">
                KAALA MITHRA AI Tech Solution helps startups and businesses launch, automate and scale with powerful technology, marketing and automation solutions.
              </p>
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {["facebook", "instagram", "linkedin", "youtube"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-8 h-8 rounded-lg bg-muted/50 border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  >
                    <span className="text-xs font-bold text-muted-foreground uppercase">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/privacy" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms and Conditions
                </Link>
                <Link href="/refund" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Refund and Cancellation Policy
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Contact</h4>
              <div className="space-y-2">
                <a href="tel:8884014055" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  8884014055
                </a>
                <a href="tel:9972702666" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  9972702666
                </a>
                <a href="mailto:info@kaalamithra-ai.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  info@kaalamithra-ai.com
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-6 text-center">
            <p className="text-xs text-muted-foreground">
              © 2025 KAALA MITHRA AI Tech Solution. All rights reserved.
            </p>
          </div>
</div>
      </footer>
    </div>
  )
}