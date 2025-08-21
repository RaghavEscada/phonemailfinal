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
      question: "1. Proof of Concept?",
      answer: "Identity-linked email works in closed systems today — for example, in colleges, your roll number is your email ID. PhoneMail takes the same proven idea and builds it into a single, nationwide solution."
    },
    {
      question: "2. What if I have multiple phone numbers?",
      answer: "Think of it like postal mail — we may own multiple houses but it goes to the address you live at. PhoneMail delivers to the phone number linked to your Aadhaar, ensuring a single, verified destination for official documents."
    },
    {
      question: "3. How is PhoneMail different from DigiLocker?",
      answer: "DigiLocker is narrow — it stores a few government-issued documents. PhoneMail is broad — it's your single inbox for every official document: transfer letters, court orders, receipts, lab reports, and more. One platform. All documents. No multiple apps."
    },
    {
      question: "4. Why not just use WhatsApp?",
      answer: "If WhatsApp were legal for official documents, the government would already be using it. The IT Act recognizes only email for this purpose. Moreover, WhatsApp isn't built to organize or store documents. WhatsApp is for chatting. PhoneMail is purpose-built for secure document delivery, management, and cloud storage — nothing else."
    },
    {
      question: "5. Can I use it on a laptop?",
      answer: "Yes. Log in from your laptop via our desktop app or on the web with a quick QR code scan. It works like WhatsApp in how you connect — but it's built on EDI and email standards."
    },
    {
      question: "6. What if I change my phone?",
      answer: "All your documents are securely stored in the cloud. Enter your phone number on your new device, and everything is instantly restored."
    },
    {
      question: "7. Doesn't everyone already have email?",
      answer: "Most email IDs exist only because they're created during phone setup. Many people don't even know they have one — it's just there to enable Play Store access or app logins, not what email was actually built for: secure, legal communication."
    },
    {
      question: "8. What do I need to enter when signing up?",
      answer: "At launch, you'll enter basic details like your name. In the future, with government integration, PhoneMail will fetch your name, date of birth, and other details automatically using your mobile number — making setup automatic and instant, which will be especially useful for rural users."
    },
    {
      question: "9. How is PhoneMail different from Gmail?",
      answer: "Gmail is built for the corporate world — professional, formal communication like client emails or student internship applications. PhoneMail is built for the people — treating email as the digital version of postal mail, for everyday, legal, and official documents."
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText(prev => prev === 'POSTAL Mail' ? 'E Mail' : 'POSTAL Mail');
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-xl border-b border-slate-700">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center relative shadow-lg">
              <img src="/PhoneMail logo.png" alt="PhoneMail Logo" className="w-8 h-8 object-contain" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full"></div>
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">PhoneMail</span>
          </div>
          <div className="hidden md:flex items-center space-x-12">
            <a href="#solution" className="text-slate-300 hover:text-white transition-colors font-medium relative group">
              Solution
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#market" className="text-slate-300 hover:text-white transition-colors font-medium relative group">
              Market
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#technology" className="text-slate-300 hover:text-white transition-colors font-medium relative group">
              Technology
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
            </a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl transition-all duration-300 font-semibold shadow-lg">
              Request Demo
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen py-32 pt-40 flex items-center justify-center overflow-hidden">
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-blue-600/3"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-indigo-500/8 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content - Takes 7 columns */}
            <div className="lg:col-span-7 space-y-10">
              {/* Main Brand */}
              <div className="space-y-2">
                <div className="inline-block px-4 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4">
                  ✨ Identity-Linked Email Platform
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                  <span className="text-white">Phone</span>
                  <span className="text-blue-500">Mail</span>
                </h1>
              </div>
              
              {/* Tagline */}
              <div>
                <h2 className="text-2xl md:text-3xl text-slate-300 font-light leading-relaxed">
                  A Digital <span className="text-blue-400 font-medium">Mailbox</span> in Every Pocket
                </h2>
              </div>
              
              {/* Description */}
              <div className="max-w-xl">
                <p className="text-lg text-slate-400 leading-relaxed">
                  Transform how official documents reach every Indian with our identity-linked email system. 
                  <span className="text-slate-300 font-medium"> Your Aadhaar-linked phone number becomes your email ID.</span>
                </p>
              </div>
              
              {/* Stats */}
              <div className="flex gap-8 pt-2">
                <div>
                  <div className="text-2xl font-bold text-white">66%</div>
                  <div className="text-sm text-slate-400">Rural Indians without email</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">25+</div>
                  <div className="text-sm text-slate-400">Years since IT Act 2000</div>
                </div>
              </div>
              
              {/* CTA Section */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all shadow-lg">
                  Get Started
                </button>
                <button className="border border-slate-600 hover:border-blue-500 text-slate-300 hover:text-white px-8 py-3 rounded-lg font-medium transition-all hover:bg-slate-800/50">
                  Learn More
                </button>
              </div>
            </div>
            
            {/* Right Visual - Takes 5 columns */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              {/* Enhanced Visual */}
              <div className="relative w-96 h-96 lg:w-[450px] lg:h-[450px]">
                <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl p-6 border border-slate-600 shadow-2xl">
                  <img 
                    src="/PhoneMail Image 1.png" 
                    alt="PhoneMail Interface" 
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                {/* Enhanced Floating Elements */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg font-semibold shadow-xl">
                  ✓ Secure
                </div>
                <div className="absolute -top-4 right-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg font-semibold shadow-xl">
                  Live
                </div>
                <div className="absolute top-1/2 -left-6 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-3 py-1 rounded-md text-sm font-medium shadow-lg rotate-90">
                  New
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity - Bento Grid */}
      <section id="market" className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-6">
                The Critical Gap
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                25 years after legal recognition, email remains irrelevant for most Indians
              </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-auto lg:h-[600px]">
              
              {/* Large Card - Current State */}
              <div className="lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl p-8 border border-slate-600 shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mr-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Current State</h3>
                </div>
                <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                  It's 2025. We have smartphones in every pocket, yet legal notices, tax orders, and transfer letters still arrive by post.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-red-400 mr-3" />
                    <span className="text-slate-300">66% of Indians don't use email</span>
                  </div>
                  <div className="flex items-center">
                    <Smartphone className="w-5 h-5 text-red-400 mr-3" />
                    <span className="text-slate-300">Most accounts exist only for phone setup</span>
                  </div>
                  <div className="flex items-center">
                    <Building className="w-5 h-5 text-red-400 mr-3" />
                    <span className="text-slate-300">Limited to office goers & students</span>
                  </div>
                </div>
              </div>

              {/* Medium Card - The Reason */}
              <div className="lg:col-span-2 bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl p-6 border border-slate-600 shadow-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mr-3">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">The Reason</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Mail className="w-4 h-4 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">No identity verification - anyone can create rajesh.1234@gmail.com</span>
                  </div>
                  <div className="flex items-start">
                    <Lock className="w-4 h-4 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">Complex passwords, recovery steps lock out non-tech users</span>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-3xl p-6 border border-blue-500/30 shadow-2xl">
                <div className="text-center">
                  <BarChart3 className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">25+</div>
                  <div className="text-sm text-blue-300">Years since IT Act 2000</div>
                </div>
              </div>

              {/* Impact Card */}
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-3xl p-6 border border-purple-500/30 shadow-2xl">
                <div className="text-center">
                  <Target className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">66%</div>
                  <div className="text-sm text-purple-300">Rural population excluded</div>
                </div>
              </div>

              {/* Large Result Card */}
              <div className="lg:col-span-2 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-3xl p-8 border border-emerald-500/20 shadow-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">The Result</h3>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed">
                  <span className="text-emerald-400 font-semibold">Paper and post remain the default.</span> There's still no universal digital channel for official communication. The gap is massive and growing.
                </p>
                <div className="mt-6 flex items-center">
                  <Globe className="w-5 h-5 text-emerald-400 mr-3" />
                  <span className="text-slate-300">Opportunity for digital transformation</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Solution Deep Dive */}
      <section id="solution" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                The PhoneMail Solution
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Identity-linked email system that transforms how official documents reach every Indian citizen
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-12">
              <div className="bg-gray-700 rounded-xl p-1 flex">
                <button 
                  onClick={() => setActiveTab('overview')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${activeTab === 'overview' ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-blue-400 shadow-sm' : 'text-gray-300 hover:text-white'}`}
                >
                  Overview
                </button>
                <button 
                  onClick={() => setActiveTab('technology')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${activeTab === 'technology' ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-blue-400 shadow-sm' : 'text-gray-300 hover:text-white'}`}
                >
                  Technology
                </button>
                <button 
                  onClick={() => setActiveTab('business')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${activeTab === 'business' ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-blue-400 shadow-sm' : 'text-gray-300 hover:text-white'}`}
                >
                  Business Model
                </button>
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <div className="grid lg:grid-cols-3 gap-8 mb-16">
                <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 shadow-lg border border-gray-600">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <Smartphone className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Identity-Linked System</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Phone numbers already Aadhaar-linked and registered with banks, retailers, and government. 
                    Creates a universal receipt ID for any official document.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 shadow-lg border border-gray-600">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Mass Market Accessibility</h3>
                  <p className="text-gray-300 leading-relaxed">
                    WhatsApp-like simplicity for rural users, eliminating complex IDs, passwords, and literacy barriers. 
                    Built for the 900M+ Indians currently excluded from digital communication.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 shadow-lg border border-gray-600">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Legal Compliance</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Fully legal, EDI-compliant email service. Operates within existing IT Act framework 
                    while providing secure document delivery and cloud storage.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'technology' && (
              <div className="space-y-8 mb-16">
                <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 shadow-lg border border-gray-600">
                  <h3 className="text-2xl font-semibold text-white mb-6">Technical Architecture</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Core Infrastructure</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <Lock className="w-5 h-5 text-blue-600 mt-0.5" />
                          <span className="text-gray-300">End-to-end encryption for all documents</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Globe className="w-5 h-5 text-blue-600 mt-0.5" />
                          <span className="text-gray-300">Cloud-based storage with instant sync</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Zap className="w-5 h-5 text-blue-600 mt-0.5" />
                          <span className="text-gray-300">Real-time document delivery</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Platform Features</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <FileText className="w-5 h-5 text-blue-600 mt-0.5" />
                          <span className="text-gray-300">Multi-format document support</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Building className="w-5 h-5 text-blue-600 mt-0.5" />
                          <span className="text-gray-300">Desktop and mobile applications</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                          <span className="text-gray-300">Automatic government integration ready</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'business' && (
              <div className="space-y-8 mb-16">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 shadow-lg border border-gray-600">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                      <DollarSign className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">Revenue Streams</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li>• Government partnerships for official communications</li>
                      <li>• Enterprise document delivery services</li>
                      <li>• Premium storage and organization features</li>
                      <li>• API licensing to institutions</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 shadow-lg border border-gray-600">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                      <Target className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">Go-to-Market Strategy</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li>• Partner with government departments first</li>
                      <li>• Scale through banking and healthcare sectors</li>
                      <li>• Rural expansion via digital literacy programs</li>
                      <li>• Enterprise adoption for employee communications</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                Why PhoneMail Wins
              </h2>
              <p className="text-xl text-gray-300">
                Unique positioning in the Indian digital communication landscape
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="font-semibold text-white mb-2">vs. Traditional Email (Gmail, Yahoo)</h4>
                  <p className="text-gray-300">
                    Gmail is built for the corporate world. PhoneMail is built for the people — 
                    treating email as the digital version of postal mail, accessible to all literacy levels.
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="font-semibold text-white mb-2">vs. DigiLocker</h4>
                  <p className="text-gray-300">
                    DigiLocker stores a few government documents. PhoneMail is your single inbox 
                    for every official document. One platform, all documents, no multiple apps.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="font-semibold text-white mb-2">vs. WhatsApp</h4>
                  <p className="text-gray-300">
                    WhatsApp isn't legal for official documents and isn't built to organize them. 
                    PhoneMail is purpose-built for secure document delivery, management, and storage.
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="font-semibold text-white mb-2">Proven Concept</h4>
                  <p className="text-gray-300">
                    Identity-linked email already works in closed systems (colleges use roll numbers as email IDs). 
                    PhoneMail scales this proven concept nationwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to know about PhoneMail
              </p>
            </div>
            
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl shadow-2xl border border-slate-600/30 backdrop-blur-xl overflow-hidden relative">

                  <button
                    onClick={() => toggleFAQ(index)}
                    className="relative w-full p-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-slate-700/50 hover:to-slate-600/50 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <h4 className="text-lg font-semibold text-white pr-4">{faq.question}</h4>
                    <div className="flex-shrink-0">
                      {openFAQ === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-300" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-300" />
                      )}
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market Timing */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">Phone Mail the solution</h2>
                <p className="text-xl opacity-90 max-w-3xl mx-auto">
                  PhoneMail is an identity-linked email system that uses your phone number as your email ID.
                </p>
              </div>
              
              <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <span className="text-white font-bold text-xl bg-white/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</span>
                    <p className="text-lg opacity-90">Phone number is already Aadhaar-linked and registered with banks, retailers, and the government.</p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <span className="text-white font-bold text-xl bg-white/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</span>
                    <p className="text-lg opacity-90">This makes PhoneMail a universal receipt ID for any document — transfer letters, court orders, bills, lab reports.</p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <span className="text-white font-bold text-xl bg-white/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</span>
                    <p className="text-lg opacity-90">Built with WhatsApp-like simplicity for rural users, but operates as a fully legal, EDI-compliant email service.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Vision & Investment CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">Our Vision</h2>
              <div className="text-2xl md:text-3xl font-light text-blue-600 mb-6">
                End Paper. Go Fully Digital.
              </div>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                We're building a future where every document in India — from court orders to utility bills — 
                moves instantly and securely online. No more papers lost, no more postal delays. 
                Just fast, verifiable, digital transactions powering the next wave of Digital India.
              </p>
            </div>
            
            {/* Investment CTA */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 shadow-lg border border-gray-600">
              <h3 className="text-2xl font-semibold text-white mb-6">Join the Digital Revolution</h3>
              <p className="text-lg text-gray-300 mb-8">
                Ready to transform how 1.4 billion Indians receive official communication? 
                Let's discuss how PhoneMail can capture this massive market opportunity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg hover:shadow-xl">
                  Schedule Investor Call
                </button>
                <button className="border-2 border-gray-400 hover:border-blue-400 text-gray-300 hover:text-blue-400 px-8 py-4 rounded-xl font-medium transition-all flex items-center justify-center">
                  Download Executive Summary <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
              
              {/* Key Metrics for Investors */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">₹10B+</div>
                  <div className="text-sm text-gray-300">Market Size</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">900M+</div>
                  <div className="text-sm text-gray-300">Target Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">5B+</div>
                  <div className="text-sm text-gray-300">Documents/Year</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">Zero</div>
                  <div className="text-sm text-gray-300">Direct Competitors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-6">
                Real-World Applications
              </h2>
              <p className="text-xl text-slate-300">
                Every document that currently arrives by post becomes instant and digital
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 shadow-2xl border border-slate-600 hover:shadow-xl transition-all hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Government Documents</h3>
                <ul className="text-slate-300 space-y-1 text-sm">
                  <li>• Tax assessment orders</li>
                  <li>• Transfer letters</li>
                  <li>• Legal notices</li>
                  <li>• Court orders</li>
                  <li>• Pension documents</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 shadow-2xl border border-slate-600 hover:shadow-xl transition-all hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Financial Services</h3>
                <ul className="text-slate-300 space-y-1 text-sm">
                  <li>• Bank statements</li>
                  <li>• Loan approvals</li>
                  <li>• Insurance policies</li>
                  <li>• Credit card bills</li>
                  <li>• Investment reports</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 shadow-2xl border border-slate-600 hover:shadow-xl transition-all hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Healthcare & Utilities</h3>
                <ul className="text-slate-300 space-y-1 text-sm">
                  <li>• Lab reports</li>
                  <li>• Medical prescriptions</li>
                  <li>• Electricity bills</li>
                  <li>• Water/gas bills</li>
                  <li>• Property documents</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                Implementation Roadmap
              </h2>
              <p className="text-xl text-gray-300">
                Phased approach to market penetration and scaling
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 shadow-lg border border-gray-600 relative">
                <div className="absolute -top-4 left-8 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  Phase 1
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 mt-4">Government Partnerships</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Pilot with select government departments</li>
                  <li>• Establish compliance and security standards</li>
                  <li>• Build initial user base</li>
                  <li>• Prove concept at scale</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 shadow-lg border border-gray-600 relative">
                <div className="absolute -top-4 left-8 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  Phase 2
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 mt-4">Enterprise Expansion</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Banking sector integration</li>
                  <li>• Healthcare system adoption</li>
                  <li>• Utility company partnerships</li>
                  <li>• Enterprise customer onboarding</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 shadow-lg border border-gray-600 relative">
                <div className="absolute -top-4 left-8 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  Phase 3
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 mt-4">Mass Market Scale</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Rural market penetration</li>
                  <li>• Complete government integration</li>
                  <li>• Pan-India document digitization</li>
                  <li>• International expansion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl p-8 md:p-12 border border-gray-600">
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                Ready to revolutionize India's digital infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join us in building the universal digital communication platform for 1.4 billion Indians. 
                The market is ready. The technology exists. The opportunity is now.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-medium transition-all shadow-lg hover:shadow-xl text-lg">
                  Invest in PhoneMail
                </button>
                <button className="border-2 border-gray-400 hover:border-blue-400 text-gray-300 hover:text-blue-400 px-10 py-4 rounded-xl font-medium transition-all flex items-center justify-center text-lg">
                  Contact Founders <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-600">
                <p className="text-gray-400 text-sm">
                  Transforming postal mail to email • Making digital India truly inclusive • Building the future of official communication
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default PhoneMailHero;