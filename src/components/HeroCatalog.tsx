import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Reveal, SectionTitle, HERO_IMG, TRUST, STATS, GRANITE, COMBINED, MARBLE, MILITARY, MEMORIAL_COMPLEX, STONES } from '@/components/shared';
import ConsultModal from '@/components/ConsultModal';

const CATALOG_SECTIONS = [
  { id: 'granite', title: 'Памятники из гранита', items: GRANITE, icon: 'Mountain', fit: 'cover' },
  { id: 'combined', title: 'Комбинированные памятники', items: COMBINED, icon: 'Layers', fit: 'cover' },
  { id: 'marble', title: 'Памятники из мрамора', items: MARBLE, icon: 'Sparkles', fit: 'cover' },
  {
    id: 'memorial',
    title: 'Мемориальные комплексы',
    items: MEMORIAL_COMPLEX,
    icon: 'Landmark',
    fit: 'contain',
    desc: 'Масштабные семейные комплексы с колоннами, порталами и оградами из натурального гранита.',
  },
  {
    id: 'military',
    title: 'Военные памятники СВО',
    items: MILITARY,
    icon: 'Shield',
    fit: 'contain',
    desc: 'Индивидуальные мемориальные комплексы с бронзовыми скульптурами и цветными портретами для героев СВО.',
  },
];

interface GalleryState {
  sectionId: string;
  index: number;
}

export default function HeroCatalog() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(CATALOG_SECTIONS[0].id);
  const [gallery, setGallery] = useState<GalleryState | null>(null);
  const swipeStartX = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-110px 0px -70% 0px', threshold: 0 }
    );
    CATALOG_SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const galleryCat = gallery ? CATALOG_SECTIONS.find((s) => s.id === gallery.sectionId) : null;
  const galleryItem = galleryCat ? galleryCat.items[gallery!.index] : null;

  const galleryPrev = () => {
    if (!galleryCat) return;
    setGallery((g) => g && { ...g, index: (g.index - 1 + galleryCat.items.length) % galleryCat.items.length });
  };
  const galleryNext = () => {
    if (!galleryCat) return;
    setGallery((g) => g && { ...g, index: (g.index + 1) % galleryCat.items.length });
  };

  useEffect(() => {
    if (!gallery) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setGallery(null);
      if (e.key === 'ArrowLeft') galleryPrev();
      if (e.key === 'ArrowRight') galleryNext();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gallery]);

  return (
    <>
      <ConsultModal open={modalOpen} onClose={() => setModalOpen(false)} />

      {/* HERO */}
      <section id="hero" className="relative min-h-[100dvh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Элитный памятник из натурального гранита" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/60" />
        </div>

        <div className="container relative z-10 py-24 pt-24">
          <div className="max-w-2xl">
            <span className="animate-fade-in inline-block text-[10px] sm:text-xs uppercase tracking-[0.3em] text-primary/90 mb-4 sm:mb-6">
              Камнеобрабатывающая мастерская
            </span>
            <h1 className="animate-fade-in text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-[1.1]">
              Изготавливаем памятники, которые достойно сохраняют память о близких
            </h1>
            <p className="animate-fade-in mt-4 sm:mt-6 text-sm sm:text-base text-muted-foreground leading-relaxed" style={{ animationDelay: '0.15s' }}>
              Индивидуальное изготовление из натурального камня с доставкой и установкой.
            </p>

            <div className="animate-fade-in mt-5 sm:mt-7 flex flex-wrap gap-x-5 gap-y-2" style={{ animationDelay: '0.3s' }}>
              {TRUST.map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-xs sm:text-sm text-foreground/90">
                  <Icon name="Check" size={14} className="text-primary shrink-0" />
                  {t}
                </span>
              ))}
            </div>

            <div className="animate-fade-in mt-6 sm:mt-8 flex flex-col xs:flex-row flex-wrap gap-3" style={{ animationDelay: '0.45s' }}>
              <Button
                onClick={() => setModalOpen(true)}
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-6 h-11 sm:h-12 text-sm sm:text-base w-full xs:w-auto"
              >
                Получить консультацию
              </Button>
              <Button
                variant="outline"
                className="border-border text-foreground hover:bg-secondary rounded-none px-6 h-11 sm:h-12 text-sm sm:text-base w-full xs:w-auto"
                asChild
              >
                <a href="#catalog">Смотреть каталог</a>
              </Button>
            </div>
          </div>

          <div className="animate-fade-in mt-10 sm:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/40 border border-border/40" style={{ animationDelay: '0.6s' }}>
            {STATS.map((s) => (
              <div key={s.label} className="bg-background/70 backdrop-blur-sm p-4 sm:p-6 text-center">
                <div className="font-display text-2xl sm:text-3xl md:text-4xl text-gradient-gold">{s.value}{s.suffix}</div>
                <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-16 md:py-28 section-fade-top">
        <div className="container">
          <Reveal variant="up">
            <SectionTitle kicker="Каталог продукции" title="Памятники, созданные с уважением к деталям" />
          </Reveal>

          {/* Липкая навигация по разделам — мобильная версия */}
          <div className="lg:hidden sticky top-[52px] z-30 -mx-4 px-4 py-2 mb-8 bg-background/95 backdrop-blur-md border-b border-border/50">
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              {CATALOG_SECTIONS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollToSection(s.id)}
                  className={`shrink-0 flex items-center gap-1.5 px-3.5 py-2 text-xs whitespace-nowrap border transition-colors ${
                    activeSection === s.id
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-transparent text-muted-foreground border-border/60'
                  }`}
                >
                  <Icon name={s.icon} size={14} />
                  {s.title}
                </button>
              ))}
            </div>
          </div>

          {CATALOG_SECTIONS.map((cat, ci) => (
            <div key={cat.id} id={cat.id} className={`scroll-mt-28 ${ci > 0 ? 'mt-20' : ''}`}>
              <Reveal variant="left">
                <div className={`flex items-center gap-3 ${cat.desc ? 'mb-2' : 'mb-8'}`}>
                  <Icon name={cat.icon} size={26} className="text-primary" />
                  <h3 className="text-2xl md:text-3xl font-display font-medium">{cat.title}</h3>
                </div>
                {cat.desc && (
                  <p className="mb-8 text-sm text-muted-foreground pl-[38px]">{cat.desc}</p>
                )}
              </Reveal>
              {/* Десктоп: полная сетка карточек */}
              <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-5 gap-5">
                {cat.items.map((item, i) => (
                  <Reveal key={item.title} delay={i * 90} variant="scale">
                    <article className="group relative h-full overflow-hidden bg-card border border-border/60 hover:border-primary/50 transition-colors duration-500">
                      <div className="relative aspect-[3/4] overflow-hidden bg-secondary flex items-center justify-center">
                        <img
                          src={item.img}
                          alt={`${cat.title} — ${item.title}`}
                          loading="lazy"
                          className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${
                            cat.fit === 'contain' ? 'object-contain' : 'object-cover'
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-5 translate-y-[calc(100%-3.5rem)] group-hover:translate-y-0 transition-transform duration-500">
                          <h4 className="font-display text-xl text-foreground">{item.title}</h4>
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                            <div className="mt-3 text-primary font-medium">{item.price}</div>
                            <button className="mt-4 inline-flex items-center gap-2 text-sm text-foreground border border-primary/60 hover:bg-primary hover:text-primary-foreground px-4 py-2 transition-colors">
                              Узнать цену
                              <Icon name="ArrowRight" size={15} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>

              {/* Мобильная/планшетная версия: компактные превью + полноэкранная галерея */}
              <div className="lg:hidden grid grid-cols-3 gap-2">
                {cat.items.slice(0, 3).map((item, i) => (
                  <button
                    key={item.title}
                    onClick={() => setGallery({ sectionId: cat.id, index: i })}
                    className="relative aspect-square overflow-hidden bg-secondary border border-border/60"
                  >
                    <img
                      src={item.img}
                      alt={`${cat.title} — ${item.title}`}
                      loading="lazy"
                      className={`w-full h-full ${cat.fit === 'contain' ? 'object-contain' : 'object-cover'}`}
                    />
                    {i === 2 && cat.items.length > 3 && (
                      <div className="absolute inset-0 bg-background/75 flex items-center justify-center text-sm font-medium text-foreground">
                        +{cat.items.length - 3}
                      </div>
                    )}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setGallery({ sectionId: cat.id, index: 0 })}
                className="lg:hidden mt-3 w-full flex items-center justify-center gap-2 text-sm text-foreground border border-primary/60 hover:bg-primary hover:text-primary-foreground px-4 py-2.5 transition-colors"
              >
                Смотреть все ({cat.items.length})
                <Icon name="ArrowRight" size={15} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FULLSCREEN GALLERY */}
      {gallery && galleryCat && galleryItem && (
        <div className="fixed inset-0 z-[200] flex flex-col bg-background">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 shrink-0">
            <div className="flex items-center gap-2 min-w-0">
              <Icon name={galleryCat.icon} size={18} className="text-primary shrink-0" />
              <span className="text-sm font-medium truncate">{galleryCat.title}</span>
            </div>
            <button
              onClick={() => setGallery(null)}
              className="w-9 h-9 shrink-0 flex items-center justify-center border border-border/60 hover:border-primary/60 hover:text-primary transition-colors"
            >
              <Icon name="X" size={18} />
            </button>
          </div>

          <div
            className="relative flex-1 overflow-hidden touch-pan-y"
            onTouchStart={(e) => { swipeStartX.current = e.touches[0].clientX; }}
            onTouchEnd={(e) => {
              const dx = e.changedTouches[0].clientX - swipeStartX.current;
              if (Math.abs(dx) > 40) { if (dx < 0) galleryNext(); else galleryPrev(); }
            }}
          >
            <img
              src={galleryItem.img}
              alt={galleryItem.title}
              className={`absolute inset-0 w-full h-full ${galleryCat.fit === 'contain' ? 'object-contain' : 'object-cover'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />

            <button
              onClick={galleryPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/70 backdrop-blur-sm border border-border/60 flex items-center justify-center hover:border-primary/60 hover:text-primary transition-colors"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>
            <button
              onClick={galleryNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/70 backdrop-blur-sm border border-border/60 flex items-center justify-center hover:border-primary/60 hover:text-primary transition-colors"
            >
              <Icon name="ChevronRight" size={20} />
            </button>

            <div className="absolute top-3 right-3 bg-background/70 backdrop-blur-sm border border-border/40 px-3 py-1 text-xs text-muted-foreground font-mono">
              {gallery.index + 1} / {galleryCat.items.length}
            </div>

            <div className="absolute inset-x-0 bottom-0 p-5">
              <h4 className="font-display text-2xl text-foreground">{galleryItem.title}</h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-md">{galleryItem.desc}</p>
              <div className="mt-3 text-primary font-medium">{galleryItem.price}</div>
              <button
                onClick={() => setModalOpen(true)}
                className="mt-4 inline-flex items-center gap-2 text-sm text-foreground border border-primary/60 hover:bg-primary hover:text-primary-foreground px-4 py-2 transition-colors"
              >
                Узнать цену
                <Icon name="ArrowRight" size={15} />
              </button>
            </div>
          </div>

          <div className="flex gap-1.5 overflow-x-auto no-scrollbar px-4 py-3 border-t border-border/50 shrink-0">
            {galleryCat.items.map((it, i) => (
              <button
                key={it.title}
                onClick={() => setGallery({ sectionId: galleryCat.id, index: i })}
                className={`relative shrink-0 w-14 h-14 overflow-hidden border transition-colors ${
                  i === gallery.index ? 'border-primary' : 'border-border/60 opacity-60'
                }`}
              >
                <img src={it.img} alt="" className={`w-full h-full ${galleryCat.fit === 'contain' ? 'object-contain' : 'object-cover'}`} />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* STONE TYPES */}
      <section id="stone" className="py-16 md:py-28 bg-card/40 section-vignette">
        <div className="container">
          <Reveal variant="up">
            <SectionTitle kicker="Виды камня" title="Натуральный материал из лучших карьеров" />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STONES.map((st, i) => (
              <Reveal key={st.name} delay={i * 100} variant="scale">
                <div className="h-full bg-card border border-border/60 hover:border-primary/50 transition-colors duration-500 group">
                  <div className="aspect-square overflow-hidden bg-secondary">
                    <img src={st.img} alt={st.name} loading="lazy" className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl">{st.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{st.desc}</p>
                    <p className="mt-3 flex items-start gap-2 text-xs text-primary/90">
                      <Icon name="Check" size={14} className="mt-0.5 shrink-0" />
                      {st.feat}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}