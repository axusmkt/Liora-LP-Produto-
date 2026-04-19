import { motion } from "motion/react";
import { 
  CheckCircle2, 
  MessageCircle, 
  Truck, 
  Clock, 
  ShieldCheck, 
  Star, 
  Plus, 
  ChevronDown,
  Instagram,
  Zap,
  Package,
  X,
  ShoppingBag
} from "lucide-react";
import React, { useState, useEffect, memo } from "react";

// UTMify Tracking Types
declare global {
  interface Window {
    pixelId?: string;
    utmify?: {
      track: (event: string, properties?: any) => void;
    };
  }
}

// WhatsApp Configuration
const WHATSAPP_NUMBER = "5598920020157";

const getWhatsAppLink = (message: string) => {
  const finalMessage = `${message} Vim pelo site.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(finalMessage)}`;
};

// Checkout Configuration
const CHECKOUT_SINGLE = "https://perfumaria-liora.pay.yampi.com.br/r/93ZL576JZQ";
const CHECKOUT_DUO = "https://perfumaria-liora.pay.yampi.com.br/r/IBEVB5W13N";
const CHECKOUT_TRIO = "https://perfumaria-liora.pay.yampi.com.br/r/A2ZHOL8A36";

// Components
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-brand-primary/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-center">
        <div className="flex items-center">
          <img 
            src="https://i.ibb.co/kgr9dRtL/Logo-Liora.png" 
            alt="Liora Logo" 
            className="h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
            width="120"
            height="48"
          />
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const vslUrl = "https://player.vimeo.com/video/1184434612?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&title=0&byline=0&portrait=0";

  const scrollToOffers = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("kits-exclusivos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-32 pb-16 md:pb-24 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-10 mb-[20px] w-full"
      >
        <div className="inline-block px-[5px] py-2 bg-brand-accent rounded-full text-[8px] italic font-black uppercase tracking-[0.3em] text-gold border border-gold/10 mb-[10px] w-[317px]">
          Miniaturas — Brand Collection 25ML
        </div>
        <h1 className="serif text-5xl md:text-[60px] font-light leading-[1.1] text-balance max-w-5xl mx-auto">
          Sinta o <span className="italic font-medium text-gold text-balance">luxo</span> em cada rastro
        </h1>
      </motion.div>
      
      <div className="w-full max-w-2xl mb-[10px] px-4 sm:px-0">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gold/5 rounded-[40px] blur-2xl group-hover:bg-gold/10 transition-colors"></div>
          
          <div 
            className="relative bg-brand-primary rounded-[24px] shadow-2xl overflow-hidden aspect-[9/16] border-[1px] border-white/10 cursor-pointer" 
            onClick={() => setIsPlaying(true)}
          >
            {!isPlaying ? (
              <div className="absolute inset-0 z-10 w-full h-full flex flex-col items-center justify-center">
                {/* PREMIUM MANUAL PLACEHOLDER - NO AUTOMATIC VIMEO LOAD */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-brand-primary via-brand-primary/95 to-gold/20" />
                  {/* Watermark logo for brand authority */}
                  <img 
                    src="https://i.ibb.co/kgr9dRtL/Logo-Liora.png" 
                    alt="Watermark" 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 opacity-5 blur-[1px] scale-150 rotate-[-15deg] pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Central Play Button */}
                <div className="relative z-20 flex flex-col items-center gap-6">
                  <div className="w-24 h-24 bg-white/95 backdrop-blur-xl rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(197,160,89,0.3)] transform transition-all duration-700 group-hover:scale-110 group-hover:shadow-[0_0_80px_rgba(197,160,89,0.5)]">
                    <div className="w-0 h-0 border-t-[14px] border-t-transparent border-l-[24px] border-l-gold border-b-[14px] border-b-transparent ml-2" />
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gold animate-pulse">Assistir Apresentação</p>
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 w-full h-full animate-in fade-in duration-1000">
                <iframe 
                  src={vslUrl} 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  className="w-full h-full"
                  title="VSL"
                ></iframe>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center gap-3 mt-8">
           <div className="w-2 h-2 rounded-full bg-gold animate-ping"></div>
           <p className="text-[8px] font-black uppercase tracking-[0.4em] text-brand-primary/40 text-center">FRETE GRÁTIS — ENTREGA IMEDIATA</p>
        </div>
      </div>

      <motion.div
         initial={{ opacity: 0, scale: 0.95 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ delay: 0.4, duration: 0.6 }}
         className="flex flex-col items-center gap-8 md:gap-12 w-full"
      >
        <div className="w-full max-w-[340px] md:max-w-md space-y-4">
          <button 
            onClick={scrollToOffers}
            className="btn-cta bg-gold text-white hover:bg-gold-light w-full"
          >
            VER PROMOÇÕES COMPLETAS
          </button>
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-primary/40">
            Receba hoje em São Luís com frete grátis
          </p>
        </div>

        <div className="w-full">
          <p className="standard-text text-lg text-brand-primary/60 font-light leading-relaxed mb-6">
            Fragrâncias em Miniaturas dos perfumes mais caros do mundo, com alta fixação, frete grátis e entrega imediata.
          </p>
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {[
              "Alta fixação de 8h+",
              "Entrega hoje em São Luís",
              "Frete grátis garantido",
              "Brand Collection Original"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-medium tracking-wide">
                <CheckCircle2 className="w-4 h-4 text-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

const BeliefBreaker = () => (
  <section className="bg-[#0a0a0a] text-brand-accent section-padding px-6 relative overflow-hidden">
    <div className="absolute top-0 left-1/4 w-px h-full bg-brand-accent/5"></div>
    <div className="absolute top-0 right-1/4 w-px h-full bg-brand-accent/5"></div>
    <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
      <div className="serif text-gold text-sm uppercase tracking-[1em] mb-4">Essência</div>
      <h2 className="serif text-4xl md:text-5xl leading-[1.4] italic font-light text-balance px-4 standard-text border-x border-gold/10 !max-w-3xl">
        "Nossa missão é democratizar o luxo. Criamos fragrâncias que te fazem sentir poderosa, elegante e pronta para conquistar qualquer ambiente."
      </h2>
      <div className="w-16 h-px bg-gold/30 mx-auto"></div>
    </div>
  </section>
);


interface VideoData {
  title: string;
  url: string;
  portrait: boolean;
}

const VideoCard = memo(({ vid }: { vid: VideoData; [key: string]: any }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoUrl = `${vid.url}&autoplay=1&title=0&byline=0&portrait=0&badge=0`;

  return (
    <div className="bg-white p-2 rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-brand-primary/5 group transition-all duration-700 hover:shadow-[0_20px_50px_rgba(197,160,89,0.1)] will-change-transform">
      <div 
        className="relative rounded-[16px] overflow-hidden aspect-[9/16] bg-brand-primary cursor-pointer" 
        onClick={() => setIsPlaying(true)}
      >
        {!isPlaying ? (
          <div className="absolute inset-0 z-10 w-full h-full flex items-center justify-center">
            {/* MANUAL PLACEHOLDER - NO DYNAMIC EXTERNAL FETCH */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0c0c0c] to-[#1a1a1a]">
              <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                 <img src="https://i.ibb.co/kgr9dRtL/Logo-Liora.png" alt="" className="w-32 brightness-0 invert rotate-[-25deg] scale-150 blur-[2px]" />
              </div>
              <div className="absolute inset-0 bg-black/20" />
            </div>
            
            {/* Play Button */}
            <div className="relative z-20">
              <div className="w-16 h-16 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl transform transition-all duration-700 group-hover:scale-110 group-hover:bg-white">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-gold border-b-[10px] border-b-transparent ml-1.5" />
              </div>
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 w-full h-full animate-in fade-in duration-1000">
            <iframe 
              src={videoUrl}
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture" 
              className="w-full h-full"
              style={{ objectFit: 'cover' }}
              title={vid.title}
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
});

const TestimonialsVideo = () => {
  const videos = [
    { title: "D.1", url: "https://player.vimeo.com/video/1184434197?badge=0&autopause=0&player_id=0&app_id=58479", portrait: false },
    { title: "D.2", url: "https://player.vimeo.com/video/1184434209?badge=0&autopause=0&player_id=0&app_id=58479", portrait: false },
    { title: "D.3", url: "https://player.vimeo.com/video/1184434227?badge=0&autopause=0&player_id=0&app_id=58479", portrait: true },
    { title: "D.4", url: "https://player.vimeo.com/video/1184434243?badge=0&autopause=0&player_id=0&app_id=58479", portrait: true }
  ];

  return (
    <section className="section-padding px-6 bg-white content-lazy">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 bg-brand-accent rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-gold border border-gold/10">
            Prova Social
          </div>
          <h2 className="serif text-5xl italic">Experiências Liora</h2>
          <div className="w-12 h-1 bg-gold mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {videos.map((vid, i) => (
            <VideoCard key={i} vid={vid} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface Product {
  name: string;
  price: string;
  oldPrice?: string;
  image: string;
  description: string;
  checkoutLink: string;
}

const ProductModal = ({ product, isOpen, onClose, trackIC }: { product: Product | null, isOpen: boolean, onClose: () => void, trackIC: () => void }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!product) return null;

  return (
    <div className={`fixed inset-0 z-[100] overflow-y-auto p-4 md:p-10 transition-all duration-500 ${isOpen ? 'opacity-100 flex justify-center' : 'opacity-0 pointer-events-none'}`}>
      <div 
        className="fixed inset-0 bg-brand-primary/95 backdrop-blur-2xl" 
        onClick={onClose}
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="relative w-full max-w-5xl bg-white overflow-hidden flex flex-col md:flex-row my-auto pointer-events-auto rounded-[40px] md:rounded-[64px] min-h-[min-content]"
      >
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 z-50 p-4 bg-brand-accent rounded-full text-brand-primary/40 hover:text-gold transition-all shadow-sm"
        >
          <X className="w-5 h-5 md:w-6 h-6" />
        </button>

        {/* Product Image Side */}
        <div className="w-full md:w-1/2 bg-white p-12 md:p-20 flex items-center justify-center relative border-b md:border-b-0 md:border-r border-brand-primary/5">
          <div className="absolute top-10 left-10 flex flex-col gap-3 z-20">
            <div className="bg-brand-primary text-white px-6 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.2em] shadow-lg">
              BRAND COLLECTION — 25ML
            </div>
          </div>
          
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full max-h-[450px] object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.12)] transition-transform duration-1000 hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Content Side */}
        <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
                </div>
                <span className="text-[10px] font-black text-gold uppercase tracking-[0.3em]">Qualidade Premium Garantida</span>
              </div>
              <h2 className="serif text-4xl md:text-5xl leading-[1.1] text-brand-primary tracking-tight text-balance">{product.name}</h2>
              <div className="flex flex-wrap gap-x-10 gap-y-4 pt-2">
                <span className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary/40">
                  <Clock className="w-4 h-4 text-gold" /> 
                  PROJEÇÃO MARCANTE
                </span>
                <span className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary/40">
                  <Zap className="w-4 h-4 text-gold" /> 
                  FIXAÇÃO ALTA
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-brand-primary/60 text-lg md:text-xl leading-relaxed italic font-light serif text-balance">
                "{product.description}"
              </p>
              
              <div className="pt-6">
                 <div className="flex flex-col">
                    {product.oldPrice && (
                      <span className="text-xs line-through opacity-30 font-bold mb-1 text-brand-primary">
                        De R$ {product.oldPrice}
                      </span>
                    )}
                    <div className="flex items-end gap-2 text-brand-primary">
                      <span className="text-sm mb-2 font-bold uppercase tracking-[0.2em]">R$</span>
                      <span className="text-6xl font-black tracking-tighter leading-none">
                        {product.price}
                      </span>
                    </div>
                 </div>
                 
                 <div className="flex flex-col gap-3 mt-8">
                   <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-whatsapp">
                     <CheckCircle2 className="w-4 h-4" />
                     Frete Grátis e Entrega hoje em São Luís
                   </div>
                 </div>
              </div>
            </div>

            <div className="pt-4">
              <a 
                href={product.checkoutLink}
                onClick={trackIC}
                className="btn-cta bg-brand-primary text-white hover:bg-gold transition-all min-h-[80px] text-sm"
              >
                <ShoppingBag className="w-6 h-6" />
                ADQUIRIR AGORA
              </a>
              
              <p className="mt-8 text-[9px] font-black uppercase tracking-[0.4em] text-brand-primary/20 text-center">
                Pagamento 100% Seguro via Yampi
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Products = ({ onProductClick }: { onProductClick: (p: Product) => void }) => {
  const perfumes: Product[] = [
    { 
      name: "Inspiração Delina Parfums de Marly | Miniatura", 
      price: "79,90", 
      oldPrice: "119,90",
      image: "https://i.ibb.co/5xJ9C6cw/1-Perfume.png",
      description: "Uma obra-prima da perfumaria de nicho. Este bouquet floral abre com a vivacidade do ruibarbo e lichia, evoluindo para uma rosa turca aveludada que exala realeza e um magnetismo irresistível.",
      checkoutLink: "https://perfumaria-liora.pay.yampi.com.br/r/CZYZYUQGN0"
    },
    { 
      name: "Inspiração Libre Yves Saint Laurent | Miniatura", 
      price: "84,90", 
      oldPrice: "109,90",
      image: "https://i.ibb.co/1JB933b9/Libre-png.png",
      description: "A celebração máxima da liberdade. Um equilíbrio audacioso entre a lavanda francesa e a flor de laranjeira marroquina, criando uma aura sofisticada que transita do poder executivo à sedução noturna.",
      checkoutLink: "https://perfumaria-liora.pay.yampi.com.br/r/KR54MWKMDV"
    },
    { 
      name: "Inspiração Good Girl Carolina Herrera | Miniatura", 
      price: "82,90", 
      oldPrice: "99,90",
      image: "https://i.ibb.co/jZHqyW84/Carolina-png.png",
      description: "O perfume da mulher que não conhece limites. O duelo entre as notas doces do jasmim e a intensidade sombria do cacau e fava tonka. Uma fragrância viciante que captura a dualidade feminina.",
      checkoutLink: "https://perfumaria-liora.pay.yampi.com.br/r/2F616G1WA0"
    },
    { 
      name: "Inspiração Si Passione Armani | Miniatura", 
      price: "79,90", 
      oldPrice: "94,90",
      image: "https://i.ibb.co/tTTpg3rK/Passione-png.png",
      description: "Um hino à paixão vibrante. Com notas de néctar de groselha preta e acordes floral de rosa e jasmim, é uma fragrância radiante e audaciosa, ideal para quem vive com intensidade e elegância.",
      checkoutLink: "https://perfumaria-liora.pay.yampi.com.br/r/7BJU03QE5R"
    },
    { 
      name: "Inspiração Miss Dior EDP | Miniatura", 
      price: "84,90", 
      oldPrice: "94,90",
      image: "https://i.ibb.co/s9sKtBHK/Miss-Dior.png",
      description: "O novo despertar do amor. Uma explosão floral colorida com notas de peônia branca e íris, envoltas por um almíscar cremoso. É o equilíbrio perfeito entre o romantismo clássico e a modernidade.",
      checkoutLink: "https://perfumaria-liora.pay.yampi.com.br/r/93ZL576JZQ"
    },
    { 
      name: "Inspiração Jean Paul Gaultier Classique | Miniatura", 
      price: "83,70", 
      oldPrice: "97,90",
      image: "https://i.ibb.co/bMC2Jm7p/JPG-Classique.png",
      description: "A essência icônica da feminilidade. Uma combinação inesquecível de gengibre, flor de laranjeira e baunilha, que cria um rastro afrodisíaco e atemporal, celebrando a arte da sedução.",
      checkoutLink: "https://perfumaria-liora.pay.yampi.com.br/r/JDFNFQ6YOW"
    }
  ];

  return (
    <section id="produtos" className="section-padding px-6 max-w-7xl mx-auto content-lazy">
      <div className="text-center mb-16 md:mb-24 space-y-8">
        <h2 className="serif text-5xl md:text-7xl italic leading-tight">Destaques da Coleção</h2>
        <p className="standard-text uppercase tracking-[0.5em] text-[11px] font-black text-brand-primary/30">Selecione para ver detalhes</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {perfumes.map((perfume, i) => (
          <div 
            key={i} 
            className="group bg-white rounded-[40px] overflow-hidden border border-brand-primary/5 hover:border-gold/30 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-700 flex flex-col"
          >
            <div className="h-[320px] bg-white overflow-hidden relative flex items-center justify-center p-12 transition-all duration-700">
              <div className="absolute inset-0 bg-brand-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <img 
                src={perfume.image} 
                alt={perfume.name}
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                width="220"
                height="220"
                className="max-w-full max-h-full object-contain relative z-10 transition-transform duration-1000 group-hover:scale-110 drop-shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
              />
              <div className="absolute top-6 right-6 bg-brand-primary text-white px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-xl z-10">
                25ml
              </div>
            </div>
            <div className="p-8 space-y-8 flex-grow flex flex-col justify-between">
              <div className="space-y-3">
                <p className="text-[10px] font-black text-gold uppercase tracking-[0.3em]">Pronta Entrega • São Luís</p>
                <h3 className="serif text-2xl font-medium min-h-[3.5rem] group-hover:text-gold transition-colors leading-tight">{perfume.name}</h3>
              </div>
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col text-brand-primary">
                    {perfume.oldPrice && (
                      <span className="text-[10px] line-through opacity-40 font-bold mb-[-4px]">
                        De R$ {perfume.oldPrice}
                      </span>
                    )}
                    <div className="flex items-end gap-1">
                      <span className="text-xs mb-1 font-bold">R$</span>
                      <span className="text-3xl font-black tracking-tighter">{perfume.price}</span>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                     {[1,2,3,4,5].map(j => <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />)}
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <a 
                    href={perfume.checkoutLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cta bg-gold text-white hover:bg-gold-light transition-all shadow-lg !h-[56px] text-[10px] w-full"
                  >
                    COMPRAR AGORA
                  </a>
                  <button 
                    onClick={() => onProductClick(perfume)}
                    className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary/40 hover:text-gold transition-colors py-2"
                  >
                    Ver detalhes do aroma
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Offers = ({ trackIC }: { trackIC: () => void }) => (
  <section id="kits-exclusivos" className="section-padding px-6 bg-[#0a0a0a] text-brand-accent relative overflow-hidden content-lazy">
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(197,160,89,0.08),transparent_75%)] opacity-40"></div>
    <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 blur-[130px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
    
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="text-center space-y-10 mb-[30px]">
        <div className="inline-block px-5 py-2 bg-gold/10 rounded-full text-[11px] font-black uppercase tracking-[0.4em] text-gold border border-gold/20 mb-4">
          Oportunidade Única
        </div>
        <h2 className="serif text-5xl md:text-8xl italic leading-tight text-white tracking-tight">Kits Exclusivos</h2>
        <p className="standard-text uppercase tracking-[0.6em] text-xs font-semibold text-gold/60">Sinta o luxo de ter as fragrâncias mais desejadas do mundo</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-stretch py-10 pt-[37.5px]">
        {[
          { 
            qty: 1, 
            price: "82,90", 
            tag: "Essencial", 
            extra: "Para Conhecer",
            phrase: "O rastro de luxo do Delina na sua pele",
            checkout: CHECKOUT_SINGLE,
            image: "https://i.ibb.co/5xJ9C6cw/1-Perfume.png",
            title: "Delina",
            checks: [
              "Perfume Brand Collection (25ML)",
              "Alta fixação de até 8h",
              "Frete grátis + Entrega imediata",
              "Receba hoje em São Luís"
            ]
          },
          { 
            qty: 2, 
            price: "149,90", 
            oldPrice: "174,80",
            saveAmount: "24,90",
            tag: "O MAIS ESCOLHIDO", 
            featured: true, 
            extra: "Duo Elegância",
            phrase: "A escolha mais inteligente hoje",
            checkout: CHECKOUT_DUO,
            image: "https://i.ibb.co/ccCsMjyT/2-Perfumes.png",
            title: "Delina + Libre",
            checks: [
              "02 Perfumes Brand Collection (25ML)",
              "Frete grátis no combo",
              "Entrega imediata em São Luís",
              "Receba hoje pelo motoboy"
            ]
          },
          { 
            qty: 3, 
            price: "199,90", 
            oldPrice: "257,70",
            saveAmount: "57,80",
            tag: "Colecionadora", 
            extra: "Trio Irresistível",
            phrase: "A melhor oferta da página",
            checkout: CHECKOUT_TRIO,
            image: "https://i.ibb.co/0ycThxph/3-Perfumes.png",
            title: "Delina + Good Girl + Si Passione",
            checks: [
              "03 Perfumes Brand Collection (25ML)",
              "Frete grátis garantido",
              "Entrega mais rápida disponível",
              "Receba hoje mesmo"
            ]
          }
        ].map((offer, i) => (
          <div 
            key={i} 
            className={`p-10 md:p-12 rounded-[56px] border transition-all duration-700 relative group flex flex-col
              ${offer.featured 
                ? 'bg-gradient-to-br from-white via-[#fcfcfc] to-brand-accent text-brand-primary md:scale-110 border-gold shadow-[0_50px_100px_rgba(0,0,0,0.3)] z-20' 
                : 'bg-[#121212] border-white/5 hover:border-gold/30 hover:bg-[#161616]'
              }
            `}
          >
            {offer.featured && (
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gold text-white px-10 py-3 rounded-full text-[11px] font-black uppercase tracking-[0.4em] shadow-2xl z-30 whitespace-nowrap ring-8 ring-gold/10">
                {offer.tag}
              </div>
            )}

            <div className="w-full flex justify-center mb-8 relative">
              <div className={`absolute inset-0 blur-3xl rounded-full opacity-20 ${offer.featured ? 'bg-gold' : 'bg-gold/40'}`}></div>
              <img 
                src={offer.image} 
                alt={offer.title} 
                className="w-full h-48 md:h-56 object-contain relative z-10 transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="space-y-6 mb-10">
              <span className={`text-[11px] font-black uppercase tracking-[0.5em] ${offer.featured ? 'text-gold' : 'text-gold/60'}`}>
                {offer.extra}
              </span>
              <h3 className="serif text-3xl md:text-5xl leading-tight tracking-tight">
                {offer.title}
              </h3>
            </div>
            
            <div className="space-y-10 flex-grow">
              <div className="space-y-3">
                <p className="text-[11px] font-black uppercase tracking-[0.3em] opacity-40">Valor Especial</p>
                <div className="flex flex-col">
                  {offer.oldPrice && (
                    <span className={`text-sm line-through font-bold mb-[-4px] ${offer.featured ? 'text-brand-primary/40' : 'text-white/40'}`}>
                      De R$ {offer.oldPrice}
                    </span>
                  )}
                  <div className="flex items-end gap-1.5">
                    <span className="text-base mb-3 font-bold uppercase">R$</span>
                    <span className={`text-7xl font-black tracking-tighter ${offer.featured ? 'text-brand-primary' : 'text-white'}`}>
                      {offer.price}
                    </span>
                  </div>
                </div>
                
                {offer.qty > 1 && (
                  <div className="pt-6">
                    <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full ${offer.featured ? 'bg-gold text-white shadow-lg shadow-gold/20' : 'bg-gold/10 text-gold border border-gold/20'}`}>
                      <p className="text-[11px] font-black uppercase tracking-widest leading-none">
                        Economize R$ {offer.saveAmount} HOJE
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="h-px bg-current opacity-5 w-full"></div>

              <ul className="space-y-6">
                {offer.checks.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-sm font-medium opacity-70">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="pt-8 border-t border-current opacity-10" />
              <p className={`text-base italic font-light leading-relaxed max-w-[240px] ${offer.featured ? 'text-brand-primary/60' : 'text-white/40'}`}>
                {offer.phrase}
              </p>
            </div>

            <div className="mt-14">
              <a 
                href={offer.checkout}
                onClick={trackIC}
                className={`btn-cta 
                  ${offer.featured 
                    ? 'bg-brand-primary text-white hover:bg-gold hover:shadow-gold/40' 
                    : 'bg-white text-brand-primary hover:bg-gold hover:text-white hover:shadow-gold/20'
                  }
                `}
              >
                Comprar Agora
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center pt-8">
        <p className="text-[10px] uppercase font-black tracking-[0.5em] opacity-20">
          Pagamento facilitado no ato da entrega
        </p>
      </div>
    </div>
  </section>
);

const Benefits = () => (
  <section className="py-24 md:py-40 px-6 max-w-6xl mx-auto content-lazy">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
      <div className="space-y-10 md:space-y-14">
        <div className="space-y-6 md:space-y-8 text-center lg:text-left">
          <h2 className="serif text-5xl md:text-6xl italic leading-tight">Por que escolher Liora?</h2>
          <p className="standard-text lg:mx-0 text-brand-primary/50 font-light text-lg">
            Compromisso com a qualidade, frete grátis e entrega imediata hoje em São Luís.
          </p>
        </div>
        <ul className="space-y-10 md:space-y-12">
          {[
            { icon: <Clock className="w-6 h-6" />, title: "Duração Extrema", desc: "Aroma envolvente com fixação superior a 8 horas na pele." },
            { icon: <CheckCircle2 className="w-6 h-6" />, title: "Frete Grátis Sempre", desc: "Entrega gratuita para todos os bairros de São Luís." },
            { icon: <Zap className="w-6 h-6" />, title: "Entrega em Horas", desc: "Nosso motoboy entrega seu perfume no mesmo dia da compra." }
          ].map((benefit, i) => (
            <li key={i} className="flex gap-6 md:gap-8 items-start group">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-brand-accent flex items-center justify-center shrink-0 text-gold border border-gold/10 group-hover:bg-gold group-hover:text-white transition-all duration-500 shadow-sm">
                {benefit.icon}
              </div>
              <div className="space-y-2 md:space-y-3">
                <h4 className="font-bold text-base uppercase tracking-widest text-brand-primary">{benefit.title}</h4>
                <p className="text-base text-brand-primary/50 leading-relaxed font-light">{benefit.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-[#fcfcfc] p-10 md:p-16 rounded-[48px] md:rounded-[64px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] space-y-12 md:space-y-14 border border-brand-primary/5">
        <div className="space-y-10 md:space-y-12">
          <div className="flex items-start gap-6 md:gap-8">
            <Truck className="w-10 h-10 text-gold shrink-0 translate-y-1" />
            <div className="space-y-1">
              <p className="font-black uppercase tracking-[0.3em] text-sm text-brand-primary">🚀 Receba hoje com nosso motoboy</p>
              <p className="text-[11px] text-brand-primary/40 uppercase tracking-[0.4em]">Frete grátis para toda São Luís</p>
            </div>
          </div>
          <div className="flex items-start gap-6 md:gap-8">
            <Package className="w-10 h-10 text-gold shrink-0 translate-y-1" />
            <div className="space-y-1">
              <p className="font-black uppercase tracking-[0.3em] text-sm text-brand-primary">Embalagem de Luxo</p>
              <p className="text-[11px] text-brand-primary/40 uppercase tracking-[0.4em]">Experiência Unboxing Premium</p>
            </div>
          </div>
        </div>
        
        <div className="pt-6">
          <div className="w-full max-w-[340px] md:max-w-md mx-auto lg:mx-0 space-y-4">
            <button 
              onClick={() => {
                const element = document.getElementById("kits-exclusivos");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="btn-cta bg-brand-primary text-white hover:bg-gold group !w-[268px] !text-[8px] !pl-0 !pr-[12px]"
            >
              <ShoppingBag className="w-5 h-5 text-gold transition-transform group-hover:rotate-12" />
              COMPRAR AGORA COM FRETE GRÁTIS
            </button>
            <p className="text-[10px] text-center lg:text-left font-black uppercase tracking-[0.4em] text-brand-primary/30">
              Receba hoje mesmo em São Luís
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);



const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  const questions = [
    { q: "Qual o tempo de fixação?", a: "Nossos perfumes possuem alta concentração de essência, garantindo uma fixação média de 8 a 12 horas, variando conforme o tipo de pele e clima." },
    { q: "São originais ou Miniaturas?", a: "Trabalhamos com contra-tipos (Miniaturas) de altíssima qualidade. Utilizamos as mesmas famílias olfativas dos importados para entregar a mesma experiência por um preço justo." },
    { q: "Como funciona a entrega em São Luís?", a: "Realizamos entregas via motoboy em toda São Luís e região. Dependendo do horário do pedido, entregamos no mesmo dia!" },
    { q: "Quais as formas de pagamento?", a: "Aceitamos Pix, cartões de crédito/débito e pagamento em dinheiro no ato da entrega para sua total segurança." }
  ];

  return (
    <section className="section-padding px-6 max-w-4xl mx-auto content-lazy">
      <div className="text-center mb-16 md:mb-28 space-y-8">
        <h2 className="serif text-5xl md:text-6xl italic leading-tight">Privacidade & Dúvidas</h2>
        <p className="standard-text text-[11px] font-black uppercase tracking-[0.5em] text-brand-primary/20">Suporte personalizado</p>
      </div>
      <div className="space-y-8">
        {questions.map((item, i) => (
          <div key={i} className="bg-white rounded-[40px] overflow-hidden border border-brand-primary/5 hover:border-gold/10 transition-all shadow-sm">
            <button 
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full p-10 md:p-12 text-left flex justify-between items-center group transition-colors"
            >
              <span className="font-bold text-base uppercase tracking-[0.2em] text-brand-primary">{item.q}</span>
              <div className={`transition-transform duration-500 bg-brand-accent p-2 rounded-full ${open === i ? 'rotate-180 text-gold bg-gold/10' : ''}`}>
                 <ChevronDown className="w-5 h-5" />
              </div>
            </button>
            {open === i && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="px-10 md:px-12 pb-12 text-brand-primary/50 text-base leading-relaxed border-t border-brand-primary/5 font-light"
              >
                <div className="pt-8">
                  {item.a}
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-brand-primary text-brand-accent py-24 px-6 overflow-hidden relative">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 border-b border-brand-accent/10 pb-20 mb-12">
      <div className="col-span-1 md:col-span-2 space-y-10">
        <img 
          src="https://i.ibb.co/kgr9dRtL/Logo-Liora.png" 
          alt="Liora Logo" 
          className="h-16 w-auto object-contain brightness-0 invert opacity-100"
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
          width="160"
          height="64"
        />
        <p className="text-brand-accent/50 leading-[1.8] max-w-sm font-light uppercase tracking-widest text-[10px]">
          Sua dose diária de luxo em São Luís. A elegância que você merece, com o preço que você pode pagar. Conheça o novo padrão em perfumaria Miniaturas.
        </p>
      </div>
      
      <div className="space-y-8">
        <h4 className="font-bold uppercase tracking-[0.3em] text-[10px] text-gold">Conecte-se</h4>
        <ul className="space-y-5">
          <li>
            <a href="https://www.instagram.com/perfumarialiora" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[10px] uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">
              <Instagram className="w-4 h-4 text-gold" />
              Instagram
            </a>
          </li>
          <li>
            <a href={getWhatsAppLink("Oi, quero aproveitar a promoção dos perfumes. Pode me atender?")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[10px] uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">
              <MessageCircle className="w-4 h-4 text-gold" />
              WhatsApp
            </a>
          </li>
        </ul>
      </div>

      <div className="space-y-8">
        <h4 className="font-bold uppercase tracking-[0.3em] text-[10px] text-gold">Localização</h4>
        <div className="space-y-2 opacity-60 text-[10px] uppercase tracking-widest leading-relaxed">
          <p>São Luís - MA</p>
          <p>Entregas em toda região metropolitana</p>
        </div>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 text-[9px] opacity-30 uppercase tracking-[0.5em] font-medium">
      <p>© {new Date().getFullYear()} LIORA PERFUMES DE LUXO. TODOS OS DIREITOS RESERVADOS.</p>
      <div className="flex gap-8">
        <p>Desenvolvido em São Luís</p>
        <p>Premium Performance</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Initialize UTMify Tracking
  useEffect(() => {
    // Set Pixel ID
    window.pixelId = "69e1626d526b1625aa84b749";

    // Inject Script if not present
    if (!document.getElementById('utmify-pixel-script')) {
      const script = document.createElement("script");
      script.id = 'utmify-pixel-script';
      script.async = true;
      script.defer = true;
      script.src = "https://cdn.utmify.com.br/scripts/pixel/pixel.js";
      document.head.appendChild(script);
    }
  }, []);

  const trackIC = () => {
    if (window.utmify && typeof window.utmify.track === 'function') {
      window.utmify.track('InitiateCheckout');
    } else {
      // Fallback: try to push to dataLayer or just a custom event if utmify isn't ready
      // UTMify's pixel.js usually auto-tracks clicks to common checkouts, 
      // but manual call is safer.
      console.log('UTMify not initialized, but IC triggered');
    }
  };

  const scrollToOffers = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("kits-exclusivos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen selection:bg-gold selection:text-white">
      <Navbar />
      <Hero />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-brand-accent border border-gold/10 p-5 rounded-[24px] text-center shadow-sm">
          <p className="text-gold font-black text-[10px] uppercase tracking-[0.5em] animate-pulse">
            ✨ Os perfumes mais pedidos estão saindo rápido hoje!
          </p>
        </div>
      </div>

      <BeliefBreaker />
      <TestimonialsVideo />
      <Products onProductClick={(p) => setSelectedProduct(p)} />
      <Offers trackIC={trackIC} />
      <Benefits />
      <FAQ />
      
      <ProductModal 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        trackIC={trackIC}
      />
      
      {/* Floating Checkout */}
      <button 
        onClick={scrollToOffers}
        className="fixed bottom-10 right-10 z-[100] bg-gold hover:bg-gold-light text-white p-5 rounded-full shadow-[0_20px_50px_rgba(197,160,89,0.3)] transition-all hover:scale-110 flex items-center justify-center group will-change-transform"
      >
        <div className="absolute right-full mr-6 bg-brand-primary text-white px-5 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap translate-x-4 group-hover:translate-x-0">
          Aproveitar Oferta Especial
        </div>
        <ShoppingBag className="w-8 h-8" />
      </button>
      
      <Footer />
    </div>
  );
}

