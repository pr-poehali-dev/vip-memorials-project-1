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
import { Reveal, SectionTitle, HERO_IMG, ADVANTAGES, STAGES, FAQ, NAV, SOCIALS } from '@/components/shared';

export default function WhyUsFaqContacts() {
  return (
    <>
      {/* WHY US */}
      <section className="relative py-28 md:py-36">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Ручная обработка камня" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="container relative z-10">
          <Reveal>
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-[0.35em] text-primary/80">Почему выбирают нас</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-display font-medium leading-tight">
                Почему семьи доверяют нам изготовление памятников
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Мы понимаем, насколько важно сохранить память о близких достойно. Поэтому уделяем
                внимание каждой детали — от выбора камня до установки готового изделия.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40 border border-border/40">
            {ADVANTAGES.map((a, i) => (
              <Reveal key={a.title} delay={i * 70} className="bg-background/80 backdrop-blur-sm p-8">
                <Icon name={a.icon} size={28} className="text-primary" />
                <h3 className="mt-5 text-xl font-display">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.text}</p>
              </Reveal>
            ))}
          </div>
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
              <a href="#hero" className="flex items-center gap-2">
                <Icon name="Gem" size={20} className="text-primary" />
                <span className="font-display text-lg">VIP <span className="text-primary">памятники</span></span>
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
