import { useEffect, useRef, useState } from 'react';
import { 
  Utensils, 
  GlassWater, 
  Users, 
  Award, 
  CheckCircle2, 
  Instagram, 
  MessageCircle, 
  ChevronRight,
  Star,
  MapPin,
  Clock,
  Menu as MenuIcon,
  X,
  Coffee,
  Beer,
  Salad,
  ChefHat,
  IceCream
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PRIMARY_COLOR = '#daac4e';
const WHATSAPP_LINK = 'https://wa.me/5511949981963';
const INSTAGRAM_LINK = 'https://www.instagram.com/buffetleprince';
const LOGO_URL = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFXyMGMzmgp2H9M-EVSjaibfH_MOCqoKujSASqAAi-ydBuPz2Iliwnq8e8SX2QajuhKBSh2cFexSRMVqZAicBYoGgrULh9TcslUlFgtobfbXA6B_nH-mogLHKjTQhiQcdtk67Q4AwbJSI4-a_48K01q_RsMHKal4sdPTFkR5Toqn5jdRVmQMpa_hdVATM/s320/logo%20fundo%20transparente%20com%20textos%20em%20braco%20e%20icone%20amarelo.png';
const HERO_IMAGE = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi96uXjcEJ6jdxbn0T9aRbRAwwvqWakf2bax1rnlsfoWkpQ7Z-IfAf-D_tG5EFl8arVX-uVM5mhulPQnK0XWMLlxdful1CphyKm5VayZN73v-bvkpZiXGY2ZkNUAnUlGISBOMzFM0VevbkvQWNXXVOWVjJd5o2HZa5vUxCtbLHsssjiri1nXJoPFjq8fvU/s16000/hero2.png';
const ABOUT_IMAGE = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiW90eJU0YlDuLLwcZ5ZOaTM4s4ZIeXQL7lBGgbJM7XHQNH3n8ESk5bIwyRjtVBjLvDUlrTricRIynQF5DfVzhClUavsSb7YRRAWoged2YmIeLn9gAeFYl7PiyzuFAq4yHJHU-ggkhgiIvZN684hqAqghtXPTDoJDB-wDFGVWOHDtJ3ULf9zu6eMM1EXwU/s16000/sobre.png';

const MENUS = [
  {
    id: 'nobre',
    title: 'Menu Nobre',
    sections: [
      { category: 'Saladas', items: ['Alface crespa', 'Alface americana'], icon: Salad },
      { category: 'Acompanhamentos (saladas)', items: ['Molhos para salada', 'Azeite e sal'], icon: Salad },
      { category: 'Guarnições', items: ['Milho', 'Azeitonas', 'Cenoura ralada', 'Beterraba'], icon: Salad },
      { category: 'Crepes Salgados', items: ['Frango com requeijão', 'Presunto e queijo', 'Calabresa com cheddar', 'Três queijos', 'Escarola com queijo', 'Calabresa com escarola'], icon: Utensils },
      { category: 'Acompanhamentos (crepes)', items: ['Molho ao sugo'], icon: Utensils },
      { category: 'Crepes Doces', items: ['Chocolate com banana', 'Goiabada', 'Banana com canela', 'Romeu e Julieta'], icon: IceCream },
      { category: 'Finalização', items: ['Café com petit four'], icon: Coffee },
      { category: 'Bebidas', items: ['Guaraná', 'Fanta Laranja', 'Água Mineral', 'Suco cortesia'], icon: Beer }
    ]
  },
  {
    id: 'principe',
    title: 'Menu Príncipe',
    sections: [
      { category: 'Entradas', items: ['Patê de frango'], icon: ChefHat },
      { category: 'Saladas', items: ['Alface crespa', 'Alface americana', 'Agrião'], icon: Salad },
      { category: 'Acompanhamentos (saladas)', items: ['Molhos para salada', 'Azeite e sal'], icon: Salad },
      { category: 'Guarnições', items: ['Ervilha', 'Milho', 'Azeitonas', 'Cenoura ralada', 'Kani-kama', 'Beterraba ralada', 'Palmito'], icon: Salad },
      { category: 'Crepes Salgados', items: ['Frango com requeijão', 'Presunto e queijo', 'Calabresa com queijo', 'Queijo, tomate e manjericão', 'Quatro queijos', 'Brócolis com queijo', 'Carne com cheddar'], icon: Utensils },
      { category: 'Acompanhamentos (crepes)', items: ['Molho ao sugo', 'Molho branco', 'Parmesão ralado'], icon: Utensils },
      { category: 'Crepes Doces', items: ['Doce de leite', 'Romeu e Julieta', 'Chocolate', 'Banana com canela', 'Beijinho'], icon: IceCream },
      { category: 'Acompanhamentos (doces)', items: ['Calda de chocolate', 'Calda de morango', 'Granulado'], icon: IceCream },
      { category: 'Finalização', items: ['Café com cookies'], icon: Coffee },
      { category: 'Bebidas', items: ['Coca-Cola (normal e zero)', 'Guaraná', 'Fanta Laranja', 'Soda', 'Água Mineral'], icon: Beer }
    ]
  },
  {
    id: 'rainha',
    title: 'Menu Rainha',
    sections: [
      { category: 'Entradas', items: ['Patê de frango', 'Patê de ervas finas', 'Patê de tomate seco'], icon: ChefHat },
      { category: 'Saladas', items: ['Alface crespa', 'Alface americana', 'Agrião', 'Pepino'], icon: Salad },
      { category: 'Acompanhamentos (saladas)', items: ['Molhos para salada', 'Azeite e sal'], icon: Salad },
      { category: 'Guarnições', items: ['Ervilha', 'Milho', 'Azeitonas', 'Cenoura ralada', 'Kani-kama', 'Beterraba ralada', 'Palmito', 'Ovos de codorna', 'Tomate seco'], icon: Salad },
      { category: 'Crepes Salgados', items: ['Frango com requeijão', 'Presunto e queijo', 'Calabresa com queijo', 'Queijo, tomate e manjericão', 'Quatro queijos', 'Brócolis com queijo', 'Carne com cheddar', 'Creme de camarão com queijo', 'Creme de palmito com queijo', 'Atum, tomate e requeijão'], icon: Utensils },
      { category: 'Acompanhamentos (crepes)', items: ['Molho ao sugo', 'Molho branco', 'Parmesão ralado'], icon: Utensils },
      { category: 'Crepes Doces', items: ['Doce de leite', 'Romeu e Julieta', 'Chocolate', 'Banana com canela', 'Goiabada', 'Beijinho', 'Chocolate com morango'], icon: IceCream },
      { category: 'Acompanhamentos (doces)', items: ['Sorvete de creme', 'Calda de chocolate', 'Calda de morango', 'Granulado'], icon: IceCream },
      { category: 'Finalização', items: ['Café com cookies'], icon: Coffee },
      { category: 'Bebidas', items: ['Coca-Cola (normal e zero)', 'Guaraná', 'Fanta Laranja', 'Soda', 'Água Mineral'], icon: Beer }
    ]
  },
  {
    id: 'rei',
    title: 'Menu Rei',
    sections: [
      { category: 'Entradas', items: ['Patê de frango', 'Patê de ervas finas', 'Patê de tomate seco', 'Barquinha da seleção de frango ou antepasto de berinjela'], icon: ChefHat },
      { category: 'Saladas', items: ['Alface crespa', 'Alface americana', 'Agrião', 'Pepino'], icon: Salad },
      { category: 'Acompanhamentos (saladas)', items: ['Molhos para salada', 'Azeite e sal'], icon: Salad },
      { category: 'Guarnições', items: ['Ervilha', 'Milho', 'Azeitonas', 'Cenoura ralada', 'Kani-kama', 'Beterraba ralada', 'Palmito', 'Ovos de codorna', 'Tomate seco', 'Tomate cereja'], icon: Salad },
      { category: 'Crepes Salgados', items: ['Strogonoff de carne', 'Frango com Catupiry®', 'Presunto e queijo', 'Calabresa com queijo', 'Queijo, tomate e manjericão', 'Quatro queijos', 'Brócolis com queijo', 'Carne moída com azeitonas e bacon', 'Creme de camarão com queijo', 'Creme de palmito com queijo', 'Atum, tomate e Catupiry®', 'Portuguesa (queijo, presunto, ovo, cebola e orégano)', 'Carne seca com abóbora'], icon: Utensils },
      { category: 'Acompanhamentos (crepes)', items: ['Molho ao sugo', 'Molho branco', 'Parmesão ralado'], icon: Utensils },
      { category: 'Crepes Doces', items: ['Doce de leite', 'Romeu e Julieta', 'Chocolate', 'Banana com canela', 'Goiabada', 'Beijinho', 'Chocolate com morango', 'Maçã ou pêssego', 'Nutella', 'Sonho de valsa'], icon: IceCream },
      { category: 'Acompanhamentos (doces)', items: ['Sorvete de creme', 'Calda de chocolate', 'Calda de morango', 'Calda de caramelo', 'Granulado'], icon: IceCream },
      { category: 'Finalização', items: ['Café com cookies'], icon: Coffee },
      { category: 'Bebidas', items: ['Coca-Cola (normal e zero)', 'Guaraná', 'Fanta Laranja', 'Soda', 'Água Mineral'], icon: Beer }
    ]
  }
];

export default function App() {
  const mainRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenuId, setActiveMenuId] = useState(MENUS[0].id);

  const activeMenu = MENUS.find(m => m.id === activeMenuId) || MENUS[0];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animations
      gsap.from('.hero-content > *', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out'
      });

      // Scroll Reveal Animations
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out'
        });
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen font-sans selection:bg-primary/30">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
        <nav className="mx-auto max-w-7xl glass rounded-full px-6 py-3 flex items-center justify-between shadow-lg">
          <a href="#" className="flex items-center">
            <img src={LOGO_URL} alt="Le Prince Logo" className="h-10 sm:h-12 w-auto brightness-0" referrerPolicy="no-referrer" />
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#servicos" className="text-sm font-medium hover:text-primary transition-colors">Serviços</a>
            <a href="#diferenciais" className="text-sm font-medium hover:text-primary transition-colors">Diferenciais</a>
            <a href="#sobre" className="text-sm font-medium hover:text-primary transition-colors">Sobre</a>
            <a href="#contato" className="text-sm font-medium hover:text-primary transition-colors">Contato</a>
          </div>

          <button 
            onClick={() => setIsMenuOpen(true)}
            className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-md flex items-center gap-2 animate-btn-pulse"
          >
            <Utensils className="w-4 h-4" />
            <span>Cardápio</span>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_IMAGE} 
            alt="Buffet Premium" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl hero-content">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block text-primary font-semibold tracking-widest uppercase text-xs mb-4"
            >
              Buffet Domiciliar Premium em São Paulo
            </motion.span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Fazemos da sua festa um momento <span className="text-primary italic">inesquecível!</span>
            </h1>
            <p className="text-neutral-200 text-lg sm:text-xl mb-8 leading-relaxed max-w-xl">
              Gastronomia de alto padrão e atendimento personalizado no conforto do seu evento. Crepes, massas, churrasco e muito mais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={WHATSAPP_LINK}
                className="bg-primary text-white px-8 py-4 rounded-full text-lg font-bold text-center transition-all hover:bg-primary-dark hover:shadow-xl hover:-translate-y-1"
              >
                Solicitar Orçamento
              </a>
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-lg font-bold text-center transition-all hover:bg-white/20 animate-btn-pulse"
              >
                Nossos Cardápios
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-12 bg-neutral-900 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="reveal animate-stats-glow">
              <div className="text-3xl sm:text-4xl font-display font-bold text-primary mb-1">10+</div>
              <div className="text-neutral-400 text-xs uppercase tracking-widest">Anos de Experiência</div>
            </div>
            <div className="reveal animate-stats-glow" style={{ animationDelay: '0.5s' }}>
              <div className="text-3xl sm:text-4xl font-display font-bold text-primary mb-1">2k+</div>
              <div className="text-neutral-400 text-xs uppercase tracking-widest">Eventos Realizados</div>
            </div>
            <div className="reveal animate-stats-glow" style={{ animationDelay: '1s' }}>
              <div className="text-3xl sm:text-4xl font-display font-bold text-primary mb-1">100%</div>
              <div className="text-neutral-400 text-xs uppercase tracking-widest">Satisfação</div>
            </div>
            <div className="reveal animate-stats-glow" style={{ animationDelay: '1.5s' }}>
              <div className="text-3xl sm:text-4xl font-display font-bold text-primary mb-1">SP</div>
              <div className="text-neutral-400 text-xs uppercase tracking-widest">Atendimento Capital</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-12 md:py-20 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Nossas Especialidades</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Oferecemos uma variedade de cardápios cuidadosamente elaborados para atender aos paladares mais exigentes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Crepes Franceses",
                desc: "Uma explosão de sabores doces e salgados preparados na hora para seus convidados.",
                icon: Utensils,
                img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEizs27qbSH2JD3A1Kp8Ad2OM7Y220RCOhKUeku_fXPezxjhCSt2DgjI3jiEgsoO9eLOXBuD5JS-Zw6PzadEe3tzsTpZjiESDXo802hDVYWAvS3VWhBsIXAOThHjiI7hvYY-rjxNWUajxRzOvPZoYeVt5hQ2Oay57fOFJsV0SF_1QU7OzwKFrSLe7oSbOE0/w400-h400/crepes.png"
              },
              {
                title: "Massas Gourmet",
                desc: "Variedade de massas artesanais com molhos clássicos e contemporâneos.",
                icon: Utensils,
                img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh85ieNPNfF1FFlCVw-HxMcxmPYsKd7217LicnTJ0nYEZecA4Jrs0agmIgON6PYo-iG3aidxX95z5HB0w2P4JH0ZtwX7dISLOImLWrJANUE7VBQMLe4bpM_6IQrGWwFJvuy-txf4IqUyBmGmpddU9S8jTvpuHFpckFXYcv0a4drVXF-ScUzfJwukAUkrXA/w400-h400/massa.png"
              },
              {
                title: "Churrasco Premium",
                desc: "Cortes selecionados preparados por profissionais, garantindo o ponto perfeito.",
                icon: Utensils,
                img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDCmt9Su7-4bYrqfWJWYVA4lNv5fjYsStXPCAnIQfjQ72iHtKkEDYufIQX4gzmgvq0ARQodicMICvQZYm2EQKUd-JdbafHO6i6yF2opYpHhg8w9L1phTmszn-hDq7rR3M70xlZwqvc1OhkSIwqfT9AvyS982xAqEAD1UmvTHBpcfIqxSzxZfgWmwSUZmM/w400-h400/churrasco.png"
              },
              {
                title: "Feijoada Completa",
                desc: "O clássico brasileiro com todos os acompanhamentos tradicionais e sabor caseiro.",
                icon: Utensils,
                img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhXpJHJzXWe9_wv6LEtv6PUfNhnfZ81PhhKKQh0-leMtW9pQ2hX6aVMuD6q46qQ5Sr9NSDFrQsW-py1dxhy9YvH3S-tCj0pnUIWwCbxnULgHRibEzHODAgu7xe4VM24qcHczYtRAJxmYbXo8IQbaHHh_w5C4lf4mk5_KeDaEMROYlFu-BdgD8oX31fvbpA/w400-h400/feijoada.png"
              },
              {
                title: "Le Prince Drinks",
                desc: "Bar premium com drinks clássicos e autorais, estrutura completa e barmen profissionais.",
                icon: GlassWater,
                img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3GXTYYyEHMw0yLDSeGvBGZZ2siJwhk2_ngmqx-8USNdhyg28-XSywpmazdTl1HscR7u4kmgM9IVGoAMBTi9DVlxr6J25VhrLKeerVABkDAHQEhO-G1sO2BugY-izvwzJ06IKL4vmIkWm5cqL_bdDg5I2dhKZTgxfdhVIta1IYQpqZ7IaPJxvvGX7-2as/w400-h400/drinks.png"
              },
              {
                title: "Finger Foods",
                desc: "Opções sofisticadas e práticas para coquetéis e recepções dinâmicas.",
                icon: Utensils,
                img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_8zxdIfYnXfDXmzrb0DrsotLbEe85CCyl_E9bB6-QdA4Or9UkN0F0khXMVV2uvT4iwDQ4qxaabG5Q-qN5XFdSN1snHoP81i4bFD1KtdLr6cVxK6O51Yb6BfOmMhP36XEmErYYHS9x6GmHXZTIr90ydDnBlQkouBBt8r6yZoDFP_w9zei5Ob5c26OEe94/w400-h400/finger%20foods.png"
              }
            ].map((service, i) => (
              <div key={i} className="group relative bg-neutral-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 reveal">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <service.icon className="w-6 h-6 animate-icon-float" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Differentials */}
      <section id="diferenciais" className="py-12 md:py-20 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Por que escolher o Le Prince?</h2>
            <p className="text-neutral-600">Excelência em cada detalhe para o seu evento.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
            <div className="md:col-span-2 md:row-span-2 bg-white p-8 rounded-3xl shadow-sm flex flex-col justify-between reveal">
              <div>
                <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-primary animate-icon-float" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Gastronomia de Alto Padrão</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Nossos chefs utilizam apenas ingredientes selecionados e técnicas refinadas para garantir uma experiência gastronômica memorável. Cada prato é uma obra de arte pensada para encantar seus convidados.
                </p>
              </div>
              <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiei4AdJmZ-bicG18lEA3AI9goKkwRSC4HUzibxMVugJzNeeX2lcdlQ9nnbERn-EeezdEp3wBfEdfIRbxQLYF4NwNsYl71nj2lBKeShoQNZhdIsTNMGo4T64BsF9s_GCjahIEadKRojJLSEmu9whmKtJxD1Lvy4LM4fRgdZAWLxITrBPSyCSu6TFL9d7cI/w640-h426/buffet.png" 
                alt="Gastronomia" 
                className="rounded-2xl mt-8 h-48 w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="md:col-span-2 bg-primary p-8 rounded-3xl text-white flex flex-col justify-center reveal">
              <h3 className="text-2xl font-bold mb-4">Estrutura Completa</h3>
              <p className="text-white/80 leading-relaxed">
                Levamos tudo o que é necessário para o seu evento: louças, talheres, equipamentos e uma equipe treinada para que você não se preocupe com nada.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm reveal">
              <CheckCircle2 className="w-8 h-8 text-primary mb-4 animate-icon-float" />
              <h4 className="font-bold mb-2">Personalização</h4>
              <p className="text-neutral-500 text-sm">Cardápios adaptados ao seu estilo e necessidade.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm reveal">
              <Users className="w-8 h-8 text-primary mb-4 animate-icon-float" />
              <h4 className="font-bold mb-2">Equipe Expert</h4>
              <p className="text-neutral-500 text-sm">Profissionais cordiais e altamente qualificados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-12 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 reveal">
              <div className="relative">
                <img 
                  src={ABOUT_IMAGE} 
                  alt="Sobre o Le Prince" 
                  className="rounded-3xl shadow-2xl w-full object-cover aspect-square lg:aspect-auto lg:h-[600px]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-2xl hidden sm:block shadow-xl">
                  <p className="text-white font-display text-4xl font-bold">10+</p>
                  <p className="text-white/80 text-sm uppercase tracking-widest">Anos de História</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 reveal">
              <span className="text-primary font-semibold tracking-widest uppercase text-xs mb-4 block">Nossa História</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">Paixão por Servir e Encantar</h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  O Le Prince nasceu do desejo de levar a sofisticação dos grandes buffets para a intimidade dos lares e eventos corporativos. Com sede em São Paulo, nos tornamos referência em buffet domiciliar premium.
                </p>
                <p>
                  Nossa missão é transformar celebrações em experiências sensoriais únicas, onde a qualidade da comida se une a um serviço impecável. Acreditamos que cada evento é único e merece uma atenção especial aos detalhes.
                </p>
                <p>
                  Seja um aniversário, casamento, evento corporativo ou uma reunião íntima, o Le Prince está pronto para superar suas expectativas com elegância e sabor.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Pontualidade</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Higiene Rigorosa</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Ingredientes Frescos</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Atendimento SP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 md:py-20 bg-neutral-50 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">O que dizem nossos clientes</h2>
            <p className="text-neutral-600">A confiança de quem já viveu a experiência Le Prince.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Mariana Silva",
                role: "Aniversário de 15 anos",
                text: "O buffet de crepes foi o sucesso da festa! Equipe extremamente educada e os crepes estavam divinos. Recomendo de olhos fechados.",
                stars: 5
              },
              {
                name: "Ricardo Mendes",
                role: "Evento Corporativo",
                text: "Contratamos o Bar Premium e o Churrasco para nossa confraternização. Organização impecável e qualidade das carnes surpreendente.",
                stars: 5
              },
              {
                name: "Ana Paula",
                role: "Casamento Íntimo",
                text: "Tudo perfeito! Desde o primeiro contato até o final do evento. A apresentação dos pratos é linda e o sabor é inesquecível.",
                stars: 5
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm reveal relative">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-neutral-600 italic mb-6">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-neutral-900">{testimonial.name}</p>
                  <p className="text-neutral-400 text-xs uppercase tracking-widest">{testimonial.role}</p>
                </div>
                <div className="absolute top-8 right-8 opacity-10">
                  <MessageCircle className="w-12 h-12 text-primary animate-icon-float" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contato" className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1920" 
            alt="Festa" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/90 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-white reveal">
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">Vamos planejar seu próximo evento?</h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Entre em contato agora e receba um orçamento personalizado para tornar sua festa um momento único e sofisticado.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-10 py-5 rounded-full text-xl font-bold transition-all hover:scale-105 shadow-2xl flex items-center gap-3 animate-btn-pulse"
            >
              <MessageCircle className="w-6 h-6" />
              Falar no WhatsApp
            </a>
            <a 
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white flex items-center gap-2 hover:underline"
            >
              <Instagram className="w-5 h-5" />
              Siga-nos no Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/10 pb-12 mb-8">
            <div className="text-center md:text-left">
              <img src={LOGO_URL} alt="Le Prince Logo" className="h-16 w-auto mb-4 mx-auto md:mx-0" referrerPolicy="no-referrer" />
              <p className="text-neutral-400 max-w-xs">
                Gastronomia de alto padrão para tornar sua festa um momento inesquecível.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
              <div>
                <h4 className="font-bold mb-4 text-primary uppercase tracking-widest text-xs">Menu</h4>
                <ul className="space-y-2 text-neutral-400">
                  <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
                  <li><a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a></li>
                  <li><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-primary uppercase tracking-widest text-xs">Contato</h4>
                <ul className="space-y-2 text-neutral-400">
                  <li className="flex items-center gap-2"><MapPin className="w-3 h-3 animate-icon-float" /> São Paulo, SP</li>
                  <li className="flex items-center gap-2"><Clock className="w-3 h-3 animate-icon-float" /> Atendimento Diário</li>
                  <li className="flex items-center gap-2"><MessageCircle className="w-3 h-3 animate-icon-float" /> (11) 94998-1963</li>
                </ul>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <h4 className="font-bold mb-4 text-primary uppercase tracking-widest text-xs">Social</h4>
                <div className="flex gap-4">
                  <a href={INSTAGRAM_LINK} className="bg-white/5 p-2 rounded-full hover:bg-primary transition-colors">
                    <Instagram className="w-5 h-5 animate-icon-float" />
                  </a>
                  <a href={WHATSAPP_LINK} className="bg-white/5 p-2 rounded-full hover:bg-primary transition-colors">
                    <MessageCircle className="w-5 h-5 animate-icon-float" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-500 text-xs">
            <p>© 2026 Le Prince - Buffet Domiciliar. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Menu Modal */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl h-[90vh] md:h-[85vh] bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              {/* Desktop Sidebar */}
              <div className="hidden md:flex w-72 bg-neutral-50 border-r border-neutral-200 p-6 flex-col">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-display text-2xl font-bold text-neutral-900">Nossos Menus</h3>
                </div>
                
                <div className="flex flex-col gap-2">
                  {MENUS.map((menu) => (
                    <button
                      key={menu.id}
                      onClick={() => setActiveMenuId(menu.id)}
                      className={`px-6 py-4 rounded-2xl text-left transition-all duration-300 flex items-center justify-between group ${
                        activeMenuId === menu.id 
                        ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                        : 'hover:bg-neutral-200 text-neutral-600'
                      }`}
                    >
                      <span className="font-bold tracking-tight">{menu.title}</span>
                      <ChevronRight className={`w-4 h-4 transition-transform ${activeMenuId === menu.id ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                    </button>
                  ))}
                </div>

                <div className="mt-auto pt-8">
                  <div className="bg-primary/10 p-6 rounded-2xl border border-primary/20">
                    <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Dúvidas?</p>
                    <p className="text-sm text-neutral-600 mb-4">Personalizamos o cardápio conforme sua necessidade.</p>
                    <a 
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-primary hover:underline flex items-center gap-1"
                    >
                      Falar com consultor <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Mobile Navigation Header */}
              <div className="md:hidden bg-neutral-50 border-b border-neutral-200 sticky top-0 z-10">
                <div className="p-4 flex items-center justify-between">
                  <h3 className="font-display text-xl font-bold text-neutral-900">Nossos Menus</h3>
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 hover:bg-neutral-200 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="flex gap-2 overflow-x-auto px-4 pb-4 no-scrollbar">
                  {MENUS.map((menu) => (
                    <button
                      key={menu.id}
                      onClick={() => setActiveMenuId(menu.id)}
                      className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                        activeMenuId === menu.id 
                        ? 'bg-primary text-white shadow-md' 
                        : 'bg-white text-neutral-600 border border-neutral-200'
                      }`}
                    >
                      {menu.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1 flex flex-col bg-white overflow-hidden">
                <div className="hidden md:flex p-8 border-b border-neutral-100 items-center justify-between">
                  <div>
                    <h2 className="font-display text-3xl font-bold text-neutral-900">{activeMenu.title}</h2>
                    <p className="text-neutral-500 text-sm">Experiência gastronômica completa e sofisticada</p>
                  </div>
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="p-3 hover:bg-neutral-100 rounded-full transition-colors text-neutral-400 hover:text-neutral-900"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
                  <div className="md:hidden mb-6">
                    <h2 className="font-display text-2xl font-bold text-neutral-900">{activeMenu.title}</h2>
                    <p className="text-neutral-500 text-xs">Experiência gastronômica completa</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
                    {activeMenu.sections.map((section, idx) => (
                      <div key={idx} className="space-y-4">
                        <div className="flex items-center gap-3 pb-2 border-b border-primary/10">
                          <div className="bg-primary/10 p-2 rounded-lg">
                            <section.icon className="w-5 h-5 text-primary" />
                          </div>
                          <h4 className="font-display text-lg font-bold text-neutral-800 uppercase tracking-wide">{section.category}</h4>
                        </div>
                        <ul className="space-y-2">
                          {section.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 group">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors flex-shrink-0" />
                              <span className="text-neutral-600 text-sm leading-relaxed group-hover:text-neutral-900 transition-colors">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-12 md:mt-16 p-6 md:p-8 bg-neutral-50 rounded-3xl border border-neutral-100 text-center">
                    <ChefHat className="w-10 h-10 text-primary/30 mx-auto mb-4" />
                    <h5 className="font-bold text-neutral-900 mb-2">Qualidade Le Prince</h5>
                    <p className="text-neutral-500 text-sm max-w-md mx-auto">
                      Todos os nossos pratos são preparados com ingredientes frescos e selecionados, seguindo rigorosos padrões de higiene e qualidade.
                    </p>
                    <a 
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex md:hidden bg-primary text-white px-6 py-3 rounded-full text-sm font-bold items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Solicitar este Menu
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group animate-btn-pulse"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-neutral-900 px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Falar com Especialista
        </span>
      </a>
    </div>
  );
}
