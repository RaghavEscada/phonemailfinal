import React, { useState, useEffect } from "react";
import { ArrowRight, Smartphone, Mail, Shield, Users, TrendingUp, CheckCircle, Building, Globe, Zap, Lock, FileText, Clock, BarChart3, Target, DollarSign, ChevronDown, ChevronUp } from "lucide-react";

const PhoneMailHero = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentText, setCurrentText] = useState('POSTAL Mail');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "Proof of Concept?",
      answer: "Identity linked email already works in closed systems today. For example, in colleges, your roll number is your email ID. PhoneMail takes the same proven idea and builds it into a single nationwide solution."
    },
    {
      question: "Doesn't everyone already have email?",
      answer: "Most email IDs are created during phone setup, often without the user even realizing it. They exist mainly to enable Play Store access or app logins, not for what email was truly meant for: a secure, digital alternative to postal mail."
    },
    {
      question: "Why not just use WhatsApp?",
      answer: "If WhatsApp were legal for official documents, the government would already be using it. The IT Act recognizes only email for this purpose. Moreover, WhatsApp is not built to organize or store documents. WhatsApp is for chatting. PhoneMail is purpose built for secure document delivery, management, and cloud storage."
    },
    {
      question: "How is PhoneMail different from DigiLocker?",
      answer: "DigiLocker is narrow, storing only a few government issued documents. PhoneMail is broad. It is your single inbox for every official document: court orders, receipts, lab reports, and more. One platform. All documents. No multiple apps."
    },
    {
      question: "Can I use it on a laptop?",
      answer: "Yes. Log in from your laptop via our desktop app or on the web with a quick QR code scan. It works like WhatsApp in how you connect, but it is built on EDI and email standards."
    },
    {
      question: "What if I change my phone?",
      answer: "All your documents are securely stored in the cloud. Just insert your SIM into your new phone, the number is auto detected, and everything is instantly restored."
    },
    {
      question: "What do I need to enter when signing up?",
      answer: "At launch, you will enter basic details like your name. In the future, with government integration, PhoneMail will fetch your name, date of birth, and other details automatically using your mobile number. This makes setup automatic and instant, which will be especially useful for rural users."
    },
    {
      question: "How is PhoneMail different from Gmail?",
      answer: "Gmail is built for the corporate world, focused on professional and formal communication such as client emails or student internship applications. PhoneMail is built for the people, treating email as the digital version of postal mail, for everyday, legal, and official documents."
    },
    {
      question: "What if I have multiple phone numbers?",
      answer: "Think of it like postal mail. You may own multiple houses, but mail goes to the address you live at. Similarly, once government integration is in place, PhoneMail will deliver to the phone number linked to your Aadhaar."
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText(prev => prev === 'POSTAL Mail' ? 'E Mail' : 'POSTAL Mail');
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-3xl border-b border-gray-800/30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5"></div>
        <div className="container mx-auto px-8 py-6 flex items-center justify-between relative">
          <div className="flex items-center space-x-5">
            <div className="relative group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-2xl shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-300 group-hover:scale-110">
                <img src="/PhoneMail logo.png" alt="PhoneMail Logo" className="w-8 h-8 object-contain" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
            </div>
            <span className="text-2xl font-black text-white tracking-wide">Phone<span className="text-blue-400">Mail</span></span>
          </div>
          <div className="hidden md:flex items-center space-x-12">
            <a href="#solution" className="relative text-gray-300 hover:text-white transition-all duration-300 font-semibold hover:scale-110 group">
              <span>Solution</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#market" className="relative text-gray-300 hover:text-white transition-all duration-300 font-semibold hover:scale-110 group">
              <span>Market</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#faq" className="relative text-gray-300 hover:text-white transition-all duration-300 font-semibold hover:scale-110 group">
              <span>Technology</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></div>
            </a>
            <button className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 rounded-3xl transition-all duration-500 font-bold shadow-2xl hover:shadow-blue-500/30 hover:scale-110 overflow-hidden">
              <span className="relative z-10">Request Demo</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 pt-40 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8">
                            {/* Main Brand */}
              <div className="space-y-2">
                <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-semibold mb-6 backdrop-blur-sm">
                  🚀 Next-Gen Email Platform
                </div>
                <h1 className="text-6xl md:text-7xl font-black leading-tight text-white mb-6 tracking-tight">
                  Phone<span className="text-blue-400">Mail</span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-300 font-light tracking-wide">
                  The Postbox in Your Pocket
                </h2>
                </div>
              
              {/* Description */}
              <div className="space-y-6">
                <p className="text-xl text-gray-200 leading-relaxed font-medium">
                  PhoneMail is an upcoming email platform built to give 1.5B Indians simple, instant access to a digital mailbox.
                </p>
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6 backdrop-blur-sm">
                  <p className="text-lg text-blue-300 font-semibold">
                    Creating the world's first verified, identity-linked email system.
                  </p>
                </div>
              </div>
              
              {/* Stats */}
              <div className="flex gap-8">
                <div className="bg-gradient-to-br from-red-500/20 to-red-600/10 border border-red-500/30 rounded-2xl p-6 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-black bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent mb-2">66%</div>
                  <div className="text-sm text-gray-300 font-medium">Indians (rural) don't have email</div>
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 rounded-2xl p-6 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent mb-2">25+</div>
                  <div className="text-sm text-gray-300 font-medium">years since IT Act 2000</div>
                </div>
              </div>
              
              {/* CTA Section */}
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-5 rounded-3xl font-bold transition-all duration-500 shadow-2xl hover:shadow-blue-500/25 hover:scale-110 transform overflow-hidden">
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </button>
                <button className="group border-2 border-gray-600 hover:border-blue-400 text-gray-200 hover:text-white px-12 py-5 rounded-3xl font-bold transition-all duration-300 hover:bg-blue-500/10 hover:scale-105 transform backdrop-blur-sm relative overflow-hidden">
                  <span className="relative z-10">Learn More</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
                </button>
              </div>
            </div>
            
                        {/* Right Visual */}
            <div className="relative flex justify-center items-center">
              <div className="relative group">
                {/* Main Container */}
                <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-[2rem] p-8 shadow-2xl border border-gray-700/30 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-700">
                  {/* Inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="relative overflow-hidden rounded-2xl">
                    <img 
                      src="/PhoneMail Image 1.png" 
                      alt="PhoneMail Interface" 
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                    
                {/* Enhanced Floating Elements */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-2xl backdrop-blur-sm border border-green-400/50 hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span>Secure</span>
                      </div>
                    </div>
                
                <div className="absolute -top-6 right-12 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-2xl backdrop-blur-sm border border-blue-400/50 hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                    <span>Live</span>
                  </div>
                </div>
                
                <div className="absolute top-1/2 -left-8 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 text-white px-4 py-2 rounded-2xl text-xs font-bold shadow-2xl backdrop-blur-sm border border-purple-400/50 hover:scale-110 transition-transform duration-300 cursor-pointer transform -rotate-12">
                  ⚡ Fast
                </div>
                
                {/* Ambient lighting effects */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-700 -z-10"></div>
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-[4rem] blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-1000 -z-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Critical Gap */}
      <section id="market" className="bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm font-bold mb-8 backdrop-blur-sm">
                🇮🇳 Digital Transformation
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
                The Next Big Shift in <span className="text-blue-400">Digital India</span>
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-gray-200 leading-relaxed mb-8">
                  Still using postal mail and paper documents? PhoneMail is here to disrupt the broken system.
                </p>
                <p className="text-lg text-blue-400 leading-relaxed mb-12">
                  We empower every Indian with an identity-based, registered email. This means your loan papers, tax notices, 
                  and electricity bills will now reach you directly on your phone.
                </p>
                
                {/* Post Office Statistics */}
                <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                    <div className="text-4xl font-bold bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent mb-3">149,385</div>
                    <div className="text-gray-300 font-medium">Rural post offices</div>
              </div>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent mb-3">15,614</div>
                    <div className="text-gray-300 font-medium">Urban post offices</div>
            </div>
                </div>
                
                {/* Mail Photo */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-10 border border-gray-700/50 max-w-lg mx-auto shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 backdrop-blur-sm">
                  <div className="relative overflow-hidden rounded-2xl mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop&crop=center" 
                      alt="Traditional mail and letters" 
                      className="w-full h-52 object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <p className="text-gray-300 text-center font-medium">Traditional mail system</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inside PhoneMail */}
      <section id="solution" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-bold mb-8 backdrop-blur-sm">
                🔍 Deep Dive
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
                Inside <span className="text-blue-400">PhoneMail</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Simple, secure, and identity-linked email for every Indian
              </p>
            </div>

            {/* Overview Section */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">Overview</h3>
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700/50 flex items-start gap-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg flex-shrink-0">
                      <img 
                        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=80&h=80&fit=crop&crop=center" 
                        alt="Quick setup" 
                        className="w-12 h-12 object-cover rounded-xl"
                      />
              </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4">Setup in Seconds</h4>
                      <p className="text-gray-300 leading-relaxed">PhoneMail auto detects your number and verifies with OTP instantly. No learning curve.</p>
            </div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700/50 flex items-start gap-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-2xl shadow-lg flex-shrink-0">
                      <img 
                        src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=80&h=80&fit=crop&crop=center" 
                        alt="Identity verification" 
                        className="w-12 h-12 object-cover rounded-xl"
                      />
                </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4">Your Number is Your ID</h4>
                      <p className="text-gray-300 leading-relaxed">One identity linked email that works everywhere, from banks to government services.</p>
                </div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700/50 flex items-start gap-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                    <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl shadow-lg flex-shrink-0">
                      <img 
                        src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=80&h=80&fit=crop&crop=center" 
                        alt="Digital documents" 
                        className="w-12 h-12 object-cover rounded-xl"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4">Paper to Digital</h4>
                      <p className="text-gray-300 leading-relaxed">No more lost papers. Store and access legal documents, loan papers, health records, and receipts securely, anytime and anywhere.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">Features</h3>
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700/50 flex items-start gap-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-2xl shadow-lg flex-shrink-0">
                      <img 
                        src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=80&h=80&fit=crop&crop=center" 
                        alt="Chat interface" 
                        className="w-12 h-12 object-cover rounded-xl"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4">Inbox that feels like chat</h4>
                      <p className="text-gray-300 leading-relaxed">A clean, familiar interface that is easy to use, even for first-time users.</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700/50 flex items-start gap-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                    <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-4 rounded-2xl shadow-lg flex-shrink-0">
                      <img 
                        src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=80&h=80&fit=crop&crop=center" 
                        alt="Settings interface" 
                        className="w-12 h-12 object-cover rounded-xl"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4">Smart settings</h4>
                      <p className="text-gray-300 leading-relaxed">Control notifications, profile, and security in a way that feels just like the apps you already use.</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700/50 flex items-start gap-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                    <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-4 rounded-2xl shadow-lg flex-shrink-0">
                      <img 
                        src="https://images.unsplash.com/photo-1555421689-d68471e189f2?w=80&h=80&fit=crop&crop=center" 
                        alt="QR code login" 
                        className="w-12 h-12 object-cover rounded-xl"
                      />
                </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4">Web login</h4>
                      <p className="text-gray-300 leading-relaxed">Log in on any device with a QR code or secure OTP. No passwords, no hassle.</p>
          </div>
        </div>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700/50 flex items-start gap-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                    <div className="bg-gradient-to-br from-pink-500 to-pink-600 p-4 rounded-2xl shadow-lg flex-shrink-0">
                      <img 
                        src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=80&h=80&fit=crop&crop=center" 
                        alt="Group collaboration" 
                        className="w-12 h-12 object-cover rounded-xl"
                      />
            </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4">Email groups</h4>
                      <p className="text-gray-300 leading-relaxed">Create and manage groups just like chat. Share updates and documents instantly with teams, families, or communities.</p>
                </div>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section id="faq" className="bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-500/30 rounded-full text-green-300 text-sm font-bold mb-8 backdrop-blur-sm">
                ❓ Questions & Answers
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
                <span className="text-blue-400">FAQs</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Quick answers to common questions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-700/50 transition-all duration-300"
                  >
                    <h4 className="text-base font-medium text-white pr-3">{faq.question}</h4>
                    <div className="flex-shrink-0">
                      {openFAQ === index ? (
                        <ChevronUp className="w-4 h-4 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      )}
              </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-200 ease-in-out ${
                      openFAQ === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-5 pb-5">
                      <p className="text-sm text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
              </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Phone Mail the solution */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-white">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">Phone Mail the solution</h2>
                <p className="text-xl max-w-3xl mx-auto">
                  PhoneMail is an identity-linked email system that uses your phone number as your email ID.
                </p>
              </div>
              
              <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <span className="text-blue-600 font-bold text-xl bg-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</span>
                    <p className="text-lg">Phone number is already Aadhaar-linked and registered with banks, retailers, and the government.</p>
                </div>
                
                  <div className="flex items-start space-x-4">
                    <span className="text-blue-600 font-bold text-xl bg-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</span>
                    <p className="text-lg">This makes PhoneMail a universal receipt ID for any document — transfer letters, court orders, bills, lab reports.</p>
                </div>
                
                  <div className="flex items-start space-x-4">
                    <span className="text-blue-600 font-bold text-xl bg-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</span>
                    <p className="text-lg">Built with WhatsApp-like simplicity for rural users, but operates as a fully legal, EDI-compliant email service.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Practical Applications */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-bold mb-8 backdrop-blur-sm">
                💼 Real World Impact
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
                Practical <span className="text-blue-400">Applications</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                Anything that arrives by post or requires a physical handover will be digital.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-10 shadow-2xl border border-gray-700/50 hover:shadow-3xl transition-all duration-500 hover:scale-105 backdrop-blur-sm">
                <div className="relative overflow-hidden rounded-2xl mb-8">
                  <img 
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=300&h=200&fit=crop&crop=center" 
                    alt="Government building" 
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Government</h3>
                <ul className="text-gray-300 space-y-3 leading-relaxed">
                  <li>• Tax orders</li>
                  <li>• Legal notices</li>
                  <li>• Pension documents</li>
                  <li>• Ration card updates</li>
                  <li>• Land registration records</li>
                  <li>• Election commission notices</li>
                  <li>• Birth and death certificates</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-10 shadow-2xl border border-gray-700/50 hover:shadow-3xl transition-all duration-500 hover:scale-105 backdrop-blur-sm">
                <div className="relative overflow-hidden rounded-2xl mb-8">
                  <img 
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop&crop=center" 
                    alt="Financial documents" 
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Financial</h3>
                <ul className="text-gray-300 space-y-3 leading-relaxed">
                  <li>• Bank statements</li>
                  <li>• Insurance policies</li>
                  <li>• Credit card bills</li>
                  <li>• EMI schedules</li>
                  <li>• Mutual fund statements</li>
                  <li>• Tax-saving certificates</li>
                  <li>• KYC and compliance</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-10 shadow-2xl border border-gray-700/50 hover:shadow-3xl transition-all duration-500 hover:scale-105 backdrop-blur-sm">
                <div className="relative overflow-hidden rounded-2xl mb-8">
                  <img 
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop&crop=center" 
                    alt="Healthcare and utilities" 
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Healthcare and Utilities</h3>
                <ul className="text-gray-300 space-y-3 leading-relaxed">
                  <li>• Lab reports</li>
                  <li>• Vaccination certificates</li>
                  <li>• Health checkup reports</li>
                  <li>• Electricity bills</li>
                  <li>• Water and gas bills</li>
                  <li>• Property documents</li>
                  <li>• Rental or lease agreements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Our Mobile App Coming Soon */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-black"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-[3rem] p-16 shadow-2xl overflow-hidden">
              {/* Inner glow effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-purple-500/10 rounded-[3rem]"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl"></div>
              
              <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <div className="text-center lg:text-left space-y-8">
                  <div className="inline-block px-8 py-4 bg-gradient-to-r from-white/20 to-white/10 border border-white/20 rounded-full text-white text-sm font-bold mb-8 backdrop-blur-sm">
                    🚀 Coming Soon - Revolutionary App
                </div>
                  <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
                    OUR MOBILE <span className="text-blue-400">APP</span>
              </h2>
                  <p className="text-2xl text-white/90 leading-relaxed mb-10 font-medium">
                    Experience the future of digital communication. Simple, secure, and built for every Indian.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                    <button className="group relative bg-white text-blue-600 px-12 py-5 rounded-3xl font-bold transition-all duration-500 shadow-2xl hover:shadow-white/20 hover:scale-110 overflow-hidden">
                      <span className="relative z-10">Notify Me</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
                </button>
                    <button className="group border-3 border-white text-white px-12 py-5 rounded-3xl font-bold transition-all duration-300 hover:bg-white/10 hover:scale-110 backdrop-blur-sm relative overflow-hidden">
                      <span className="relative z-10">Learn More</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </button>
                  </div>
              </div>
              
                <div className="flex justify-center relative">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-[2.5rem] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=500&fit=crop&crop=center" 
                      alt="Mobile app preview" 
                      className="relative w-80 h-96 object-cover rounded-[2rem] shadow-2xl border-4 border-white/30 group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Phone glow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




    </div>
  );
};

export default PhoneMailHero;