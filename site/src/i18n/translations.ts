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
    trust: '500+ empresas confiam em nós',
    marquee: ['Uniformes Corporativos', 'Fardas', 'EPI', 'Design Têxtil', 'Bordados', 'Estampas', 'Polos', 'Camisas', 'Coletes', 'Batas'],
    process: {
      tag: 'Processo',
      title: 'Como Trabalhamos',
      subtitle: 'Do primeiro contacto à entrega, um processo simples e transparente',
      steps: [
        { title: 'Consulta', desc: 'Entendemos as necessidades da sua empresa e definimos o projeto juntos.' },
        { title: 'Design', desc: 'Criamos designs personalizados com a identidade visual da sua marca.' },
        { title: 'Produção', desc: 'Confeccionamos com materiais de qualidade e atenção a cada detalhe.' },
        { title: 'Entrega', desc: 'Entregamos no prazo, com garantia de qualidade em cada peça.' },
      ],
    },
    whyUs: {
      tag: 'Vantagens',
      title: 'Porquê a Blessing?',
      subtitle: 'O que nos diferencia no mercado angolano',
      items: [
        { title: 'Rapidez', desc: 'Prazos de entrega competitivos para não parar a sua operação' },
        { title: 'Personalização', desc: 'Cada uniforme é pensado para a identidade da sua empresa' },
        { title: 'Qualidade', desc: 'Materiais resistentes e acabamentos de excelência duradouros' },
        { title: 'Preço Justo', desc: 'Melhor relação qualidade-preço do mercado em Luanda' },
        { title: 'Acompanhamento', desc: 'Suporte dedicado do início ao fim do seu projeto' },
        { title: 'Experiência', desc: 'Anos de know-how no mercado angolano de uniformes' },
      ],
    },
    cta: {
      title: 'Pronto para vestir a sua equipa',
      title2: 'com excelência?',
      subtitle: 'Solicite um orçamento gratuito e sem compromisso. Respondemos em 24 horas.',
      btn: 'Solicitar Orçamento',
    },
    testimonials: {
      tag: 'Testemunhos',
      title: 'O Que Dizem os Nossos Clientes',
      subtitle: 'A confiança das empresas que vestem Blessing',
      items: [
        { name: 'Carlos M.', role: 'Director de Operações', text: 'A Blessing transformou a imagem da nossa equipa. Uniformes impecáveis, entrega no prazo e preço justo. Recomendo a qualquer empresa.' },
        { name: 'Ana P.', role: 'Gestora de RH', text: 'Trabalhamos com a Blessing há 3 anos. A qualidade é consistente e o atendimento personalizado faz toda a diferença. Uma parceria de confiança.' },
        { name: 'João S.', role: 'Empresário', text: 'Precisávamos de 200 uniformes em tempo recorde. A Blessing entregou com qualidade e dentro do prazo. Profissionalismo de excelência.' },
      ],
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
    trust: '500+ entreprises nous font confiance',
    marquee: ['Uniformes Corporate', 'Tenues de travail', 'EPI', 'Design Textile', 'Broderies', 'Impressions', 'Polos', 'Chemises', 'Gilets', 'Blouses'],
    process: {
      tag: 'Processus',
      title: 'Comment Nous Travaillons',
      subtitle: 'Du premier contact à la livraison, un processus simple et transparent',
      steps: [
        { title: 'Consultation', desc: 'Nous comprenons les besoins de votre entreprise et définissons le projet ensemble.' },
        { title: 'Design', desc: 'Nous créons des designs personnalisés avec l\'identité visuelle de votre marque.' },
        { title: 'Production', desc: 'Nous confectionnons avec des matériaux de qualité et une attention à chaque détail.' },
        { title: 'Livraison', desc: 'Nous livrons dans les délais, avec une garantie de qualité sur chaque pièce.' },
      ],
    },
    whyUs: {
      tag: 'Avantages',
      title: 'Pourquoi Blessing ?',
      subtitle: 'Ce qui nous différencie sur le marché angolais',
      items: [
        { title: 'Rapidité', desc: 'Délais de livraison compétitifs pour ne pas arrêter votre activité' },
        { title: 'Personnalisation', desc: 'Chaque uniforme est pensé pour l\'identité de votre entreprise' },
        { title: 'Qualité', desc: 'Matériaux résistants et finitions d\'excellence durables' },
        { title: 'Prix Juste', desc: 'Meilleur rapport qualité-prix du marché à Luanda' },
        { title: 'Accompagnement', desc: 'Support dédié du début à la fin de votre projet' },
        { title: 'Expérience', desc: 'Des années de savoir-faire sur le marché angolais des uniformes' },
      ],
    },
    cta: {
      title: 'Prêt à habiller votre équipe',
      title2: 'avec excellence ?',
      subtitle: 'Demandez un devis gratuit et sans engagement. Nous répondons sous 24 heures.',
      btn: 'Demander un Devis',
    },
    testimonials: {
      tag: 'Témoignages',
      title: 'Ce Que Disent Nos Clients',
      subtitle: 'La confiance des entreprises qui portent Blessing',
      items: [
        { name: 'Carlos M.', role: 'Directeur des Opérations', text: 'Blessing a transformé l\'image de notre équipe. Uniformes impeccables, livraison à temps et prix juste. Je recommande à toute entreprise.' },
        { name: 'Ana P.', role: 'Responsable RH', text: 'Nous travaillons avec Blessing depuis 3 ans. La qualité est constante et le service personnalisé fait toute la différence. Un partenariat de confiance.' },
        { name: 'João S.', role: 'Entrepreneur', text: 'Nous avions besoin de 200 uniformes en temps record. Blessing a livré avec qualité et dans les délais. Un professionnalisme d\'excellence.' },
      ],
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
    trust: '500+ companies trust us',
    marquee: ['Corporate Uniforms', 'Workwear', 'PPE', 'Textile Design', 'Embroidery', 'Prints', 'Polos', 'Shirts', 'Vests', 'Lab Coats'],
    process: {
      tag: 'Process',
      title: 'How We Work',
      subtitle: 'From first contact to delivery, a simple and transparent process',
      steps: [
        { title: 'Consultation', desc: 'We understand your company\'s needs and define the project together.' },
        { title: 'Design', desc: 'We create custom designs with your brand\'s visual identity.' },
        { title: 'Production', desc: 'We manufacture with quality materials and attention to every detail.' },
        { title: 'Delivery', desc: 'We deliver on time, with a quality guarantee on every piece.' },
      ],
    },
    whyUs: {
      tag: 'Advantages',
      title: 'Why Blessing?',
      subtitle: 'What sets us apart in the Angolan market',
      items: [
        { title: 'Speed', desc: 'Competitive delivery times to keep your operations running' },
        { title: 'Customization', desc: 'Every uniform is designed for your company\'s identity' },
        { title: 'Quality', desc: 'Resistant materials and lasting excellence in finishing' },
        { title: 'Fair Price', desc: 'Best quality-price ratio in the Luanda market' },
        { title: 'Support', desc: 'Dedicated support from start to finish of your project' },
        { title: 'Experience', desc: 'Years of know-how in the Angolan uniform market' },
      ],
    },
    cta: {
      title: 'Ready to dress your team',
      title2: 'with excellence?',
      subtitle: 'Request a free quote with no commitment. We respond within 24 hours.',
      btn: 'Request a Quote',
    },
    testimonials: {
      tag: 'Testimonials',
      title: 'What Our Clients Say',
      subtitle: 'The trust of companies that wear Blessing',
      items: [
        { name: 'Carlos M.', role: 'Operations Director', text: 'Blessing transformed our team\'s image. Impeccable uniforms, on-time delivery and fair pricing. I recommend them to any company.' },
        { name: 'Ana P.', role: 'HR Manager', text: 'We\'ve been working with Blessing for 3 years. Quality is consistent and personalized service makes all the difference. A trusted partnership.' },
        { name: 'João S.', role: 'Entrepreneur', text: 'We needed 200 uniforms in record time. Blessing delivered with quality and on schedule. Excellence in professionalism.' },
      ],
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
