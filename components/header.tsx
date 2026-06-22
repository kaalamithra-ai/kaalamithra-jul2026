"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ArrowRight, ChevronDown, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

const services = [
  { name: "Lead Generation Engine", href: "/services/lead-generation" },
  { name: "Performance Marketing", href: "/services/performance-marketing" },
  { name: "AI & Automation Systems", href: "/services/ai-automation" },
  { name: "Startup / MVP Launch Kit", href: "/services/startup-mvp" },
  { name: "Business Software & CRM", href: "/services/crm-software" },
  { name: "Cloud & DevOps", href: "/services/cloud-devops" },
  { name: "E-Commerce Growth", href: "/services/ecommerce-growth" },
  { name: "Content & Branding", href: "/services/content-branding" },
  { name: "Sales Funnel & Closing", href: "/services/sales-funnel" },
  { name: "Data & Analytics", href: "/services/data-analytics" },
]

const industries = [
  { name: "Real Estate", href: "/industries/real-estate" },
  { name: "Healthcare", href: "/industries/healthcare" },
  { name: "Education", href: "/industries/education" },
  { name: "Retail", href: "/industries/retail" },
  { name: "E-Commerce", href: "/industries/ecommerce" },
  { name: "Hospitality", href: "/industries/hospitality" },
  { name: "Manufacturing", href: "/industries/manufacturing" },
  { name: "Finance", href: "/industries/finance" },
  { name: "Startups", href: "/industries/startups" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-[#0f1117]/90 backdrop-blur-md border-b border-gray-100 dark:border-[#2a2d3a]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-2 py-2 lg:py-3">
        
        {/* Logo */}
        <Link href="/" className="flex items-start justify-start gap-2 md:gap-1">
          <div className="h-10 w-10 md:h-14 md:w-14 bg-cover bg-center select-none"/>
          <img src="/animated-bg.gif" className="object-contain mix-blend-multiply rounded-lg dark:opacity-80" />
          <div className="flex flex-col justify-center select-none leading-none">
            <span className="text-[15px] md:text-[22px] font-extrabold tracking-wide text-[#0A56B2] font-sans">
              KAALA
            </span>
            <span className="text-[15px] md:text-[22px] font-extrabold tracking-wide text-[#E53880] font-sans -mt-0.5 md:-mt-1">
              MITHRA
            </span>
            <span className="text-[7px] md:text-[10px] font-bold tracking-wider dark:text-gray-300 text-black uppercase mt-0.5 md:mt-1">
              AI Tech Solution
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:justify-evenly lg:gap-3">
          <Link href="/" className="text-sm font-medium text-[#6B7280] dark:text-gray-400 hover:text-[#0A0A0A] dark:hover:text-gray-200 transition-colors duration-200">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium text-[#6B7280] dark:text-gray-400 hover:text-[#0A0A0A] dark:hover:text-gray-200 transition-colors duration-200">
            About Us
          </Link>

          {/* Services Dropdown */}
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button className="flex items-center gap-1 text-sm font-medium text-[#6B7280] dark:text-gray-400 hover:text-[#0A0A0A] dark:hover:text-gray-200 transition-colors duration-200">
              Services
              <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-[#1a1d28] rounded-xl shadow-lg border border-gray-100 dark:border-[#2a2d3a] py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                {services.map((service) => (
                  <Link key={service.href} href={service.href} className="block px-4 py-2.5 text-sm text-[#6B7280] dark:text-gray-400 hover:text-[#0A0A0A] dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-[#2a2d3a] transition-colors">
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div className="relative" onMouseEnter={() => setIndustriesOpen(true)} onMouseLeave={() => setIndustriesOpen(false)}>
            <button className="flex items-center gap-1 text-sm font-medium text-[#6B7280] dark:text-gray-400 hover:text-[#0A0A0A] dark:hover:text-gray-200 transition-colors duration-200">
              Industries
              <ChevronDown className={`w-4 h-4 transition-transform ${industriesOpen ? 'rotate-180' : ''}`} />
            </button>
            {industriesOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-[#1a1d28] rounded-xl shadow-lg border border-gray-100 dark:border-[#2a2d3a] py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                {industries.map((industry) => (
                  <Link key={industry.href} href={industry.href} className="block px-4 py-2.5 text-sm text-[#6B7280] dark:text-gray-400 hover:text-[#0A0A0A] dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-[#2a2d3a] transition-colors">
                    {industry.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/case-studies" className="text-sm font-medium text-[#6B7280] dark:text-gray-400 hover:text-[#0A0A0A] dark:hover:text-gray-200 transition-colors duration-200">Case Studies</Link>
          <Link href="/testimonials" className="text-sm font-medium text-[#6B7280] dark:text-gray-400 hover:text-[#0A0A0A] dark:hover:text-gray-200 transition-colors duration-200">Testimonials</Link>
          <Link href="/blog" className="text-sm font-medium text-[#6B7280] dark:text-gray-400 hover:text-[#0A0A0A] dark:hover:text-gray-200 transition-colors duration-200">Blog</Link>
          <Link href="/faq" className="text-sm font-medium text-[#6B7280] dark:text-gray-400 hover:text-[#0A0A0A] dark:hover:text-gray-200 transition-colors duration-200">FAQ</Link>
          <Link href="/contact" className="text-sm font-medium text-[#6B7280] dark:text-gray-400 hover:text-[#0A0A0A] dark:hover:text-gray-200 transition-colors duration-200">Contact</Link>
        </div>

        {/* Right Section - Theme Toggle + CTA (Desktop) */}
        <div className="hidden lg:flex lg:items-center lg:gap-4 flex-shrink-0">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2.5 rounded-full bg-gray-100 dark:bg-[#1a1d28] text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-[#2a2d3a] transition-all duration-300"
            aria-label="Toggle dark mode"
          >
            {mounted && theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <Link href="/consultation" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0A0A0A] dark:bg-primary dark:text-primary-foreground text-white font-semibold rounded-full hover:bg-[#1f1f1f] dark:hover:bg-primary/90 transition-all duration-300 text-sm">
            Book Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Button + Theme */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-gray-100 dark:bg-[#1a1d28] text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-[#2a2d3a] transition-all duration-300"
            aria-label="Toggle dark mode"
          >
            {mounted && theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            type="button"
            className="p-2 text-[#0A0A0A] dark:text-gray-200 hover:bg-[#F5F5F5] dark:hover:bg-[#1a1d28] rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#0f1117] border-t border-[#E5E7EB] dark:border-[#2a2d3a] max-h-[80vh] overflow-y-auto">
          <div className="max-w-7xl mx-auto px-6 py-6 space-y-1">
            <Link href="/" className="block px-4 py-3 text-base font-medium text-[#6B7280] dark:text-gray-400 hover:text-[#0A0A0A] dark:hover:text-gray-200 hover:bg-[#F5F5F5] dark:hover:bg-[#1a1d28] rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="block px-4 py-3 text-base font-medium text-[#6B7280] dark:text-gray-400 hover:text-[#0A0A0A] dark:hover:text-gray-200 hover:bg-[#F5F5F5] dark:hover:bg-[#1a1d28] rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
              About Us
            </Link>

            {/* Mobile Services */}
            <div>
              <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-[#6B7280] dark:text-gray-400 hover:text-[#0A0A0A] dark:hover:text-gray-200 hover:bg-[#F5F5F5] dark:hover:bg-[#1a1d28] rounded-lg transition-colors">
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-6 mt-1 space-y-1">
                  {services.map((service) => (
                    <Link key={service.href} href={service.href} className="block px-4 py-2.5 text-sm text-[#6B7280] dark:text-gray-400 hover:text-[#0A0A0A] dark:hover:text-gray-200 hover:bg-[#F5F5F5] dark:hover:bg-[#1a1d28] rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Industries */}
            <div>
              <button onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)} className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-[#6B7280] dark:text-gray-400 hover:text-[#0A0A0A] dark:hover:text-gray-200 hover:bg-[#F5F5F5] dark:hover:bg-[#1a1d28] rounded-lg transition-colors">
                <span>Industries</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileIndustriesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileIndustriesOpen && (
                <div className="ml-4 mt-1 space-y-1 pb-2">
                  {industries.map((industry) => (
                    <Link key={industry.href} href={industry.href} className="block px-4 py-2.5 text-sm text-[#6B7280] dark:text-gray-400 hover:text-[#0A0A0A] dark:hover:text-gray-200 hover:bg-[#F5F5F5] dark:hover:bg-[#1a1d28] rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                      {industry.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/case-studies" className="block px-4 py-3 text-base font-medium text-[#6B7280] dark:text-gray-400 hover:text-[#0A0A0A] dark:hover:text-gray-200 hover:bg-[#F5F5F5] dark:hover:bg-[#1a1d28] rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>Case Studies</Link>
            <Link href="/testimonials" className="block px-4 py-3 text-base font-medium text-[#6B7280] dark:text-gray-400 hover:text-[#0A0A0A] dark:hover:text-gray-200 hover:bg-[#F5F5F5] dark:hover:bg-[#1a1d28] rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>Testimonials</Link>
            <Link href="/blog" className="block px-4 py-3 text-base font-medium text-[#6B7280] dark:text-gray-400 hover:text-[#0A0A0A] dark:hover:text-gray-200 hover:bg-[#F5F5F5] dark:hover:bg-[#1a1d28] rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            <Link href="/faq" className="block px-4 py-3 text-base font-medium text-[#6B7280] dark:text-gray-400 hover:text-[#0A0A0A] dark:hover:text-gray-200 hover:bg-[#F5F5F5] dark:hover:bg-[#1a1d28] rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
            <Link href="/contact" className="block px-4 py-3 text-base font-medium text-[#6B7280] dark:text-gray-400 hover:text-[#0A0A0A] dark:hover:text-gray-200 hover:bg-[#F5F5F5] dark:hover:bg-[#1a1d28] rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</Link>

            <div className="pt-4 mt-4 border-t border-[#E5E7EB] dark:border-[#2a2d3a]">
              <Link href="/consultation" className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#0A0A0A] dark:bg-primary dark:text-primary-foreground text-white font-semibold rounded-full hover:bg-[#1f1f1f] dark:hover:bg-primary/90 transition-all duration-300" onClick={() => setMobileMenuOpen(false)}>
                Book Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}