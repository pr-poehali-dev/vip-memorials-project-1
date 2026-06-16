import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Reveal, SectionTitle, HERO_IMG, ADVANTAGES, STAGES, FAQ, NAV, SOCIALS, LOGO_URL } from '@/components/shared';

export default function WhyUsFaqContacts() {
  return (
    <>
      {/* WHY US */}
      <section className="relative overflow-hidden py-28 md:py-36 bg-background">
        {/* Декоративная сетка */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(hsl(40 38% 62%) 1px, transparent 1px), linear-gradient(90deg, hsl(40 38% 62%) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        {/* Золотое свечение слева */}
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, hsl(40 38% 62%), transparent 70%)' }} />

        <div className="container relative z-10">

          {/* Шапка секции */}
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
              <div className="max-w-2xl">
                <span className="text-xs uppercase tracking-[0.35em] text-primary/80">Почему выбирают нас</span>
                <h2 className="mt-4 text-4xl md:text-6xl font-display font-medium leading-[1.05]">
                  Почему семьи<br className="hidden md:block" /> доверяют нам
                </h2>
              </div>
              <p className="lg:max-w-sm text-muted-foreground leading-relaxed border-l-2 border-primary/40 pl-5">
                Мы понимаем, насколько важно сохранить память о близких достойно. Поэтому уделяем внимание каждой детали — от выбора камня до установки готового изделия.
              </p>
            </div>
          </Reveal>

          {/* Главный блок: крупное преимущество + сетка */}
          <div className="grid lg:grid-cols-5 gap-5">

            {/* Левая большая карточка */}
            <Reveal className="lg:col-span-2">
              <div className="relative h-full min-h-[320px] overflow-hidden border border-primary/30 bg-card group">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: 'radial-gradient(ellipse at 30% 50%, hsl(40 38% 62% / 0.08), transparent 70%)' }} />
                <div className="relative z-10 p-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center justify-center w-14 h-14 border border-primary/40 mb-8">
                      <Icon name="Factory" size={28} className="text-primary" />
                    </div>
                    <h3 className="text-3xl font-display font-medium leading-tight">Собственное<br />производство</h3>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      Полный цикл — от обработки камня до установки. Никаких посредников, наценок и потери в качестве.
                    </p>
                  </div>
                  <div className="mt-10 pt-6 border-t border-border/60">
                    <div className="flex gap-8">
                      <div>
                        <div className="font-display text-3xl text-gradient-gold">15+</div>
                        <div className="text-xs text-muted-foreground mt-1">лет опыта</div>
                      </div>
                      <div>
                        <div className="font-display text-3xl text-gradient-gold">1200+</div>
                        <div className="text-xs text-muted-foreground mt-1">проектов</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Угловой акцент */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/40" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-primary/40" />
              </div>
            </Reveal>

            {/* Правая сетка 2x2 + 1 широкая */}
            <div className="lg:col-span-3 grid grid-cols-2 gap-5">
              {ADVANTAGES.slice(1).map((a, i) => (
                <Reveal
                  key={a.title}
                  delay={i * 80}
                  className={i === 4 ? 'col-span-2' : ''}
                >
                  <div className={`relative group h-full border border-border/60 hover:border-primary/40 bg-card transition-colors duration-500 overflow-hidden ${i === 4 ? 'flex items-center gap-8 p-7' : 'p-6'}`}>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: 'radial-gradient(ellipse at 80% 20%, hsl(40 38% 62% / 0.06), transparent 60%)' }} />
                    <div className={`relative z-10 ${i === 4 ? 'flex items-center gap-8 w-full' : ''}`}>
                      <div className={`flex items-center justify-center shrink-0 border border-border/60 group-hover:border-primary/40 transition-colors ${i === 4 ? 'w-12 h-12' : 'w-10 h-10 mb-5'}`}>
                        <Icon name={a.icon} size={i === 4 ? 22 : 18} className="text-primary" />
                      </div>
                      <div>
                        <h3 className={`font-display ${i === 4 ? 'text-xl' : 'text-lg'} leading-snug`}>{a.title}</h3>
                        <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{a.text}</p>
                      </div>
                    </div>
                    {/* Номер-декор */}
                    <div className={`absolute font-display text-[80px] font-bold leading-none text-foreground/[0.03] select-none pointer-events-none ${i === 4 ? 'right-6 top-1/2 -translate-y-1/2' : 'bottom-2 right-3'}`}>
                      {String(i + 2).padStart(2, '0')}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Нижняя полоса с гарантией */}
          <Reveal delay={200}>
            <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-5 border border-primary/25 bg-card/60 px-8 py-5">
              <div className="flex items-center gap-4">
                <Icon name="ShieldCheck" size={28} className="text-primary shrink-0" />
                <div>
                  <div className="font-display text-lg">Письменная гарантия на всё</div>
                  <div className="text-sm text-muted-foreground">Фиксируем условия в договоре — несём ответственность за каждый этап.</div>
                </div>
              </div>
              <div className="shrink-0 flex items-center gap-6">
                <div className="text-center">
                  <div className="font-display text-3xl text-gradient-gold">98%</div>
                  <div className="text-xs text-muted-foreground mt-0.5">соблюдение сроков</div>
                </div>
                <div className="w-px h-10 bg-border/60" />
                <div className="text-center">
                  <div className="font-display text-3xl text-gradient-gold">10 лет</div>
                  <div className="text-xs text-muted-foreground mt-0.5">гарантия на изделие</div>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* STAGES */}
      <section id="stages" className="py-24 md:py-32">
        <div className="container">
          <Reveal>
            <SectionTitle kicker="Этапы работы" title="Прозрачный процесс от заявки до монтажа" />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40 border border-border/40">
            {STAGES.map((s, i) => (
              <Reveal key={s.n} delay={i * 70} className="bg-card p-8 group hover:bg-secondary/60 transition-colors duration-500">
                <span className="font-display text-5xl text-primary/30 group-hover:text-primary/70 transition-colors">{s.n}</span>
                <h3 className="mt-4 text-xl font-display">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 md:py-32 bg-card/40">
        <div className="container max-w-3xl">
          <Reveal>
            <SectionTitle kicker="Вопрос — ответ" title="Отвечаем на частые вопросы" />
          </Reveal>
          <Reveal>
            <Accordion type="single" collapsible className="space-y-3">
              {FAQ.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border border-border/60 bg-card px-5 rounded-none">
                  <AccordionTrigger className="text-left font-sans text-base hover:text-primary hover:no-underline py-5">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 md:py-32">
        <div className="container">
          <Reveal>
            <SectionTitle kicker="Контакты" title="Свяжитесь с нами для консультации" />
          </Reveal>
          <div className="grid lg:grid-cols-2 gap-px bg-border/40 border border-border/40">
            <Reveal className="bg-card p-8 md:p-10">
              <div className="space-y-7">
                {[
                  { icon: 'MapPin', label: 'Адрес', value: '—' },
                  { icon: 'Phone', label: 'Телефон', value: '—' },
                  { icon: 'Mail', label: 'Email', value: '—' },
                  { icon: 'Clock', label: 'Режим работы', value: '—' },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-11 h-11 shrink-0 border border-border/60 flex items-center justify-center">
                      <Icon name={c.icon} size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                      <div className="mt-1 text-foreground">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 aspect-[16/10] bg-secondary border border-border/60 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <Icon name="Map" size={32} className="mx-auto opacity-50" />
                  <p className="mt-2 text-sm">Интерактивная карта</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="bg-card p-8 md:p-10">
              <h3 className="text-2xl font-display mb-6">Получить консультацию</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <Input placeholder="Имя" className="bg-secondary border-border/60 rounded-none h-12" />
                <Input placeholder="Телефон" className="bg-secondary border-border/60 rounded-none h-12" />
                <Textarea placeholder="Комментарий" className="bg-secondary border-border/60 rounded-none min-h-28" />
                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-12">
                  Получить консультацию
                </Button>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Нажимая на кнопку, вы соглашаетесь с обработкой персональных данных.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60 bg-card/40">
        <div className="container py-16">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <a href="#hero" className="flex items-center">
                <img src={LOGO_URL} alt="VIP памятники" className="h-16 w-auto" />
              </a>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Изготовление памятников из натурального камня с доставкой и установкой под ключ.
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Навигация</h4>
              <ul className="space-y-2.5">
                {NAV.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="text-sm text-foreground/80 hover:text-primary transition-colors">{n.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Контакты</h4>
              <ul className="space-y-2.5 text-sm text-foreground/80">
                <li>Телефон: —</li>
                <li>Email: —</li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {SOCIALS.map((s) => (
                  <a key={s.label} href="#" aria-label={s.label} className="w-9 h-9 border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                    <Icon name={s.icon} size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Документы</h4>
              <ul className="space-y-2.5 text-sm text-foreground/80">
                <li><a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Согласие на обработку данных</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Пользовательское соглашение</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-border/40 text-center text-sm text-muted-foreground">
            © 2026 VIP памятники. Все права защищены.
          </div>
        </div>
      </footer>
    </>
  );
}