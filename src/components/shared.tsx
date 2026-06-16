import { useEffect, useRef, useState } from 'react';

export const HERO_IMG =
  'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/files/8c734cbf-83c2-4e28-b544-b1deeaa8d7e6.jpg';

export const NAV = [
  { label: 'Главная', href: '#hero' },
  { label: 'Каталог', href: '#catalog' },
  { label: 'Виды камня', href: '#stone' },
  { label: 'Этапы работы', href: '#stages' },
  { label: 'Вопрос-ответ', href: '#faq' },
  { label: 'Контакты', href: '#contacts' },
];

export const TRUST = [
  'Собственное производство',
  'Натуральный камень',
  'Гарантия качества',
  'Установка под ключ',
  'Бесплатный расчёт стоимости',
];

export const STATS = [
  { value: '15', suffix: ' лет', label: 'опыта работы' },
  { value: '1200', suffix: '+', label: 'реализованных проектов' },
  { value: '98', suffix: '%', label: 'соблюдение сроков' },
  { value: '10', suffix: ' лет', label: 'гарантия на изделия' },
];

export const GRANITE = [
  { title: 'Прямые', desc: 'Лаконичная вертикальная форма из чёрного гранита.', price: 'от 18 000 ₽', img: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/files/4c279ef4-499e-44b7-bbb7-174cea7f9ed5.jpg' },
  { title: 'Резные', desc: 'Художественная резьба и объёмные орнаменты.', price: 'от 32 000 ₽', img: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/files/b364e454-01cf-47ee-8e65-97457f8bcd7d.jpg' },
  { title: 'Двойные', desc: 'Памятник на двоих с общей композицией.', price: 'от 45 000 ₽', img: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/files/da49c1db-4873-469c-9f96-1a0fb5bb7269.jpg' },
  { title: 'Мемориальные комплексы', desc: 'Памятник, плитка, ограда и благоустройство.', price: 'от 90 000 ₽', img: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/files/1af36c38-a321-491a-a8e6-2f0c83b9e6d7.jpg' },
  { title: 'Комбинированные', desc: 'Сочетание гранита и мрамора в одном изделии.', price: 'от 38 000 ₽', img: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/files/3a7ab861-9a94-4f76-953a-af842764c930.jpg' },
];

export const MARBLE = [
  { title: 'Классические', desc: 'Строгая форма из белоснежного мрамора.', price: 'от 20 000 ₽', img: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/files/4b2fc908-8949-42ed-ab06-1ac086abcf43.jpg' },
  { title: 'Фигурные', desc: 'Плавные изгибы и индивидуальная форма.', price: 'от 36 000 ₽', img: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/files/7088d931-9e5f-4a76-b167-fe6a5bdf16b7.jpg' },
  { title: 'Православные', desc: 'С резным крестом и религиозной символикой.', price: 'от 34 000 ₽', img: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/files/5cc2500b-8d21-40ab-aec3-04e2b59d241e.jpg' },
  { title: 'Семейные', desc: 'Просторная композиция для нескольких имён.', price: 'от 52 000 ₽', img: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/files/fe3ba14e-39c6-4c88-9b82-126a52467a43.jpg' },
  { title: 'Мемориальные комплексы', desc: 'Полное благоустройство участка в мраморе.', price: 'от 95 000 ₽', img: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/files/ca7f74fe-37f4-4062-b427-729d08577cd1.jpg' },
];

export const STONES = [
  { name: 'Габбро-диабаз', desc: 'Глубокий чёрный камень из Карелии.', feat: 'Не выцветает, морозостоек' },
  { name: 'Дымовский гранит', desc: 'Тёмно-серый с тонким рисунком.', feat: 'Прочный, ровный тон' },
  { name: 'Мансуровский гранит', desc: 'Светло-серый уральский камень.', feat: 'Долговечен, благородный оттенок' },
  { name: 'Коелгинский мрамор', desc: 'Белоснежный мрамор премиум-класса.', feat: 'Тёплый, мягкий блеск' },
  { name: 'Полевской мрамор', desc: 'Светлый мрамор с лёгкими прожилками.', feat: 'Изящная фактура' },
];

export const ADVANTAGES = [
  { icon: 'Factory', title: 'Собственное производство', text: 'Полный цикл работ без посредников и наценок.' },
  { icon: 'Gem', title: 'Натуральный камень', text: 'Только проверенные карьеры и сертифицированный материал.' },
  { icon: 'PenTool', title: 'Индивидуальный подход', text: 'Изготовим памятник по вашему эскизу и пожеланиям.' },
  { icon: 'Clock', title: 'Соблюдение сроков', text: 'Фиксируем сроки в договоре и держим слово.' },
  { icon: 'Wrench', title: 'Профессиональный монтаж', text: 'Установка под ключ с благоустройством участка.' },
  { icon: 'ShieldCheck', title: 'Гарантия качества', text: 'Письменная гарантия на материал и работы.' },
];

export const STAGES = [
  { n: '01', title: 'Консультация', text: 'Обсуждаем пожелания и отвечаем на вопросы.' },
  { n: '02', title: 'Подбор решения', text: 'Предлагаем камень, форму и оформление.' },
  { n: '03', title: 'Согласование макета', text: 'Утверждаем эскиз и гравировку.' },
  { n: '04', title: 'Изготовление', text: 'Обрабатываем камень на собственном производстве.' },
  { n: '05', title: 'Доставка', text: 'Бережно доставляем изделие на место.' },
  { n: '06', title: 'Монтаж', text: 'Устанавливаем и благоустраиваем участок.' },
];

export const FAQ = [
  { q: 'Сколько времени занимает изготовление?', a: 'Срок зависит от сложности проекта и обычно составляет от 2 до 6 недель. Точные сроки мы фиксируем в договоре после согласования макета.' },
  { q: 'Можно ли сделать памятник по индивидуальному эскизу?', a: 'Да. Мы создаём изделия любой формы и сложности по вашему рисунку или совместно разрабатываем эскиз с нуля.' },
  { q: 'Какой материал выбрать?', a: 'Для долговечности и насыщенного цвета чаще выбирают гранит, для мягкой выразительности — мрамор. На консультации поможем подобрать камень под ваш бюджет и пожелания.' },
  { q: 'Входит ли установка в стоимость?', a: 'Мы предлагаем монтаж под ключ. Стоимость установки рассчитывается индивидуально и оговаривается заранее, без скрытых доплат.' },
  { q: 'Предоставляется ли гарантия?', a: 'Да, мы даём письменную гарантию на материал и выполненные работы. Условия фиксируются в договоре.' },
  { q: 'Возможна ли доставка в другие населённые пункты?', a: 'Да, мы доставляем готовые изделия в соседние города и регионы. Условия доставки уточняйте у менеджера.' },
  { q: 'Выполняете ли благоустройство участка?', a: 'Да, мы занимаемся укладкой плитки, установкой оград, цветников и комплексным благоустройством.' },
  { q: 'Как узнать стоимость памятника?', a: 'Оставьте заявку или позвоните нам — мы бесплатно рассчитаем стоимость по вашим параметрам и пожеланиям.' },
];

export const SOCIALS = [
  { icon: 'MessageCircle', label: 'WhatsApp' },
  { icon: 'Send', label: 'Telegram' },
  { icon: 'MessageSquare', label: 'MAX' },
  { icon: 'Instagram', label: 'Instagram' },
  { icon: 'Youtube', label: 'YouTube' },
  { icon: 'Play', label: 'RuTube' },
  { icon: 'AtSign', label: 'ВКонтакте' },
];

export function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
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

export function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="text-center mb-14">
      <span className="text-xs uppercase tracking-[0.35em] text-primary/80">{kicker}</span>
      <h2 className="mt-4 text-3xl md:text-5xl font-display font-medium leading-tight max-w-3xl mx-auto">
        {title}
      </h2>
    </div>
  );
}
