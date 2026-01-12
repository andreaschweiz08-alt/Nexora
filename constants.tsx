import React from 'react';
import { Service, TeamMember, PricingPlan, PortfolioProject, Language } from './types';
import { Code2, Cpu, TrendingUp, Shield } from 'lucide-react';

export const TRANSLATIONS: Record<Language, any> = {
  en: {
    nav: { services: 'Services', about: 'Team', story: 'About Us', portfolio: 'Work', pricing: 'Plans', contact: 'Contact' },
    hero: { tag: 'The Genesy Collective', title: 'Where ideas meet innovation', sub: 'High-performance digital engineering for the new era of business.', cta1: 'Launch Now', cta2: 'Portfolio' },
    story: { title: 'About Nexora', text: 'Born from the Genesy Collective, Nexora brings a new generation of visionary minds. We empower businesses with disruptive ideas and brilliant technical solutions designed to redefine industry standards.' },
    stats: { clients: 'Clients', foundation: 'Foundation', service: '5-Star Service' },
    services: {
      web: { title: 'Website creation', problem: 'Obsolete UX and minimal conversions.', solution: 'Ultra-fast, SEO-ready web systems.', benefit: 'Digital Impact' },
      ai: { title: 'AI Assistant', problem: 'High manual operational load.', solution: 'Intelligent AI agents integrated into workflows.', benefit: '24/7 Automation' },
      marketing: { title: 'Marketing ideas', problem: 'Stagnation and lack of leads.', solution: 'Data-driven strategies to scale your brand.', benefit: 'Exponential ROI' }
    },
    pricing: { 
      title: 'Plans', 
      sub: 'Scalable investment for elite results.', 
      base: 'Base', premium: 'Premium', business: 'Business', days: 'Days',
      features: {
        responsive: 'Responsive Design',
        seo: 'Basic SEO',
        contact: 'Direct Contact Form',
        revision1: '1 Revision',
        copy: 'AI Copywriting',
        analytics: 'Analytics Hub',
        speed: 'Speed Boost',
        support30: '30-Day Support',
        ai_int: 'AI Integration',
        chatbot: 'Custom Chatbot',
        enterprise: 'Enterprise Systems',
        priority: 'Priority Support'
      }
    },
    team: { title: 'Nexora Team' },
    contact: { 
      title: 'Start Project', 
      sub: 'Tell us about your next big thing.', 
      name: 'Full Name', 
      email: 'Your Email', 
      type: 'Project Type',
      typeOptions: {
        marketing: 'Marketing ideas',
        web: 'Website creation',
        ai: 'AI Assistant'
      },
      message: 'Your Message', 
      send: 'Send Protocol', 
      success: 'Protocol established. Expect contact shortly.' 
    }
  },
  it: {
    nav: { services: 'Servizi', about: 'Team', story: 'About Us', portfolio: 'Lavori', pricing: 'Piani', contact: 'Contatti' },
    hero: { tag: 'Il Collettivo Genesy', title: 'Where ideas meet innovation', sub: 'Ingegneria digitale ad alte prestazioni per la nuova era del business.', cta1: 'Lancia Ora', cta2: 'Portfolio' },
    story: { title: 'Chi Siamo', text: 'Nata dal collettivo Genesy, Nexora porta al tavolo una nuova generazione di menti visionarie. Sfidiamo lo status quo con idee dirompenti e soluzioni tecniche brillanti, progettate per ridefinire gli standard del mercato.' },
    stats: { clients: 'Clienti', foundation: 'Fondazione', service: 'Servizio 5 Stelle' },
    services: {
      web: { title: 'Website creation', title_it: 'Creazione Siti Web', problem: 'UX obsoleta e conversioni minime.', solution: 'Sistemi web ultra-veloci e SEO-ready.', benefit: 'Impatto Digitale' },
      ai: { title: 'AI Assistant', title_it: 'Assistente IA', problem: 'Carico operativo manuale elevato.', solution: 'Agenti IA intelligenti integrati nei flussi.', benefit: 'Automazione 24/7' },
      marketing: { title: 'Marketing ideas', title_it: 'Idee Marketing', problem: 'Stagnazione e mancanza di lead.', solution: 'Strategie data-driven per scalare il brand.', benefit: 'ROI Esponenziale' }
    },
    pricing: { 
      title: 'I Piani', 
      sub: 'Investimenti scalabili per risultati d\'elite.', 
      base: 'Base', premium: 'Premium', business: 'Business', days: 'Giorni',
      features: {
        responsive: 'Design Responsive',
        seo: 'SEO di Base',
        contact: 'Modulo Contatti Diretto',
        revision1: '1 Revisione',
        copy: 'Copywriting con IA',
        analytics: 'Hub Analytics',
        speed: 'Ottimizzazione Velocità',
        support30: 'Supporto 30 Giorni',
        ai_int: 'Integrazione IA',
        chatbot: 'Chatbot Personalizzato',
        enterprise: 'Sistemi Enterprise',
        priority: 'Supporto Prioritario'
      }
    },
    team: { title: 'Nexora Team' },
    contact: { 
      title: 'Inizia Progetto', 
      sub: 'Descrivici la tua prossima sfida.', 
      name: 'Nome', 
      email: 'Email', 
      type: 'Tipo di Progetto',
      typeOptions: {
        marketing: 'Marketing ideas',
        web: 'Website creation',
        ai: 'AI Assistant'
      },
      message: 'Messaggio', 
      send: 'Invia Protocollo', 
      success: 'Protocollo stabilito. Ti contatteremo a breve.' 
    }
  },
  de: {
    nav: { services: 'Dienste', about: 'Team', story: 'Über uns', portfolio: 'Arbeit', pricing: 'Preise', contact: 'Kontakt' },
    hero: { tag: 'Genesy Kollektiv', title: 'Where ideas meet innovation', sub: 'Digitale Hochleistungssysteme für visionäre Unternehmen.', cta1: 'Starten', cta2: 'Portfolio' },
    story: { title: 'Über uns', text: 'Nexora entspringt dem Genesy-Kollektiv und bringt eine neue Generation visionärer Köpfe hervor.' },
    stats: { clients: 'Kunden', foundation: 'Gründung', service: '5-Sterne-Service' },
    services: {
      web: { title: 'Website creation', problem: 'Veraltete UX und minimale Conversions.', solution: 'Ultraschnelle, SEO-bereite Websysteme.', benefit: 'Digitaler Einfluss' },
      ai: { title: 'AI Assistant', problem: 'Hohe manuelle operative Belastung.', solution: 'Intelligente KI-Agenten in Workflows integriert.', benefit: '24/7 Automatisierung' },
      marketing: { title: 'Marketing ideas', problem: 'Stagnation und Mangel an Leads.', solution: 'Datengetriebene Strategien zur Skalierung.', benefit: 'Exponentieller ROI' }
    },
    pricing: { 
      title: 'Preise', 
      sub: 'Skalierbare Investition für Elite-Ergebnisse.', 
      base: 'Basis', premium: 'Premium', business: 'Business', days: 'Tage',
      features: {
        responsive: 'Responsive Design',
        seo: 'Basis-SEO',
        contact: 'Direktkontaktformular',
        revision1: '1 Revision',
        copy: 'KI-Copywriting',
        analytics: 'Analytics Hub',
        speed: 'Geschwindigkeitsschub',
        support30: '30 Tage Support',
        ai_int: 'KI-Integration',
        chatbot: 'Eigener Chatbot',
        enterprise: 'Enterprise-Systeme',
        priority: 'Prioritärer Support'
      }
    },
    team: { title: 'Nexora Team' },
    contact: { 
      title: 'Projekt Starten', 
      sub: 'Erzählen Sie uns von Ihrer Idee.', 
      name: 'Name', 
      email: 'E-Mail', 
      type: 'Projekttyp',
      typeOptions: {
        marketing: 'Marketing ideas',
        web: 'Website creation',
        ai: 'AI Assistant'
      },
      message: 'Nachricht', 
      send: 'Senden', 
      success: 'Anfrage gesendet!' 
    }
  },
  fr: {
    nav: { services: 'Services', about: 'Équipe', story: 'À propos', portfolio: 'Projets', pricing: 'Tarifs', contact: 'Contact' },
    hero: { tag: 'Collectif Genesy', title: 'Where ideas meet innovation', sub: 'Ingénierie numérique pour l\'ère moderne du business.', cta1: 'Démarrer', cta2: 'Portfolio' },
    story: { title: 'À propos', text: 'Née du collectif Genesy, Nexora réunit une nouvelle generazione d\'esprits visionnaires.' },
    stats: { clients: 'Clients', foundation: 'Fondation', service: 'Service 5 Étoiles' },
    services: {
      web: { title: 'Website creation', problem: 'UX obsolète et conversions minimales.', solution: 'Systèmes web ultra-rapides et prêts pour le SEO.', benefit: 'Impact Numérique' },
      ai: { title: 'AI Assistant', problem: 'Charge opérationnelle manuelle élevée.', solution: 'Agents IA intelligents intégrés aux flux.', benefit: 'Automatisation 24/7' },
      marketing: { title: 'Marketing ideas', problem: 'Stagnation et manque di leads.', solution: 'Stratégies axées sur les données.', benefit: 'ROI Exponentiel' }
    },
    pricing: { 
      title: 'Tarifs', 
      sub: 'Investissement évolutif pour résultats d\'élite.', 
      base: 'Base', premium: 'Premium', business: 'Business', days: 'Jours',
      features: {
        responsive: 'Design Réactif',
        seo: 'SEO de Base',
        contact: 'Formulaire de Contact Direct',
        revision1: '1 Révision',
        copy: 'Copywriting par IA',
        analytics: 'Hub Analytics',
        speed: 'Boost de Vitesse',
        support30: 'Support 30 Jours',
        ai_int: 'Intégration IA',
        chatbot: 'Chatbot Personnalisé',
        enterprise: 'Systèmes Entreprise',
        priority: 'Support Prioritaire'
      }
    },
    team: { title: 'Nexora Team' },
    contact: { 
      title: 'Démarrer Projet', 
      sub: 'Parlez-nous de votre projet.', 
      name: 'Nom', 
      email: 'E-mail', 
      type: 'Type de Projet',
      typeOptions: {
        marketing: 'Marketing ideas',
        web: 'Website creation',
        ai: 'AI Assistant'
      },
      message: 'Message', 
      send: 'Envoyer', 
      success: 'Message envoyé!' 
    }
  }
};

export const SERVICES_DATA: Service[] = [
  { id: 'web', title: 'Website creation', problem: '', solution: '', benefit: '', category: 'web', icon: <Code2 /> },
  { id: 'ai', title: 'AI Assistant', problem: '', solution: '', benefit: '', category: 'ai', icon: <Cpu /> },
  { id: 'marketing', title: 'Marketing ideas', problem: '', solution: '', benefit: '', category: 'support', icon: <TrendingUp /> }
];

export const TEAM_DATA: TeamMember[] = [
  { name: 'Refik Maksudi', role: 'Finance', bio: 'Strategic lead for financial architecture and business scaling.', image: '/team-avatar.png' },
  { name: 'Johnny Pungitore', role: 'Marketing & Recruiting', bio: 'Expert in global brand expansion and elite talent acquisition.', image: '/team-avatar.png' },
  { name: 'Andrea Stojkov', role: 'Engineering & Development', bio: 'Head of software engineering and high-performance development.', image: '/team-avatar.png' },
  { name: 'Petar Krstev', role: 'Engineering & Support', bio: 'Specialist in AI integration and technical infrastructure maintenance.', image: '/team-avatar.png' }
];

export const PRICING_DATA_MAP: Record<string, string[]> = {
  Base: ['responsive', 'seo', 'contact', 'revision1'],
  Premium: ['copy', 'analytics', 'speed', 'support30'],
  Elite: ['ai_int', 'chatbot', 'enterprise', 'priority']
};

export const PRICING_DATA: PricingPlan[] = [
  { name: 'Base', times: '5-7', color: 'cyan', features: [] },
  { name: 'Premium', times: '7-14', color: 'indigo', features: [] },
  { name: 'Elite', times: '14-21', color: 'purple', features: [] }
];

export const PORTFOLIO_DATA: PortfolioProject[] = [
  { title: 'CyberTech Platform', description: 'Next-gen Portal.', result: '60% Revenue.', image: '/portfolio-1.png', category: 'Web' },
  { title: 'Neural Desk', description: 'AI Helpdesk.', result: '90% Efficiency.', image: '/portfolio-2.png', category: 'AI' },
  { title: 'Quantum Store', description: 'High-speed Shop.', result: 'Global Reach.', image: '/portfolio-3.png', category: 'Engineering' }
];