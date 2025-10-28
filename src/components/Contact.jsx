import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <footer id="contact" className="relative bg-gray-900 text-gray-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(244,63,94,0.2),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(147,51,234,0.2),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">Book Your Event</h2>
            <p className="mt-3 text-gray-300 max-w-xl">
              Ready to plan your wedding, party, or corporate event? Tell us about your vision and we’ll bring it to life.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a href="tel:+919911223344" className="inline-flex items-center gap-2 rounded-lg bg-rose-600 px-6 py-3 text-white font-semibold shadow hover:bg-rose-700 transition">
                <Phone size={18} /> Call Now
              </a>
              <a href="mailto:info@rcelebrations.in" className="inline-flex items-center gap-2 rounded-lg border border-gray-700 px-6 py-3 text-gray-100 font-semibold hover:bg-gray-800 transition">
                <Mail size={18} /> Email Us
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-white"
              >
                <Instagram size={18} /> Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-white"
              >
                <Facebook size={18} /> Facebook
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-gray-800/60 ring-1 ring-gray-700 p-6">
            <h3 className="text-lg font-semibold">Our Office</h3>
            <div className="mt-4 flex items-start gap-3 text-gray-300">
              <MapPin className="mt-1" size={18} />
              <p>
                Ghaziabad & Noida, National Capital Region<br />
                Serving clients across Delhi NCR
              </p>
            </div>
            <form className="mt-6 grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="w-full rounded-lg bg-gray-900/60 border border-gray-700 px-4 py-3 text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500" />
                <input type="tel" placeholder="Phone Number" className="w-full rounded-lg bg-gray-900/60 border border-gray-700 px-4 py-3 text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500" />
              </div>
              <input type="email" placeholder="Email (optional)" className="w-full rounded-lg bg-gray-900/60 border border-gray-700 px-4 py-3 text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500" />
              <textarea rows="4" placeholder="Tell us about your event (date, venue, guests, preferences)" className="w-full rounded-lg bg-gray-900/60 border border-gray-700 px-4 py-3 text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500" />
              <button type="button" className="inline-flex justify-center rounded-lg bg-rose-600 px-6 py-3 text-white font-semibold shadow hover:bg-rose-700 transition">
                Request Callback
              </button>
              <p className="text-xs text-gray-400">By submitting, you agree to be contacted about your inquiry.</p>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6 text-sm text-gray-400 flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} R Celebrations. All rights reserved.</p>
          <p>Made with love for unforgettable moments.</p>
        </div>
      </div>
    </footer>
  );
}
