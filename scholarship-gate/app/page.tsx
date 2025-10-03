"use client"

import type React from "react"
import { useState } from "react"
import {
  GraduationCap,
  Globe,
  Target,
  FileText,
  DollarSign,
  Plane,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Menu,
  X,
  ChevronRight,
  Star,
  Award,
  Shield,
  Users,
  BookOpen,
  TrendingUp,
  Heart,
} from "lucide-react"

export default function ScholarshipGate() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    degree: "",
    message: "",
  })

  const whatsappNumber = "923009880176"

  const universities = [
    { name: "UC San Diego", logo: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=150&h=150&fit=crop" },
    { name: "Penn State", logo: "https://images.unsplash.com/photo-1562774053701-b145c3f54a5a?w=150&h=150&fit=crop" },
    { name: "Rutgers", logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=150&h=150&fit=crop" },
    {
      name: "UNC Chapel Hill",
      logo: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=150&h=150&fit=crop",
    },
    {
      name: "Virginia Tech",
      logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=150&h=150&fit=crop",
    },
    {
      name: "University of Chicago",
      logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=150&h=150&fit=crop",
    },
  ]

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Independent Guidance",
      desc: "We are not consultants and have no contracts with universities. Our advice is 100% student-focused.",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      desc: "Students have secured admits and scholarships at top U.S. universities.",
    },
    {
      icon: Users,
      title: "Student-First Approach",
      desc: "Personalized guidance based on your profile, goals, and budget.",
    },
    {
      icon: CheckCircle,
      title: "End-to-End Support",
      desc: "From shortlisting to SOPs, applications, and visa interview prep.",
    },
  ]

  const services = [
    { icon: Target, title: "University Shortlisting", desc: "Tailored to your GPA, budget, and career goals" },
    { icon: FileText, title: "SOP & Essay Guidance", desc: "From structuring to final polish" },
    { icon: BookOpen, title: "Application Handling", desc: "Forms, documents, and deadlines managed smoothly" },
    { icon: DollarSign, title: "Scholarship & Funding", desc: "Maximize your chances of financial aid" },
    { icon: MessageCircle, title: "Visa Interview Prep", desc: "Mock sessions and confidence-building" },
    { icon: Plane, title: "Post-Admit Support", desc: "Housing, flights, and settling in the U.S." },
  ]

  const process = [
    { step: "01", title: "Profile Review", desc: "Submit your details for free evaluation" },
    { step: "02", title: "Customized Plan", desc: "Receive a shortlist of universities and SOP preparation support" },
    { step: "03", title: "Application Support", desc: "Apply on time with professional guidance" },
    {
      step: "04",
      title: "Scholarship + Visa Prep",
      desc: "Secure funding and prepare confidently for your visa interview",
    },
  ]

  const testimonials = [
    {
      text: "With Scholarship Gate's help, I got into Rutgers with a 50% scholarship.",
      author: "Sarah M.",
      degree: "MS Student",
    },
    {
      text: "The team guided me step-by-step, and I successfully secured my admit at UC San Diego.",
      author: "Ahmed K.",
      degree: "BS Student",
    },
  ]

  const stats = [
    { icon: Users, value: "500+", label: "Students Helped" },
    { icon: Award, value: "95%", label: "Success Rate" },
    { icon: DollarSign, value: "$2M+", label: "Scholarships Secured" },
    { icon: Globe, value: "50+", label: "Universities" },
  ]

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const message = `🎓 New Inquiry from Scholarship Gate%0A%0A👤 Name: ${formData.name}%0A📧 Email: ${formData.email}%0A📱 Phone: ${formData.phone}%0A🎯 Degree: ${formData.degree}%0A💬 Message: ${formData.message}`
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")
    setFormData({ name: "", email: "", phone: "", degree: "", message: "" })
  }

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=Hi! I want to know more about Scholarship Gate services.`,
      "_blank",
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-lg shadow-lg">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Scholarship Gate
              </span>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Home
              </a>
              <a href="#why-us" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Why Us
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Services
              </a>
              <a href="#process" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Process
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Contact
              </a>
            </nav>

            <div className="hidden md:flex items-center space-x-3">
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-2.5 rounded-lg hover:from-green-600 hover:to-green-700 transition-all shadow-md hover:shadow-lg transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-medium">WhatsApp</span>
              </button>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t">
              <nav className="flex flex-col space-y-3 pt-4">
                <a
                  href="#home"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Home
                </a>
                <a
                  href="#why-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Why Us
                </a>
                <a
                  href="#services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Services
                </a>
                <a
                  href="#process"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Process
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Contact
                </a>
                <button
                  onClick={handleWhatsAppClick}
                  className="flex items-center justify-center space-x-2 bg-green-500 text-white px-4 py-2.5 rounded-lg hover:bg-green-600 transition"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-28 pb-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg animate-fade-in">
                👉 Your Gateway to Top U.S. Universities
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in-up">
                Top U.S. Universities with{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Scholarships
                </span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed animate-fade-in-up animation-delay-200">
                We help <span className="font-semibold text-blue-600">BS and MS students</span> secure admits and
                scholarships at leading universities such as UC San Diego, Penn State, Rutgers, Virginia Tech, UNC
                Chapel Hill, and the University of Chicago.
              </p>

              <div className="bg-white p-6 rounded-2xl shadow-xl border border-blue-100 animate-fade-in-up animation-delay-400">
                <h3 className="font-bold text-gray-900 mb-4 text-lg flex items-center">
                  <Heart className="w-5 h-5 text-red-500 mr-2" />
                  Who We Help:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">BS Students (Undergraduate Applicants)</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-indigo-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">MS Students (Graduate Applicants)</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
                <a
                  href="#contact"
                  className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all text-center flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span>Start Your Journey</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all text-center shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  Get Free Profile Review
                </a>
              </div>
            </div>

            <div className="relative animate-fade-in-up animation-delay-800">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src="/diverse-college-students-walking-on-beautiful-univ.jpg" alt="Students on university campus" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating success card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl max-w-xs border border-blue-100 animate-float">
                <div className="flex items-start space-x-3">
                  <div className="bg-gradient-to-br from-green-400 to-green-600 p-3 rounded-xl">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">100% Success Rate</div>
                    <div className="text-sm text-gray-600">Independent Student-Focused Guidance</div>
                  </div>
                </div>
              </div>

              {/* Floating stats card */}
              <div className="absolute -top-6 -right-6 bg-white p-5 rounded-2xl shadow-2xl border border-indigo-100 animate-float animation-delay-1000">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-blue-400 to-indigo-600 p-3 rounded-xl">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">$2M+</div>
                    <div className="text-sm text-gray-600">Scholarships Won</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories - Universities */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Our Students Have Secured Admits at</h2>
            <p className="text-xl text-gray-600">Top U.S. universities with scholarships</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {universities.map((uni, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center space-y-3 p-4 hover:bg-white rounded-xl transition-all group hover:shadow-lg"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full flex items-center justify-center overflow-hidden shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all border-2 border-blue-100">
                  <img
                    src={`/.jpg?key=6xlx3&height=80&width=80&query=${uni.name} university logo`}
                    alt={uni.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700 text-center group-hover:text-blue-600 transition-colors">
                  {uni.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Scholarship Gate */}
      <section id="why-us" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Scholarship Gate?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Student-focused guidance with proven results</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all border-t-4 border-blue-600 group hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                  <item.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Journey Awaits</h2>
            <p className="text-xl text-gray-600">Experience world-class education in the United States</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <img
                src="/beautiful-american-university-campus-with-historic.jpg"
                alt="University campus"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-1">Beautiful Campuses</h3>
                  <p className="text-sm">Study in world-renowned institutions</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <img
                src="/diverse-group-of-college-students-studying-togethe.jpg"
                alt="Students studying together"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-1">Collaborative Learning</h3>
                  <p className="text-sm">Join a diverse community of scholars</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <img
                src="/happy-graduates-throwing-caps-in-air-at-university.jpg"
                alt="Graduation ceremony"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-1">Achieve Your Dreams</h3>
                  <p className="text-sm">Graduate with confidence and success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Success Stories
            </div>
            <h2 className="text-4xl font-bold mb-4">Student Success Stories</h2>
            <p className="text-xl text-blue-100">Hear from students who achieved their dreams</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all hover:-translate-y-2"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center shadow-md">
                    <Users className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.degree}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Services
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600">Comprehensive support throughout your journey</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl hover:shadow-2xl transition-all border border-blue-100 group hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Process
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple 4-step process to your dream university</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all group hover:-translate-y-2">
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{item.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed">{item.desc}</p>
                </div>
                {idx < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ChevronRight className="w-8 h-8 text-blue-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-6">
            <span className="text-6xl">✨</span>
          </div>
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-2xl leading-relaxed font-light">
            At Scholarship Gate, our mission is simple: To help you get into the university you deserve — with
            scholarships.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Get In Touch
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Get Your Free Profile Review</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Start your journey to a top U.S. university with a scholarship. Contact us today!
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-all group">
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-lg">Phone</h3>
                    <p className="text-gray-600">+92 300 1234567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-all group">
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-lg">Email</h3>
                    <p className="text-gray-600">info@scholarshipgate.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-all group">
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-lg">Location</h3>
                    <p className="text-gray-600">Lahore, Pakistan</p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-5 rounded-xl hover:from-green-600 hover:to-green-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Chat on WhatsApp Now</span>
              </button>

              <div className="hidden lg:block rounded-2xl overflow-hidden shadow-xl">
                <img src="/professional-education-consultant-meeting-with-stu.jpg" alt="Student consultation" className="w-full h-64 object-cover" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8 rounded-2xl shadow-2xl border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us Your Details</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="+92 300 1234567"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Degree Level *</label>
                  <select
                    required
                    value={formData.degree}
                    onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  >
                    <option value="">Select your degree</option>
                    <option value="BS">BS (Undergraduate)</option>
                    <option value="MS">MS (Graduate)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message (Optional)</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your goals..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Submit & Get Free Review
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-lg shadow-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">Scholarship Gate</span>
              </div>
              <p className="text-gray-400 leading-relaxed">Your gateway to top U.S. universities with scholarships.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#home" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#why-us" className="hover:text-white transition-colors">
                    Why Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>University Shortlisting</li>
                <li>SOP Guidance</li>
                <li>Application Support</li>
                <li>Scholarship Guidance</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Connect With Us</h4>
              <button
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-green-500 to-green-600 px-5 py-3 rounded-xl hover:from-green-600 hover:to-green-700 transition-all flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-110 animate-bounce"
                aria-label="Contact on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 Scholarship Gate. All rights reserved. Helping students achieve their U.S. university dreams.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl hover:from-green-600 hover:to-green-700 transition-all z-50 hover:scale-110 animate-bounce"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </button>
    </div>
  )
}
