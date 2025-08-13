import React, { useState, useEffect } from "react";
import { ArrowRight, Smartphone, Mail, Shield, Users, TrendingUp, CheckCircle, Building, Globe, Zap, Lock, FileText, Clock, BarChart3, Target, DollarSign } from "lucide-react";

const PhoneMailHero = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentText, setCurrentText] = useState('POSTAL Mail');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText(prev => prev === 'POSTAL Mail' ? 'E Mail' : 'POSTAL Mail');
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-semibold text-foreground">PhoneMail</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#solution" className="text-muted-foreground hover:text-primary transition-colors font-medium">Solution</a>
            <a href="#market" className="text-muted-foreground hover:text-primary transition-colors font-medium">Market</a>
            <a href="#technology" className="text-muted-foreground hover:text-primary transition-colors font-medium">Technology</a>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-lg transition-colors font-medium">
              Request Demo
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <TrendingUp className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">
              Digital India Transformation • Series A Opportunity
            </span>
          </div>
          
          {/* Main Headline */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-4">
                  <span className="text-blue-500 font-medium">PHONEMAIL</span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-white/90 mb-6">
                  A Mailbox in Every Pocket
                </h2>
                <div className="text-lg text-white font-medium mb-6">
                  POSTAL Mail → E Mail
                </div>
                <p className="text-xl text-white/80 leading-relaxed">
                  Identity-linked email system using phone numbers as email IDs. 
                  <span className="text-white font-medium"> Serving 900M+ underserved Indians with secure, legal digital communication.</span>
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white hover:bg-white/90 text-black px-8 py-4 rounded-xl font-medium transition-all shadow-lg hover:shadow-xl">
                  Schedule Investor Meeting
                </button>
                <button className="border-2 border-white/20 hover:border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-medium transition-all flex items-center justify-center">
                  Download Pitch Deck <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Visual Mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 max-w-sm mx-auto">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                      <span className="font-semibold text-gray-900">+91 98765 43210</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-gray-500">Online</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                        <div className="text-sm font-medium text-gray-900">Income Tax Department</div>
                        <div className="text-xs text-gray-600">Assessment Order - FY 2024-25</div>
                        <div className="text-xs text-blue-600 mt-1">📄 View Document</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-300">
                        <div className="text-sm font-medium text-gray-900">State Bank of India</div>
                        <div className="text-xs text-gray-600">Account Statement - January</div>
                        <div className="text-xs text-gray-500 mt-1">📄 Stored Securely</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-300">
                        <div className="text-sm font-medium text-gray-900">District Collector Office</div>
                        <div className="text-xs text-gray-600">Property Transfer Certificate</div>
                        <div className="text-xs text-gray-500 mt-1">📄 Archived</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section id="market" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Massive Market Opportunity
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                India's digital transformation creates a $10B+ addressable market for secure document delivery
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">1.4B</div>
                <div className="text-gray-700 font-medium">Total Population</div>
                <div className="text-sm text-gray-500 mt-1">Potential Users</div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">900M+</div>
                <div className="text-gray-700 font-medium">Underserved Users</div>
                <div className="text-sm text-gray-500 mt-1">No effective email access</div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">5B+</div>
                <div className="text-gray-700 font-medium">Documents/Year</div>
                <div className="text-sm text-gray-500 mt-1">Currently sent by post</div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">₹10B+</div>
                <div className="text-gray-700 font-medium">Market Size</div>
                <div className="text-sm text-gray-500 mt-1">Digital communication</div>
              </div>
            </div>

            {/* Problem Deep Dive */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">The Critical Gap</h3>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Current State</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span className="text-gray-600">66% of Indians (rural population) don't use email</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span className="text-gray-600">Most email accounts exist only for phone setup</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span className="text-gray-600">Email IDs aren't tied to real identity or government records</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span className="text-gray-600">Complex interfaces lock out non-tech-savvy users</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">PhoneMail Solution</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-gray-600">Phone number = Email ID (already Aadhaar-linked)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-gray-600">WhatsApp-like simplicity for rural users</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-gray-600">Fully legal, EDI-compliant email service</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-gray-600">Universal document delivery platform</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Deep Dive */}
      <section id="solution" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                The PhoneMail Solution
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Identity-linked email system that transforms how official documents reach every Indian citizen
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-12">
              <div className="bg-gray-100 rounded-xl p-1 flex">
                <button 
                  onClick={() => setActiveTab('overview')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${activeTab === 'overview' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  Overview
                </button>
                <button 
                  onClick={() => setActiveTab('technology')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${activeTab === 'technology' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  Technology
                </button>
                <button 
                  onClick={() => setActiveTab('business')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${activeTab === 'business' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  Business Model
                </button>
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <div className="grid lg:grid-cols-3 gap-8 mb-16">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <Smartphone className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Identity-Linked System</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Phone numbers already Aadhaar-linked and registered with banks, retailers, and government. 
                    Creates a universal receipt ID for any official document.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Mass Market Accessibility</h3>
                  <p className="text-gray-600 leading-relaxed">
                    WhatsApp-like simplicity for rural users, eliminating complex IDs, passwords, and literacy barriers. 
                    Built for the 900M+ Indians currently excluded from digital communication.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Legal Compliance</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Fully legal, EDI-compliant email service. Operates within existing IT Act framework 
                    while providing secure document delivery and cloud storage.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'technology' && (
              <div className="space-y-8 mb-16">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Technical Architecture</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Core Infrastructure</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <Lock className="w-5 h-5 text-blue-600 mt-0.5" />
                          <span className="text-gray-600">End-to-end encryption for all documents</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Globe className="w-5 h-5 text-blue-600 mt-0.5" />
                          <span className="text-gray-600">Cloud-based storage with instant sync</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Zap className="w-5 h-5 text-blue-600 mt-0.5" />
                          <span className="text-gray-600">Real-time document delivery</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Platform Features</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <FileText className="w-5 h-5 text-blue-600 mt-0.5" />
                          <span className="text-gray-600">Multi-format document support</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Building className="w-5 h-5 text-blue-600 mt-0.5" />
                          <span className="text-gray-600">Desktop and mobile applications</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                          <span className="text-gray-600">Automatic government integration ready</span>
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
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                      <DollarSign className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Revenue Streams</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li>• Government partnerships for official communications</li>
                      <li>• Enterprise document delivery services</li>
                      <li>• Premium storage and organization features</li>
                      <li>• API licensing to institutions</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                      <Target className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Go-to-Market Strategy</h3>
                    <ul className="space-y-3 text-gray-600">
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
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Why PhoneMail Wins
              </h2>
              <p className="text-xl text-gray-600">
                Unique positioning in the Indian digital communication landscape
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="font-semibold text-gray-900 mb-2">vs. Traditional Email (Gmail, Yahoo)</h4>
                  <p className="text-gray-600">
                    Gmail is built for the corporate world. PhoneMail is built for the people — 
                    treating email as the digital version of postal mail, accessible to all literacy levels.
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="font-semibold text-gray-900 mb-2">vs. DigiLocker</h4>
                  <p className="text-gray-600">
                    DigiLocker stores a few government documents. PhoneMail is your single inbox 
                    for every official document. One platform, all documents, no multiple apps.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="font-semibold text-gray-900 mb-2">vs. WhatsApp</h4>
                  <p className="text-gray-600">
                    WhatsApp isn't legal for official documents and isn't built to organize them. 
                    PhoneMail is purpose-built for secure document delivery, management, and storage.
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Proven Concept</h4>
                  <p className="text-gray-600">
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
      <section id="faq" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Common questions from investors and potential users
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">What if I have multiple phone numbers?</h4>
                <p className="text-gray-600">
                  Like postal mail — you may own multiple houses, but mail goes to where you live. 
                  PhoneMail delivers to the phone number linked to your Aadhaar, ensuring a single, verified destination.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Can I use it on a laptop?</h4>
                <p className="text-gray-600">
                  Yes. Log in from your laptop via desktop app or web with QR code scan. 
                  Works like WhatsApp in connectivity but built on EDI and email standards.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">What about phone changes?</h4>
                <p className="text-gray-600">
                  All documents are securely stored in the cloud. Enter your phone number on your new device, 
                  and everything is instantly restored.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">What's required for signup?</h4>
                <p className="text-gray-600">
                  At launch: basic details like your name. Future government integration will auto-fetch 
                  name, date of birth, and other details using your mobile number — making setup automatic and instant.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Doesn't everyone already have email?</h4>
                <p className="text-gray-600">
                  Most email IDs exist only for phone setup. Many don't even know they have one — 
                  it's just there for Play Store access, not for secure, legal communication as email was designed for.
                </p>
              </div>
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
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">Perfect Market Timing</h2>
                <p className="text-xl opacity-90 max-w-3xl mx-auto">
                  Three converging trends create an unprecedented opportunity
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Digital India Push</h3>
                  <p className="opacity-90">Massive government and public sector digitization initiatives driving demand</p>
                </div>
                
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Universal Smartphone Access</h3>
                  <p className="opacity-90">High penetration even in rural areas, creating ready infrastructure</p>
                </div>
                
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Legal Framework Ready</h3>
                  <p className="opacity-90">Infrastructure exists under IT Act — just underutilized and inaccessible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Vision & Investment CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">Our Vision</h2>
              <div className="text-2xl md:text-3xl font-light text-blue-600 mb-6">
                End Paper. Go Fully Digital.
              </div>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                We're building a future where every document in India — from court orders to utility bills — 
                moves instantly and securely online. No more papers lost, no more postal delays. 
                Just fast, verifiable, digital transactions powering the next wave of Digital India.
              </p>
            </div>
            
            {/* Investment CTA */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Join the Digital Revolution</h3>
              <p className="text-lg text-gray-600 mb-8">
                Ready to transform how 1.4 billion Indians receive official communication? 
                Let's discuss how PhoneMail can capture this massive market opportunity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg hover:shadow-xl">
                  Schedule Investor Call
                </button>
                <button className="border-2 border-gray-200 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-xl font-medium transition-all flex items-center justify-center">
                  Download Executive Summary <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
              
              {/* Key Metrics for Investors */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">₹10B+</div>
                  <div className="text-sm text-gray-600">Market Size</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">900M+</div>
                  <div className="text-sm text-gray-600">Target Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">5B+</div>
                  <div className="text-sm text-gray-600">Documents/Year</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">Zero</div>
                  <div className="text-sm text-gray-600">Direct Competitors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-600">
                Every document that currently arrives by post becomes instant and digital
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Government Documents</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Tax assessment orders</li>
                  <li>• Transfer letters</li>
                  <li>• Legal notices</li>
                  <li>• Court orders</li>
                  <li>• Pension documents</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Financial Services</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Bank statements</li>
                  <li>• Loan approvals</li>
                  <li>• Insurance policies</li>
                  <li>• Credit card bills</li>
                  <li>• Investment reports</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Healthcare & Utilities</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Implementation Roadmap
              </h2>
              <p className="text-xl text-gray-600">
                Phased approach to market penetration and scaling
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative">
                <div className="absolute -top-4 left-8 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  Phase 1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-4">Government Partnerships</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Pilot with select government departments</li>
                  <li>• Establish compliance and security standards</li>
                  <li>• Build initial user base</li>
                  <li>• Prove concept at scale</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative">
                <div className="absolute -top-4 left-8 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  Phase 2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-4">Enterprise Expansion</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Banking sector integration</li>
                  <li>• Healthcare system adoption</li>
                  <li>• Utility company partnerships</li>
                  <li>• Enterprise customer onboarding</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative">
                <div className="absolute -top-4 left-8 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  Phase 3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-4">Mass Market Scale</h3>
                <ul className="space-y-2 text-gray-600">
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
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-blue-100">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Ready to revolutionize India's digital infrastructure?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join us in building the universal digital communication platform for 1.4 billion Indians. 
                The market is ready. The technology exists. The opportunity is now.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-medium transition-all shadow-lg hover:shadow-xl text-lg">
                  Invest in PhoneMail
                </button>
                <button className="border-2 border-gray-200 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-10 py-4 rounded-xl font-medium transition-all flex items-center justify-center text-lg">
                  Contact Founders <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
              
              <div className="mt-8 pt-8 border-t border-blue-200">
                <p className="text-gray-500 text-sm">
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