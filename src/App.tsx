import { 
  ShoppingBag, 
  Instagram, 
  MessageCircle, 
  ChevronRight, 
  Menu, 
  X, 
  MapPin, 
  User, 
  ArrowLeft,
  Star,
  ShieldCheck,
  Zap,
  ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

// --- Types & Constants ---

type Page = 'home' | 'moda-feminina' | 'calcados' | 'bolsas' | 'moda-praia' | 'moda-masculino' | 'informacoes';

const BRAND = {
  name: "La Belle Stores",
  instagram: "@la.bellestores",
  ceoInstagram: "@silva.cryss1",
  ceo: "Cryss Silva",
  whatsapp: "82993863501",
  whatsappDisplay: "(82) 99386-3501",
  location: "Maceió - AL",
  description: "Looks, calçados e acessórios de qualidade para vocês"
};

const CATEGORIES = [
  { id: 'moda-feminina', title: 'Moda Feminina', description: 'Elegância e presença em cada ocasião.', image: 'https://i.postimg.cc/yx1BHD05/imagem-2026-04-01-184634195.png' },
  { id: 'calcados', title: 'Calçados', description: 'Estilo e conforto para seus passos.', image: 'https://i.postimg.cc/wvxbxLb7/imagem-2026-04-01-185100680.png' },
  { id: 'bolsas', title: 'Bolsas', description: 'Personalidade e sofisticação em acessórios.', image: 'https://i.postimg.cc/9FwgfW1P/imagem-2026-04-01-185213947.png' },
  { id: 'moda-praia', title: 'Moda Praia', description: 'Leveza e estilo para momentos marcantes.', image: 'https://i.postimg.cc/2y6JGhQm/imagem-2026-04-01-184944235.png' },
  { id: 'moda-masculino', title: 'Moda Masculina', description: 'Praticidade e presença para o homem moderno.', image: 'https://i.postimg.cc/Y2dBFq6t/imagem-2026-04-01-184819055.png' },
  { id: 'informacoes', title: 'Informações', description: 'Como comprar e atendimento personalizado.', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800' },
];

const PRODUCTS: Record<string, any[]> = {
  'moda-feminina': [
    { id: 1, name: 'Vestido Midi Premium', price: 'Sob consulta', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=600' },
    { id: 2, name: 'Conjunto Alfaiataria', price: 'Sob consulta', image: 'https://images.unsplash.com/photo-1539109132314-34a7735ee29c?auto=format&fit=crop&q=80&w=600' },
    { id: 3, name: 'Blazer Estruturado', price: 'Sob consulta', image: 'https://images.unsplash.com/photo-1548624149-f9b1859aa700?auto=format&fit=crop&q=80&w=600' },
    { id: 4, name: 'Saia Plissada Lux', price: 'Sob consulta', image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=600' },
  ],
  'calcados': [
    { id: 1, name: 'Scarpin Verniz', price: 'Sob consulta', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=600' },
    { id: 2, name: 'Sandália Minimal', price: 'Sob consulta', image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&q=80&w=600' },
  ],
  'bolsas': [
    { id: 1, name: 'Clutch Dourada', price: 'Sob consulta', image: 'https://images.unsplash.com/photo-1566150905458-1bf1fd113f0d?auto=format&fit=crop&q=80&w=600' },
    { id: 2, name: 'Bolsa Couro Premium', price: 'Sob consulta', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=600' },
  ],
  'moda-praia': [
    { id: 1, name: 'Biquíni Resort', price: 'Sob consulta', image: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&q=80&w=600' },
  ],
  'moda-masculino': [
    { id: 1, name: 'Camisa Linho', price: 'Sob consulta', image: 'https://images.unsplash.com/photo-1516257984877-283d991134b0?auto=format&fit=crop&q=80&w=600' },
  ]
};

// --- Components ---

const Logo = ({ className = "w-16 h-16" }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Background Circle */}
      <circle cx="100" cy="100" r="98" fill="#B89B72" />
      <circle cx="100" cy="100" r="94" fill="#0A0A0A" />
      
      {/* Monogram LB */}
      <g fill="none" stroke="white" strokeWidth="5" strokeLinecap="butt" strokeLinejoin="miter" transform="translate(65, 35) scale(0.85)">
        {/* The L part with serifs */}
        <path d="M5 0 H25 M15 0 V100 M5 100 H45" />
        {/* The B part with serifs */}
        <path d="M15 0 C75 0 85 45 35 50 C85 55 95 100 15 100" />
      </g>

      {/* Text LA BELLE */}
      <text 
        x="100" 
        y="145" 
        textAnchor="middle" 
        fill="white" 
        style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', fontWeight: '500', letterSpacing: '1px' }}
      >
        LA BELLE
      </text>
      
      {/* Text STORES */}
      <text 
        x="100" 
        y="172" 
        textAnchor="middle" 
        fill="white" 
        style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: '300', letterSpacing: '12px' }}
      >
        STORES
      </text>
    </svg>
  </div>
);

const Navbar = ({ onNavigate, currentPage }: { onNavigate: (p: Page) => void, currentPage: Page }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-black/80 backdrop-blur-md border-b border-brand-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 group"
        >
          <Logo className="w-12 h-12 transition-transform group-hover:scale-110" />
          <span className="font-serif text-xl tracking-widest gold-text-gradient font-bold hidden sm:block">
            LA BELLE
          </span>
        </button>

        <div className="hidden lg:flex items-center gap-6">
          {['home', ...CATEGORIES.map(c => c.id)].map((item) => (
            <button
              key={item}
              onClick={() => onNavigate(item as Page)}
              className={`text-[10px] uppercase tracking-[0.2em] transition-colors whitespace-nowrap ${
                currentPage === item ? 'text-brand-gold' : 'text-brand-white/60 hover:text-brand-white'
              }`}
            >
              {item === 'home' ? 'Início' : CATEGORIES.find(c => c.id === item)?.title || item.replace('-', ' ')}
            </button>
          ))}
        </div>

        <button 
          onClick={() => setIsOpen(true)}
          className="p-2 text-brand-white md:hidden"
        >
          <Menu size={24} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-brand-black z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <Logo className="w-16 h-16" />
              <button onClick={() => setIsOpen(false)} className="p-2 text-brand-gold">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              {['home', ...CATEGORIES.map(c => c.id)].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    onNavigate(item as Page);
                    setIsOpen(false);
                  }}
                  className="font-serif text-3xl text-left text-brand-white hover:text-brand-gold transition-colors capitalize"
                >
                  {item === 'home' ? 'Início' : item.replace('-', ' ')}
                </button>
              ))}
            </div>
            <div className="mt-auto flex flex-col gap-6 border-t border-brand-white/10 pt-8">
              <a href={`https://wa.me/${BRAND.whatsapp}`} className="flex items-center gap-4 text-brand-gold">
                <MessageCircle size={20} />
                <span className="text-sm tracking-widest uppercase">WhatsApp</span>
              </a>
              <a href="https://instagram.com/la.bellestores" className="flex items-center gap-4 text-brand-gold">
                <Instagram size={20} />
                <span className="text-sm tracking-widest uppercase">Instagram</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onNavigate }: { onNavigate: (p: Page) => void }) => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1920" 
        alt="Luxury Fashion"
        className="w-full h-full object-cover scale-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-brand-black/60" />
      <div className="absolute inset-0 luxury-gradient" />
    </div>

    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-center mb-8">
          <Logo className="w-24 h-24 md:w-32 md:h-32" />
        </div>
        <span className="text-brand-gold text-xs uppercase tracking-[0.4em] mb-6 block font-medium">
          Premium Boutique
        </span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 leading-[1.1] tracking-tight">
          Elegância, estilo e <br />
          <span className="italic gold-text-gradient">exclusividade.</span>
        </h1>
        <p className="text-brand-bege/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Looks, calçados e acessórios selecionados para transformar sua experiência de compra em algo sofisticado e memorável.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href={`https://wa.me/${BRAND.whatsapp}`}
            className="w-full sm:w-auto bg-brand-gold text-brand-black px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-champagne transition-all flex items-center justify-center gap-2 group"
          >
            <MessageCircle size={18} />
            Comprar pelo WhatsApp
          </a>
          <button 
            onClick={() => document.getElementById('categorias')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto border border-brand-white/20 text-brand-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-white hover:text-brand-black transition-all"
          >
            Explorar Coleção
          </button>
        </div>
      </motion.div>
    </div>

    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="text-[10px] uppercase tracking-[0.3em] text-brand-white/40">Scroll</span>
      <div className="w-px h-12 bg-gradient-to-b from-brand-gold to-transparent" />
    </motion.div>
  </section>
);

const About = () => (
  <section className="py-24 bg-brand-graphite relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800" 
              alt="Boutique Interior"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-brand-gold p-8 rounded-2xl hidden md:block">
            <p className="text-brand-black font-serif text-2xl italic">"Qualidade em cada detalhe"</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-8">
            <Logo className="w-20 h-20" />
          </div>
          <span className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-4 block">Nossa Essência</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">Sobre a La Belle Stores</h2>
          <p className="text-brand-bege/70 text-lg leading-relaxed mb-10">
            A La Belle Stores nasceu para oferecer uma curadoria de peças que unem estilo, qualidade e sofisticação. 
            Mais do que vender produtos, a marca entrega uma experiência elegante, prática e pensada para quem valoriza presença, bom gosto e exclusividade.
          </p>
          
          <div className="grid grid-cols-2 gap-8">
            {[
              { icon: <ShoppingBag size={24} />, label: 'Loja Online' },
              { icon: <User size={24} />, label: 'Atendimento VIP' },
              { icon: <Star size={24} />, label: 'Curadoria Premium' },
              { icon: <ShieldCheck size={24} />, label: 'Compra Segura' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="text-brand-gold">{item.icon}</div>
                <span className="text-sm uppercase tracking-widest font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const CEOSection = () => (
  <section className="py-24 bg-brand-black relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-1/3"
        >
          <div className="aspect-[3/4] rounded-full overflow-hidden border-2 border-brand-gold/30 p-2">
            <img 
              src="https://i.postimg.cc/7ZCKWB8L/imagem-2026-04-01-183407928.png" 
              alt="CEO Cryss Silva"
              className="w-full h-full object-cover rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left"
        >
          <span className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-4 block">Direção Criativa</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Curadoria & Direção</h2>
          <p className="text-brand-bege/70 text-xl italic font-display leading-relaxed mb-8">
            "Sob a direção de Cryss Silva, a La Belle Stores se destaca por sua seleção cuidadosa de peças, construindo uma identidade visual elegante, atual e sofisticada para seus clientes."
          </p>
          <div>
            <h4 className="text-brand-white font-serif text-2xl mb-1">Cryss Silva</h4>
            <p className="text-brand-gold text-xs uppercase tracking-widest">CEO & Curadora</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const CategoryGrid = ({ onNavigate }: { onNavigate: (p: Page) => void }) => (
  <section id="categorias" className="py-24 bg-brand-graphite">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">Explore nossas categorias</h2>
        <p className="text-brand-bege/60 max-w-xl mx-auto">Escolha a categoria ideal e descubra peças selecionadas com elegância, estilo e praticidade.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CATEGORIES.map((cat, idx) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => onNavigate(cat.id as Page)}
            className="group cursor-pointer relative aspect-[4/5] overflow-hidden rounded-2xl"
          >
            <img 
              src={cat.image} 
              alt={cat.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-brand-black/20 transition-colors" />
            <div className="absolute inset-0 luxury-gradient opacity-80" />
            
            <div className="absolute bottom-0 left-0 w-full p-8">
              <h3 className="font-serif text-3xl mb-2 text-brand-white">{cat.title}</h3>
              <p className="text-brand-bege/80 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{cat.description}</p>
              <div className="flex items-center gap-2 text-brand-gold text-xs uppercase tracking-widest font-bold">
                Explorar <ChevronRight size={16} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1445205170230-053b830c6050?auto=format&fit=crop&q=80&w=1920" 
        alt="Fashion Background"
        className="w-full h-full object-cover opacity-30"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-brand-black/80" />
    </div>

    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="font-serif text-4xl md:text-6xl mb-8">Encontre sua próxima escolha favorita.</h2>
        <p className="text-brand-bege/70 text-lg mb-12 max-w-2xl mx-auto">
          Fale diretamente com a La Belle Stores e descubra peças selecionadas para destacar seu estilo com elegância e autenticidade.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href={`https://wa.me/${BRAND.whatsapp}`}
            className="w-full sm:w-auto bg-brand-gold text-brand-black px-12 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-champagne transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} />
            Comprar pelo WhatsApp
          </a>
          <a 
            href="https://instagram.com/la.bellestores"
            className="w-full sm:w-auto border border-brand-white/20 text-brand-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-white hover:text-brand-black transition-all flex items-center justify-center gap-2"
          >
            <Instagram size={18} />
            Acessar Instagram
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const Footer = ({ onNavigate }: { onNavigate: (p: Page) => void }) => (
  <footer className="bg-brand-black pt-24 pb-12 border-t border-brand-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Logo className="w-16 h-16" />
            <h3 className="font-serif text-3xl gold-text-gradient font-bold">LA BELLE</h3>
          </div>
          <p className="text-brand-bege/50 text-sm leading-relaxed">
            Elegância, estilo e sofisticação em cada detalhe. Sua boutique premium em Maceió - AL.
          </p>
          <div className="flex gap-4">
            <a href="https://instagram.com/la.bellestores" className="w-10 h-10 rounded-full border border-brand-white/10 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all">
              <Instagram size={20} />
            </a>
            <a href={`https://wa.me/${BRAND.whatsapp}`} className="w-10 h-10 rounded-full border border-brand-white/10 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-brand-white text-xs uppercase tracking-[0.3em] font-bold mb-8">Categorias</h4>
          <ul className="space-y-4">
            {CATEGORIES.map(cat => (
              <li key={cat.id}>
                <button 
                  onClick={() => onNavigate(cat.id as Page)}
                  className="text-brand-bege/50 text-sm hover:text-brand-gold transition-colors"
                >
                  {cat.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-brand-white text-xs uppercase tracking-[0.3em] font-bold mb-8">Contato</h4>
          <ul className="space-y-4 text-sm text-brand-bege/50">
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-brand-gold" />
              Maceió - AL (Loja Online)
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle size={16} className="text-brand-gold" />
              {BRAND.whatsappDisplay}
            </li>
            <li className="flex items-center gap-3">
              <User size={16} className="text-brand-gold" />
              CEO Cryss Silva
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-brand-white text-xs uppercase tracking-[0.3em] font-bold mb-8">Newsletter</h4>
          <p className="text-brand-bege/50 text-sm mb-6">Receba novidades e coleções exclusivas.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Seu e-mail" 
              className="bg-brand-graphite border border-brand-white/10 rounded-full px-4 py-2 text-sm w-full focus:outline-none focus:border-brand-gold"
            />
            <button className="bg-brand-gold text-brand-black p-2 rounded-full hover:bg-brand-champagne transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-brand-white/5 text-center">
        <p className="text-[10px] uppercase tracking-[0.4em] text-brand-bege/30">
          © 2026 La Belle Stores. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

const CategoryPage = ({ categoryId, onBack }: { categoryId: Page, onBack: () => void }) => {
  const category = CATEGORIES.find(c => c.id === categoryId);
  const products = PRODUCTS[categoryId] || [];

  if (categoryId === 'informacoes') {
    return (
      <div className="pt-32 pb-24 bg-brand-black min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <button onClick={onBack} className="flex items-center gap-2 text-brand-gold text-xs uppercase tracking-widest font-bold mb-12">
            <ArrowLeft size={16} /> Voltar
          </button>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
            <h1 className="font-serif text-5xl">Informações</h1>
            <div className="bg-brand-graphite p-4 rounded-2xl border border-brand-white/5">
              <Logo className="w-16 h-16" />
            </div>
          </div>
          
          <div className="space-y-12">
            <section className="bg-brand-graphite p-8 rounded-2xl border border-brand-white/5">
              <h3 className="font-serif text-2xl mb-4 text-brand-gold">Como comprar</h3>
              <p className="text-brand-bege/70 leading-relaxed">
                Escolha a categoria desejada, visualize os produtos disponíveis e finalize seu pedido diretamente pelo WhatsApp com atendimento personalizado. Nossa curadoria é focada em oferecer o melhor da moda com praticidade.
              </p>
            </section>

            <section className="bg-brand-graphite p-8 rounded-2xl border border-brand-white/5">
              <h3 className="font-serif text-2xl mb-4 text-brand-gold">Atendimento</h3>
              <p className="text-brand-bege/70 leading-relaxed">
                Atendimento online com suporte direto para encomendas, dúvidas e informações sobre produtos. Estamos disponíveis para ajudar você a encontrar o look perfeito.
              </p>
            </section>

            <section className="bg-brand-graphite p-8 rounded-2xl border border-brand-white/5">
              <h3 className="font-serif text-2xl mb-4 text-brand-gold">Contato Oficial</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-3 text-brand-bege/70">
                  <MessageCircle size={20} className="text-brand-gold" />
                  <strong>WhatsApp:</strong> {BRAND.whatsappDisplay}
                </p>
                <p className="flex items-center gap-3 text-brand-bege/70">
                  <Instagram size={20} className="text-brand-gold" />
                  <strong>Instagram:</strong> {BRAND.instagram}
                </p>
                <p className="flex items-center gap-3 text-brand-bege/70">
                  <MapPin size={20} className="text-brand-gold" />
                  <strong>Localização:</strong> Maceió - AL
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-brand-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <button onClick={onBack} className="flex items-center gap-2 text-brand-gold text-xs uppercase tracking-widest font-bold mb-12">
          <ArrowLeft size={16} /> Voltar
        </button>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h1 className="font-serif text-5xl md:text-6xl mb-4">{category?.title}</h1>
            <p className="text-brand-bege/60 max-w-xl">{category?.description}</p>
          </div>
          <div className="flex gap-4">
            <a href={`https://wa.me/${BRAND.whatsapp}`} className="bg-brand-gold text-brand-black px-6 py-3 rounded-full text-[10px] uppercase tracking-widest font-bold">
              Encomendar via WhatsApp
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-6 relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/20 transition-colors" />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="bg-brand-white text-brand-black p-3 rounded-full shadow-xl">
                      <ArrowUpRight size={20} />
                   </div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-xl mb-1">{product.name}</h3>
                  <p className="text-brand-gold text-sm font-medium">{product.price}</p>
                </div>
                <a 
                  href={`https://wa.me/${BRAND.whatsapp}?text=Olá! Gostaria de saber mais sobre o produto: ${product.name}`}
                  className="text-[10px] uppercase tracking-widest font-bold border-b border-brand-gold text-brand-gold pb-1"
                >
                  Encomendar
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {products.length === 0 && (
          <div className="py-32 text-center border border-dashed border-brand-white/10 rounded-3xl">
            <p className="text-brand-bege/40 italic">Novidades em breve nesta categoria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen selection:bg-brand-gold selection:text-brand-black">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      
      <AnimatePresence mode="wait">
        {currentPage === 'home' ? (
          <motion.main
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Hero onNavigate={setCurrentPage} />
            <About />
            <CEOSection />
            <CategoryGrid onNavigate={setCurrentPage} />
            
            {/* Differentials */}
            <section className="py-24 bg-brand-black">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12">
                  {[
                    { icon: <Zap className="text-brand-gold" />, title: 'Agilidade', desc: 'Atendimento rápido e personalizado via WhatsApp.' },
                    { icon: <Star className="text-brand-gold" />, title: 'Exclusividade', desc: 'Peças selecionadas com curadoria de alto padrão.' },
                    { icon: <ShieldCheck className="text-brand-gold" />, title: 'Segurança', desc: 'Sua compra garantida com transparência total.' },
                  ].map((item, idx) => (
                    <div key={idx} className="text-center space-y-4">
                      <div className="flex justify-center">{item.icon}</div>
                      <h4 className="font-serif text-2xl">{item.title}</h4>
                      <p className="text-brand-bege/50 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <CTASection />
          </motion.main>
        ) : (
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <CategoryPage categoryId={currentPage} onBack={() => setCurrentPage('home')} />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer onNavigate={setCurrentPage} />

      {/* Floating WhatsApp Button */}
      <a 
        href={`https://wa.me/${BRAND.whatsapp}`}
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform md:hidden"
        aria-label="WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
