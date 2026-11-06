import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Atharv Residency - Accommodations & Living";
  }, []);

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
              className="px-5 py-2 border border-amber-500 text-zinc-950 bg-amber-500 rounded-full font-semibold shadow-lg shadow-amber-500/20 transition-all duration-200"
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
          <Link to="/" className="px-4 py-2 text-amber-400 font-semibold bg-zinc-900 rounded-lg">
            Home
          </Link>
          <Link to="/about" className="px-4 py-2 text-zinc-300 hover:text-amber-400 hover:bg-zinc-900 rounded-lg">
            About Us
          </Link>
          <Link to="/contact" className="px-4 py-2 text-zinc-300 hover:text-amber-400 hover:bg-zinc-900 rounded-lg">
            Contact Us
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="min-h-screen bg-cover bg-center bg-no-repeat relative flex flex-col justify-center px-6 pt-24"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=2000&q=80')"
        }}
      >
        {/* Gradient overlay for high legibility and contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/40 pointer-events-none"></div>

        <div className="container mx-auto relative z-10 max-w-5xl py-16">
          <h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-3"
            style={{ color: '#FFB224', textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8)' }}
          >
            Find Your Perfect
          </h1>

          <h2
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-8"
            style={{ color: '#FFB224', textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8)' }}
          >
            Home away from Home
          </h2>

          <p
            className="text-base sm:text-lg md:text-xl text-zinc-200 max-w-2xl mb-10 leading-relaxed drop-shadow"
          >
            Near Manipal University Jaipur, Bagru.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#rooms"
              className="px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold rounded-full shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              View Room Types
            </a>
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white font-semibold rounded-full border border-zinc-700/80 hover:border-amber-500/60 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Inquire Now
            </Link>
          </div>
        </div>
      </section>

      <hr className="border-t border-zinc-800/80" />

      {/* Accommodation Cards Section */}
      <section id="rooms" className="text-zinc-400 body-font bg-zinc-950 py-24">
        <div className="container px-6 mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs uppercase font-bold tracking-widest text-amber-400 mb-2">Accommodations</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Choose Your Living Space</h3>
            <p className="text-zinc-400 mt-4 text-base">
              Each room is furnished with individual wardrobes, ergonomic study tables, orthopedic mattresses, and high-speed Wi-Fi access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Single Bed Card */}
            <div className="h-full bg-zinc-900/60 border border-zinc-800 rounded-2xl overflow-hidden hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="overflow-hidden h-60 relative">
                  <img
                    src="/pages/image1.png"
                    alt="Single Bed Room"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-semibold uppercase text-amber-400 mb-1">Single Bed</h2>
                  <h1 className="title-font text-xl font-bold text-white mb-3">Independent Sanctuary</h1>
                  <p className="leading-relaxed mb-4 text-zinc-400 text-sm">
                    A private space designed for ultimate personal privacy and uninterrupted focus.
                  </p>

                  <ul className="text-xs text-zinc-400 space-y-1.5 mb-6 border-t border-zinc-800/80 pt-4">
                    <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Private En-Suite Washroom</li>
                    <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Dedicated Study Desk & Bookshelf</li>
                    <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> High-Efficiency Air Conditioning</li>
                  </ul>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link
                  to="/contact"
                  className="w-full text-center py-2.5 px-4 rounded-xl bg-zinc-800 hover:bg-amber-500 hover:text-zinc-950 text-zinc-200 font-semibold text-sm transition-all duration-200 inline-block"
                >
                  Reserve Room &rarr;
                </Link>
              </div>
            </div>

            {/* Double Bed Card */}
            <div className="h-full bg-zinc-900/60 border border-zinc-800 rounded-2xl overflow-hidden hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="overflow-hidden h-60 relative">
                  <img
                    src="/pages/image2.png"
                    alt="Double Bed Room"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-semibold uppercase text-amber-400 mb-1">Double Bed</h2>
                  <h1 className="title-font text-xl font-bold text-white mb-3">Collaborative Living</h1>
                  <p className="leading-relaxed mb-4 text-zinc-400 text-sm">
                    Share your journey with a roommate while maintaining your own dedicated study corner.
                  </p>

                  <ul className="text-xs text-zinc-400 space-y-1.5 mb-6 border-t border-zinc-800/80 pt-4">
                    <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Twin Ergonomic Workstations</li>
                    <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Individual Spacious Wardrobes</li>
                    <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Balcony Access with Natural Light</li>
                  </ul>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link
                  to="/contact"
                  className="w-full text-center py-2.5 px-4 rounded-xl bg-zinc-800 hover:bg-amber-500 hover:text-zinc-950 text-zinc-200 font-semibold text-sm transition-all duration-200 inline-block"
                >
                  Reserve Room &rarr;
                </Link>
              </div>
            </div>

            {/* Triple Bed Card */}
            <div className="h-full bg-zinc-900/60 border border-zinc-800 rounded-2xl overflow-hidden hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="overflow-hidden h-60 relative">
                  <img
                    src="/pages/image3.jpg"
                    alt="Triple Bed Dorm"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-semibold uppercase text-amber-400 mb-1">Triple Bed</h2>
                  <h1 className="title-font text-xl font-bold text-white mb-3">Welcoming Community</h1>
                  <p className="leading-relaxed mb-4 text-zinc-400 text-sm">
                    An interactive environment where you can live, learn, and grow together.
                  </p>

                  <ul className="text-xs text-zinc-400 space-y-1.5 mb-6 border-t border-zinc-800/80 pt-4">
                    <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> 3 Dedicated Lockers & Closets</li>
                    <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Spacious Layout & Ventilation</li>
                    <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Daily Housekeeping Included</li>
                  </ul>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link
                  to="/contact"
                  className="w-full text-center py-2.5 px-4 rounded-xl bg-zinc-800 hover:bg-amber-500 hover:text-zinc-950 text-zinc-200 font-semibold text-sm transition-all duration-200 inline-block"
                >
                  Reserve Room &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Strip */}
      <section className="py-16 bg-zinc-950/80 border-t border-zinc-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/60">
              <div className="text-2xl mb-2">🍽️</div>
              <h4 className="text-white font-semibold text-sm">Nutritious Mess</h4>
              <p className="text-xs text-zinc-400 mt-1">4 daily hot meals with rotating weekly menu</p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/60">
              <div className="text-2xl mb-2">⚡</div>
              <h4 className="text-white font-semibold text-sm">24/7 Power Backup</h4>
              <p className="text-xs text-zinc-400 mt-1">Full generator support for continuous power</p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/60">
              <div className="text-2xl mb-2">🧺</div>
              <h4 className="text-white font-semibold text-sm">Laundry Service</h4>
              <p className="text-xs text-zinc-400 mt-1">Weekly automated washing & pressing</p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/60">
              <div className="text-2xl mb-2">🛡️</div>
              <h4 className="text-white font-semibold text-sm">Warden Support</h4>
              <p className="text-xs text-zinc-400 mt-1">On-campus resident wardens always available</p>
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
              <h2 className="title-font font-semibold text-zinc-200 tracking-wider text-xs uppercase mb-4">ACCOMMODATIONS</h2>
              <nav className="list-none mb-10 space-y-2 text-sm">
                <li><a href="#rooms" className="text-zinc-400 hover:text-amber-400 transition-colors duration-150 cursor-pointer">Single Bed Sanctuary</a></li>
                <li><a href="#rooms" className="text-zinc-400 hover:text-amber-400 transition-colors duration-150 cursor-pointer">Double Bed Room</a></li>
                <li><a href="#rooms" className="text-zinc-400 hover:text-amber-400 transition-colors duration-150 cursor-pointer">Triple Bed Sharing</a></li>
              </nav>
            </div>

            <div className="lg:w-1/3 md:w-1/2 w-full px-4 mb-6">
              <h2 className="title-font font-semibold text-zinc-200 tracking-wider text-xs uppercase mb-4">INFORMATION</h2>
              <nav className="list-none mb-10 space-y-2 text-sm">
                <li><Link to="/contact" className="text-zinc-400 hover:text-amber-400 transition-colors duration-150 cursor-pointer">Hostel Rules & Policies</Link></li>
                <li><Link to="/contact" className="text-zinc-400 hover:text-amber-400 transition-colors duration-150 cursor-pointer">Mess Weekly Schedule</Link></li>
                <li><Link to="/contact" className="text-zinc-400 hover:text-amber-400 transition-colors duration-150 cursor-pointer">Gate Pass Guidelines</Link></li>
              </nav>
            </div>

            <div className="lg:w-1/3 md:w-1/2 w-full px-4 mb-6">
              <h2 className="title-font font-semibold text-zinc-200 tracking-wider text-xs uppercase mb-4">SUPPORT</h2>
              <nav className="list-none mb-10 space-y-2 text-sm">
                <li><Link to="/contact" className="text-zinc-400 hover:text-amber-400 transition-colors duration-150 cursor-pointer">Helpdesk & Contact</Link></li>
                <li><a href="mailto:atharvresidency@gmail.com" className="text-zinc-400 hover:text-amber-400 transition-colors duration-150 cursor-pointer">Report Grievance</a></li>
                <li><Link to="/contact" className="text-zinc-400 hover:text-amber-400 transition-colors duration-150 cursor-pointer">Campus Tour Request</Link></li>
              </nav>
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

