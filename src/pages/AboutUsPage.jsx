import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AboutUsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Atharv Residency - About Us & Management";
  }, []);

  return (
    <div className="bg-zinc-950 text-zinc-100 antialiased selection:bg-amber-500 selection:text-zinc-950 flex flex-col min-h-screen">
      {/* Header with Glassmorphism Effect */}
      <header className="fixed top-0 left-0 w-full z-50 text-zinc-100 bg-zinc-950/40 backdrop-blur-md border-b border-zinc-800/60 transition-all duration-300">
        <div className="container mx-auto flex items-center justify-between p-4 px-6">
          {/* Brand / Logo */}
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-3 text-sm font-medium">
            <Link
              to="/"
              className="px-5 py-2 border border-zinc-700/80 rounded-full text-zinc-300 bg-zinc-900/60 backdrop-blur-sm hover:bg-amber-500 hover:text-zinc-950 hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="px-5 py-2 border border-amber-500 text-zinc-950 bg-amber-500 rounded-full font-semibold shadow-lg shadow-amber-500/20 transition-all duration-200"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="px-5 py-2 border border-zinc-700/80 rounded-full text-zinc-300 bg-zinc-900/60 backdrop-blur-sm hover:bg-amber-500 hover:text-zinc-950 hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
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
          <Link to="/about" className="px-4 py-2 text-amber-400 font-semibold bg-zinc-900 rounded-lg">
            About Us
          </Link>
          <Link to="/contact" className="px-4 py-2 text-zinc-300 hover:text-amber-400 hover:bg-zinc-900 rounded-lg">
            Contact Us
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Glow backdrops */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 right-10 w-72 h-72 bg-amber-400/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold tracking-wide uppercase mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            Admissions Open For 2026 Academic Year
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              Our Management
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Managing student hostel life at Atharv Since 2022.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="w-full sm:w-auto px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold rounded-full shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Explore Accommodations
            </Link>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 pt-10 border-t border-zinc-800/80">
            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
              <div id="beds-counter" className="text-3xl font-extrabold text-amber-400">
                100+
              </div>
              <div className="text-xs text-zinc-400 mt-1 uppercase tracking-wider">Beds</div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
              <div className="text-3xl font-extrabold text-amber-400">24/7</div>
              <div className="text-xs text-zinc-400 mt-1 uppercase tracking-wider">Security & CCTV</div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
              <div className="text-3xl font-extrabold text-amber-400">100 Mbps</div>
              <div className="text-xs text-zinc-400 mt-1 uppercase tracking-wider">High-Speed Wi-Fi</div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
              <div className="text-3xl font-extrabold text-amber-400">100%</div>
              <div className="text-xs text-zinc-400 mt-1 uppercase tracking-wider">Hygienic Mess</div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Showcase Section */}
      <section className="py-16 bg-zinc-950/60 border-t border-b border-zinc-800/80">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-amber-400">Life At Atharv</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-6">Designed For Growth and Comfort</h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                At Atharv Residency, we create spaces where students excel academically while enjoying a safe, enriching community environment. From smart study rooms to green courtyards and gourmet dining, every facility is thoughtfully maintained.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Biometric Entry & Safe Campus</h4>
                    <p className="text-sm text-zinc-400">Multi-tier security with round-the-clock warden supervision and monitored access.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Nutritious 3-Course Dining</h4>
                    <p className="text-sm text-zinc-400">FSSAI compliant kitchen preparing balanced vegetarian and healthy meal options daily.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Peaceful Study Zones</h4>
                    <p className="text-sm text-zinc-400">Quiet air-conditioned study spaces equipped with individual reading desks and charging ports.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link to="/contact" className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300">
                  Schedule a Campus Tour <span>&rarr;</span>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl group">
                <img
                  src="/pages/image.png"
                  alt="Atharv Residency Campus Courtyard"
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-zinc-900/80 backdrop-blur-md border border-zinc-800">
                  <p className="text-white font-medium text-sm">Atharv Modern Living Complex</p>
                  <p className="text-xs text-zinc-400">Landscaped courtyard, high-speed Wi-Fi, and resident amenities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="mt-auto text-zinc-400 body-font bg-zinc-950 border-t border-zinc-900">
        <div className="container px-6 py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
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

          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4 mb-6">
              <h2 className="title-font font-semibold text-zinc-200 tracking-wider text-xs uppercase mb-4">QUICK NAVIGATION</h2>
              <nav className="list-none space-y-2 text-sm">
                <li><Link to="/" className="text-zinc-400 hover:text-amber-400 transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-zinc-400 hover:text-amber-400 transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-zinc-400 hover:text-amber-400 transition-colors">Contact Us</Link></li>
              </nav>
            </div>

            <div className="lg:w-1/3 md:w-1/2 w-full px-4 mb-6">
              <h2 className="title-font font-semibold text-zinc-200 tracking-wider text-xs uppercase mb-4">CONTACT & SUPPORT</h2>
              <p className="text-sm text-zinc-400 mb-2">Campus Road, Student Hub</p>
              <p className="text-sm text-zinc-400 mb-2">atharvresidency@gmail.com</p>
              <p className="text-sm text-zinc-400">+91 98765 43210</p>
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
              <a href="#" className="text-zinc-500 hover:text-amber-400 transition-colors" aria-label="Facebook">
                <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-zinc-500 hover:text-amber-400 transition-colors" aria-label="Twitter">
                <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-zinc-500 hover:text-amber-400 transition-colors" aria-label="Instagram">
                <svg fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

