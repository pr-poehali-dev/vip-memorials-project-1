import { useEffect, useRef, useState } from 'react';
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

const HERO_IMG =
  'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/files/8c734cbf-83c2-4e28-b544-b1deeaa8d7e6.jpg';

const NAV = [
  { label: 'Главная', href: '#hero' },
  { label: 'Каталог', href: '#catalog' },
  { label: 'Виды камня', href: '#stone' },
  { label: 'Этапы работы', href: '#stages' },
  { label: 'Вопрос-ответ', href: '#faq' },
  { label: 'Контакты', href: '#contacts' },
];

const TRUST = [
  'Собственное производство',
  'Натуральный камень',
  'Гарантия качества',
  'Установка под ключ',
  'Бесплатный расчёт стоимости',
];

const STATS = [
  { value: '15', suffix: ' лет', label: 'опыта работы' },
  { value: '1200', suffix: '+', label: 'реализованных проектов' },
  { value: '98', suffix: '%', label: 'соблюдение сроков' },
  { value: '10', suffix: ' лет', label: 'гарантия на изделия' },
];

const GRANITE = ['Прямые', 'Резные', 'Двойные', 'Мемориальные комплексы', 'Комбинированные'];
const MARBLE = ['Классические', 'Фигурные', 'Православные', 'Семейные', 'Мемориальные комплексы'];

const STONES = [
  { name: 'Габбро-диабаз', desc: 'Глубокий чёрный камень из Карелии.', feat: 'Не выцветает, морозостоек' },
  { name: 'Дымовский гранит', desc: 'Тёмно-серый с тонким рисунком.', feat: 'Прочный, ровный тон' },
  { name: 'Мансуровский гранит', desc: 'Светло-серый уральский камень.', feat: 'Долговечен, благородный оттенок' },
  { name: 'Коелгинский мрамор', desc: 'Белоснежный мрамор премиум-класса.', feat: 'Тёплый, мягкий блеск' },
  { name: 'Полевской мрамор', desc: 'Светлый мрамор с лёгкими прожилками.', feat: 'Изящная фактура' },
];

const ADVANTAGES = [
  { icon: 'Factory', title: 'Собственное производство', text: 'Полный цикл работ без посредников и наценок.' },
  { icon: 'Gem', title: 'Натуральный камень', text: 'Только проверенные карьеры и сертифицированный материал.' },
  { icon: 'PenTool', title: 'Индивидуальный подход', text: 'Изготовим памятник по вашему эскизу и пожеланиям.' },
  { icon: 'Clock', title: 'Соблюдение сроков', text: 'Фиксируем сроки в договоре и держим слово.' },
  { icon: 'Wrench', title: 'Профессиональный монтаж', text: 'Установка под ключ с благоустройством участка.' },
  { icon: 'ShieldCheck', title: 'Гарантия качества', text: 'Письменная гарантия на материал и работы.' },
];

const STAGES = [
  { n: '01', title: 'Консультация', text: 'Обсуждаем пожелания и отвечаем на вопросы.' },
  { n: '02', title: 'Подбор решения', text: 'Предлагаем камень, форму и оформление.' },
  { n: '03', title: 'Согласование макета', text: 'Утверждаем эскиз и гравировку.' },
  { n: '04', title: 'Изготовление', text: 'Обрабатываем камень на собственном производстве.' },
  { n: '05', title: 'Доставка', text: 'Бережно доставляем изделие на место.' },
  { n: '06', title: 'Монтаж', text: 'Устанавливаем и благоустраиваем участок.' },
];

const FAQ = [
  { q: 'Сколько времени занимает изготовление?', a: 'Срок зависит от сложности проекта и обычно составляет от 2 до 6 недель. Точные сроки мы фиксируем в договоре после согласования макета.' },
  { q: 'Можно ли сделать памятник по индивидуальному эскизу?', a: 'Да. Мы создаём изделия любой формы и сложности по вашему рисунку или совместно разрабатываем эскиз с нуля.' },
  { q: 'Какой материал выбрать?', a: 'Для долговечности и насыщенного цвета чаще выбирают гранит, для мягкой выразительности — мрамор. На консультации поможем подобрать камень под ваш бюджет и пожелания.' },
  { q: 'Входит ли установка в стоимость?', a: 'Мы предлагаем монтаж под ключ. Стоимость установки рассчитывается индивидуально и оговаривается заранее, без скрытых доплат.' },
  { q: 'Предоставляется ли гарантия?', a: 'Да, мы даём письменную гарантию на материал и выполненные работы. Условия фиксируются в договоре.' },
  { q: 'Возможна ли доставка в другие населённые пункты?', a: 'Да, мы доставляем готовые изделия в соседние города и регионы. Условия доставки уточняйте у менеджера.' },
  { q: 'Выполняете ли благоустройство участка?', a: 'Да, мы занимаемся укладкой плитки, установкой оград, цветников и комплексным благоустройством.' },
  { q: 'Как узнать стоимость памятника?', a: 'Оставьте заявку или позвоните нам — мы бесплатно рассчитаем стоимость по вашим параметрам и пожеланиям.' },
];

const SOCIALS = [
  { icon: 'MessageCircle', label: 'WhatsApp' },
  { icon: 'Send', label: 'Telegram' },
  { icon: 'MessageSquare', label: 'MAX' },
  { icon: 'Instagram', label: 'Instagram' },
  { icon: 'Youtube', label: 'YouTube' },
  { icon: 'Play', label: 'RuTube' },
  { icon: 'AtSign', label: 'ВКонтакте' },
];

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`${className} ${seen ? 'anim-in' : 'anim-hidden'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="text-center mb-14">
      <span className="text-xs uppercase tracking-[0.35em] text-primary/80">{kicker}</span>
      <h2 className="mt-4 text-3xl md:text-5xl font-display font-medium leading-tight max-w-3xl mx-auto">
        {title}
      </h2>
    </div>
  );
}

export default function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* HEADER */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-background/85 backdrop-blur-xl border-b border-border/60 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2">
            <Icon name="Gem" size={22} className="text-primary" />
            <span className="font-display text-xl tracking-wide">VIP <span className="text-primary">памятники</span></span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <a href="tel:+70000000000" className="text-sm font-medium hover:text-primary transition-colors">
              +7 (000) 000-00-00
            </a>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-5">
              Заказать звонок
            </Button>
          </div>

          <button className="lg:hidden text-foreground" onClick={() => setMenuOpen((v) => !v)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/60 mt-3">
            <nav className="container flex flex-col py-4">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="py-3 text-muted-foreground hover:text-primary border-b border-border/40">
                  {n.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

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

          <div className="grid lg:grid-cols-2 gap-px bg-border/40 border border-border/40">
            {[
              { title: 'Памятники из гранита', items: GRANITE, icon: 'Mountain' },
              { title: 'Памятники из мрамора', items: MARBLE, icon: 'Sparkles' },
            ].map((cat, i) => (
              <Reveal key={cat.title} delay={i * 120} className="bg-card p-8 md:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <Icon name={cat.icon} size={26} className="text-primary" />
                  <h3 className="text-2xl md:text-3xl font-display font-medium">{cat.title}</h3>
                </div>
                <ul className="space-y-px">
                  {cat.items.map((item) => (
                    <li key={item} className="group flex items-center justify-between py-4 border-b border-border/50">
                      <span className="text-foreground/90 group-hover:text-primary transition-colors">{item}</span>
                      <button className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                        Узнать стоимость
                        <Icon name="ArrowRight" size={15} />
                      </button>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
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
                  <div className="aspect-[4/3] overflow-hidden bg-secondary flex items-center justify-center">
                    <Icon name="Gem" size={40} className="text-muted-foreground/40 group-hover:text-primary/60 transition-colors" />
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

      {/* MOBILE ACTION BAR */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 grid grid-cols-3 bg-background/90 backdrop-blur-xl border-t border-border/60">
        {[
          { icon: 'Phone', label: 'Позвонить', href: 'tel:+70000000000' },
          { icon: 'MessageCircle', label: 'WhatsApp', href: '#' },
          { icon: 'Send', label: 'Telegram', href: '#' },
        ].map((a) => (
          <a key={a.label} href={a.href} className="flex flex-col items-center justify-center gap-1 py-3 text-muted-foreground hover:text-primary border-r border-border/40 last:border-0 transition-colors">
            <Icon name={a.icon} size={20} />
            <span className="text-[11px]">{a.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
