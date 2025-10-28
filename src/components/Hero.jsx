import { Instagram, Facebook, Phone, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-pink-600 via-rose-600 to-fuchsia-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3 text-sm">
          <div className="flex items-center gap-3">
            <a href="tel:+919911223344" className="flex items-center gap-2 hover:opacity-90">
              <Phone size={16} />
              <span>+91 9911 22 33 44</span>
            </a>
            <span className="hidden sm:inline">|</span>
            <div className="hidden sm:flex items-center gap-2 opacity-90">
              <MapPin size={16} />
              <span>Ghaziabad & Noida, NCR</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:opacity-90"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="hover:opacity-90"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="relative isolate">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-rose-50 via-fuchsia-50 to-white" />
        <svg className="absolute -right-10 -top-10 w-[600px] h-[600px] -z-0 opacity-40" viewBox="0 0 600 600" fill="none">
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <circle cx="300" cy="300" r="300" fill="url(#g1)" />
        </svg>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-rose-100 text-rose-700 px-3 py-1 text-xs font-semibold">
                R Celebrations • Since 2016
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
                Wedding Planners, Event Managers & Caterers in NCR
              </h1>
              <p className="mt-5 text-lg text-gray-600">
                We design, plan, and deliver extraordinary celebrations. 1,000+ weddings, events, and parties brought to life with heart and precision.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-rose-600 px-6 py-3 text-white font-semibold shadow hover:bg-rose-700 transition">
                  Get a Free Consultation
                </a>
                <a href="#services" className="inline-flex items-center justify-center rounded-lg border border-rose-200 px-6 py-3 text-rose-700 font-semibold hover:bg-rose-50 transition">
                  Explore Services
                </a>
              </div>
              <div className="mt-6 flex items-center gap-3 text-sm text-gray-600">
                <span className="inline-flex items-center rounded-full bg-amber-100 text-amber-700 px-2.5 py-1 font-medium">4.9★ on Google</span>
                <span>Trusted by families and brands across NCR</span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-white/70 backdrop-blur shadow-xl ring-1 ring-gray-200 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(244,114,182,0.25),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(167,139,250,0.25),transparent_40%)]" />
                <div className="relative h-full w-full flex items-center justify-center">
                  <div className="text-center px-6">
                    <p className="text-6xl md:text-7xl">🎉</p>
                    <p className="mt-4 text-2xl font-semibold text-gray-800">R Celebrations</p>
                    <p className="mt-1 text-gray-600">A vehicle for joy in everyone's life</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
