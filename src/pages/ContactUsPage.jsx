import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ContactUsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [feedback, setFeedback] = useState({ message: '', type: '' });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Atharv Residency - Contact Us & Admissions";
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFeedback({
        message: 'Please fill in all required fields (Name, Email, and Message).',
        type: 'error'
      });
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFeedback({
        message: 'Thank you for reaching out! Our admissions desk has received your message and will respond within 24 hours.',
        type: 'success'
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 600);
  };

  return (
    <div className="bg-zinc-950 text-zinc-100 antialiased selection:bg-amber-500 selection:text-zinc-950 flex flex-col min-h-screen">
      {/* Fixed Glassmorphism Header */}
      <header className="fixed top-0 left-0 w-full z-50 text-zinc-100 bg-zinc-950/40 backdrop-blur-md border-b border-zinc-800/60 transition-all duration-300">
        <div className="container mx-auto flex items-center justify-between p-4 px-6">
          {/* Brand / Logo */}
          <Link to="/" className="flex title-font font-medium items-center text-white group cursor-pointer gap-3">
            <img
              src="/pages/logo.png"
              alt="Atharv Residency Logo"
              className="w-10 h-10 rounded-full border border-amber-500/30 group-hover:scale-105 transition-transform duration-300 shadow-md shadow-amber-500/10"
            />
            <div>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent group-hover:text-amber-400 transition-colors">
                Atharv
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-amber-400 font-semibold">
                RESIDENCY
              </span>
            </div>
          </Link>

          {/* Navigation Buttons (Desktop) */}
          <nav className="hidden md:flex flex-wrap items-center text-sm font-medium justify-center gap-3">
            <Link
              to="/"
              className="px-5 py-2 border border-zinc-700/80 rounded-full text-zinc-300 bg-zinc-900/60 backdrop-blur-sm hover:bg-amber-500 hover:text-zinc-950 hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="px-5 py-2 border border-zinc-700/80 rounded-full text-zinc-300 bg-zinc-900/60 backdrop-blur-sm hover:bg-amber-500 hover:text-zinc-950 hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="px-5 py-2 border border-amber-500 text-zinc-950 bg-amber-500 rounded-full font-semibold shadow-lg shadow-amber-500/20 transition-all duration-200"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-amber-400 hover:bg-zinc-900 focus:outline-none"
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          id="mobile-menu"
          className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:hidden bg-zinc-950/95 border-b border-zinc-800 px-6 py-4 flex-col gap-3`}
        >
          <Link to="/" className="px-4 py-2 text-zinc-300 hover:text-amber-400 hover:bg-zinc-900 rounded-lg">
            Home
          </Link>
          <Link to="/about" className="px-4 py-2 text-zinc-300 hover:text-amber-400 hover:bg-zinc-900 rounded-lg">
            About Us
          </Link>
          <Link to="/contact" className="px-4 py-2 text-amber-400 font-semibold bg-zinc-900 rounded-lg">
            Contact Us
          </Link>
        </div>
      </header>

      {/* Contact Section */}
      <main className="flex-grow pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Get in Touch with <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">Atharv Residency</span>
            </h1>
            <p className="text-zinc-400 text-base md:text-lg">
              Got questions about room booking, mess amenities, or hostel policies? Send us a message or contact our campus office directly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Contact Form Column (7 cols) */}
            <div className="lg:col-span-7 bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 sm:p-10 shadow-2xl backdrop-blur-md">
              <h2 className="text-xl font-bold text-white mb-2">Contact us</h2>
              <p className="text-xs text-zinc-400 mb-8">Fill in your information and our admissions team will respond within 24 hours.</p>

              {/* Contact Feedback Area */}
              {feedback.message && (
                <div
                  id="contact-feedback"
                  className={`p-4 rounded-xl text-sm font-medium mb-6 border ${
                    feedback.type === 'success'
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                      : 'bg-red-500/10 text-red-400 border-red-500/20'
                  }`}
                >
                  {feedback.message}
                </div>
              )}

              <form id="contact-form" className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 bg-zinc-950/80 border border-zinc-700/80 rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-200"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3 bg-zinc-950/80 border border-zinc-700/80 rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone Input */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3 bg-zinc-950/80 border border-zinc-700/80 rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-200"
                    />
                  </div>

                  {/* Subject Dropdown */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-950/80 border border-zinc-700/80 rounded-xl text-zinc-300 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-200"
                    >
                      <option value="">Select Inquiry Topic</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Room Booking & Admission">Room Booking & Admission</option>
                      <option value="Mess & Food Facilities">Mess & Food Facilities</option>
                      <option value="Fee & Payment Inquiries">Fee & Payment Inquiries</option>
                      <option value="Campus Visit Request">Campus Visit Request</option>
                      <option value="Grievance / Feedback">Grievance / Feedback</option>
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us what you are looking for..."
                    className="w-full px-4 py-3 bg-zinc-950/80 border border-zinc-700/80 rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-200"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className={`w-full py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm tracking-wide shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ${
                    submitting ? 'opacity-60 cursor-not-allowed' : ''
                  }`}
                >
                  {submitting ? 'Sending...' : 'Send Message \u2192'}
                </button>
              </form>
            </div>

            {/* Contact Details & Campus Office (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Office Location Card */}
              <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">Campus Location</h3>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Atharv Residency,<br />
                  Student Hub Road, Near MUJ Bagru,<br />
                  Jaipur, Rajasthan - 303007
                </p>
              </div>

              {/* Contact Direct Info */}
              <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">Helpdesk & Phone</h3>
                </div>
                <div className="space-y-2 text-sm text-zinc-400">
                  <p><span className="text-zinc-500">Admissions:</span> +91 98765 43210</p>
                  <p><span className="text-zinc-500">Warden Desk:</span> +91 98765 43211</p>
                  <p className="text-xs text-zinc-500 pt-2">Available: Monday to Saturday (9:00 AM - 7:00 PM)</p>
                </div>
              </div>

              {/* Email Support */}
              <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">Email Inquiries</h3>
                </div>
                <div className="space-y-2 text-sm text-zinc-400">
                  <p><span className="text-zinc-500">General:</span> atharvresidency@gmail.com</p>
                  <p><span className="text-zinc-500">Admissions:</span> admissions@atharvresidency.com</p>
                  <p className="text-xs text-zinc-500 pt-2">24/7 student inquiry inbox</p>
                </div>
              </div>

              {/* Visiting Hours Callout */}
              <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 text-xl font-bold">ℹ️</span>
                  <div>
                    <h4 className="text-amber-400 font-semibold text-sm">Campus Visits</h4>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                      Parents and students are welcome for campus walk-throughs Monday to Saturday from 9:00 AM to 6:00 PM. Prior appointment recommended.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Main Footer */}
      <footer className="mt-auto text-zinc-400 body-font bg-zinc-950 border-t border-zinc-900">
        <div className="container px-6 py-14 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-72 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link to="/" className="flex title-font font-medium items-center md:justify-start justify-center text-white group cursor-pointer gap-3">
              <img src="/pages/logo.png" alt="Atharv Residency Logo" className="w-10 h-10 rounded-full border border-amber-500/30" />
              <span className="text-xl font-semibold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                Atharv Residency
              </span>
            </Link>
            <p className="mt-3 text-sm text-zinc-500 leading-relaxed">
              Premium living spaces curated for modern students and focused professionals.
            </p>
          </div>

          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-8 md:text-left text-center">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4 mb-6">
              <h2 className="title-font font-semibold text-zinc-200 tracking-wider text-xs uppercase mb-4">NAVIGATION</h2>
              <nav className="list-none space-y-2 text-sm">
                <li><Link to="/" className="text-zinc-400 hover:text-amber-400 transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-zinc-400 hover:text-amber-400 transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-zinc-400 hover:text-amber-400 transition-colors">Contact Us</Link></li>
              </nav>
            </div>

            <div className="lg:w-1/3 md:w-1/2 w-full px-4 mb-6">
              <h2 className="title-font font-semibold text-zinc-200 tracking-wider text-xs uppercase mb-4">CAMPUS DESK</h2>
              <p className="text-sm text-zinc-400 mb-1">atharvresidency@gmail.com</p>
              <p className="text-sm text-zinc-400 mb-1">+91 98765 43210</p>
              <p className="text-xs text-zinc-500">Available Mon-Sat 9am-6pm</p>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="bg-black/60 border-t border-zinc-900">
          <div className="container mx-auto py-5 px-6 flex flex-wrap flex-col sm:flex-row items-center justify-between text-sm">
            <a href="mailto:atharvresidency@gmail.com" className="text-zinc-500 hover:text-amber-400 transition-colors">
              atharvresidency@gmail.com
            </a>
            <p className="text-zinc-400 my-2 sm:my-0">&copy; 2026 Atharv Residency. All rights reserved.</p>
            <span className="inline-flex gap-4">
              <a href="#" className="text-zinc-500 hover:text-amber-400 transition-colors" aria-label="Facebook"><svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a>
              <a href="#" className="text-zinc-500 hover:text-amber-400 transition-colors" aria-label="Twitter"><svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg></a>
              <a href="#" className="text-zinc-500 hover:text-amber-400 transition-colors" aria-label="Instagram"><svg fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path></svg></a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

