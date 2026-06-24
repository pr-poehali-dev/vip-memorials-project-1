import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Reveal, SectionTitle, HERO_IMG, TRUST, STATS, GRANITE, MARBLE, MILITARY, STONES } from '@/components/shared';
import ConsultModal from '@/components/ConsultModal';

export default function HeroCatalog() {
  const [modalOpen, setModalOpen] = useState(false);

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

          {[
            { title: 'Памятники из гранита', items: GRANITE, icon: 'Mountain' },
            { title: 'Памятники из мрамора', items: MARBLE, icon: 'Sparkles' },
          ].map((cat, ci) => (
            <div key={cat.title} className={ci === 1 ? 'mt-20' : ''}>
              <Reveal variant="left">
                <div className="flex items-center gap-3 mb-8">
                  <Icon name={cat.icon} size={26} className="text-primary" />
                  <h3 className="text-2xl md:text-3xl font-display font-medium">{cat.title}</h3>
                </div>
              </Reveal>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                {cat.items.map((item, i) => (
                  <Reveal key={item.title} delay={i * 90} variant="scale">
                    <article className="group relative h-full overflow-hidden bg-card border border-border/60 hover:border-primary/50 transition-colors duration-500">
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <img
                          src={item.img}
                          alt={`${cat.title} — ${item.title}`}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
            </div>
          ))}

          {/* Военные памятники СВО */}
          <div className="mt-20">
            <Reveal variant="left">
              <div className="flex items-center gap-3 mb-2">
                <Icon name="Shield" size={26} className="text-primary" />
                <h3 className="text-2xl md:text-3xl font-display font-medium">Военные памятники СВО</h3>
              </div>
              <p className="mb-8 text-sm text-muted-foreground pl-[38px]">
                Индивидуальные мемориальные комплексы с бронзовыми скульптурами и цветными портретами для героев СВО.
              </p>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
              {MILITARY.map((item, i) => (
                <Reveal key={item.title} delay={i * 90} variant="scale">
                  <article className="group relative h-full overflow-hidden bg-card border border-border/60 hover:border-primary/50 transition-colors duration-500">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img
                        src={item.img}
                        alt={`Военный памятник СВО — ${item.title}`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
          </div>
        </div>
      </section>

      {/* STONE TYPES */}
      <section id="stone" className="py-16 md:py-28 bg-card/40 section-vignette">
        <div className="container">
          <Reveal variant="up">
            <SectionTitle kicker="Виды камня" title="Натуральный материал из лучших карьеров" />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {STONES.map((st, i) => (
              <Reveal key={st.name} delay={i * 100} variant="scale">
                <div className="h-full bg-card border border-border/60 hover:border-primary/50 transition-colors duration-500 group">
                  <div className="aspect-[4/3] overflow-hidden bg-secondary">
                    <img src={st.img} alt={st.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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