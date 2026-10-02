import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronLeft, ChevronRight, ChevronDown, GlassWater, Instagram, Mail, MapPin, Menu, MessageCircle, Play, ShieldCheck, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { quoteSchema, submitQuote } from "@/lib/quotes.functions";
import { siteConfig, whatsappUrl, whatsappNumberDigits } from "@/lib/site-config";
import teamAsset from "@/assets/real/SaveClip.App_654167718_18057153935456916_4949382193211138204_n.jpg.asset.json";
import barAsset from "@/assets/real/SaveClip.App_653891368_18415837459120059_940093852938342312_n.jpg.asset.json";
import fruitAsset from "@/assets/real/SaveClip.App_549767287_18386768356120059_964754281852323932_n.jpg.asset.json";
import guestAsset from "@/assets/real/SaveClip.App_550185373_18386768338120059_3458839156652436410_n.jpg.asset.json";
import guestTwoAsset from "@/assets/real/SaveClip.App_550728527_18386768311120059_3509499281165582491_n.jpg.asset.json";
import setupAsset from "@/assets/real/SaveClip.App_548375215_18386768320120059_3678926127273280841_n.jpg.asset.json";
import videoBarAsset from "@/assets/real/SaveClip.App_AQN59VllgvCsjoGi3EUzyWIww3rENfKLJvbXfxxXpFixs_VmnUwu3gRpLn6uVOQ1MJwFAO-X9Pgi5FJDNbixyEEm05u7fSzifeUjq6M.mp4.asset.json";
import videoDrinkAsset from "@/assets/real/SaveClip.App_AQPXe6PMwl5CDXe9X9kfQeJ8riHdODtoL4o3jzuVgfsK2hpPJ2jH6pUKpBvV3npj1pTC0b1ZUqGlRsXZPvcO8VpquHdMrNbmd0ByZAs.mp4.asset.json";
import posterBarAsset from "@/assets/real/poster-SaveClip.App_AQN59VllgvCsjoGi3EUzyWIww3rENfKLJvbXfxxXpFixs_VmnUwu3gRpLn6uVOQ1MJwFAO-X9Pgi5FJDNbixyEEm05u7fSzifeUjq6M.jpg.asset.json";
import posterDrinkAsset from "@/assets/real/poster-SaveClip.App_AQPXe6PMwl5CDXe9X9kfQeJ8riHdODtoL4o3jzuVgfsK2hpPJ2jH6pUKpBvV3npj1pTC0b1ZUqGlRsXZPvcO8VpquHdMrNbmd0ByZAs.jpg.asset.json";

const team = teamAsset.url;
const bar = barAsset.url;
const fruit = fruitAsset.url;
const guest = guestAsset.url;
const guestTwo = guestTwoAsset.url;
const setup = setupAsset.url;

const description = "Transforme seu evento com a Ativo Bartender. Serviço profissional de bartender, drinks e experiência de bar para casamentos, aniversários, festas e eventos corporativos.";
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Ativo Bartender | Bartender e Bar para Eventos" },
    { name: "description", content: description },
    { property: "og:title", content: "Ativo Bartender | Bartender e Bar para Eventos" },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/" }] }),
  component: Index,
});

const nav = [["Início", "inicio"], ["Serviços", "servicos"], ["Experiências", "experiencia"], ["Galeria", "galeria"], ["Sobre", "sobre"], ["Depoimentos", "depoimentos"], ["FAQ", "faq"], ["Contato", "contato"]];
const services = [
  ["01", "Bartender para Eventos", "Profissionais preparados para oferecer um atendimento elegante, ágil e descontraído aos seus convidados.", "Quero saber mais"],
  ["02", "Bar Completo", "Uma experiência completa de bar para seu evento, com estrutura organizada, bartender e preparação dos drinks.", "Solicitar orçamento"],
  ["03", "Cardápio Personalizado", "Uma seleção de drinks criada de acordo com o estilo da festa e o perfil dos seus convidados.", "Criar meu cardápio"],
  ["04", "Drinks Clássicos e Autorais", "Cocktails conhecidos e criações especiais para surpreender os convidados em cada brinde.", "Conhecer opções"],
  ["05", "Eventos Corporativos", "Serviço de bartender para empresas, confraternizações, lançamentos e eventos especiais.", "Orçamento corporativo"],
  ["06", "Festas e Celebrações", "Para aniversários, casamentos, formaturas, debutantes e comemorações memoráveis.", "Planejar meu evento"],
];
const eventTypes = ["Casamentos", "Aniversários", "Formaturas", "Eventos corporativos", "Debutantes", "Confraternizações", "Festas particulares", "Eventos especiais"];
const steps = [
  ["01", "Entendemos seu evento", "Conhecemos o estilo da festa, a quantidade de convidados e suas preferências."],
  ["02", "Planejamos a experiência", "Definimos o formato de atendimento e as melhores opções para seu evento."],
  ["03", "Montamos tudo", "Organizamos o serviço para que você possa aproveitar sua festa."],
  ["04", "Seus convidados aproveitam", "Drinks preparados na hora, atendimento profissional e uma experiência memorável."],
];
const faqs = [
  ["A Ativo Bartender atende quais tipos de eventos?", "Atendemos casamentos, aniversários, formaturas, festas particulares, debutantes e eventos corporativos. Conte sobre a sua ocasião para planejarmos juntos."],
  ["Vocês levam toda a estrutura do bar?", "O formato do serviço e a estrutura necessária são definidos conforme o espaço e as necessidades do seu evento. Consulte as opções disponíveis no orçamento."],
  ["É possível personalizar os drinks?", "Sim. Podemos conversar sobre suas preferências e o estilo da comemoração para criar uma seleção de drinks especial."],
  ["Vocês atendem eventos corporativos?", "Sim. Planejamos experiências de bar para confraternizações, lançamentos, ativações e outras ocasiões empresariais."],
  ["Com quanto tempo devo solicitar o orçamento?", "Entre em contato assim que souber a data do evento. Assim podemos conversar sobre disponibilidade e detalhes do serviço."],
  ["Vocês atendem outras cidades?", "Informe a cidade do evento no pedido de orçamento para confirmarmos a disponibilidade de atendimento."],
  ["Como funciona a contratação?", "Você nos conta os detalhes do evento, conversamos sobre as possibilidades e preparamos uma proposta personalizada."],
];
const gallery = [
  { src: bar, alt: "Bar da Ativo Bartender com frutas frescas e cardápio de drinks", className: "gallery-tall", video: undefined },
  { src: fruit, alt: "Frutas e ingredientes frescos no bar de evento", className: "", video: undefined },
  { src: guest, alt: "Convidada experimentando um drink no evento", className: "", video: undefined },
  { src: team, alt: "Equipe da Ativo Bartender atendendo um evento", className: "gallery-wide", video: undefined },
  { src: guestTwo, alt: "Convidado com um drink preparado no evento", className: "", video: undefined },
  { src: posterDrinkAsset.url, alt: "Vídeo da preparação de um drink pela equipe", className: "gallery-video", video: videoDrinkAsset.url },
  { src: posterBarAsset.url, alt: "Vídeo do bar da Ativo Bartender em evento", className: "gallery-video", video: videoBarAsset.url },
];

function Brand() { return <a href="#inicio" className="brand" aria-label="Ativo Bartender, voltar ao início"><span className="brand-mark">A<span>✳</span></span><span className="brand-text">ATIVO <strong>BARTENDER</strong><small>BAR • EVENTOS • EXPERIÊNCIAS</small></span></a>; }
function WhatsAppLink({ children, className = "", icon = false }: { children: React.ReactNode; className?: string; icon?: boolean }) { return <a href={whatsappUrl} target={siteConfig.whatsappNumber ? "_blank" : undefined} rel={siteConfig.whatsappNumber ? "noopener noreferrer" : undefined} className={className}>{icon && <MessageCircle size={18} />}{children}</a>; }
function SectionTitle({ eyebrow, title, text, centered = false }: { eyebrow: string; title: string; text?: string; centered?: boolean }) { return <div className={`section-title ${centered ? "centered" : ""}`}><span className="eyebrow"><span className="eyebrow-line" />{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>; }

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [sending, setSending] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [quoteWa, setQuoteWa] = useState("");
  const lightboxRef = useRef<HTMLDivElement>(null);
  const lightboxTrigger = useRef<HTMLElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".section-title, .story-image-wrap, .benefit-list > div, .service-card, .event-pills a, .step, .drinks-image, .about-image, .about-words span, .testimonial-panel, .quote-form, .faq-list details");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); } }), { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach((el) => { const sib = el.parentElement ? Array.from(el.parentElement.children).indexOf(el) : 0; el.style.setProperty("--reveal-delay", `${Math.min(sib, 6) * 70}ms`); if (el.getBoundingClientRect().top < window.innerHeight) return; el.classList.add("reveal"); io.observe(el); });
    return () => io.disconnect();
  }, []);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 30); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => {
    if (lightbox === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    lightboxRef.current?.querySelector<HTMLButtonElement>(".lightbox-close")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((v) => v === null ? 0 : (v + 1) % gallery.length);
      if (e.key === "ArrowLeft") setLightbox((v) => v === null ? 0 : (v + gallery.length - 1) % gallery.length);
      if (e.key === "Tab") {
        const controls = lightboxRef.current?.querySelectorAll<HTMLElement>('button, video[controls]');
        if (!controls?.length) return;
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = previousOverflow; lightboxTrigger.current?.focus(); };
  }, [lightbox !== null]);
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setMenuOpen(false); menuButtonRef.current?.focus(); } };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setFormStatus("");
    const form = e.currentTarget;
    const data = new FormData(form);
    const parsed = quoteSchema.safeParse({
      nome: data.get("nome"), telefone: data.get("telefone"), email: data.get("email"), tipo_evento: data.get("tipo_evento"),
      data_evento: String(data.get("data_evento") || ""), cidade: data.get("cidade"),
      quantidade_convidados: data.get("quantidade_convidados") ? Number(data.get("quantidade_convidados")) : undefined,
      tipo_servico: data.get("tipo_servico") ?? "", observacoes: data.get("observacoes"), website: data.get("website"),
    });
    if (!parsed.success) { setErrors(Object.fromEntries(parsed.error.issues.map(issue => [String(issue.path[0]), issue.message]))); setFormStatus("Confira os campos indicados e tente novamente."); const first = parsed.error.issues[0]?.path[0]; if (first) form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus(); return; }
    setErrors({}); setSending(true); setQuoteWa("");
    try { await submitQuote({ data: parsed.data }); const d = parsed.data; const msg = ["Olá! Acabei de solicitar um orçamento de bartender para eventos pelo site da Ativo Bartender.", `Nome: ${d.nome}`, `Evento: ${d.tipo_evento}`, d.data_evento ? `Data: ${d.data_evento.split("-").reverse().join("/")}` : "", `Cidade: ${d.cidade}`, d.quantidade_convidados ? `Convidados: ${d.quantidade_convidados}` : "", `Serviço: ${d.tipo_servico}`].filter(Boolean).join("\n"); if (whatsappNumberDigits) setQuoteWa(`https://wa.me/${whatsappNumberDigits}?text=${encodeURIComponent(msg)}`); setFormStatus("Pedido enviado com sucesso! Entraremos em contato em breve."); form.reset(); }
    catch { setFormStatus("Não foi possível enviar seu pedido agora. Tente novamente."); }
    finally { setSending(false); }
  }
  return <div className="site-shell">
    <header className={`site-header ${scrolled || menuOpen ? "is-scrolled" : ""}`}><div className="header-inner"><Brand /><nav className="desktop-nav" aria-label="Menu principal">{nav.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav><a href="#contato" className="header-cta">Solicitar orçamento <ArrowUpRight size={15} /></a><Button ref={menuButtonRef} variant="ghost" size="icon" className="mobile-menu-button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button></div>{menuOpen && <nav id="mobile-navigation" className="mobile-nav" aria-label="Menu móvel">{nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight size={15} /></a>)}<a href="#contato" onClick={() => setMenuOpen(false)}>Solicitar orçamento <ArrowUpRight size={15} /></a></nav>}</header>

    <main>
      <section id="inicio" className="hero"><img src={team} width={1440} height={1080} alt="Equipe da Ativo Bartender atrás do bar em um evento real" className="hero-image" /><div className="hero-shade" /><div className="container hero-content"><div className="hero-copy"><div className="hero-kicker"><span className="kicker-line" /> O BAR QUE TRANSFORMA O SEU EVENTO</div><h1>Transformamos seu evento em uma experiência <em>inesquecível.</em></h1><p className="hero-lead">Drinks incríveis, atendimento profissional e uma experiência de bar que seus convidados vão lembrar.</p><p className="hero-sub">A Ativo Bartender leva até seu evento uma experiência completa de bar, combinando cocktails, apresentação, atendimento e qualidade para tornar cada celebração ainda mais especial.</p><div className="hero-actions"><WhatsAppLink icon className="btn btn-primary">{siteConfig.whatsappNumber ? "Solicitar orçamento pelo WhatsApp" : "Solicitar orçamento"}<ArrowUpRight size={17} /></WhatsAppLink><a className="btn btn-outline" href="#servicos">Conhecer nossos serviços <ArrowRight size={17} /></a></div><div className="hero-trust"><span><Check /> Atendimento personalizado</span><span><Check /> Bartenders profissionais</span><span><Check /> Drinks preparados na hora</span><span><Check /> Para diferentes eventos</span></div></div></div><a className="scroll-hint" href="#diferenciais"><span>ROLE PARA CONHECER</span><ArrowDown size={16} /></a><div className="hero-side-note">ATIVO BARTENDER <span>—</span> EXPERIÊNCIAS QUE BRINDAM A VIDA</div></section>

      <section id="diferenciais" className="trust-band"><div className="container trust-grid">{[[Sparkles, "Experiência", "Muito mais do que servir bebidas."], [ShieldCheck, "Profissionalismo", "Atendimento do início ao fim."], [GlassWater, "Qualidade", "Drinks preparados com cuidado."], [Check, "Personalização", "O seu evento, do seu jeito."]].map(([Icon, title, text]) => { const I = Icon as typeof Sparkles; return <div className="trust-item" key={title as string}><I size={25} strokeWidth={1.3} /><div><strong>{title as string}</strong><p>{text as string}</p></div></div>; })}</div></section>

      <section className="section story-section"><div className="container story-grid"><div className="story-image-wrap"><img src={bar} width={1440} height={1440} loading="lazy" alt="Bar da Ativo Bartender preparado com frutas, bebidas e cardápio" /><span className="image-caption">A EXPERIÊNCIA COMEÇA NOS DETALHES <ArrowUpRight size={15} /></span></div><div className="story-copy"><SectionTitle eyebrow="ALÉM DO BRINDE" title="Seu evento merece mais do que simplesmente servir bebidas." /><p>Na Ativo Bartender, cada detalhe é pensado para transformar o bar em uma verdadeira atração da festa.</p><p>Da apresentação dos drinks ao atendimento dos convidados, criamos uma experiência que combina sabor, diversão e sofisticação.</p><div className="benefit-list">{["Drinks preparados na hora", "Atendimento elegante e profissional", "Cardápios personalizados", "Experiência adaptada ao seu evento", "Apresentação que valoriza sua celebração"].map(item => <div key={item}><span><Check size={16} /></span>{item}</div>)}</div><a href="#contato" className="text-link">Vamos conversar sobre seu evento <ArrowUpRight size={18} /></a></div></div></section>

      <section id="servicos" className="section services-section"><div className="container"><div className="section-heading-row"><SectionTitle eyebrow="O QUE FAZEMOS" title="Uma experiência de bar pensada para o seu evento" text="Escolha o formato ideal para transformar sua comemoração." /><span className="section-aside">SERVIÇOS / 01—06</span></div><div className="services-grid">{services.map(([number, title, text, action]) => <article className="service-card" key={number}><span className="service-number">{number} / SERVIÇO</span><GlassWater className="service-icon" size={35} strokeWidth={1.1} /><h3>{title}</h3><p>{text}</p><a href="#contato" aria-label={`${action}: ${title}`} className="service-link">{action}<ArrowUpRight size={18} /></a></article>)}</div></div></section>

      <section className="section events-section"><div className="container"><SectionTitle eyebrow="CADA OCASIÃO É ÚNICA" title="Um bar que combina com qualquer celebração" text="Cada evento tem sua própria personalidade. Adaptamos nossa experiência ao estilo, número de convidados e proposta da sua comemoração." centered /><div className="event-pills">{eventTypes.map((type, i) => <a href="#contato" key={type}><span>{String(i + 1).padStart(2, "0")}</span>{type}<ArrowUpRight size={17} /></a>)}</div></div></section>

      <section id="experiencia" className="section experience-section"><div className="container"><SectionTitle eyebrow="EXPERIÊNCIA ATIVO" title="Não servimos apenas drinks. Criamos momentos." text="Do primeiro contato ao último brinde, tudo é pensado para você aproveitar a ocasião." /><div className="steps-grid">{steps.map(([number, title, text]) => <div className="step" key={number}><span className="step-number">{number}</span><span className="step-dot" /><h3>{title}</h3><p>{text}</p></div>)}</div><a href="#contato" className="btn btn-primary experience-cta">Planejar minha experiência <ArrowUpRight size={17} /></a></div></section>

      <section className="section drinks-section"><div className="container drinks-grid"><div className="drinks-copy"><SectionTitle eyebrow="SABOR EM CADA DETALHE" title="Drinks que chamam atenção antes mesmo do primeiro gole" text="Apresentação, sabor e criatividade trabalhando juntos." /><div className="drink-tags">{["Gin Tônica", "Mojito", "Caipirinha", "Aperol Spritz", "Moscow Mule", "Drinks autorais"].map(x => <span key={x}>{x}</span>)}</div><p className="drinks-note">O cardápio pode ser personalizado de acordo com o perfil e estilo de cada evento.</p><a href="#contato" className="text-link">Quero montar meu cardápio <ArrowUpRight size={18} /></a></div><div className="drinks-image"><img src={fruit} width={1440} height={1440} loading="lazy" alt="Frutas frescas e ingredientes para os drinks da Ativo Bartender" /><span>UMA EXPERIÊNCIA PARA TODOS OS SENTIDOS</span></div></div></section>

      <section id="galeria" className="section gallery-section"><div className="container"><div className="section-heading-row"><SectionTitle eyebrow="MOMENTOS ATIVO" title="O melhor da festa acontece entre um brinde e outro." text="Uma pequena amostra do universo que inspira cada experiência." /><a href="#contato" className="text-link gallery-contact">Levar essa experiência para meu evento <ArrowUpRight size={18} /></a></div><div className="gallery-grid">{gallery.map((item, i) => <Button variant="ghost" className={`gallery-item ${item.className}`} key={item.alt} onClick={(event) => { lightboxTrigger.current = event.currentTarget; setLightbox(i); }} aria-label={`${item.video ? "Reproduzir" : "Ampliar"}: ${item.alt}`}><img src={item.src} alt={item.alt} loading="lazy" /><span>{item.video ? <Play size={20} fill="currentColor" /> : <ArrowUpRight size={20} />}</span></Button>)}</div><div className="gallery-footer"><p className="demo-note">Registros reais de eventos da Ativo Bartender.</p><WhatsAppLink icon className="btn btn-primary">Levar essa experiência para meu evento <ArrowUpRight size={17} /></WhatsAppLink></div></div></section>

      <section id="sobre" className="section about-section"><div className="container about-grid"><div className="about-image"><img src={team} width={1440} height={1080} loading="lazy" alt="Equipe da Ativo Bartender em frente ao bar montado para evento" /></div><div className="about-copy"><SectionTitle eyebrow="QUEM SOMOS" title="Muito prazer, somos a Ativo Bartender" /><p>A Ativo Bartender nasceu com o propósito de levar mais experiência, sabor e personalidade para eventos especiais.</p><p>Nosso trabalho vai além de preparar drinks. Buscamos criar um ambiente descontraído, elegante e marcante, oferecendo aos anfitriões tranquilidade e aos convidados uma experiência que complementa cada celebração.</p><div className="about-words"><span>Atendimento personalizado</span><span>Profissionalismo</span><span>Qualidade</span><span>Experiência</span></div></div></div></section>

      <section id="depoimentos" className="section testimonials-section"><div className="container testimonial-layout"><div><SectionTitle eyebrow="O QUE IMPORTA" title="Quem vive a experiência, recomenda" text="Avaliações reais de anfitriões e convidados que celebraram com a Ativo Bartender." /></div><div className="testimonial-panel"><span className="sample-tag">EM BREVE</span><span className="quote-mark">“</span><p>Estamos reunindo avaliações de eventos recentes para compartilhar aqui em breve.</p><div className="testimonial-bottom"><span>Publicamos apenas depoimentos reais, com autorização de cada cliente.</span></div></div></div></section>

      <section className="cta-section"><div className="container cta-inner"><span className="eyebrow">O PRÓXIMO BRINDE COMEÇA AQUI</span><h2>Seu evento merece um bar à altura do momento.</h2><p>Conte para a Ativo Bartender como será sua celebração e receba uma proposta personalizada.</p><WhatsAppLink icon className="btn btn-dark">Solicitar orçamento agora <ArrowUpRight size={18} /></WhatsAppLink></div></section>

      <section id="contato" className="section contact-section"><div className="container contact-grid"><div className="contact-intro"><SectionTitle eyebrow="VAMOS CONVERSAR" title="Vamos preparar seu evento?" text="Preencha algumas informações e entraremos em contato para entender todos os detalhes." /><div className="contact-rule" /><p>Conte o que você está imaginando. O restante a gente constrói juntos, drink por drink.</p>{siteConfig.whatsappNumber && <WhatsAppLink icon className="text-link">Prefere falar pelo WhatsApp? <ArrowUpRight size={18} /></WhatsAppLink>}</div><form className="quote-form" onSubmit={handleSubmit} noValidate><div className="form-heading"><span>SEU EVENTO COMEÇA AQUI</span><span>01 / 01</span></div><div className="form-grid"><label htmlFor="quote-nome">Nome *<input id="quote-nome" name="nome" autoComplete="name" placeholder="Seu nome" required aria-invalid={!!errors["nome"]} aria-describedby={errors["nome"] ? "error-nome" : undefined} />{errors["nome"] && <small id="error-nome">{errors["nome"]}</small>}</label><label htmlFor="quote-telefone">WhatsApp *<input id="quote-telefone" name="telefone" type="tel" autoComplete="tel" placeholder="(00) 00000-0000" required aria-invalid={!!errors["telefone"]} aria-describedby={errors["telefone"] ? "error-telefone" : undefined} />{errors["telefone"] && <small id="error-telefone">{errors["telefone"]}</small>}</label><label htmlFor="quote-email">E-mail *<input id="quote-email" name="email" type="email" autoComplete="email" placeholder="seu@email.com" required aria-invalid={!!errors["email"]} aria-describedby={errors["email"] ? "error-email" : undefined} />{errors["email"] && <small id="error-email">{errors["email"]}</small>}</label><label htmlFor="quote-tipo_evento">Tipo de evento *<select id="quote-tipo_evento" name="tipo_evento" defaultValue="" required aria-invalid={!!errors["tipo_evento"]} aria-describedby={errors["tipo_evento"] ? "error-tipo_evento" : undefined}><option value="" disabled>Selecione uma opção</option>{["Casamento", "Aniversário", "Formatura", "Corporativo", "Debutante", "Confraternização", "Festa particular", "Outro"].map(x => <option key={x}>{x}</option>)}</select>{errors["tipo_evento"] && <small id="error-tipo_evento">Selecione o tipo de evento.</small>}</label><label htmlFor="quote-data_evento">Data do evento<input id="quote-data_evento" name="data_evento" type="date" /></label><label htmlFor="quote-cidade">Cidade do evento *<input id="quote-cidade" name="cidade" placeholder="Onde será o evento?" required aria-invalid={!!errors["cidade"]} aria-describedby={errors["cidade"] ? "error-cidade" : undefined} />{errors["cidade"] && <small id="error-cidade">{errors["cidade"]}</small>}</label><label htmlFor="quote-quantidade_convidados">Convidados estimados<input id="quote-quantidade_convidados" name="quantidade_convidados" type="number" min="1" max="100000" placeholder="Ex.: 100" aria-invalid={!!errors["quantidade_convidados"]} aria-describedby={errors["quantidade_convidados"] ? "error-quantidade_convidados" : undefined} />{errors["quantidade_convidados"] && <small id="error-quantidade_convidados">Informe um número válido.</small>}</label><label htmlFor="quote-tipo_servico">Serviço desejado *<select id="quote-tipo_servico" name="tipo_servico" defaultValue="" required aria-invalid={!!errors["tipo_servico"]} aria-describedby={errors["tipo_servico"] ? "error-tipo_servico" : undefined}><option value="" disabled>Selecione uma opção</option>{["Bartender para eventos", "Bar completo", "Cardápio personalizado", "Eventos corporativos", "Ainda não sei"].map(x => <option key={x}>{x}</option>)}</select>{errors["tipo_servico"] && <small id="error-tipo_servico">{errors["tipo_servico"]}</small>}</label><label className="full" htmlFor="quote-observacoes">Conte um pouco mais<textarea id="quote-observacoes" name="observacoes" rows={4} maxLength={2000} placeholder="Detalhes que você gostaria de compartilhar..." /></label></div><input name="website" className="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" /><div className="form-footer"><p>Seus dados serão usados apenas para responder à sua solicitação.</p><Button type="submit" className="form-submit" disabled={sending}>{sending ? "Enviando..." : "Solicitar meu orçamento"}<ArrowUpRight size={17} /></Button></div>{formStatus && <p className={`form-status ${formStatus.includes("sucesso") ? "success" : "error"}`} role="status">{formStatus}</p>}{quoteWa && <a href={quoteWa} target="_blank" rel="noopener noreferrer" className="btn btn-outline form-wa"><MessageCircle size={17} /> Enviar resumo pelo WhatsApp <ArrowRight size={17} /></a>}</form></div></section>

      <section id="faq" className="section faq-section"><div className="container faq-grid"><SectionTitle eyebrow="AINDA TEM DÚVIDAS?" title="Dúvidas frequentes" text="Tudo o que você precisa saber antes do primeiro brinde." /><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown size={19} /></summary><p>{answer}</p></details>)}</div></div></section>

      <section className="instagram-section"><div className="container instagram-grid"><div><span className="eyebrow">ACOMPANHE NOSSOS MOMENTOS</span><h2>Acompanhe a <em>Ativo Bartender</em></h2><p>Veja nossos eventos, drinks e bastidores.</p>{siteConfig.instagramUrl && <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline"><Instagram size={18} /> Seguir no Instagram <ArrowUpRight size={18} /></a>}</div><div className="instagram-images"><img src={setup} width={1440} height={1440} loading="lazy" alt="Bar da Ativo Bartender com ingredientes e bebidas" /><img src={guest} width={1440} height={1440} loading="lazy" alt="Convidada aproveitando um drink no evento" /><img src={bar} width={1440} height={1440} loading="lazy" alt="Bar de drinks montado pela Ativo Bartender" /></div></div></section>
    </main>
    <footer className="footer"><div className="container"><div className="footer-main"><div className="footer-brand"><Brand /><p>Experiência de bar para eventos inesquecíveis.</p><WhatsAppLink icon className="btn btn-primary footer-cta">Falar pelo WhatsApp <ArrowUpRight size={17} /></WhatsAppLink></div><div className="footer-links"><strong>EXPLORE</strong>{[["Início", "inicio"], ["Serviços", "servicos"], ["Galeria", "galeria"], ["Sobre", "sobre"], ["FAQ", "faq"], ["Contato", "contato"]].map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}</div><div className="footer-contact"><strong>CONTATO</strong>{siteConfig.whatsappNumber && <WhatsAppLink><MessageCircle size={16} /> WhatsApp</WhatsAppLink>}{siteConfig.instagramUrl && <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer"><Instagram size={16} /> Instagram</a>}{siteConfig.threadsUrl && <a href={siteConfig.threadsUrl} target="_blank" rel="noopener noreferrer">Threads <ArrowUpRight size={16} /></a>}{siteConfig.email && <a href={`mailto:${siteConfig.email}`}><Mail size={16} /> {siteConfig.email}</a>}{siteConfig.serviceArea && <span><MapPin size={16} /> {siteConfig.serviceArea}</span>}<a href="#contato">Solicitar orçamento <ArrowUpRight size={16} /></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Ativo Bartender. Todos os direitos reservados.</span><span>FEITO PARA CELEBRAR</span></div></div></footer>
    {siteConfig.whatsappNumber && <><WhatsAppLink className="floating-whatsapp" icon><span className="sr-only">Pedir orçamento pelo WhatsApp</span></WhatsAppLink><div className="mobile-bottom"><WhatsAppLink icon className="btn btn-primary">Pedir orçamento pelo WhatsApp <ArrowUpRight size={17} /></WhatsAppLink></div></>}
    {lightbox !== null && gallery[lightbox] && <div ref={lightboxRef} className="lightbox" role="dialog" aria-modal="true" aria-label={gallery[lightbox].video ? "Vídeo do evento" : "Foto ampliada"} onClick={() => setLightbox(null)}><Button variant="ghost" size="icon" className="lightbox-close" aria-label="Fechar foto ou vídeo" onClick={() => setLightbox(null)}><X /></Button><Button variant="ghost" size="icon" className="lightbox-prev" aria-label="Foto anterior" onClick={e => { e.stopPropagation(); setLightbox((lightbox + gallery.length - 1) % gallery.length); }}><ChevronLeft /></Button>{gallery[lightbox].video ? <video key={gallery[lightbox].video} src={gallery[lightbox].video} poster={gallery[lightbox].src} controls autoPlay playsInline tabIndex={0} aria-label={gallery[lightbox].alt} onClick={e => e.stopPropagation()} /> : <img src={gallery[lightbox].src} alt={gallery[lightbox].alt} onClick={e => e.stopPropagation()} />}<Button variant="ghost" size="icon" className="lightbox-next" aria-label="Próxima foto" onClick={e => { e.stopPropagation(); setLightbox((lightbox + 1) % gallery.length); }}><ChevronRight /></Button></div>}
  </div>;
}
