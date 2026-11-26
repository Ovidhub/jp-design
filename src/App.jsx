import React, { useState, useEffect } from 'react'
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
  HeartHandshake,
  ArrowRight,
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
  {
    name: 'Minor illnesses',
    desc: 'Prompt assessment and treatment for acute infections, fevers, earaches, UTIs, and everyday health concerns.',
  },
  {
    name: 'Children’s health',
    desc: 'Gentle, reassuring GP consultations for infants, children, and teenagers with same-day availability.',
  },
  {
    name: 'Chest and respiratory infections',
    desc: 'Thorough respiratory examinations, asthma reviews, and targeted treatment for coughs and chest infections.',
  },
  {
    name: 'Mental health',
    desc: 'Compassionate, confidential support for anxiety, stress, low mood, and sleep difficulties.',
  },
  {
    name: 'Blood pressure and heart health',
    desc: 'Cardiovascular risk assessments, blood pressure monitoring, and ongoing preventative management.',
  },
  {
    name: 'Women’s Health',
    desc: 'Dedicated consultations for hormonal health, menopause support, contraception, and general wellbeing.',
  },
  {
    name: 'Men’s Health',
    desc: 'Discreet, comprehensive men’s health checks, prostate advice, and preventative screening.',
  },
]

const CONSULTATION_MODES = [
  {
    icon: MapPin,
    title: 'Based in Worcester',
    image: HERO_IMAGE,
    description:
      'Conveniently located in Worcester, offering calm, unhurried private medical care in a welcoming clinical setting.',
  },
  {
    icon: Phone,
    title: 'Telephone consultations',
    image: FEEDBACK_IMAGE,
    description:
      'Speak directly with an experienced private GP from wherever you are for prompt advice, prescriptions, and follow-ups.',
  },
  {
    icon: Stethoscope,
    title: 'Face-to-face consultations',
    image: SERVICES_IMAGE,
    description:
      'Unhurried in-person appointments where your doctor takes the time to listen, examine, and build a clear care plan.',
  },
  {
    icon: Home,
    title: 'Home visits',
    image: HERO_IMAGE,
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
  const [currentPage, setCurrentPage] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage])

  const navigate = (page) => {
    setCurrentPage(page)
    setMobileMenuOpen(false)
  }

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
          <button
            type="button"
            onClick={() => navigate('home')}
            className="flex items-center shrink-0 cursor-pointer"
          >
            <img
              src={LOGO_URL}
              alt="JesPearl Private GP Clinic"
              className="h-9 sm:h-11 w-auto object-contain"
            />
          </button>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#3E4C59]">
            {[
              { id: 'home', label: 'Home' },
              { id: 'services', label: 'Services' },
              { id: 'about', label: 'About Us' },
              { id: 'contact', label: 'Contact' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => navigate(item.id)}
                className={`transition-colors cursor-pointer ${
                  currentPage === item.id
                    ? 'text-[#1E4D3B] font-semibold'
                    : 'hover:text-[#1E4D3B]'
                }`}
              >
                {item.label}
              </button>
            ))}
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

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#E5E7EB] bg-[#FAF9F6] px-4 py-4 space-y-2">
            {[
              { id: 'home', label: 'Home' },
              { id: 'services', label: 'Services' },
              { id: 'about', label: 'About Us' },
              { id: 'contact', label: 'Contact' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => navigate(item.id)}
                className="block w-full text-left py-2 text-base font-medium text-[#3E4C59] hover:text-[#1E4D3B]"
              >
                {item.label}
              </button>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#1E4D3B] text-white text-sm font-semibold px-5 py-3 rounded-full mt-2"
            >
              <Calendar className="w-4 h-4" />
              Book Now
            </a>
          </div>
        )}
      </header>

      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            {/* Hero Section */}
            <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                  <div className="lg:col-span-6 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F0EC] text-[#1E4D3B] text-xs font-semibold tracking-wide uppercase">
                      <MapPin className="w-3.5 h-3.5" />
                      Worcester Private GP Clinic
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-[3.35rem] font-bold text-[#1B4332] leading-[1.12] tracking-tight">
                      Same-day private GP appointments
                    </h1>

                    <p className="text-lg text-[#52606D] leading-relaxed max-w-xl">
                      JesPearl Private GP Clinic provides fast, reliable access to high-quality
                      medical care, without the long waits.
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

                    <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm max-w-md space-y-4">
                      <div>
                        <h2 className="text-lg font-semibold text-[#1B4332]">
                          Your Private GP consultation
                        </h2>
                        <div className="mt-2 flex items-center gap-2 text-sm text-[#52606D]">
                          <Clock className="w-4 h-4 text-[#1E4D3B]" />
                          <span>Monday – Friday · 8:00AM — 8:00PM</span>
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
                        <button
                          type="button"
                          onClick={() => navigate('services')}
                          className="inline-flex items-center justify-center gap-2 bg-[#E8F0EC] hover:bg-[#D8E6DF] text-[#1E4D3B] text-sm font-semibold px-6 py-3 rounded-full transition-colors cursor-pointer"
                        >
                          Explore Services
                        </button>
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

            {/* Struggling to get a GP appointment? (with Images + Worcester Map) */}
            <section id="consultations" className="py-16 sm:py-20 bg-white border-y border-[#E5E7EB]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#C89D54] mb-2">
                    Personalised Primary Care
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#1B4332]">
                    Struggling to get a GP appointment?
                  </h2>
                  <p className="mt-4 text-base sm:text-lg text-[#52606D] leading-relaxed">
                    We offer{' '}
                    <strong className="text-[#1F2933]">
                      personalised, holistic consultations
                    </strong>{' '}
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
                        className="bg-[#FAF9F6] border border-[#E5E7EB] rounded-2xl overflow-hidden flex flex-col hover:border-[#1E4D3B]/40 hover:shadow-md transition-all"
                      >
                        <div className="h-40 w-full overflow-hidden">
                          <img
                            src={mode.image}
                            alt={mode.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="w-10 h-10 rounded-xl bg-[#E8F0EC] text-[#1E4D3B] flex items-center justify-center mb-3">
                            <Icon className="w-5 h-5" />
                          </div>
                          <h3 className="text-lg font-semibold text-[#1B4332] mb-2">
                            {mode.title}
                          </h3>
                          <p className="text-sm text-[#52606D] leading-relaxed">
                            {mode.description}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Worcester Map */}
                <div className="bg-[#FAF9F6] border border-[#E5E7EB] rounded-3xl overflow-hidden grid lg:grid-cols-12 items-center">
                  <div className="lg:col-span-5 p-8 sm:p-10 space-y-4">
                    <div className="inline-flex items-center gap-2 text-[#1E4D3B] text-xs font-semibold uppercase tracking-widest">
                      <MapPin className="w-4 h-4" />
                      Our Location
                    </div>
                    <h3 className="text-2xl font-bold text-[#1B4332]">
                      Conveniently Based in Worcester
                    </h3>
                    <p className="text-sm sm:text-base text-[#52606D] leading-relaxed">
                      Visit us in Worcester for face-to-face consultations, or book a telephone
                      appointment or home visit across the surrounding area.
                    </p>
                    <div className="pt-2">
                      <a
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E4D3B] hover:underline"
                      >
                        Book an appointment <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  <div className="lg:col-span-7 h-72 sm:h-80 lg:h-96 w-full">
                    <iframe
                      title="JesPearl Private GP Clinic Worcester Map"
                      src="https://www.google.com/maps?q=Worcester,UK&output=embed"
                      className="w-full h-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Services Section */}
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
                          key={service.name}
                          className="flex items-center gap-3 bg-white border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm font-medium text-[#1F2933]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#1E4D3B] shrink-0" />
                          <span>{service.name}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-2 flex flex-wrap gap-3">
                      <a
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#1E4D3B] hover:bg-[#163A2C] text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-colors shadow-sm"
                      >
                        <Calendar className="w-4 h-4" />
                        Book a Session
                      </a>
                      <button
                        type="button"
                        onClick={() => navigate('services')}
                        className="inline-flex items-center gap-2 bg-white border border-[#D8E6DF] hover:bg-[#E8F0EC] text-[#1E4D3B] text-sm font-semibold px-6 py-3.5 rounded-full transition-colors cursor-pointer"
                      >
                        View All Services
                      </button>
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

            {/* Clinical Trust Bar */}
            <section className="py-12 bg-[#1B4332] text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                  <div className="space-y-1">
                    <div className="text-3xl sm:text-4xl font-bold text-[#E8F0EC]">Same-Day</div>
                    <p className="text-xs sm:text-sm text-[#D8E6DF]">Fast, reliable appointments</p>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl sm:text-4xl font-bold text-[#E8F0EC]">8am – 8pm</div>
                    <p className="text-xs sm:text-sm text-[#D8E6DF]">
                      Monday to Friday availability
                    </p>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl sm:text-4xl font-bold text-[#E8F0EC]">3 Ways</div>
                    <p className="text-xs sm:text-sm text-[#D8E6DF]">
                      Telephone, Clinic, or Home Visit
                    </p>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl sm:text-4xl font-bold text-[#E8F0EC]">Holistic</div>
                    <p className="text-xs sm:text-sm text-[#D8E6DF]">
                      Unhurried, personalised GP care
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Feedback & Testimonials */}
            <section id="reviews" className="py-16 sm:py-20 bg-white border-b border-[#E5E7EB]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
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
                      Patient trust is at the heart of everything we do. Your feedback helps us
                      continue delivering attentive, high-standard private GP care in Worcester.
                    </p>
                  </div>
                </div>

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

            {/* Get Started / Enquiry */}
            <section className="py-16 sm:py-20">
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
                      <h3 className="text-lg font-semibold text-[#1B4332]">
                        Thank you for reaching out
                      </h3>
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
                          <button
                            type="button"
                            onClick={() => navigate('privacy')}
                            className="underline text-[#1E4D3B] hover:text-[#163A2C] cursor-pointer"
                          >
                            collected and stored
                          </button>
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
          </>
        )}

        {/* Services Page */}
        {currentPage === 'services' && (
          <section className="py-16 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#C89D54] mb-2">
                  Our Services
                </p>
                <h1 className="text-4xl font-bold text-[#1B4332]">
                  Comprehensive General Practice Care
                </h1>
                <p className="mt-4 text-lg text-[#52606D]">
                  From acute minor illnesses to ongoing health management, we provide unhurried,
                  personalised consultations tailored to your needs.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SERVICES.map((service) => (
                  <div
                    key={service.name}
                    className="bg-white border border-[#E5E7EB] rounded-2xl p-6 space-y-3 hover:border-[#1E4D3B]/40 transition-colors"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#1E4D3B]" />
                    <h2 className="text-xl font-semibold text-[#1B4332]">{service.name}</h2>
                    <p className="text-sm text-[#52606D] leading-relaxed">{service.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[#1B4332] text-white rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-bold">Ready to book your consultation?</h2>
                  <p className="text-[#D8E6DF] mt-1">
                    Same-day appointments available Monday – Friday, 8:00AM – 8:00PM.
                  </p>
                </div>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-[#1B4332] font-semibold px-7 py-3.5 rounded-full hover:bg-[#E8F0EC] transition-colors shrink-0"
                >
                  <Calendar className="w-4 h-4" />
                  Book Now
                </a>
              </div>
            </div>
          </section>
        )}

        {/* About Page */}
        {currentPage === 'about' && (
          <section className="py-16 sm:py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#C89D54]">
                    About Us
                  </p>
                  <h1 className="text-4xl font-bold text-[#1B4332]">JesPearl Private GP Clinic</h1>
                  <p className="text-[#52606D] leading-relaxed">
                    Based in Worcester, JesPearl Private GP Clinic was established to give patients
                    fast, reliable access to an experienced GP without long waiting times.
                  </p>
                  <p className="text-[#52606D] leading-relaxed">
                    We believe exceptional healthcare goes beyond treating symptoms. Every
                    consultation—whether by telephone, face-to-face in our clinic, or via a home
                    visit—is unhurried, thorough, and centred around your wellbeing.
                  </p>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-lg border border-[#E5E7EB]">
                  <img
                    src={HERO_IMAGE}
                    alt="JesPearl Private GP Clinic"
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Contact Page */}
        {currentPage === 'contact' && (
          <section className="py-16 sm:py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#C89D54] mb-2">
                  Contact Us
                </p>
                <h1 className="text-4xl font-bold text-[#1B4332]">Get in Touch</h1>
                <p className="mt-3 text-[#52606D]">
                  Open Monday – Friday, 8:00AM – 8:00PM in Worcester. Book online or send us an
                  enquiry below.
                </p>
              </div>

              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-5 space-y-6 bg-white border border-[#E5E7EB] rounded-3xl p-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#1E4D3B] mt-0.5" />
                    <div>
                      <h2 className="font-semibold text-[#1B4332]">Location</h2>
                      <p className="text-sm text-[#52606D]">Worcester, United Kingdom</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#1E4D3B] mt-0.5" />
                    <div>
                      <h2 className="font-semibold text-[#1B4332]">Opening Hours</h2>
                      <p className="text-sm text-[#52606D]">Monday – Friday: 8:00AM – 8:00PM</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#1E4D3B] text-white text-sm font-semibold px-6 py-3 rounded-full"
                    >
                      <Calendar className="w-4 h-4" />
                      Book Online
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#E5E7EB] h-80 lg:h-auto min-h-[320px]">
                  <iframe
                    title="Worcester Location Map"
                    src="https://www.google.com/maps?q=Worcester,UK&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Privacy Policy Page */}
        {currentPage === 'privacy' && (
          <section className="py-16 sm:py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 bg-white border border-[#E5E7EB] rounded-3xl p-8 sm:p-12">
              <h1 className="text-3xl font-bold text-[#1B4332]">Privacy Policy</h1>
              <p className="text-sm text-[#52606D] leading-relaxed">
                JesPearl Private GP Clinic is committed to protecting and respecting your privacy
                in accordance with UK GDPR and the Data Protection Act 2018.
              </p>
              <h2 className="text-lg font-semibold text-[#1B4332]">Information We Collect</h2>
              <p className="text-sm text-[#52606D] leading-relaxed">
                We collect personal and clinical information necessary to provide safe, effective
                private GP consultations, manage appointments, and respond to your enquiries.
              </p>
              <h2 className="text-lg font-semibold text-[#1B4332]">How We Use Your Data</h2>
              <p className="text-sm text-[#52606D] leading-relaxed">
                Your data is used strictly for delivering medical care, communicating with you
                regarding your appointments, and fulfilling legal and regulatory obligations. We
                never sell your personal information to third parties.
              </p>
            </div>
          </section>
        )}

        {/* Terms & Conditions Page */}
        {currentPage === 'terms' && (
          <section className="py-16 sm:py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 bg-white border border-[#E5E7EB] rounded-3xl p-8 sm:p-12">
              <h1 className="text-3xl font-bold text-[#1B4332]">Terms & Conditions</h1>
              <p className="text-sm text-[#52606D] leading-relaxed">
                By booking an appointment or using the services of JesPearl Private GP Clinic, you
                agree to the following terms and conditions.
              </p>
              <h2 className="text-lg font-semibold text-[#1B4332]">Appointments & Cancellations</h2>
              <p className="text-sm text-[#52606D] leading-relaxed">
                Appointments are available Monday to Friday, 8:00AM – 8:00PM. Please provide
                reasonable notice if you need to reschedule or cancel your consultation.
              </p>
              <h2 className="text-lg font-semibold text-[#1B4332]">Medical Emergencies</h2>
              <p className="text-sm text-[#52606D] leading-relaxed">
                JesPearl Private GP Clinic is not an emergency service. In the event of a
                life-threatening medical emergency, please call 999 or attend your nearest A&E
                department immediately.
              </p>
            </div>
          </section>
        )}
      </main>

      {/* Footer with Quick Links & Terms and Conditions */}
      <footer className="bg-[#1B4332] text-[#D8E6DF] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/15">
            <div className="space-y-4">
              <img
                src={LOGO_URL}
                alt="JesPearl Private GP Clinic"
                className="h-9 w-auto brightness-0 invert"
              />
              <p className="text-sm text-[#D8E6DF]/90 leading-relaxed">
                Fast, reliable access to high-quality private GP care in Worcester.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button
                    type="button"
                    onClick={() => navigate('home')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => navigate('services')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => navigate('about')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => navigate('contact')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Book Now
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
                Legal
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button
                    type="button"
                    onClick={() => navigate('terms')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Terms & Conditions
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => navigate('privacy')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
                Clinic Hours
              </h3>
              <p className="text-sm">Worcester, UK</p>
              <p className="text-sm mt-1">Monday – Friday</p>
              <p className="text-sm">8:00AM — 8:00PM</p>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8E6DF]/80">
            <p>© {new Date().getFullYear()} JesPearl Private GP Clinic. All rights reserved.</p>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
              Back to top
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
