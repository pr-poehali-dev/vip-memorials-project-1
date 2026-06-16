import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Reveal, SectionTitle, HERO_IMG, TRUST, STATS, GRANITE, MARBLE, STONES } from '@/components/shared';

export default function HeroCatalog() {
  return (
    <>
      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Элитный памятник из натурального гранита" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/70" />
        </div>

        <div className="container relative z-10 pt-28 pb-20">
          <div className="max-w-3xl">
            <span className="animate-fade-in inline-block text-xs uppercase tracking-[0.35em] text-primary/90 mb-6">
              Камнеобрабатывающая мастерская
            </span>
            <h1 className="animate-fade-in text-4xl md:text-6xl lg:text-7xl font-display font-medium leading-[1.08]">
              Изготавливаем памятники, которые достойно сохраняют память о близких
            </h1>
            <p className="animate-fade-in mt-7 text-lg text-muted-foreground max-w-2xl leading-relaxed" style={{ animationDelay: '0.15s' }}>
              Индивидуальное изготовление памятников из натурального камня с доставкой и установкой.
              Бережно относимся к каждой детали и соблюдаем сроки.
            </p>

            <div className="animate-fade-in mt-9 flex flex-wrap gap-x-7 gap-y-3" style={{ animationDelay: '0.3s' }}>
              {TRUST.map((t) => (
                <span key={t} className="flex items-center gap-2 text-sm text-foreground/90">
                  <Icon name="Check" size={16} className="text-primary" />
                  {t}
                </span>
              ))}
            </div>

            <div className="animate-fade-in mt-10 flex flex-wrap gap-4" style={{ animationDelay: '0.45s' }}>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 h-12">
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary rounded-none px-8 h-12" asChild>
                <a href="#catalog">Смотреть каталог</a>
              </Button>
            </div>
          </div>

          <div className="animate-fade-in mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/40 border border-border/40" style={{ animationDelay: '0.6s' }}>
            {STATS.map((s) => (
              <div key={s.label} className="bg-background/70 backdrop-blur-sm p-7 text-center">
                <div className="font-display text-4xl md:text-5xl text-gradient-gold">{s.value}{s.suffix}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-24 md:py-32">
        <div className="container">
          <Reveal>
            <SectionTitle kicker="Каталог продукции" title="Памятники, созданные с уважением к деталям" />
          </Reveal>

          {[
            { title: 'Памятники из гранита', items: GRANITE, icon: 'Mountain' },
            { title: 'Памятники из мрамора', items: MARBLE, icon: 'Sparkles' },
          ].map((cat, ci) => (
            <div key={cat.title} className={ci === 1 ? 'mt-20' : ''}>
              <Reveal>
                <div className="flex items-center gap-3 mb-8">
                  <Icon name={cat.icon} size={26} className="text-primary" />
                  <h3 className="text-2xl md:text-3xl font-display font-medium">{cat.title}</h3>
                </div>
              </Reveal>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                {cat.items.map((item, i) => (
                  <Reveal key={item.title} delay={i * 70}>
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
        </div>
      </section>

      {/* STONE TYPES */}
      <section id="stone" className="py-24 md:py-32 bg-card/40">
        <div className="container">
          <Reveal>
            <SectionTitle kicker="Виды камня" title="Натуральный материал из лучших карьеров" />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {STONES.map((st, i) => (
              <Reveal key={st.name} delay={i * 80}>
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