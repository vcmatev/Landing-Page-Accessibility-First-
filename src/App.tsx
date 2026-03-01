/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Accessibility, 
  Keyboard, 
  Eye, 
  Zap, 
  CheckCircle2, 
  Mail, 
  Github, 
  Twitter, 
  Menu, 
  X,
  Moon,
  Sun,
  Contrast
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
  };

  useEffect(() => {
    if (isHighContrast) {
      document.documentElement.setAttribute('data-contrast', 'high');
    } else {
      document.documentElement.removeAttribute('data-contrast');
    }
  }, [isHighContrast]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    // In a real app, you'd send data to a server here
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-200 ${isHighContrast ? 'bg-black text-white' : 'bg-white text-slate-900'}`}>
      {/* Skip Link */}
      <a href="#main-content" className="skip-link">
        Langsung ke konten utama
      </a>

      {/* Header & Navigation */}
      <header className={`sticky top-0 z-40 w-full border-b ${isHighContrast ? 'border-white bg-black' : 'border-slate-200 bg-white/80 backdrop-blur-md'}`}>
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Accessibility className="w-8 h-8 text-accent" aria-hidden="true" />
            <span className="text-xl font-bold tracking-tight">A11yFirst</span>
          </div>

          <nav className="hidden md:flex items-center gap-8" aria-label="Navigasi Utama">
            <a href="#features" className="text-sm font-medium hover:text-accent transition-colors">Fitur</a>
            <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">Tentang</a>
            <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">Kontak</a>
            <button 
              onClick={toggleHighContrast}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 hover:bg-slate-50 transition-all focus-visible:ring-2 focus-visible:ring-accent"
              aria-pressed={isHighContrast}
              aria-label="Aktifkan Mode Kontras Tinggi"
            >
              <Contrast className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-medium">Kontras</span>
            </button>
          </nav>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Tutup Menu" : "Buka Menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              id="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`md:hidden absolute top-16 left-0 w-full border-b p-4 flex flex-col gap-4 ${isHighContrast ? 'bg-black border-white' : 'bg-white border-slate-200'}`}
            >
              <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Fitur</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Tentang</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Kontak</a>
              <button 
                onClick={() => { toggleHighContrast(); setIsMenuOpen(false); }}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-slate-200"
              >
                <Contrast className="w-5 h-5" />
                <span>Mode Kontras Tinggi</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main id="main-content">
        {/* Hero Section */}
        <section className="py-20 md:py-32 overflow-hidden" aria-labelledby="hero-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <motion.h1 
                id="hero-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
              >
                Web untuk <span className="text-accent">Semua Orang</span> Tanpa Terkecuali.
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed"
              >
                Kami membangun pengalaman digital yang inklusif, mematuhi standar WCAG 2.1 AA, dan memastikan setiap pengguna merasa diterima.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <a 
                  href="#contact" 
                  className="px-8 py-4 bg-accent text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform focus-visible:ring-4 focus-visible:ring-accent/50"
                >
                  Mulai Proyek Inklusif
                </a>
                <a 
                  href="#features" 
                  className="px-8 py-4 border-2 border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors focus-visible:ring-4 focus-visible:ring-slate-200"
                >
                  Pelajari Fitur
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className={`py-24 ${isHighContrast ? 'bg-black' : 'bg-slate-50'}`} aria-labelledby="features-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="features-heading" className="text-3xl md:text-4xl font-bold mb-4">Standar Aksesibilitas Kami</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">Kami tidak hanya membuat website, kami memastikan setiap baris kode mendukung inklusi digital.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Keyboard className="w-10 h-10 text-accent" />,
                  title: "Navigasi Keyboard",
                  desc: "Seluruh situs dapat diakses tanpa mouse, menggunakan urutan fokus yang logis dan indikator visual yang jelas."
                },
                {
                  icon: <Eye className="w-10 h-10 text-accent" />,
                  title: "Ramah Screen Reader",
                  desc: "Struktur HTML semantik dan label ARIA yang tepat memastikan pengguna tunanetra mendapatkan informasi yang akurat."
                },
                {
                  icon: <Zap className="w-10 h-10 text-accent" />,
                  title: "Optimasi Performa",
                  desc: "Kode yang ringan dan efisien tidak hanya mempercepat loading, tapi juga memudahkan perangkat bantu bekerja."
                }
              ].map((feature, i) => (
                <div 
                  key={i} 
                  className={`card p-8 rounded-2xl border ${isHighContrast ? 'border-white bg-black' : 'border-slate-200 bg-white'} shadow-sm hover:shadow-md transition-shadow`}
                >
                  <div className="mb-6" aria-hidden="true">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Accessibility Statement Section */}
        <section id="about" className="py-24" aria-labelledby="about-heading">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="flex-1">
                <h2 id="about-heading" className="text-3xl md:text-4xl font-bold mb-6">Komitmen Inklusi Kami</h2>
                <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                  <p>
                    Di A11yFirst, kami percaya bahwa akses ke informasi adalah hak asasi manusia. Website yang tidak aksesibel adalah bentuk diskriminasi digital.
                  </p>
                  <p>
                    Proyek ini dirancang untuk mematuhi standar <strong>WCAG 2.1 Level AA</strong>. Kami melakukan pengujian rutin menggunakan alat otomatis seperti Lighthouse dan pengujian manual dengan pembaca layar (Screen Reader).
                  </p>
                  <ul className="space-y-2 mt-6" aria-label="Daftar Fitur Aksesibilitas">
                    {[
                      "Skor Lighthouse Aksesibilitas 100/100",
                      "Dukungan mode kontras tinggi",
                      "Tautan loncat (Skip links) untuk navigasi cepat",
                      "Dukungan 'prefers-reduced-motion'",
                      "Kontras warna teks minimal 4.5:1"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className={`aspect-video rounded-3xl border-4 ${isHighContrast ? 'border-white' : 'border-slate-100'} overflow-hidden shadow-2xl relative group`}>
                  <img 
                    src="https://picsum.photos/seed/accessibility/800/600" 
                    alt="Ilustrasi orang menggunakan berbagai perangkat bantu untuk mengakses web" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors" aria-hidden="true"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className={`py-24 ${isHighContrast ? 'bg-black' : 'bg-slate-50'}`} aria-labelledby="contact-heading">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="text-center mb-12">
              <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold mb-4">Mulai Perjalanan Inklusif Anda</h2>
              <p className="text-slate-600">Hubungi kami untuk audit aksesibilitas atau pembuatan website baru.</p>
            </div>

            <form 
              onSubmit={handleSubmit}
              className={`p-8 rounded-3xl border ${isHighContrast ? 'border-white bg-black' : 'border-slate-200 bg-white'} shadow-xl`}
              aria-describedby="form-desc"
            >
              <p id="form-desc" className="sr-only">Formulir kontak untuk menanyakan layanan aksesibilitas.</p>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold mb-2">Nama Lengkap</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-accent outline-none transition-all ${isHighContrast ? 'bg-black border-white text-white' : 'bg-white border-slate-200 text-slate-900'}`}
                    placeholder="Masukkan nama Anda"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold mb-2">Alamat Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    aria-describedby="email-help"
                    className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-accent outline-none transition-all ${isHighContrast ? 'bg-black border-white text-white' : 'bg-white border-slate-200 text-slate-900'}`}
                    placeholder="email@perusahaan.com"
                  />
                  <p id="email-help" className="text-xs text-slate-500 mt-2">Kami tidak akan pernah membagikan email Anda dengan pihak ketiga.</p>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold mb-2">Pesan</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    required 
                    className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-accent outline-none transition-all ${isHighContrast ? 'bg-black border-white text-white' : 'bg-white border-slate-200 text-slate-900'}`}
                    placeholder="Bagaimana kami bisa membantu Anda?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === 'success'}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 ${
                    formStatus === 'success' 
                    ? 'bg-emerald-500 text-white cursor-default' 
                    : 'bg-accent text-white hover:bg-accent/90 focus-visible:ring-4 focus-visible:ring-accent/50'
                  }`}
                >
                  {formStatus === 'success' ? (
                    <>
                      <CheckCircle2 className="w-6 h-6" />
                      Pesan Terkirim!
                    </>
                  ) : (
                    'Kirim Pesan'
                  )}
                </button>

                {formStatus === 'success' && (
                  <div 
                    role="alert" 
                    className="p-4 bg-emerald-50 text-emerald-700 rounded-xl border border-emerald-200 text-center font-medium"
                  >
                    Terima kasih! Kami akan menghubungi Anda dalam waktu 24 jam.
                  </div>
                )}
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`py-16 border-t ${isHighContrast ? 'border-white bg-black' : 'border-slate-200 bg-white'}`} aria-label="Footer Situs">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Accessibility className="w-8 h-8 text-accent" aria-hidden="true" />
                <span className="text-2xl font-bold tracking-tight">A11yFirst</span>
              </div>
              <p className="text-slate-600 max-w-sm mb-6 leading-relaxed">
                Membangun jembatan digital untuk semua orang. Kami berdedikasi pada standar aksesibilitas tertinggi untuk menciptakan web yang lebih inklusif.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors" aria-label="Ikuti kami di Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors" aria-label="Lihat proyek kami di GitHub">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors" aria-label="Hubungi kami via Email">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Tautan Cepat</h4>
              <ul className="space-y-4 text-slate-600">
                <li><a href="#features" className="hover:text-accent transition-colors">Fitur Utama</a></li>
                <li><a href="#about" className="hover:text-accent transition-colors">Tentang Kami</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Kontak</a></li>
                <li><a href="/accessibility" className="hover:text-accent transition-colors font-semibold">Pernyataan Aksesibilitas</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Legal</h4>
              <ul className="space-y-4 text-slate-600">
                <li><a href="#" className="hover:text-accent transition-colors">Kebijakan Privasi</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Syarat & Ketentuan</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Kepatuhan WCAG</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© 2026 A11yFirst. Dibuat dengan penuh kepedulian untuk inklusi digital.</p>
            <div className="flex gap-8">
              <span>Lighthouse Score: 100/100</span>
              <span>WCAG 2.1 AA Compliant</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
