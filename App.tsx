import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare,
  Sparkles,
  Zap,
  Globe,
  Loader2,
  Linkedin,
  Instagram,
  Send,
  Sun,
  Moon,
  ChevronRight,
  Star,
  Users,
  Check,
  ShieldAlert
} from 'lucide-react';
import { SERVICES_DATA, TEAM_DATA, PRICING_DATA, PRICING_DATA_MAP, PORTFOLIO_DATA, TRANSLATIONS } from './constants';
import { Language } from './types';

const Logo = ({ theme }: { theme: string }) => (
  <div className="flex items-center space-x-3 group cursor-pointer">
    <div className="relative w-10 h-10 flex items-center justify-center">
      <img 
        src="/logo.png" 
        alt="Nexora Logo" 
        className="w-full h-full object-contain drop-shadow-lg transition-all duration-500 group-hover:scale-110"
      />
    </div>
    <div className="flex flex-col">
      <span className={`text-xl font-black tracking-tight transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
        Nexora
      </span>
      <span className="text-[7px] font-black uppercase tracking-[0.3em] text-cyan-500 -mt-1">Digital Team</span>
    </div>
  </div>
);

const App = () => {
  const [lang, setLang] = useState<Language>('en');
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [projectType, setProjectType] = useState<string>('web');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const t = TRANSLATIONS[lang];

  // Protezione Anti-DevTools (DISABILITATA IN DEVELOPMENT)
  useEffect(() => {
    // Disabilita protezione in development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      return;
    }

    let devtoolsOpen = false;
    
    const detectDevTools = () => {
      const threshold = 160;
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;
      
      if (widthThreshold || heightThreshold) {
        if (!devtoolsOpen) {
          devtoolsOpen = true;
          window.location.href = 'about:blank';
        }
      }
    };

    const intervalId = setInterval(detectDevTools, 1000);
    detectDevTools();

    const intervalId2 = setInterval(detectDevTools, 1000);
    detectDevTools();

    const intervalId3 = setInterval(detectDevTools, 1000);
    detectDevTools();

    // Disabilita tasto destro (solo in produzione)
    const handleContextMenu = (e: Event) => {
      e.preventDefault();
    };

    // Disabilita shortcuts (solo in produzione)
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === 'F12') {
        e.preventDefault();
      }
      // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
      if (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) {
        e.preventDefault();
      }
      // Ctrl+U (View Source)
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
      }
      // Ctrl+S (Save)
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(intervalId);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    document.body.className = theme;
    return () => window.removeEventListener('scroll', handleScroll);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Form submitted:', {
          name: formData.name,
          email: formData.email,
          type: projectType,
          message: formData.message
        });
        setIsSubmitting(false);
        setFormSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormSuccess(false), 5000);
    } catch (err) {
        setIsSubmitting(false);
    }
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500`}>
      {/* Navbar */}
      <header className={`fixed top-0 left-0 right-0 z-50 navbar-glass ${scrolled ? 'py-2 shadow-sm' : 'py-4'}`}>
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          <div className="w-1/4">
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <Logo theme={theme} />
            </button>
          </div>

          <nav className="hidden lg:flex flex-grow justify-center space-x-8">
            {['services', 'story', 'about', 'portfolio', 'pricing', 'contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item === 'story' ? 'about-us' : (item === 'contact' ? 'contact-form' : item))} 
                className={`text-[10px] font-black uppercase tracking-widest transition-colors hover:text-cyan-500 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
              >
                {t.nav[item]}
              </button>
            ))}
          </nav>

          <div className="w-1/4 flex justify-end items-center space-x-5">
            <div className="relative group">
              <button className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-colors hover:text-cyan-500 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                <Globe size={14} /> {lang}
              </button>
              <div className={`absolute top-full right-0 mt-2 w-24 rounded-xl border-2 shadow-2xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 overflow-hidden ${theme === 'dark' ? 'bg-[#03040b] border-white/10' : 'bg-white border-indigo-600/30'}`}>
                {(['en', 'it', 'de', 'fr'] as Language[]).map((l) => (
                  <button 
                    key={l} 
                    onClick={() => setLang(l)}
                    className={`w-full text-center py-3 text-[10px] uppercase font-black transition-colors ${lang === l ? 'bg-indigo-600 text-white' : (theme === 'dark' ? 'hover:bg-white/5 text-slate-400' : 'hover:bg-indigo-600/5 text-slate-600')}`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            <button onClick={toggleTheme} className={`p-2 rounded-lg transition-colors ${theme === 'dark' ? 'bg-white/5 text-slate-400 hover:text-white' : 'bg-indigo-600/5 text-slate-600 hover:text-indigo-600'}`}>
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className={`lg:hidden fixed inset-0 top-[64px] z-[100] p-10 flex flex-col space-y-6 ${theme === 'dark' ? 'bg-[#03040b]' : 'bg-white'}`}>
            {['services', 'story', 'about', 'portfolio', 'pricing', 'contact'].map((item) => (
              <button key={item} onClick={() => scrollTo(item === 'story' ? 'about-us' : (item === 'contact' ? 'contact-form' : item))} className="text-2xl font-black uppercase tracking-tighter text-left">{t.nav[item] || item}</button>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-48 pb-24 md:pt-60 md:pb-32 container mx-auto px-8 section-border overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className={`inline-flex items-center gap-3 px-4 py-1.5 rounded-lg mb-8 text-[9px] font-black uppercase tracking-[0.3em] border-2 ${theme === 'dark' ? 'border-cyan-500/30 text-cyan-400 bg-cyan-500/5' : 'border-indigo-600/30 text-indigo-600 bg-indigo-600/5'}`}>
            <Sparkles size={12} className="animate-pulse" /> {t.hero.tag}
          </div>
          <h1 className={`text-6xl md:text-[8rem] font-black mb-10 leading-[0.85] tracking-tighter uppercase ${theme === 'dark' ? 'text-white text-glow-dark' : 'text-black'}`}>
            Where the ideas<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-600 to-purple-600">meet innovation</span>
          </h1>
          <p className={`text-lg md:text-2xl max-w-2xl mb-12 font-medium opacity-70 mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            {t.hero.sub}
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button onClick={() => scrollTo('contact-form')} className="btn-shadow px-10 py-5 bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white hover:brightness-110 font-black text-xs uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-3">
              {t.hero.cta1} <ArrowRight size={16} />
            </button>
            <button onClick={() => scrollTo('portfolio')} className={`px-10 py-5 font-black text-xs uppercase tracking-widest rounded-xl border-2 transition-all ${theme === 'dark' ? 'border-white/10 hover:bg-white/5' : 'border-indigo-600/30 hover:bg-indigo-600/5'}`}>
              {t.hero.cta2}
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 section-border bg-cyan-500/[0.01]">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES_DATA.map((s) => (
              <div key={s.id} className="p-10 glass-card rounded-[32px] group transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-cyan-500/10 transition-colors"></div>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 ${theme === 'dark' ? 'bg-cyan-600/20 text-cyan-400' : 'bg-gradient-to-br from-cyan-400 to-indigo-600 text-white shadow-lg shadow-cyan-600/30'}`}>
                  {React.cloneElement(s.icon as React.ReactElement<any>, { size: 28 })}
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{t.services[s.id].title_it || t.services[s.id].title}</h3>
                <div className="space-y-4 mb-8">
                  <p className="text-sm italic font-bold border-l-2 border-cyan-500/40 pl-4 opacity-80">{t.services[s.id].problem}</p>
                  <p className="text-sm leading-relaxed opacity-60 font-medium">{t.services[s.id].solution}</p>
                </div>
                <div className="pt-6 border-t border-cyan-500/10 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-cyan-500">
                  <Zap size={14} fill="currentColor" /> {t.services[s.id].benefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us (Stats) */}
      <section id="about-us" className="py-32 section-border">
        <div className="container mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500 mb-6 block">The Genesy Legacy</span>
              <h2 className="text-5xl md:text-8xl font-black mb-10 leading-[1] tracking-tighter uppercase">{t.story.title}</h2>
              <p className={`text-xl md:text-2xl leading-relaxed font-medium opacity-60`}>
                {t.story.text}
              </p>
              <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8">
                <div className="flex flex-col">
                  <span className="text-4xl font-black text-cyan-500">2023</span>
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-40">{t.stats.foundation}</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-4xl font-black text-cyan-500">50+</span>
                    <Users size={20} className="text-cyan-500/50" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-40">{t.stats.clients}</span>
                </div>
                <div className="flex flex-col col-span-2 md:col-span-1">
                  <div className="flex items-center gap-2">
                    <span className="text-4xl font-black text-cyan-500">5/5</span>
                    <Star size={20} className="text-cyan-500/50 fill-current" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-40">{t.stats.service}</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative group">
                <div className="absolute -inset-4 bg-cyan-500/10 rounded-[40px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative rounded-[40px] overflow-hidden border-2 border-cyan-600/30 shadow-2xl bg-cyan-600/5">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 mix-blend-overlay" alt="Nexora Team Hub" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Collective */}
      <section id="about" className="py-24 section-border">
        <div className="container mx-auto px-8">
          <h2 className="text-center text-[10px] font-black uppercase tracking-[0.5em] opacity-40 mb-16">{t.team.title}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {TEAM_DATA.map((m, i) => (
              <div key={i} className="group text-center">
                <div className={`relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-2 p-1 transition-all group-hover:border-cyan-500 ${theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-indigo-600/40 shadow-sm bg-gray-100'}`}>
                   <img 
                     src="/team-avatar.png" 
                     alt={m.name} 
                     className="w-full h-full object-cover rounded-full transition-all duration-500 group-hover:scale-110"
                   />
                </div>
                <h4 className="font-black text-lg uppercase tracking-tight">{m.name}</h4>
                <p className="text-[9px] font-black uppercase tracking-widest text-cyan-500">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section id="portfolio" className="py-24 section-border bg-cyan-500/[0.01]">
        <div className="container mx-auto px-8 text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-4 uppercase tracking-tighter">{t.nav.portfolio}</h2>
          <p className="text-lg opacity-50 font-bold uppercase tracking-widest">Our Engineering Showcase</p>
        </div>
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {PORTFOLIO_DATA.map((p, i) => (
              <div key={i} className="group relative aspect-square rounded-[32px] overflow-hidden border-2 border-indigo-600/30 shadow-md">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-950 via-cyan-950/20 to-transparent flex flex-col justify-end p-10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="text-[9px] font-black uppercase tracking-widest text-cyan-400 mb-2">{p.category}</span>
                  <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter">{p.title}</h3>
                  <div className="bg-cyan-600 text-white px-4 py-1.5 w-fit text-[9px] font-black uppercase tracking-widest rounded-lg shadow-lg">{p.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 section-border">
        <div className="container mx-auto px-8 text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-4 uppercase tracking-tighter">{t.pricing.title}</h2>
          <p className="text-lg opacity-50 font-bold uppercase tracking-widest">{t.pricing.sub}</p>
        </div>
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {PRICING_DATA.map((p) => (
              <div key={p.name} className="p-12 glass-card rounded-[40px] flex flex-col transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group">
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${p.color === 'cyan' ? 'from-cyan-400 to-cyan-600' : p.color === 'indigo' ? 'from-indigo-400 to-indigo-600' : 'from-purple-400 to-purple-600'}`}></div>
                <h3 className="text-4xl font-black mb-4 uppercase tracking-tighter">{p.name}</h3>
                <div className="flex items-center gap-3 text-cyan-500 mb-10">
                  <Zap size={18} fill="currentColor" />
                  <span className="text-[11px] font-black uppercase tracking-widest">{p.times} {t.pricing.days}</span>
                </div>
                <ul className="space-y-5 mb-12 flex-grow">
                  {PRICING_DATA_MAP[p.name].map(featKey => (
                    <li key={featKey} className="flex items-center gap-4 text-sm font-bold opacity-60 text-left">
                      <ChevronRight size={16} className="text-cyan-500 shrink-0" /> {t.pricing.features[featKey]}
                    </li>
                  ))}
                </ul>
                <button onClick={() => scrollTo('contact-form')} className="w-full py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] border-2 border-cyan-500/30 hover:bg-cyan-500 hover:text-white transition-all">
                  Inquire Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Start Project Form */}
      <section id="contact-form" className="py-32 section-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 blur-[100px] rounded-full -mr-48 -mt-48"></div>
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl md:text-8xl font-black mb-6 uppercase tracking-tighter">{t.contact.title}</h2>
            <p className="text-lg md:text-xl font-bold opacity-50 uppercase tracking-widest">{t.contact.sub}</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleContactSubmit} className="glass-card p-10 md:p-16 rounded-[40px] relative z-10">
              <div className="grid md:grid-cols-2 gap-10 mb-10">
                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase tracking-widest opacity-40 ml-2">{t.contact.name}</label>
                  <input 
                    required 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className={`w-full border-b-2 py-3 outline-none bg-transparent text-sm font-bold transition-all focus:border-cyan-500 ${theme === 'dark' ? 'border-white/10 text-white' : 'border-indigo-600/30 text-black'}`} 
                    placeholder="Name and Surname" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase tracking-widest opacity-40 ml-2">{t.contact.email}</label>
                  <input 
                    required 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className={`w-full border-b-2 py-3 outline-none bg-transparent text-sm font-bold transition-all focus:border-cyan-500 ${theme === 'dark' ? 'border-white/10 text-white' : 'border-indigo-600/30 text-black'}`} 
                    placeholder="example@gmail.com" 
                  />
                </div>
              </div>

              <div className="mb-12">
                <label className="text-[9px] font-black uppercase tracking-widest opacity-40 ml-2 mb-6 block">{t.contact.type}</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.entries(t.contact.typeOptions).map(([key, label]: [string, any]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setProjectType(key)}
                      className={`px-4 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest border-2 transition-all flex items-center justify-center gap-2 ${projectType === key 
                        ? 'border-cyan-500 bg-cyan-500/10 text-cyan-500 shadow-lg shadow-cyan-500/20' 
                        : (theme === 'dark' ? 'border-white/5 hover:border-white/20' : 'border-indigo-600/30 hover:border-indigo-600/50')
                      }`}
                    >
                      {projectType === key && <Check size={14}/>} {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2 mb-10">
                <label className="text-[9px] font-black uppercase tracking-widest opacity-40 ml-2">{t.contact.message}</label>
                <textarea 
                    required 
                    rows={5} 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className={`w-full border-2 p-8 rounded-3xl outline-none bg-transparent text-sm font-bold transition-all focus:border-cyan-500 resize-none ${theme === 'dark' ? 'border-white/10 text-white' : 'border-indigo-600/30 text-black'}`} 
                    placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              {formSuccess ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 text-emerald-600 font-black uppercase text-xs text-center border-2 border-emerald-500/30 animate-fadeIn">
                  {t.contact.success}
                </div>
              ) : (
                <button disabled={isSubmitting} className="btn-shadow w-full py-6 bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-black uppercase tracking-[0.3em] rounded-2xl hover:brightness-110 transition-all flex items-center justify-center gap-4 text-xs disabled:opacity-50">
                  {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : <><Send size={18} /> {t.contact.send}</>}
                </button>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-20 transition-colors duration-500 ${theme === 'dark' ? 'bg-[#05060f]' : 'bg-[#f0f2f7]'}`}>
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-b-2 border-indigo-600/20 pb-16">
            <div className="max-w-sm">
              <Logo theme={theme} />
              <p className="mt-8 text-[11px] font-black uppercase tracking-widest opacity-40 leading-relaxed">
                Nexora Digital Engineering. Swiss performance for global disruptors.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-12 w-full md:w-auto">
              {[
                { icon: <Mail size={18}/>, label: 'Email Protocol', value: 'team@nexora.com', href: 'mailto:team@nexora.com' },
                { icon: <Phone size={18}/>, label: 'Direct Line', value: '+41 078 223 17 73', href: 'tel:+410782231773' },
                { icon: <MapPin size={18}/>, label: 'Swiss Studio', value: '21 Bahnhofstrasse, Wohlen', href: 'https://maps.google.com/?q=21+Bahnhofstrasse,+Wohlen,+Switzerland' }
              ].map((item, idx) => (
                <a key={idx} href={item.href} target="_blank" rel="noreferrer" className="group flex flex-col gap-4">
                  <div className="text-cyan-500 transition-transform group-hover:scale-110">{item.icon}</div>
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-widest opacity-40 block mb-1">{item.label}</span>
                    <span className="text-sm font-bold group-hover:text-cyan-500 transition-colors">{item.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-8">
             <div className="flex gap-8">
              <a href="#" className="opacity-40 hover:opacity-100 transition-opacity"><Linkedin size={20}/></a>
              <a href="#" className="opacity-40 hover:opacity-100 transition-opacity"><Instagram size={20}/></a>
            </div>
            <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.5em] opacity-30">
              <ShieldAlert size={14} /> PROTECTED BY NEXORA SHIELD
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;