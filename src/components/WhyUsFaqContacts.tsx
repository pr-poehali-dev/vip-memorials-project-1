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
import ProductionGallery from '@/components/ProductionGallery';

export default function WhyUsFaqContacts() {
  return (
    <>
      {/* WHY US */}
      <section className="relative overflow-hidden py-16 md:py-28 bg-background section-vignette">
        {/* Текстура тёмного мрамора */}
        <div className="absolute inset-0">
          <img
            src="https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/files/9733a1ec-8fec-4548-bc63-590bc0902052.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-[0.12]"
          />
          <div className="absolute inset-0 bg-background/60" />
        </div>
        {/* Золотое свечение слева */}
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, hsl(40 38% 62%), transparent 70%)' }} />

        <div className="container relative z-10">

          {/* Шапка секции */}
          <Reveal variant="up">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-10 md:mb-16">
              <div className="max-w-2xl">
                <span className="text-xs uppercase tracking-[0.35em] text-primary/80">Почему выбирают нас</span>
                <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-[1.05]">
                  Почему семьи доверяют нам
                </h2>
              </div>
              <p className="lg:max-w-sm text-sm text-muted-foreground leading-relaxed border-l-2 border-primary/40 pl-4">
                Уделяем внимание каждой детали — от выбора камня до установки готового изделия.
              </p>
            </div>
          </Reveal>

          {/* Блок: Собственное производство — на всю ширину */}
          <Reveal variant="up" className="mb-5">
            <div className="relative overflow-hidden border border-primary/30 bg-card">
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 20% 50%, hsl(40 38% 62% / 0.06), transparent 60%)' }} />

              {/* Угловые акценты */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/40 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-primary/40 pointer-events-none" />

              <div className="relative z-10 p-5 sm:p-8 md:p-10">
                {/* Шапка карточки */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-start justify-between gap-5 mb-6">
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    <div className="inline-flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 border border-primary/40 shrink-0">
                      <Icon name="Factory" size={22} className="text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-medium leading-tight">Собственное производство</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        Полный цикл — от обработки камня до установки. ЧПУ, гидроабразивная резка, лазерная гравировка. Никаких посредников.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 sm:gap-8 shrink-0">
                    <div>
                      <div className="font-display text-2xl sm:text-3xl text-gradient-gold">15+</div>
                      <div className="text-xs text-muted-foreground mt-1">лет опыта</div>
                    </div>
                    <div>
                      <div className="font-display text-2xl sm:text-3xl text-gradient-gold">1200+</div>
                      <div className="text-xs text-muted-foreground mt-1">проектов</div>
                    </div>
                  </div>
                </div>

                <div className="hairline mb-6" />

                {/* Галерея */}
                <ProductionGallery />
              </div>
            </div>
          </Reveal>

          {/* Сетка преимуществ */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ADVANTAGES.slice(1).map((a, i) => (
              <Reveal
                key={a.title}
                delay={i * 100}
                variant={i % 2 === 0 ? 'left' : 'right'}
                className={i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}
              >
                <div className="relative group h-full border border-border/60 hover:border-primary/40 bg-card transition-colors duration-500 overflow-hidden p-6">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'radial-gradient(ellipse at 80% 20%, hsl(40 38% 62% / 0.06), transparent 60%)' }} />
                  <div className="relative z-10">
                    <div className="flex items-center justify-center shrink-0 w-10 h-10 mb-5 border border-border/60 group-hover:border-primary/40 transition-colors">
                      <Icon name={a.icon} size={18} className="text-primary" />
                    </div>
                    <h3 className="font-display text-lg leading-snug">{a.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.text}</p>
                  </div>
                  <div className="absolute bottom-2 right-3 font-display text-[72px] font-bold leading-none text-foreground/[0.03] select-none pointer-events-none">
                    {String(i + 2).padStart(2, '0')}
                  </div>
                </div>
              </Reveal>
            ))}
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
      <section id="stages" className="py-16 md:py-28 bg-card/30 overflow-hidden section-vignette">
        <div className="container">
          <Reveal variant="up">
            <SectionTitle kicker="Этапы работы" title="Прозрачный процесс от заявки до монтажа" />
          </Reveal>

          {/* Таймлайн — десктоп */}
          <div className="hidden lg:block relative">
            {/* Соединительная линия */}
            <div className="absolute top-9 left-0 right-0 h-px bg-border/60 z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            </div>

            <div className="relative z-10 grid grid-cols-6 gap-0">
              {STAGES.map((s, i) => (
                <Reveal key={s.n} delay={i * 110} variant="up">
                  <div className="group flex flex-col items-center text-center px-3">
                    {/* Точка таймлайна */}
                    <div className="relative flex items-center justify-center w-[72px] h-[72px] shrink-0">
                      <div className="absolute inset-0 border border-border/60 group-hover:border-primary/60 transition-colors duration-500 rotate-45" />
                      <span className="font-display text-xl text-gradient-gold">{s.n}</span>
                    </div>
                    {/* Вертикальный коннектор */}
                    <div className="w-px h-8 bg-border/40 mt-1" />
                    {/* Контент */}
                    <div className="mt-1">
                      <h3 className="font-display text-lg leading-snug">{s.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Таймлайн — мобайл/планшет */}
          <div className="lg:hidden relative pl-10">
            {/* Вертикальная линия */}
            <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

            <div className="space-y-0">
              {STAGES.map((s, i) => (
                <Reveal key={s.n} delay={i * 90} variant="left">
                  <div className="group relative flex gap-6 pb-10 last:pb-0">
                    {/* Точка */}
                    <div className="absolute -left-10 flex items-center justify-center w-8 h-8 shrink-0 mt-1">
                      <div className="absolute inset-0 border border-border/60 group-hover:border-primary/60 transition-colors rotate-45" />
                      <span className="font-display text-xs text-primary">{s.n}</span>
                    </div>
                    {/* Контент */}
                    <div className="border border-border/60 group-hover:border-primary/30 bg-card transition-colors duration-500 p-5 w-full">
                      <h3 className="font-display text-lg">{s.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* CTA под этапами */}
          <Reveal delay={200} variant="up">
            <div className="mt-16 text-center">
              <p className="text-muted-foreground mb-5">Готовы начать? Оставьте заявку — пройдём этот путь вместе</p>
              <a href="#contacts" className="inline-flex items-center gap-2 border border-primary/60 hover:bg-primary hover:text-primary-foreground text-foreground px-8 py-3 transition-colors duration-300 font-sans text-sm">
                <Icon name="ArrowDown" size={16} />
                Получить консультацию
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-28 bg-card/40 section-fade-top">
        <div className="container max-w-3xl">
          <Reveal variant="up">
            <SectionTitle kicker="Вопрос — ответ" title="Отвечаем на частые вопросы" />
          </Reveal>
          <Accordion type="single" collapsible className="space-y-3">
            {FAQ.map((f, i) => (
              <Reveal key={i} delay={i * 60} variant="up">
                <AccordionItem value={`item-${i}`} className="border border-border/60 bg-card px-5 rounded-none">
                  <AccordionTrigger className="text-left font-sans text-base hover:text-primary hover:no-underline py-5">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              </Reveal>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-16 md:py-28 section-fade-top">
        <div className="container">
          <Reveal variant="up">
            <SectionTitle kicker="Контакты" title="Свяжитесь с нами для консультации" />
          </Reveal>
          <div className="grid lg:grid-cols-2 gap-px bg-border/40 border border-border/40">
            <Reveal variant="left" className="bg-card p-5 sm:p-8 md:p-10">
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

            <Reveal delay={150} variant="right" className="bg-card p-5 sm:p-8 md:p-10">
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
      <footer className="border-t border-border/60 bg-card/40 pb-16 lg:pb-0">
        <div className="container py-10 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            <div className="col-span-2 md:col-span-1">
              <a href="#hero" className="flex items-center">
                <img src={LOGO_URL} alt="VIP памятники" className="h-12 md:h-16 w-auto" />
              </a>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Изготовление памятников из натурального камня с доставкой и установкой под ключ.
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Навигация</h4>
              <ul className="space-y-2">
                {NAV.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="text-sm text-foreground/80 hover:text-primary transition-colors">{n.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>Телефон: —</li>
                <li>Email: —</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {SOCIALS.map((s) => (
                  <a key={s.label} href="#" aria-label={s.label} className="w-9 h-9 border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                    <Icon name={s.icon} size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Документы</h4>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li><a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Согласие на обработку данных</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Пользовательское соглашение</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-border/40 text-center text-sm text-muted-foreground">
            © 2026 VIP памятники. Все права защищены.
          </div>
        </div>
      </footer>
    </>
  );
}