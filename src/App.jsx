import React, { useState } from 'react'
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Stethoscope,
  Home,
  CheckCircle2,
  ArrowUp,
  Menu,
  X,
  Star,
  ShieldCheck,
  HeartHandshake,
} from 'lucide-react'

const BOOKING_URL = 'http://my.thanksdoc.co.uk/book/s/jespearl'
const LOGO_URL =
  'https://mlbkrchhogqb.i.optimole.com/w:1920/h:270/q:mauto/f:best///jpprivategp.co.uk/wp-content/uploads/2025/12/Jespearl-logo.png'
const HERO_IMAGE =
  'https://mlbkrchhogqb.i.optimole.com/w:1075/h:640/q:mauto/f:best/https://jpprivategp.co.uk/wp-content/uploads/2025/12/custom-img-04.jpg'
const SERVICES_IMAGE =
  'https://mlbkrchhogqb.i.optimole.com/w:1024/h:1008/q:mauto/f:best/https://jpprivategp.co.uk/wp-content/uploads/2025/12/mens-health.jpg'
const FEEDBACK_IMAGE =
  'https://mlbkrchhogqb.i.optimole.com/w:1024/h:559/q:mauto/f:best/https://jpprivategp.co.uk/wp-content/uploads/2025/12/feedback.jpg'
const TESTIMONIAL_1_IMG =
  'https://mlbkrchhogqb.i.optimole.com/w:130/h:130/q:mauto/f:best/dpr:2/https://jpprivategp.co.uk/wp-content/uploads/2025/10/testimonials-001-copyright.jpg'
const TESTIMONIAL_2_IMG =
  'https://mlbkrchhogqb.i.optimole.com/w:130/h:130/q:mauto/f:best/dpr:2/https://jpprivategp.co.uk/wp-content/uploads/2025/10/testimonials-002-copyright.jpg'

const SERVICES = [
  'Minor illnesses',
  'Children’s health',
  'Chest and respiratory infections',
  'Mental health',
  'Blood pressure and heart health',
  'Women’s Health',
  'Men’s Health',
]

const CONSULTATION_MODES = [
  {
    icon: MapPin,
    title: 'Based in Worcester',
    description:
      'Conveniently located in Worcester, offering calm, unhurried private medical care in a welcoming clinical setting.',
  },
  {
    icon: Phone,
    title: 'Telephone consultations',
    description:
      'Speak directly with an experienced private GP from wherever you are for prompt advice, prescriptions, and follow-ups.',
  },
  {
    icon: Stethoscope,
    title: 'Face-to-face consultations',
    description:
      'Unhurried in-person appointments where your doctor takes the time to listen, examine, and build a clear care plan.',
  },
  {
    icon: Home,
    title: 'Home visits',
    description:
      'Prefer to be seen at home? We provide discreet, attentive GP home visits across Worcester and surrounding areas.',
  },
]

const TESTIMONIALS = [
  {
    name: 'Morgan Smith',
    image: TESTIMONIAL_1_IMG,
    quote:
      'This was a very positive experience. The consultation was detailed and the advice given helped me manage my symptoms within days. The setting was tidy, organised, and welcoming.',
  },
  {
    name: 'Taylor Brooks',
    image: TESTIMONIAL_2_IMG,
    quote:
      'I booked at short notice and was impressed by how smoothly everything went. The doctor was patient, knowledgeable, and ready to answer every question. I left feeling supported and confident about the next steps.',
  },
]

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })

  const handleEnquirySubmit = (e) => {
    e.preventDefault()
    if (!agreed) return
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#1F2933]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          <a href="#" className="flex items-center shrink-0">
            <img
              src={LOGO_URL}
              alt="JesPearl Private GP Clinic"
              className="h-9 sm:h-11 w-auto object-contain"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#3E4C59]">
            <a href="#consultations" className="hover:text-[#1E4D3B] transition-colors">
              Consultations
            </a>
            <a href="#services" className="hover:text-[#1E4D3B] transition-colors">
              Services
            </a>
            <a href="#reviews" className="hover:text-[#1E4D3B] transition-colors">
              Reviews
            </a>
            <a href="#contact" className="hover:text-[#1E4D3B] transition-colors">
              Get Started
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1E4D3B] hover:bg-[#163A2C] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              Book Now
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#1E4D3B] hover:bg-[#E8F0EC]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#E5E7EB] bg-[#FAF9F6] px-4 py-4 space-y-3">
            <a
              href="#consultations"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#3E4C59] hover:text-[#1E4D3B]"
            >
              Consultations
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#3E4C59] hover:text-[#1E4D3B]"
            >
              Services
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#3E4C59] hover:text-[#1E4D3B]"
            >
              Reviews
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#3E4C59] hover:text-[#1E4D3B]"
            >
              Get Started
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#1E4D3B] text-white text-sm font-semibold px-5 py-3 rounded-full"
            >
              <Calendar className="w-4 h-4" />
              Book Now
            </a>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F0EC] text-[#1E4D3B] text-xs font-semibold tracking-wide uppercase">
                  <MapPin className="w-3.5 h-3.5" />
                  Worcester Private GP Clinic
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-[#1B4332] leading-[1.12] tracking-tight">
                  Same-day private GP appointments
                </h1>

                <p className="text-lg text-[#52606D] leading-relaxed max-w-xl">
                  JesPearl Private GP Clinic provides fast, reliable access to high-quality medical
                  care, without the long waits.
                </p>

                <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-[#1E4D3B]">
                  <span className="inline-flex items-center gap-1.5 bg-white border border-[#D8E6DF] px-3.5 py-1.5 rounded-full">
                    <Phone className="w-4 h-4" /> Telephone
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white border border-[#D8E6DF] px-3.5 py-1.5 rounded-full">
                    <Stethoscope className="w-4 h-4" /> Face-to-Face
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white border border-[#D8E6DF] px-3.5 py-1.5 rounded-full">
                    <Home className="w-4 h-4" /> At Home
                  </span>
                </div>

                {/* Consultation Hours Card */}
                <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm max-w-md space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-lg font-semibold text-[#1B4332]">
                        Your Private GP consultation
                      </h2>
                      <div className="mt-2 flex items-center gap-2 text-sm text-[#52606D]">
                        <Clock className="w-4 h-4 text-[#1E4D3B]" />
                        <span>Monday – Friday · 8:00AM — 8:00PM</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-1 flex flex-wrap gap-3">
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#1E4D3B] hover:bg-[#163A2C] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors"
                    >
                      Book Now
                    </a>
                    <a
                      href="#services"
                      className="inline-flex items-center justify-center gap-2 bg-[#E8F0EC] hover:bg-[#D8E6DF] text-[#1E4D3B] text-sm font-semibold px-6 py-3 rounded-full transition-colors"
                    >
                      Explore Services
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E5E7EB] bg-white">
                  <img
                    src={HERO_IMAGE}
                    alt="Private GP consultation at JesPearl Clinic"
                    className="w-full h-[360px] sm:h-[440px] lg:h-[500px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation Modes Section */}
        <section id="consultations" className="py-16 sm:py-20 bg-white border-y border-[#E5E7EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C89D54] mb-2">
                Personalised Primary Care
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1B4332]">
                Struggling to get a GP appointment?
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#52606D] leading-relaxed">
                We offer <strong className="text-[#1F2933]">personalised, holistic consultations</strong>{' '}
                delivered by an experienced private GP who takes the time to listen to you and
                understand your concerns.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CONSULTATION_MODES.map((mode) => {
                const Icon = mode.icon
                return (
                  <div
                    key={mode.title}
                    className="bg-[#FAF9F6] border border-[#E5E7EB] rounded-2xl p-6 flex flex-col justify-between hover:border-[#1E4D3B]/40 hover:shadow-md transition-all"
                  >
                    <div>
                      <div className="w-11 h-11 rounded-xl bg-[#E8F0EC] text-[#1E4D3B] flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-[#1B4332] mb-2">{mode.title}</h3>
                      <p className="text-sm text-[#52606D] leading-relaxed">{mode.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Services & Get Started Section */}
        <section id="services" className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#C89D54]">
                  Comprehensive Care
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#1B4332] leading-tight">
                  Our services cover the wide range of general practice, including:
                </h2>

                <ul className="grid sm:grid-cols-2 gap-3 pt-2">
                  {SERVICES.map((service) => (
                    <li
                      key={service}
                      className="flex items-center gap-3 bg-white border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm font-medium text-[#1F2933]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#1E4D3B] shrink-0" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#1E4D3B] hover:bg-[#163A2C] text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-colors shadow-sm"
                  >
                    <Calendar className="w-4 h-4" />
                    Book a Session
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-3xl overflow-hidden shadow-lg border border-[#E5E7EB] bg-white">
                  <img
                    src={SERVICES_IMAGE}
                    alt="General practice and men's and women's health services"
                    className="w-full h-[380px] sm:h-[460px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Trust Bar (replacing broken counters) */}
        <section className="py-12 bg-[#1B4332] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-bold font-serif-display text-[#E8F0EC]">
                  Same-Day
                </div>
                <p className="text-xs sm:text-sm text-[#D8E6DF]">Fast, reliable appointments</p>
              </div>
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-bold font-serif-display text-[#E8F0EC]">
                  8am – 8pm
                </div>
                <p className="text-xs sm:text-sm text-[#D8E6DF]">Monday to Friday availability</p>
              </div>
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-bold font-serif-display text-[#E8F0EC]">
                  3 Ways
                </div>
                <p className="text-xs sm:text-sm text-[#D8E6DF]">Telephone, Clinic, or Home Visit</p>
              </div>
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-bold font-serif-display text-[#E8F0EC]">
                  Holistic
                </div>
                <p className="text-xs sm:text-sm text-[#D8E6DF]">Unhurried, personalised GP care</p>
              </div>
            </div>
          </div>
        </section>

        {/* Feedback & Testimonials Section */}
        <section id="reviews" className="py-16 sm:py-20 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {/* Review Banner */}
            <div className="grid lg:grid-cols-12 gap-8 items-center bg-[#FAF9F6] border border-[#E5E7EB] rounded-3xl overflow-hidden">
              <div className="lg:col-span-6 h-64 sm:h-80 lg:h-full">
                <img
                  src={FEEDBACK_IMAGE}
                  alt="Patient feedback at JesPearl Private GP Clinic"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:col-span-6 p-8 sm:p-10 space-y-4">
                <div className="inline-flex items-center gap-1 text-[#C89D54]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1B4332]">
                  We look forward to your review of our services.
                </h2>
                <p className="text-[#52606D] text-sm sm:text-base leading-relaxed">
                  Patient trust is at the heart of everything we do. Your feedback helps us continue
                  delivering attentive, high-standard private GP care in Worcester.
                </p>
              </div>
            </div>

            {/* Testimonials */}
            <div>
              <div className="text-center max-w-2xl mx-auto mb-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#C89D54] mb-2">
                  Patient Stories
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#1B4332]">
                  Honest words from happy clients
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {TESTIMONIALS.map((item) => (
                  <div
                    key={item.name}
                    className="bg-[#FAF9F6] border border-[#E5E7EB] rounded-2xl p-8 flex flex-col justify-between space-y-6"
                  >
                    <p className="text-[#3E4C59] leading-relaxed italic">“{item.quote}”</p>
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-full object-cover border border-[#D8E6DF]"
                      />
                      <div>
                        <div className="font-semibold text-[#1B4332]">{item.name}</div>
                        <div className="text-xs text-[#52606D]">Verified Patient</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Get Started / Enquiry Section */}
        <section id="contact" className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-[#E5E7EB] rounded-3xl p-8 sm:p-12 shadow-sm">
              <div className="text-center max-w-xl mx-auto mb-8">
                <div className="inline-flex items-center gap-2 text-[#1E4D3B] text-xs font-semibold uppercase tracking-widest mb-2">
                  <HeartHandshake className="w-4 h-4" />
                  Get Started
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1B4332]">
                  We believe exceptional healthcare goes beyond treating symptoms.
                </h2>
                <p className="mt-3 text-sm sm:text-base text-[#52606D]">
                  Have a question before booking? Send us a message or book your appointment
                  directly online.
                </p>
              </div>

              {submitted ? (
                <div className="bg-[#E8F0EC] border border-[#D8E6DF] rounded-2xl p-6 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-[#1E4D3B] mx-auto" />
                  <h3 className="text-lg font-semibold text-[#1B4332]">Thank you for reaching out</h3>
                  <p className="text-sm text-[#3E4C59]">
                    We have received your enquiry and will be in touch shortly. For immediate
                    appointments, please use our{' '}
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-semibold text-[#1E4D3B]"
                    >
                      online booking portal
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E4D3B]"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E4D3B]"
                    />
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone Number (optional)"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E4D3B]"
                  />
                  <textarea
                    rows={3}
                    required
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E4D3B]"
                  />
                  <label className="flex items-start gap-2.5 text-xs sm:text-sm text-[#52606D] cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-1 rounded border-[#D1D5DB] text-[#1E4D3B] focus:ring-[#1E4D3B]"
                    />
                    <span>
                      I agree that my submitted data is being{' '}
                      <a
                        href="https://jpprivategp.co.uk/privacy-policy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-[#1E4D3B] hover:text-[#163A2C]"
                      >
                        collected and stored
                      </a>
                      .
                    </span>
                  </label>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center bg-[#1E4D3B] hover:bg-[#163A2C] text-white text-sm font-semibold px-7 py-3 rounded-full transition-colors cursor-pointer"
                    >
                      Send Enquiry
                    </button>
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[#1E4D3B] hover:underline"
                    >
                      Or book a consultation directly →
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1B4332] text-[#D8E6DF] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src={LOGO_URL}
              alt="JesPearl Private GP Clinic"
              className="h-9 w-auto brightness-0 invert"
            />
          </div>

          <div className="text-sm text-center md:text-left">
            JesPearl Private GP Clinic · Worcester · Mon – Fri, 8:00AM – 8:00PM
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a
              href="https://jpprivategp.co.uk/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              aria-label="Scroll to top"
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
              Top
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
