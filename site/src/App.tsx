import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { type Lang, t } from './i18n'
import { 
  Shield, Scissors, Shirt, Palette, MapPin, Mail,
  Facebook, Instagram, MessageCircle, ChevronDown, Menu, X,
  ArrowRight, Star, Users, Award, Clock
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }
  })
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
}

function LanguageSwitcher({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const [open, setOpen] = useState(false)
  const flags: Record<Lang, string> = { pt: '🇦🇴', fr: '🇫🇷', en: '🇬🇧' }
  const labels: Record<Lang, string> = { pt: 'PT', fr: 'FR', en: 'EN' }
  
  return (
    <div className="relative">
      <button 
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 hover:border-[var(--gold)]/40 transition-all text-sm backdrop-blur-sm"
      >
        <span>{flags[lang]}</span>
        <span className="text-[var(--gray-400)]">{labels[lang]}</span>
        <ChevronDown size={14} className={`text-[var(--gray-500)] transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            className="absolute top-full right-0 mt-2 bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-xl overflow-hidden shadow-2xl z-50"
          >
            {(['pt', 'fr', 'en'] as Lang[]).map(l => (
              <button key={l} onClick={() => { setLang(l); setOpen(false) }}
                className={`flex items-center gap-3 px-4 py-2.5 w-full hover:bg-white/5 transition-colors text-sm ${l === lang ? 'text-[var(--gold)]' : 'text-[var(--gray-400)]'}`}
              >
                <span>{flags[l]}</span><span>{labels[l]}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function Navbar({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const links = ['home', 'services', 'about', 'gallery', 'contact'] as const
  
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-[var(--dark)]/80 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dark)] flex items-center justify-center">
            <span className="text-[var(--dark)] font-bold text-lg font-['Syne']">B</span>
          </div>
          <span className="font-['Syne'] font-bold text-lg tracking-tight">BLESSING</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          {links.map(key => (
            <a key={key} href={`#${key}`} className="text-sm text-[var(--gray-400)] hover:text-[var(--gold)] transition-colors">
              {t(lang, `nav.${key}`)}
            </a>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <LanguageSwitcher lang={lang} setLang={setLang} />
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-[var(--gray-400)]">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="md:hidden overflow-hidden border-t border-white/5">
            <div className="px-6 py-4 flex flex-col gap-3">
              {links.map(key => (
                <a key={key} href={`#${key}`} onClick={() => setMobileOpen(false)} className="text-[var(--gray-400)] hover:text-[var(--gold)] transition-colors py-2">
                  {t(lang, `nav.${key}`)}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

function Hero({ lang }: { lang: Lang }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[var(--gold)]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[var(--gold)]/3 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 w-full">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
          <motion.div variants={fadeUp} custom={0}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--gold)]/20 bg-[var(--gold)]/5 mb-8"
          >
            <Star size={14} className="text-[var(--gold)]" fill="currentColor" />
            <span className="text-sm text-[var(--gold)]">{t(lang, 'hero.badge')}</span>
          </motion.div>
          
          <motion.h1 variants={fadeUp} custom={1}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight font-['Syne'] whitespace-pre-line mb-8"
          >
            {(t(lang, 'hero.title') as string).split('\n').map((line: string, i: number) => (
              <span key={i}>
                {i === 1 ? <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] bg-clip-text text-transparent">{line}</span> : line}
                {i === 0 && <br />}
              </span>
            ))}
          </motion.h1>
          
          <motion.p variants={fadeUp} custom={2} className="text-lg md:text-xl text-[var(--gray-400)] max-w-xl mb-10 leading-relaxed">
            {t(lang, 'hero.subtitle')}
          </motion.p>
          
          <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
            <a href="#contact" className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[var(--gold)] to-[var(--gold-dark)] text-[var(--dark)] font-semibold rounded-xl hover:shadow-lg hover:shadow-[var(--gold)]/20 transition-all">
              {t(lang, 'hero.cta')}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="inline-flex items-center gap-3 px-8 py-4 border border-white/10 text-[var(--white)] rounded-xl hover:border-[var(--gold)]/30 hover:bg-white/5 transition-all">
              {t(lang, 'hero.ctaSecondary')}
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/20 to-transparent" />
    </section>
  )
}

function Services({ lang }: { lang: Lang }) {
  const icons = [Shirt, Shield, Shield, Palette]
  const items = t(lang, 'services.items') as { title: string; desc: string }[]
  
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="text-center mb-16">
          <motion.h2 variants={fadeUp} custom={0} className="text-4xl md:text-5xl font-bold font-['Syne'] mb-4">
            {t(lang, 'services.title')}
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-[var(--gray-400)] text-lg">
            {t(lang, 'services.subtitle')}
          </motion.p>
        </motion.div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {items.map((item, i) => {
            const Icon = icons[i]
            return (
              <motion.div key={i} variants={fadeUp} custom={i}
                className="group relative p-8 md:p-10 rounded-2xl border border-[var(--dark-border)] bg-[var(--dark-card)] hover:border-[var(--gold)]/20 transition-all duration-500"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-[var(--gold)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--gold)]/20 transition-colors">
                    <Icon size={26} className="text-[var(--gold)]" />
                  </div>
                  <h3 className="text-xl font-semibold font-['Syne'] mb-3">{item.title}</h3>
                  <p className="text-[var(--gray-400)] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

function About({ lang }: { lang: Lang }) {
  const stats = [
    { icon: Users, value: '500+', label: t(lang, 'about.stat1') },
    { icon: Shirt, value: '10K+', label: t(lang, 'about.stat2') },
    { icon: Clock, value: '5+', label: t(lang, 'about.stat3') },
  ]

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-[var(--gold)]/3 rounded-full blur-[150px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 mb-6">
              <Award className="text-[var(--gold)]" size={20} />
              <span className="text-[var(--gold)] text-sm font-medium uppercase tracking-wider">Blessing Uniformes</span>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold font-['Syne'] mb-8">
              {t(lang, 'about.title')}
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-[var(--gray-400)] leading-relaxed mb-6 text-lg">
              {t(lang, 'about.p1')}
            </motion.p>
            <motion.p variants={fadeUp} custom={3} className="text-[var(--gray-400)] leading-relaxed text-lg">
              {t(lang, 'about.p2')}
            </motion.p>
          </div>
          
          <motion.div variants={fadeUp} custom={2} className="grid grid-cols-1 gap-6">
            {stats.map((stat, i) => (
              <motion.div key={i} variants={fadeUp} custom={i + 3}
                className="flex items-center gap-6 p-6 rounded-2xl border border-[var(--dark-border)] bg-[var(--dark-card)]"
              >
                <div className="w-16 h-16 rounded-xl bg-[var(--gold)]/10 flex items-center justify-center shrink-0">
                  <stat.icon size={28} className="text-[var(--gold)]" />
                </div>
                <div>
                  <div className="text-3xl font-bold font-['Syne'] text-[var(--gold)]">{stat.value}</div>
                  <div className="text-[var(--gray-400)] text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function Gallery({ lang }: { lang: Lang }) {
  const items = t(lang, 'gallery.items') as string[]
  const colors = ['from-amber-900/60', 'from-stone-800/60', 'from-zinc-800/60', 'from-yellow-900/60', 'from-neutral-800/60', 'from-orange-900/60']

  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
          <motion.h2 variants={fadeUp} custom={0} className="text-4xl md:text-5xl font-bold font-['Syne'] mb-4">
            {t(lang, 'gallery.title')}
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-[var(--gray-400)] text-lg">
            {t(lang, 'gallery.subtitle')}
          </motion.p>
        </motion.div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        >
          {items.map((item, i) => (
            <motion.div key={i} variants={fadeUp} custom={i}
              className={`group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-t ${colors[i]} to-transparent border border-[var(--dark-border)] cursor-pointer`}
            >
              <div className="absolute inset-0 bg-[var(--dark-card)] -z-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Scissors size={40} className="text-[var(--gold)]/20" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-['Syne'] font-semibold text-sm md:text-base">{item}</p>
              </div>
              <div className="absolute inset-0 border-2 border-[var(--gold)]/0 group-hover:border-[var(--gold)]/30 rounded-2xl transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Contact({ lang }: { lang: Lang }) {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-[var(--gold)]/3 rounded-full blur-[150px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
          <motion.h2 variants={fadeUp} custom={0} className="text-4xl md:text-5xl font-bold font-['Syne'] mb-4">
            {t(lang, 'contact.title')}
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-[var(--gray-400)] text-lg">
            {t(lang, 'contact.subtitle')}
          </motion.p>
        </motion.div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          className="grid md:grid-cols-5 gap-10"
        >
          <motion.form variants={fadeUp} custom={0} className="md:col-span-3 space-y-5" onSubmit={e => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-5">
              <input type="text" placeholder={t(lang, 'contact.name')}
                className="w-full px-5 py-4 rounded-xl bg-[var(--dark-card)] border border-[var(--dark-border)] text-white placeholder-[var(--gray-500)] focus:border-[var(--gold)]/40 focus:outline-none transition-colors" />
              <input type="email" placeholder={t(lang, 'contact.email')}
                className="w-full px-5 py-4 rounded-xl bg-[var(--dark-card)] border border-[var(--dark-border)] text-white placeholder-[var(--gray-500)] focus:border-[var(--gold)]/40 focus:outline-none transition-colors" />
            </div>
            <input type="tel" placeholder={t(lang, 'contact.phone')}
              className="w-full px-5 py-4 rounded-xl bg-[var(--dark-card)] border border-[var(--dark-border)] text-white placeholder-[var(--gray-500)] focus:border-[var(--gold)]/40 focus:outline-none transition-colors" />
            <textarea rows={5} placeholder={t(lang, 'contact.message')}
              className="w-full px-5 py-4 rounded-xl bg-[var(--dark-card)] border border-[var(--dark-border)] text-white placeholder-[var(--gray-500)] focus:border-[var(--gold)]/40 focus:outline-none transition-colors resize-none" />
            <button type="submit"
              className="w-full py-4 bg-gradient-to-r from-[var(--gold)] to-[var(--gold-dark)] text-[var(--dark)] font-semibold rounded-xl hover:shadow-lg hover:shadow-[var(--gold)]/20 transition-all text-lg">
              {t(lang, 'contact.send')}
            </button>
          </motion.form>
          
          <motion.div variants={fadeUp} custom={1} className="md:col-span-2 space-y-6">
            {[
              { icon: MapPin, label: t(lang, 'contact.info.location'), value: 'Luanda, Angola' },
              { icon: MessageCircle, label: 'WhatsApp', value: '+244 XXX XXX XXX', href: 'https://wa.me/' },
              { icon: Mail, label: 'Email', value: 'info@blessinguniformes.com', href: 'mailto:info@blessinguniformes.com' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl border border-[var(--dark-border)] bg-[var(--dark-card)]">
                <div className="w-12 h-12 rounded-lg bg-[var(--gold)]/10 flex items-center justify-center shrink-0">
                  <item.icon size={22} className="text-[var(--gold)]" />
                </div>
                <div>
                  <p className="text-sm text-[var(--gray-500)] mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-white hover:text-[var(--gold)] transition-colors">{item.value}</a>
                  ) : (
                    <p className="text-white">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
            
            <div className="flex gap-3 pt-2">
              {[
                { icon: Facebook, href: 'https://facebook.com/blessinguniformes' },
                { icon: Instagram, href: 'https://instagram.com/blessinguniformes' },
                { icon: MessageCircle, href: 'https://wa.me/' },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer"
                  className="w-12 h-12 rounded-xl border border-[var(--dark-border)] bg-[var(--dark-card)] flex items-center justify-center hover:border-[var(--gold)]/30 hover:bg-[var(--gold)]/5 transition-all">
                  <s.icon size={20} className="text-[var(--gray-400)]" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="border-t border-[var(--dark-border)] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dark)] flex items-center justify-center">
                <span className="text-[var(--dark)] font-bold text-lg font-['Syne']">B</span>
              </div>
              <span className="font-['Syne'] font-bold text-lg">BLESSING</span>
            </div>
            <p className="text-[var(--gray-500)] text-sm leading-relaxed">{t(lang, 'footer.tagline')}</p>
          </div>
          
          <div>
            <h4 className="font-['Syne'] font-semibold mb-4 text-sm uppercase tracking-wider text-[var(--gray-400)]">{t(lang, 'footer.links')}</h4>
            <div className="flex flex-col gap-2">
              {['services', 'about', 'gallery', 'contact'].map(key => (
                <a key={key} href={`#${key}`} className="text-[var(--gray-500)] hover:text-[var(--gold)] transition-colors text-sm">
                  {t(lang, `nav.${key}`)}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-['Syne'] font-semibold mb-4 text-sm uppercase tracking-wider text-[var(--gray-400)]">{t(lang, 'footer.social')}</h4>
            <div className="flex gap-3">
              <a href="https://facebook.com/blessinguniformes" target="_blank" rel="noreferrer" className="text-[var(--gray-500)] hover:text-[var(--gold)]"><Facebook size={20} /></a>
              <a href="https://instagram.com/blessinguniformes" target="_blank" rel="noreferrer" className="text-[var(--gray-500)] hover:text-[var(--gold)]"><Instagram size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[var(--dark-border)] pt-8 text-center">
          <p className="text-[var(--gray-500)] text-sm">© 2025 Blessing Uniformes Angola. {t(lang, 'footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const [lang, setLang] = useState<Lang>('pt')

  return (
    <>
      <div className="noise-overlay" />
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Services lang={lang} />
      <About lang={lang} />
      <Gallery lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </>
  )
}
