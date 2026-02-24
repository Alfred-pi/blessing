export type Lang = 'pt' | 'fr' | 'en';

export const translations: Record<Lang, Record<string, any>> = {
  pt: {
    meta: {
      title: 'Blessing Uniformes Angola - Confecção de Uniformes Profissionais em Luanda',
      description: 'Blessing Uniformes Angola: confecção de uniformes corporativos, fardas, EPI e design têxtil em Luanda. Qualidade e excelência para a sua empresa.',
    },
    nav: { home: 'Início', services: 'Serviços', about: 'Sobre Nós', gallery: 'Galeria', contact: 'Contacto' },
    hero: {
      badge: 'Excelência em Uniformes desde Luanda',
      line1: 'Uniformes que',
      line2: 'Inspiram Confiança',
      subtitle: 'Confecção de uniformes profissionais, fardas, equipamentos de proteção e design têxtil para empresas que exigem qualidade.',
      cta: 'Solicitar Orçamento',
      cta2: 'Ver Serviços',
    },
    services: {
      title: 'Nossos Serviços',
      subtitle: 'Soluções completas em vestuário profissional',
      items: [
        { icon: 'shirt', title: 'Uniformes Corporativos', desc: 'Uniformes elegantes e funcionais que representam a identidade da sua empresa com qualidade superior.' },
        { icon: 'shield', title: 'Fardas & Equipamentos', desc: 'Fardas resistentes e equipamentos de trabalho projetados para conforto e durabilidade no dia a dia.' },
        { icon: 'hard-hat', title: 'EPI - Proteção Individual', desc: 'Equipamentos de proteção individual certificados, garantindo a segurança dos seus colaboradores.' },
        { icon: 'palette', title: 'Design Têxtil', desc: 'Criação personalizada de designs, estampas e bordados que diferenciam a sua marca no mercado.' },
      ],
    },
    about: {
      label: 'Blessing Uniformes',
      title: 'Sobre a Blessing',
      p1: 'A Blessing Uniformes Angola é uma empresa líder na confecção de uniformes profissionais em Luanda. Com anos de experiência no mercado angolano, transformamos tecidos em vestuário de excelência.',
      p2: 'A nossa missão é vestir profissionais com qualidade, conforto e identidade. Cada peça que confeccionamos carrega o compromisso de elevar a imagem das empresas e organizações que confiam em nós.',
      stats: [
        { value: '500+', label: 'Clientes Satisfeitos' },
        { value: '10K+', label: 'Uniformes Entregues' },
        { value: '5+', label: 'Anos de Experiência' },
      ],
    },
    gallery: {
      title: 'Nosso Trabalho',
      subtitle: 'Qualidade que se vê em cada detalhe',
      items: ['Uniformes Corporativos', 'Fardas Escolares', 'EPI Industrial', 'Polos Personalizados', 'Camisas Executivas', 'Vestuário Hospitalar'],
    },
    contact: {
      title: 'Fale Connosco',
      subtitle: 'Pronto para elevar a imagem da sua equipa?',
      name: 'Nome Completo', email: 'E-mail', phone: 'Telefone', message: 'Mensagem', send: 'Enviar Mensagem',
      location: 'Luanda, Angola',
    },
    footer: {
      tagline: 'Excelência em uniformes profissionais desde Luanda, Angola.',
      links: 'Links Rápidos',
      social: 'Redes Sociais',
      rights: 'Todos os direitos reservados.',
    },
  },
  fr: {
    meta: {
      title: 'Blessing Uniformes Angola - Confection d\'Uniformes Professionnels à Luanda',
      description: 'Blessing Uniformes Angola : confection d\'uniformes corporate, tenues de travail, EPI et design textile à Luanda. Qualité et excellence pour votre entreprise.',
    },
    nav: { home: 'Accueil', services: 'Services', about: 'À Propos', gallery: 'Galerie', contact: 'Contact' },
    hero: {
      badge: "L'excellence en uniformes depuis Luanda",
      line1: 'Des Uniformes qui',
      line2: 'Inspirent Confiance',
      subtitle: "Confection d'uniformes professionnels, tenues de travail, équipements de protection et design textile pour les entreprises exigeantes.",
      cta: 'Demander un Devis',
      cta2: 'Voir les Services',
    },
    services: {
      title: 'Nos Services',
      subtitle: 'Solutions complètes en vêtements professionnels',
      items: [
        { icon: 'shirt', title: 'Uniformes Corporate', desc: "Des uniformes élégants et fonctionnels qui représentent l'identité de votre entreprise avec une qualité supérieure." },
        { icon: 'shield', title: 'Tenues & Équipements', desc: 'Des tenues résistantes et des équipements de travail conçus pour le confort et la durabilité au quotidien.' },
        { icon: 'hard-hat', title: 'EPI - Protection Individuelle', desc: 'Équipements de protection individuelle certifiés, garantissant la sécurité de vos collaborateurs.' },
        { icon: 'palette', title: 'Design Textile', desc: 'Création personnalisée de designs, impressions et broderies qui différencient votre marque sur le marché.' },
      ],
    },
    about: {
      label: 'Blessing Uniformes',
      title: 'À Propos de Blessing',
      p1: "Blessing Uniformes Angola est une entreprise leader dans la confection d'uniformes professionnels à Luanda. Avec des années d'expérience sur le marché angolais, nous transformons les tissus en vêtements d'excellence.",
      p2: "Notre mission est d'habiller les professionnels avec qualité, confort et identité. Chaque pièce que nous confectionnons porte l'engagement d'élever l'image des entreprises qui nous font confiance.",
      stats: [
        { value: '500+', label: 'Clients Satisfaits' },
        { value: '10K+', label: 'Uniformes Livrés' },
        { value: '5+', label: "Années d'Expérience" },
      ],
    },
    gallery: {
      title: 'Notre Travail',
      subtitle: 'La qualité se voit dans chaque détail',
      items: ['Uniformes Corporate', 'Tenues Scolaires', 'EPI Industriel', 'Polos Personnalisés', 'Chemises Exécutives', 'Vêtements Hospitaliers'],
    },
    contact: {
      title: 'Contactez-Nous',
      subtitle: "Prêt à élever l'image de votre équipe ?",
      name: 'Nom Complet', email: 'E-mail', phone: 'Téléphone', message: 'Message', send: 'Envoyer le Message',
      location: 'Luanda, Angola',
    },
    footer: {
      tagline: 'Excellence en uniformes professionnels depuis Luanda, Angola.',
      links: 'Liens Rapides',
      social: 'Réseaux Sociaux',
      rights: 'Tous droits réservés.',
    },
  },
  en: {
    meta: {
      title: 'Blessing Uniformes Angola - Professional Uniform Manufacturing in Luanda',
      description: 'Blessing Uniformes Angola: corporate uniform manufacturing, workwear, PPE and textile design in Luanda. Quality and excellence for your business.',
    },
    nav: { home: 'Home', services: 'Services', about: 'About Us', gallery: 'Gallery', contact: 'Contact' },
    hero: {
      badge: 'Excellence in Uniforms from Luanda',
      line1: 'Uniforms that',
      line2: 'Inspire Confidence',
      subtitle: 'Professional uniform manufacturing, workwear, safety equipment and textile design for companies that demand quality.',
      cta: 'Request a Quote',
      cta2: 'View Services',
    },
    services: {
      title: 'Our Services',
      subtitle: 'Complete solutions in professional apparel',
      items: [
        { icon: 'shirt', title: 'Corporate Uniforms', desc: "Elegant and functional uniforms that represent your company's identity with superior quality." },
        { icon: 'shield', title: 'Workwear & Equipment', desc: 'Resistant workwear and equipment designed for daily comfort and durability.' },
        { icon: 'hard-hat', title: 'PPE - Personal Protection', desc: 'Certified personal protective equipment, ensuring the safety of your employees.' },
        { icon: 'palette', title: 'Textile Design', desc: 'Custom creation of designs, prints and embroidery that differentiate your brand in the market.' },
      ],
    },
    about: {
      label: 'Blessing Uniformes',
      title: 'About Blessing',
      p1: 'Blessing Uniformes Angola is a leading company in professional uniform manufacturing in Luanda. With years of experience in the Angolan market, we transform fabrics into garments of excellence.',
      p2: 'Our mission is to dress professionals with quality, comfort and identity. Every piece we make carries the commitment to elevate the image of the companies that trust us.',
      stats: [
        { value: '500+', label: 'Satisfied Clients' },
        { value: '10K+', label: 'Uniforms Delivered' },
        { value: '5+', label: 'Years of Experience' },
      ],
    },
    gallery: {
      title: 'Our Work',
      subtitle: 'Quality visible in every detail',
      items: ['Corporate Uniforms', 'School Uniforms', 'Industrial PPE', 'Custom Polos', 'Executive Shirts', 'Hospital Apparel'],
    },
    contact: {
      title: 'Contact Us',
      subtitle: "Ready to elevate your team's image?",
      name: 'Full Name', email: 'Email', phone: 'Phone', message: 'Message', send: 'Send Message',
      location: 'Luanda, Angola',
    },
    footer: {
      tagline: 'Excellence in professional uniforms from Luanda, Angola.',
      links: 'Quick Links',
      social: 'Social Media',
      rights: 'All rights reserved.',
    },
  },
};

export function getLangFromUrl(url: URL): Lang {
  const [, base, lang] = url.pathname.split('/');
  if (lang === 'fr' || lang === 'en') return lang;
  return 'pt';
}

export function getLocalizedPath(lang: Lang, path: string = ''): string {
  const base = '/blessing';
  if (lang === 'pt') return `${base}/${path}`;
  return `${base}/${lang}/${path}`;
}
