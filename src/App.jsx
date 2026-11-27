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
  ChevronDown,
  ShieldCheck,
  MessageCircle,
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

const SERVICE_CATEGORIES = [
  {
    title: 'General GP Services',
    items: [
      'Full GP consultations (in-person / online)',
      'Acute illness management (e.g., Urine or chest infections, minor ailments)',
      'Chronic disease management (e.g., hypertension, diabetes, Obesity)',
      'Medication reviews and prescribing',
      'Repeat prescriptions',
      'Sick notes / letters / referrals',
      'Second opinions',
    ],
  },
  {
    title: 'Children’s Health (Paediatrics)',
    items: ['Common childhood illness assessment'],
  },
  {
    title: 'Mental Health',
    items: [
      'Anxiety and depression assessment',
      'Stress and burnout management',
      'Supportive counselling',
      'Medication management for common mental health conditions',
    ],
  },
  {
    title: 'Health Screening & Preventive Care',
    items: [
      'Full health checks (basic, advanced, executive)',
      'Cardiovascular risk assessment',
      'Diabetes screening',
      'Cancer screening (e.g., PSA, bowel tests)',
      'Well-man and well-woman checks',
      'Lifestyle and wellbeing assessments',
    ],
  },
  {
    title: 'Women’s Health',
    items: [
      'Cervical smears',
      'Contraception advice and prescriptions',
      'Menopause and perimenopause care',
      'Hormone replacement therapy (HRT)',
      'Breast health assessments',
      'Fertility and pre-conception advice',
      'Period and PMS management',
    ],
  },
  {
    title: 'Men’s Health',
    items: [
      'Prostate assessment and PSA testing',
      'Erectile dysfunction management',
      'Testosterone and hormonal assessments',
      'Weight and metabolic health checks',
    ],
  },
  {
    title: 'Sexual Health Services',
    items: ['Contraceptive counselling', 'Pregnancy testing & early pregnancy advice'],
  },
  {
    title: 'Diagnostic Testing',
    items: [
      'Blood tests (routine and specialised)',
      'ECGs',
      'Urine testing',
      'Swabs, cultures, viral screens',
      'Imaging referrals (X-ray, ultrasound, MRI, CT)',
    ],
  },
]

const HEALTH_CALCULATORS = [
  {
    name: 'Heart age calculator',
    url: 'https://www.bhf.org.uk/informationsupport/risk-factors/check-your-heart-age',
  },
  { name: 'QDiabetes Score', url: 'https://qdiabetes.org/' },
  {
    name: 'BMI Calculator',
    url: 'https://extras.bhf.org.uk/patientinfo/bmi-v1.01/app/index.html',
  },
  {
    name: 'Body fat percentage calculator',
    url: 'https://www.bhf.org.uk/informationsupport/heart-matters-magazine/nutrition/weight/best-way-to-measure-body-fat',
  },
  {
    name: 'Osteoporosis (Thinning of the Bone) risk calculator',
    url: 'https://qfracture.org/',
  },
]

const GP_CONSULTATION_PRICES = [
  {
    title: 'Video Consultation',
    price: '£79',
    desc: 'Remote GP consultation via secure video for convenience and follow-up care.',
  },
  {
    title: 'GP Face-to-Face Appointment',
    price: '£90',
    desc: 'In-person consultation for diagnosis, and management plan.',
  },
  {
    title: 'Home Visit (9:00am–5:00pm)',
    price: '£250',
    desc: 'GP visit in your own home, suitable for patients unable to attend the clinic.',
  },
  {
    title: 'GP Home Visit (5:00pm–8:00pm)',
    price: '£350',
    desc: 'Urgent GP home visit outside standard working hours. Suitable for non-emergency medical problems.',
  },
  {
    title: 'Private Referral for Blood tests, Scans, & Xrays',
    price: null,
    desc: 'Direct GP Referral for MRI, CT- scans, USS (ultrasound scans), X-rays and blood tests. Require GP assessment and appropriate diagnostic referral.',
  },
]

const MEDICAL_LETTERS_PRICES = [
  {
    title: 'Sick Note with Telephone Consultation',
    price: '£75',
    desc: 'Telephone assessment with certification when medically justified.',
  },
  {
    title: 'Private Prescription',
    price: '£25',
    desc: 'Issue of a private prescription. May require GP consultation.',
  },
  {
    title: 'Private Referral to Specialists',
    price: '£75',
    desc: 'Written referral to another healthcare provider following GP review.',
  },
]

const DIAGNOSTICS_ITEMS = [
  {
    title: 'Electrocardiogram (ECG)',
    desc: 'Heart rhythm assessment using a standard 12-lead ECG.',
  },
  {
    title: 'Baseline Health Screen',
    desc: 'FBC, kidney, liver, bone profile, cholesterol, thyroid function, and HbA1c.',
  },
  {
    title: 'Hair Loss Screen',
    desc: 'Assessment of common medical causes of hair loss, including nutritional, hormonal, and inflammatory markers. Results available within 24 hours.',
  },
  {
    title: 'Pregnancy Blood and Urine Test',
    desc: 'Laboratory confirmation of pregnancy status.',
  },
  {
    title: 'Cholesterol Profile',
    desc: 'Assessment of cardiovascular risk through lipid testing.',
  },
  {
    title: 'Thyroid Blood Test',
    desc: 'Evaluation of thyroid function and related symptoms.',
  },
  {
    title: 'Urine Dip Test',
    desc: 'Immediate screening for urinary tract infection.',
  },
]

const CULTURES_ITEMS = [
  {
    title: 'Urine Culture (MCS)',
    desc: 'Laboratory analysis to identify urinary infections and antibiotic sensitivity.',
  },
  {
    title: 'Stool PCR',
    desc: 'Advanced testing to detect bacterial, viral, and parasitic causes of diarrhoea.',
  },
  {
    title: 'Sputum Culture',
    desc: 'Identification of respiratory infections through laboratory culture.',
  },
]

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
    isMap: true,
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

const FAQS = [
  {
    q: 'Do I need to be registered with an NHS GP to book?',
    a: 'No. You do not need to leave your NHS GP to use our private GP service. You can book a one-off or ongoing consultation with us whenever you need fast access to a doctor.',
  },
  {
    q: 'How quickly can I get an appointment?',
    a: 'We offer same-day and next-day appointments Monday to Friday between 8:00AM and 8:00PM, subject to availability.',
  },
  {
    q: 'Can you issue private prescriptions and fit notes?',
    a: 'Yes. Where clinically appropriate, our GP can issue private prescriptions, sick/fit notes, and referral letters to specialists.',
  },
  {
    q: 'Do you offer home visits in Worcester?',
    a: 'Yes. If you are unable to travel to the clinic or prefer to be seen at home, we offer discreet GP home visits across Worcester and nearby areas.',
  },
  {
    q: 'Is JesPearl Private GP Clinic an emergency service?',
    a: 'No. We are not an emergency or out-of-hours urgent care service. For life-threatening emergencies, please call 999 or attend your nearest A&E. For urgent NHS medical advice, call 111.',
  },
]

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const [cookieDismissed, setCookieDismissed] = useState(false)
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
                    ? 'text-[#4E7A69] font-semibold'
                    : 'hover:text-[#4E7A69]'
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
              className="inline-flex items-center gap-2 bg-[#4E7A69] hover:bg-[#35584A] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              Book Now
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#4E7A69] hover:bg-[#EAF2EE]"
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
                className="block w-full text-left py-2 text-base font-medium text-[#3E4C59] hover:text-[#4E7A69]"
              >
                {item.label}
              </button>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#4E7A69] text-white text-sm font-semibold px-5 py-3 rounded-full mt-2"
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
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF2EE] text-[#4E7A69] text-xs font-semibold tracking-wide uppercase">
                      <MapPin className="w-3.5 h-3.5" />
                      Worcester Private GP Clinic
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-[3.35rem] font-bold text-[#3D6354] leading-[1.12] tracking-tight">
                      Same-day private GP appointments
                    </h1>

                    <p className="text-lg text-[#52606D] leading-relaxed max-w-xl">
                      JesPearl Private GP Clinic provides fast, reliable access to high-quality
                      medical care, without the long waits.
                    </p>

                    <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-[#4E7A69]">
                      <span className="inline-flex items-center gap-1.5 bg-white border border-[#D2E2DA] px-3.5 py-1.5 rounded-full">
                        <Phone className="w-4 h-4" /> Telephone
                      </span>
                      <span className="inline-flex items-center gap-1.5 bg-white border border-[#D2E2DA] px-3.5 py-1.5 rounded-full">
                        <Stethoscope className="w-4 h-4" /> Face-to-Face
                      </span>
                      <span className="inline-flex items-center gap-1.5 bg-white border border-[#D2E2DA] px-3.5 py-1.5 rounded-full">
                        <Home className="w-4 h-4" /> At Home
                      </span>
                    </div>

                    <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm max-w-md space-y-4">
                      <div>
                        <h2 className="text-lg font-semibold text-[#3D6354]">
                          Your Private GP consultation
                        </h2>
                        <div className="mt-2 flex items-center gap-2 text-sm text-[#52606D]">
                          <Clock className="w-4 h-4 text-[#4E7A69]" />
                          <span>Monday – Friday · 8:00AM — 8:00PM</span>
                        </div>
                      </div>
                      <div className="pt-1 flex flex-wrap gap-3">
                        <a
                          href={BOOKING_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-[#4E7A69] hover:bg-[#35584A] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors"
                        >
                          Book Now
                        </a>
                        <button
                          type="button"
                          onClick={() => navigate('services')}
                          className="inline-flex items-center justify-center gap-2 bg-[#EAF2EE] hover:bg-[#D2E2DA] text-[#4E7A69] text-sm font-semibold px-6 py-3 rounded-full transition-colors cursor-pointer"
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

            {/* Struggling to get a GP appointment? (Map inside "Based in Worcester" card, images on others) */}
            <section id="consultations" className="py-16 sm:py-20 bg-white border-y border-[#E5E7EB]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#E08E6D] mb-2">
                    Personalised Primary Care
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#3D6354]">
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
                        className="bg-[#FAF9F6] border border-[#E5E7EB] rounded-2xl overflow-hidden flex flex-col hover:border-[#4E7A69]/40 hover:shadow-md transition-all"
                      >
                        <div className="h-44 w-full overflow-hidden">
                          {mode.isMap ? (
                            <iframe
                              title="Worcester Location Map"
                              src="https://www.google.com/maps?q=Worcester,UK&output=embed"
                              className="w-full h-full border-0"
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                            />
                          ) : (
                            <img
                              src={mode.image}
                              alt={mode.title}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="w-10 h-10 rounded-xl bg-[#EAF2EE] text-[#4E7A69] flex items-center justify-center mb-3">
                            <Icon className="w-5 h-5" />
                          </div>
                          <h3 className="text-lg font-semibold text-[#3D6354] mb-2">
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
              </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-16 sm:py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-6 space-y-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#E08E6D]">
                      Comprehensive Care
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#3D6354] leading-tight">
                      Our services cover the wide range of general practice, including:
                    </h2>

                    <ul className="grid sm:grid-cols-2 gap-3 pt-2">
                      {SERVICES.map((service) => (
                        <li
                          key={service.name}
                          className="flex items-center gap-3 bg-white border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm font-medium text-[#1F2933]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#4E7A69] shrink-0" />
                          <span>{service.name}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-2 flex flex-wrap gap-3">
                      <a
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#4E7A69] hover:bg-[#35584A] text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-colors shadow-sm"
                      >
                        <Calendar className="w-4 h-4" />
                        Book a Session
                      </a>
                      <button
                        type="button"
                        onClick={() => navigate('services')}
                        className="inline-flex items-center gap-2 bg-white border border-[#D2E2DA] hover:bg-[#EAF2EE] text-[#4E7A69] text-sm font-semibold px-6 py-3.5 rounded-full transition-colors cursor-pointer"
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
            <section className="py-12 bg-[#3D6354] text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                  <div className="space-y-1">
                    <div className="text-3xl sm:text-4xl font-bold text-[#EAF2EE]">Same-Day</div>
                    <p className="text-xs sm:text-sm text-[#D2E2DA]">Fast, reliable appointments</p>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl sm:text-4xl font-bold text-[#EAF2EE]">8am – 8pm</div>
                    <p className="text-xs sm:text-sm text-[#D2E2DA]">
                      Monday to Friday availability
                    </p>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl sm:text-4xl font-bold text-[#EAF2EE]">3 Ways</div>
                    <p className="text-xs sm:text-sm text-[#D2E2DA]">
                      Telephone, Clinic, or Home Visit
                    </p>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl sm:text-4xl font-bold text-[#EAF2EE]">Holistic</div>
                    <p className="text-xs sm:text-sm text-[#D2E2DA]">
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
                    <div className="inline-flex items-center gap-1 text-[#E08E6D]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#3D6354]">
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
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#E08E6D] mb-2">
                      Patient Stories
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#3D6354]">
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
                            className="w-12 h-12 rounded-full object-cover border border-[#D2E2DA]"
                          />
                          <div>
                            <div className="font-semibold text-[#3D6354]">{item.name}</div>
                            <div className="text-xs text-[#52606D]">Verified Patient</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-16 sm:py-20 bg-[#FAF9F6] border-b border-[#E5E7EB]">
              <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#E08E6D] mb-2">
                    Frequently Asked Questions
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#3D6354]">
                    Common questions about our clinic
                  </h2>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq, idx) => {
                    const isOpen = openFaq === idx
                    return (
                      <div
                        key={faq.q}
                        className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-semibold text-[#3D6354] cursor-pointer"
                        >
                          <span>{faq.q}</span>
                          <ChevronDown
                            className={`w-5 h-5 text-[#4E7A69] shrink-0 transition-transform ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-5 text-sm text-[#52606D] leading-relaxed">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </section>

            {/* Get Started / Enquiry */}
            <section className="py-16 sm:py-20">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white border border-[#E5E7EB] rounded-3xl p-8 sm:p-12 shadow-sm">
                  <div className="text-center max-w-xl mx-auto mb-8">
                    <div className="inline-flex items-center gap-2 text-[#4E7A69] text-xs font-semibold uppercase tracking-widest mb-2">
                      <HeartHandshake className="w-4 h-4" />
                      Get Started
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#3D6354]">
                      We believe exceptional healthcare goes beyond treating symptoms.
                    </h2>
                    <p className="mt-3 text-sm sm:text-base text-[#52606D]">
                      Have a question before booking? Send us a message or book your appointment
                      directly online.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="bg-[#EAF2EE] border border-[#D2E2DA] rounded-2xl p-6 text-center space-y-2">
                      <CheckCircle2 className="w-8 h-8 text-[#4E7A69] mx-auto" />
                      <h3 className="text-lg font-semibold text-[#3D6354]">
                        Thank you for reaching out
                      </h3>
                      <p className="text-sm text-[#3E4C59]">
                        We have received your enquiry and will be in touch shortly. For immediate
                        appointments, please use our{' '}
                        <a
                          href={BOOKING_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline font-semibold text-[#4E7A69]"
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
                          className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#4E7A69]"
                        />
                        <input
                          type="email"
                          required
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#4E7A69]"
                        />
                      </div>
                      <input
                        type="tel"
                        placeholder="Phone Number (optional)"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#4E7A69]"
                      />
                      <textarea
                        rows={3}
                        required
                        placeholder="How can we help you?"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#4E7A69]"
                      />
                      <label className="flex items-start gap-2.5 text-xs sm:text-sm text-[#52606D] cursor-pointer">
                        <input
                          type="checkbox"
                          required
                          checked={agreed}
                          onChange={(e) => setAgreed(e.target.checked)}
                          className="mt-1 rounded border-[#D1D5DB] text-[#4E7A69] focus:ring-[#4E7A69]"
                        />
                        <span>
                          I agree that my submitted data is being{' '}
                          <button
                            type="button"
                            onClick={() => navigate('privacy')}
                            className="underline text-[#4E7A69] hover:text-[#35584A] cursor-pointer"
                          >
                            collected and stored
                          </button>{' '}
                          in accordance with UK GDPR.
                        </span>
                      </label>

                      <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center bg-[#4E7A69] hover:bg-[#35584A] text-white text-sm font-semibold px-7 py-3 rounded-full transition-colors cursor-pointer"
                        >
                          Send Enquiry
                        </button>
                        <a
                          href={BOOKING_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-[#4E7A69] hover:underline"
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

        {/* Services & Fees Page */}
        {currentPage === 'services' && (
          <div className="py-16 sm:py-20 space-y-20">
            {/* Hero */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#E08E6D] mb-2">
                  JesPearl Private GP Clinic
                </p>
                <h1 className="text-4xl sm:text-5xl font-bold text-[#3D6354]">
                  Our Services and Fees
                </h1>
                <p className="mt-4 text-lg text-[#52606D] leading-relaxed">
                  A comprehensive range of private GP, cardiology, and diagnostic services, offering
                  timely access to care with clear and upfront pricing.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {SERVICE_CATEGORIES.map((cat) => (
                  <div
                    key={cat.title}
                    className="bg-white border border-[#E5E7EB] rounded-2xl p-6 flex flex-col justify-between space-y-5 hover:border-[#4E7A69]/40 transition-colors"
                  >
                    <div className="space-y-3">
                      <h2 className="text-lg font-bold text-[#3D6354]">{cat.title}</h2>
                      <ul className="space-y-2 text-sm text-[#52606D]">
                        {cat.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#4E7A69] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button
                      type="button"
                      onClick={() => navigate('about')}
                      className="text-sm font-semibold text-[#4E7A69] hover:underline text-left cursor-pointer"
                    >
                      Learn More →
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Corporate Healthcare Service */}
            <section className="bg-white border-y border-[#E5E7EB] py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#E08E6D]">
                    For Organisations
                  </p>
                  <h2 className="text-3xl font-bold text-[#3D6354]">
                    Corporate Healthcare Service
                  </h2>
                  <p className="text-[#52606D] leading-relaxed">
                    We partner with Companies and Organisations to support a healthier, more
                    resilient workforce. Our corporate services provide rapid access to high-quality
                    medical care, helping employees stay well, minimise time off work, and maintain
                    peak performance.
                  </p>
                  <p className="text-[#52606D] leading-relaxed">
                    We deliver bespoke healthcare solutions that remove barriers to timely medical
                    care—offering fast GP access, efficient referrals, prescription support, and
                    tailored health advice.
                  </p>
                  <p className="text-sm font-semibold text-[#3D6354] pt-2">
                    By prioritising employee wellbeing, we help employers achieve:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-2.5 text-sm text-[#3E4C59]">
                    {[
                      'Reduced sickness absence',
                      'Improved productivity and workplace performance',
                      'Enhanced staff retention and morale',
                      'Greater organisational resilience and continuity',
                    ].map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#4E7A69] shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-[#52606D] italic pt-2">
                    Our goal is to give you confidence that your team’s health is in expert hands,
                    supporting a workplace where people feel well, stay well and work well.
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <div className="rounded-3xl overflow-hidden shadow-md border border-[#E5E7EB]">
                    <img
                      src={SERVICES_IMAGE}
                      alt="Corporate Healthcare Service"
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Resources */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              <div className="max-w-3xl space-y-3">
                <h2 className="text-3xl font-bold text-[#3D6354]">Resources</h2>
                <p className="text-sm sm:text-base text-[#52606D] leading-relaxed">
                  These calculators offer a simple way to understand potential health risks and
                  overall well-being. They provide general estimates based on the information you
                  enter and are intended to support awareness rather than replace medical advice.
                  For accurate interpretation and personalised guidance, a consultation with a GP is
                  recommended.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {HEALTH_CALCULATORS.map((calc) => (
                  <a
                    key={calc.name}
                    href={calc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border border-[#E5E7EB] hover:border-[#4E7A69] rounded-xl px-5 py-4 text-sm font-semibold text-[#3D6354] flex items-center justify-between transition-colors"
                  >
                    <span>{calc.name}</span>
                    <span className="text-[#4E7A69]">↗</span>
                  </a>
                ))}
              </div>
            </section>

            {/* Prices */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <div className="max-w-3xl space-y-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#E08E6D]">
                  Clear & Upfront Pricing
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#3D6354]">Prices</h2>
                <p className="text-[#52606D]">
                  Our fees reflect private GP and specialist services delivered promptly and
                  professionally. All prices are inclusive of consultation time and clinical
                  assessment. Additional tests, prescriptions, referrals, or treatments are charged
                  separately where applicable. Fees are payable at the time of booking unless
                  otherwise stated.
                </p>
              </div>

              {/* GP Consultations */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#3D6354]">GP Consultations</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {GP_CONSULTATION_PRICES.map((item) => (
                    <div
                      key={item.title}
                      className="bg-white border border-[#E5E7EB] rounded-2xl p-6 space-y-2"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="font-semibold text-[#3D6354]">{item.title}</h4>
                        {item.price && (
                          <span className="text-lg font-bold text-[#4E7A69] shrink-0">
                            {item.price}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-[#52606D]">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* GP Specialist Cardiology Clinic */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#3D6354]">
                  GP Specialist Cardiology Clinic
                </h3>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 space-y-2">
                    <h4 className="font-semibold text-[#3D6354]">
                      Telephone Cardiology Consultation
                    </h4>
                    <p className="text-sm text-[#52606D]">
                      Remote specialist review, advice, and management planning.
                    </p>
                  </div>
                  <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 space-y-2">
                    <h4 className="font-semibold text-[#3D6354]">
                      Face-to-Face Cardiology Consultation
                    </h4>
                    <p className="text-sm text-[#52606D]">
                      Comprehensive heart assessment with specialist recommendations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Medical Letters and Prescriptions */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#3D6354]">
                  Medical Letters and Prescriptions
                </h3>
                <div className="grid md:grid-cols-3 gap-5">
                  {MEDICAL_LETTERS_PRICES.map((item) => (
                    <div
                      key={item.title}
                      className="bg-white border border-[#E5E7EB] rounded-2xl p-6 space-y-2"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="font-semibold text-[#3D6354]">{item.title}</h4>
                        <span className="text-lg font-bold text-[#4E7A69] shrink-0">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-sm text-[#52606D]">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Diagnostics and Screening */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#3D6354]">Diagnostics and Screening</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {DIAGNOSTICS_ITEMS.map((item) => (
                    <div
                      key={item.title}
                      className="bg-white border border-[#E5E7EB] rounded-2xl p-6 space-y-2"
                    >
                      <h4 className="font-semibold text-[#3D6354]">{item.title}</h4>
                      <p className="text-sm text-[#52606D]">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cultures */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#3D6354]">Cultures</h3>
                <div className="grid md:grid-cols-3 gap-5">
                  {CULTURES_ITEMS.map((item) => (
                    <div
                      key={item.title}
                      className="bg-white border border-[#E5E7EB] rounded-2xl p-6 space-y-2"
                    >
                      <h4 className="font-semibold text-[#3D6354]">{item.title}</h4>
                      <p className="text-sm text-[#52606D]">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vision & CTA */}
              <div className="bg-[#3D6354] text-white rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-bold">
                    Our Vision is simple: to help you feel well, stay well, and live well.
                  </h2>
                  <p className="text-[#D2E2DA] mt-1">
                    Same-day appointments available Monday – Friday, 8:00AM – 8:00PM.
                  </p>
                </div>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-[#3D6354] font-semibold px-7 py-3.5 rounded-full hover:bg-[#EAF2EE] transition-colors shrink-0"
                >
                  <Calendar className="w-4 h-4" />
                  Book Now
                </a>
              </div>
            </section>
          </div>
        )}

        {/* About Page */}
        {currentPage === 'about' && (
          <div className="py-16 sm:py-20 space-y-16">
            {/* Dr Loretta Shoderu */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-7 space-y-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#E08E6D]">
                    About
                  </p>
                  <h1 className="text-4xl sm:text-5xl font-bold text-[#3D6354]">
                    Dr Loretta Shoderu
                  </h1>
                  <p className="text-sm font-semibold text-[#4E7A69] tracking-wide">
                    BSc., MBChB, MRCGP (2017), PG Dip. Cardiol
                  </p>
                  <p className="text-[#52606D] leading-relaxed">
                    Dr Loretta Shoderu is an experienced GP with almost 20 years of medical
                    experience and nearly a decade in frontline GP practice. She trained at the
                    Royal Free Hospital in London and Southend University Hospital during her
                    Foundation Years before relocating to the West Midlands to complete her GP
                    training. Since then, she has worked across multiple practices in South
                    Worcestershire and Herefordshire, gaining a broad understanding of the
                    healthcare needs within the region.
                  </p>
                  <p className="text-[#52606D] leading-relaxed">
                    Alongside her general practice work, Dr Loretta Shoderu has also worked
                    extensively in Urgent Care and A&E, where she continues to practice as a GP.
                    She holds a Diploma in Cardiology and has a strong special interest in heart
                    health, including the management of:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-2.5 text-sm text-[#1F2933] pt-1">
                    {[
                      'High Blood Pressure (Hypertension)',
                      'Heart failure',
                      'Atrial fibrillation (AF, irregular heart beat)',
                      'Angina',
                      'Early detection and prevention of heart disease, heart attacks, and stroke',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#4E7A69] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={() => navigate('services')}
                      className="inline-flex items-center gap-2 bg-[#4E7A69] hover:bg-[#35584A] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors cursor-pointer"
                    >
                      Our Services
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-3xl overflow-hidden shadow-lg border border-[#E5E7EB] bg-white">
                    <img
                      src="/about-us-page.webp"
                      alt="Dr Loretta Shoderu - JesPearl Private GP Clinic"
                      className="w-full h-[420px] sm:h-[480px] object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Our Approach to Care */}
            <section className="bg-white border-y border-[#E5E7EB] py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#E08E6D] mb-2">
                    Our Approach to Care
                  </p>
                  <h2 className="text-3xl font-bold text-[#3D6354]">
                    At JesPearl Private GP Clinic, we believe exceptional healthcare goes beyond
                    treating symptoms.
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-[#FAF9F6] border border-[#E5E7EB] rounded-2xl p-8 space-y-3">
                    <h3 className="text-xl font-bold text-[#3D6354]">
                      Holistic, Person-Centred Care
                    </h3>
                    <p className="text-sm sm:text-base text-[#52606D] leading-relaxed">
                      We take time to understand your health in the context of your lifestyle, your
                      work, and your emotional wellbeing, recognising how each factor affects the
                      other.
                    </p>
                  </div>
                  <div className="bg-[#FAF9F6] border border-[#E5E7EB] rounded-2xl p-8 space-y-3">
                    <h3 className="text-xl font-bold text-[#3D6354]">
                      Seamless, High-Quality Service
                    </h3>
                    <p className="text-sm sm:text-base text-[#52606D] leading-relaxed">
                      We provide a{' '}
                      <strong className="text-[#1F2933]">
                        bespoke, professional and compassionate service,
                      </strong>{' '}
                      ensuring you feel listened to, supported, and empowered in your health
                      decisions—whether you need a one-off consultation, ongoing care, or specialist
                      input for heart health.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Our Mission */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white border border-[#E5E7EB] rounded-3xl p-8 sm:p-12 space-y-6">
                <h2 className="text-3xl font-bold text-[#3D6354]">Our Mission</h2>
                <p className="text-[#52606D] leading-relaxed">
                  At JesPearl Private GP Clinic, our vision is to deliver exceptional,
                  patient-centred healthcare that is timely, compassionate, and tailored to each
                  individual. We are committed to:
                </p>
                <ul className="space-y-3 text-sm sm:text-base text-[#3E4C59]">
                  {[
                    'Providing prompt access to high-quality medical care, without unnecessary delays.',
                    'Offering a welcoming, attentive service where every patient feels heard, valued, and supported.',
                    'Combining clinical expertise with holistic understanding, recognising the wider impact of health on family, work, and wellbeing.',
                    'Empowering patients through clear communication, personalised management plans, and shared decision-making.',
                    'Ensuring continuity of care with a dedicated Private GP who understands your health journey.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#4E7A69] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-base font-semibold text-[#3D6354] pt-2">
                  Our Vision is simple: to help you feel well, stay well, and live well.
                </p>
              </div>
            </section>
          </div>
        )}

        {/* Contact Page */}
        {currentPage === 'contact' && (
          <section className="py-16 sm:py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#E08E6D] mb-2">
                  Contact Us
                </p>
                <h1 className="text-4xl font-bold text-[#3D6354]">Get in Touch</h1>
                <p className="mt-3 text-[#52606D]">
                  Open Monday – Friday, 8:00AM – 8:00PM in Worcester. Book online or send us an
                  enquiry below.
                </p>
              </div>

              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-5 space-y-6 bg-white border border-[#E5E7EB] rounded-3xl p-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#4E7A69] mt-0.5" />
                    <div>
                      <h2 className="font-semibold text-[#3D6354]">Location</h2>
                      <p className="text-sm text-[#52606D]">Worcester, United Kingdom</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#4E7A69] mt-0.5" />
                    <div>
                      <h2 className="font-semibold text-[#3D6354]">Opening Hours</h2>
                      <p className="text-sm text-[#52606D]">Monday – Friday: 8:00AM – 8:00PM</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#4E7A69] text-white text-sm font-semibold px-6 py-3 rounded-full"
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

        {/* Privacy Policy Page (UK GDPR) */}
        {currentPage === 'privacy' && (
          <section className="py-16 sm:py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 bg-white border border-[#E5E7EB] rounded-3xl p-8 sm:p-12">
              <h1 className="text-3xl font-bold text-[#3D6354]">Privacy Policy (UK GDPR)</h1>
              <p className="text-sm text-[#52606D] leading-relaxed">
                JesPearl Private GP Clinic is committed to protecting and respecting your privacy
                in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data
                Protection Act 2018.
              </p>
              <h2 className="text-lg font-semibold text-[#3D6354]">Information We Collect</h2>
              <p className="text-sm text-[#52606D] leading-relaxed">
                We collect personal and special category health data necessary to provide safe,
                effective private GP consultations, manage appointments, and respond to your
                enquiries.
              </p>
              <h2 className="text-lg font-semibold text-[#3D6354]">Your Rights Under UK GDPR</h2>
              <p className="text-sm text-[#52606D] leading-relaxed">
                You have the right to access your medical records, request rectification of
                inaccurate data, and raise concerns with the Information Commissioner’s Office
                (ICO) at ico.org.uk.
              </p>
            </div>
          </section>
        )}

        {/* Terms & Conditions Page */}
        {currentPage === 'terms' && (
          <section className="py-16 sm:py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 bg-white border border-[#E5E7EB] rounded-3xl p-8 sm:p-12">
              <h1 className="text-3xl font-bold text-[#3D6354]">Terms & Conditions</h1>
              <p className="text-sm text-[#52606D] leading-relaxed">
                JesPearl Private GP Clinic is <strong>powered by ThanksDoc</strong> and subscribes
                to ThanksDoc’s terms and conditions. By booking an appointment or using our
                services, you agree to both JesPearl Private GP Clinic’s clinic policies and{' '}
                <a
                  href="https://thanksdoc.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold text-[#4E7A69]"
                >
                  ThanksDoc’s Terms and Conditions
                </a>
                , governed by the laws of England and Wales.
              </p>
              <h2 className="text-lg font-semibold text-[#3D6354]">Appointments & Cancellations</h2>
              <p className="text-sm text-[#52606D] leading-relaxed">
                Appointments are available Monday to Friday, 8:00AM – 8:00PM via our ThanksDoc
                booking portal. Please provide reasonable notice if you need to reschedule or
                cancel your consultation.
              </p>
              <h2 className="text-lg font-semibold text-[#3D6354]">Medical Emergencies</h2>
              <p className="text-sm text-[#52606D] leading-relaxed">
                JesPearl Private GP Clinic is not an emergency service. In the event of a
                life-threatening medical emergency, please call 999 or attend your nearest A&E
                department immediately. For urgent NHS advice, call 111.
              </p>
            </div>
          </section>
        )}

        {/* Cookie Policy Page (UK PECR) */}
        {currentPage === 'cookies' && (
          <section className="py-16 sm:py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 bg-white border border-[#E5E7EB] rounded-3xl p-8 sm:p-12">
              <h1 className="text-3xl font-bold text-[#3D6354]">Cookie Policy</h1>
              <p className="text-sm text-[#52606D] leading-relaxed">
                In accordance with the UK Privacy and Electronic Communications Regulations (PECR),
                this website uses only essential functional cookies required for navigation and
                security. We do not use intrusive advertising or third-party tracking cookies.
              </p>
            </div>
          </section>
        )}
      </main>

      {/* Footer with Quick Links, Legal & UK Emergency Notice */}
      <footer className="bg-[#3D6354] text-[#D2E2DA] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/15">
            <div className="space-y-4">
              <img
                src={LOGO_URL}
                alt="JesPearl Private GP Clinic"
                className="h-9 w-auto brightness-0 invert"
              />
              <p className="text-sm text-[#D2E2DA]/90 leading-relaxed">
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
                Legal (UK)
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
                    Privacy Policy (UK GDPR)
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => navigate('cookies')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Cookie Policy
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
                Clinic Hours
              </h3>
              <p className="text-sm">Worcester, United Kingdom</p>
              <p className="text-sm mt-1">Monday – Friday</p>
              <p className="text-sm">8:00AM — 8:00PM</p>
              <p className="text-xs text-[#D2E2DA]/80 mt-3">
                Not an emergency service. Call <strong>999</strong> for emergencies or{' '}
                <strong>111</strong> for urgent NHS advice.
              </p>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D2E2DA]/80">
            <p>
              © {new Date().getFullYear()} JesPearl Private GP Clinic. Powered by{' '}
              <a
                href="https://thanksdoc.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                ThanksDoc
              </a>
              . All rights reserved.
            </p>
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

      {/* WhatsApp Floating Tab */}
      <a
        href="https://api.whatsapp.com/send?text=Hello%20JesPearl%20Private%20GP%20Clinic"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-lg flex items-center justify-center transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-current" aria-hidden="true">
          <path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.613 4.64 1.773 6.667L2.667 29.333l6.84-1.747A13.28 13.28 0 0 0 16.004 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.004 2.667zm7.773 18.88c-.32.907-1.88 1.733-2.6 1.84-.667.107-1.507.147-2.427-.147-.56-.187-1.28-.427-2.2-.827-3.867-1.667-6.387-5.56-6.587-5.827-.187-.267-1.573-2.093-1.573-3.987 0-1.893.987-2.827 1.347-3.213.347-.387.76-.48 1.013-.48.253 0 .507 0 .733.013.24.013.56-.093.88.667.32.773 1.093 2.667 1.187 2.867.093.2.16.427.027.693-.133.267-.2.427-.387.653-.187.227-.4.507-.573.68-.187.187-.387.387-.16.773.227.387 1.013 1.667 2.173 2.707 1.493 1.333 2.747 1.747 3.133 1.947.387.2.613.16.84-.107.227-.267.973-1.133 1.24-1.52.267-.387.52-.32.88-.187.36.133 2.28 1.08 2.667 1.267.387.2.653.293.747.453.093.16.093.933-.227 1.84z" />
        </svg>
      </a>

      {/* UK Cookie Consent Banner */}
      {!cookieDismissed && (
        <div className="fixed bottom-4 left-4 right-4 z-50 max-w-xl mx-auto bg-white border border-[#D2E2DA] rounded-2xl shadow-lg p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3 text-xs sm:text-sm text-[#3E4C59]">
            <ShieldCheck className="w-5 h-5 text-[#4E7A69] shrink-0 mt-0.5" />
            <p>
              We use essential cookies to ensure this site works properly. See our{' '}
              <button
                type="button"
                onClick={() => navigate('cookies')}
                className="underline font-semibold text-[#4E7A69] cursor-pointer"
              >
                Cookie Policy
              </button>
              .
            </p>
          </div>
          <button
            type="button"
            onClick={() => setCookieDismissed(true)}
            className="bg-[#4E7A69] hover:bg-[#35584A] text-white text-xs font-semibold px-4 py-2 rounded-full shrink-0 cursor-pointer"
          >
            Accept
          </button>
        </div>
      )}
    </div>
  )
}
