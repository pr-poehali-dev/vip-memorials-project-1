import { useEffect, useRef, useState } from 'react';

export const HERO_IMG =
  'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/files/8c734cbf-83c2-4e28-b544-b1deeaa8d7e6.jpg';

export const LOGO_URL = '/vip-logo.png';

export const NAV = [
  { label: 'Главная', href: '#hero' },
  { label: 'Каталог', href: '#catalog' },
  { label: 'Мемориальные комплексы', href: '#memorial' },
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
  { title: 'Резной с крестом', desc: 'Ажурный крест и цветной портрет на чёрном граните.', price: 'от 55 000 ₽', img: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/bucket/0b3355c8-b32d-49f2-beb1-8c8291ac26c8.jpg' },
  { title: 'Резной с цветком', desc: 'Форма цветка с фигурной резьбой и портретом.', price: 'от 47 000 ₽', img: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/bucket/a12bd9f8-ac95-49e0-8f7a-85b8a3652d67.jpg' },
  { title: 'Ажурная резьба', desc: 'Кружевной орнамент и резной крест ручной работы.', price: 'от 89 000 ₽', img: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/bucket/1f4358c8-85d3-4084-9e89-5b529203fa6e.png' },
  { title: 'С цветником', desc: 'Горизонтальная стела с крестами и местом под цветник.', price: 'от 61 000 ₽', img: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/bucket/3ba9f7e6-1bfe-4d01-92ca-991184109cef.png' },
  { title: 'Классический с гравировкой', desc: 'Строгая форма с гравировкой креста и облицовкой.', price: 'от 52 000 ₽', img: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/bucket/295d175c-19f1-472c-b382-94ecce7edc7b.png' },
];

export const COMBINED = [
  { title: 'Комбинированный воинский', desc: 'Чёрный и серый гранит, цветной портрет, кресты и памятная лента.', price: 'от 430 000 ₽', img: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/bucket/d7bffaea-3c64-4684-9c22-3b691238a960.jpg' },
  { title: 'Комбинированный фигурный', desc: 'Плавные изогнутые формы из чёрного и коричневого гранита.', price: 'от 330 000 ₽', img: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/bucket/e0c14181-d710-491f-b014-7e5657f3dc7e.jpg' },
  { title: 'Комбинированный строгий', desc: 'Сочетание светлого и чёрного гранита в лаконичной форме.', price: 'от 240 000 ₽', img: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/bucket/7c28dcbb-465f-4116-94f9-b11bea652701.jpg' },
  { title: 'Комбинированный с портретом', desc: 'Бордовый гранит с цветным портретом и светлой стелой.', price: 'от 250 000 ₽', img: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/bucket/b47bbbdb-bee5-4984-94fc-51581f3faa1d.jpg' },
  { title: 'Комбинированный двойной', desc: 'Памятник на двоих с навесом, крестом и раздельными плитами.', price: 'от 380 000 ₽', img: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/bucket/d6abe209-8fb8-45fd-b81a-73598e83735e.jpg' },
];

export const MARBLE = [
  { title: 'С крестом и портретом', desc: 'Фигурная стела из серого мрамора с гравировкой креста.', price: 'от 27 000 ₽', img: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/bucket/a3397b38-c19f-4e42-953a-eaf4df24a98e.jpg' },
  { title: 'С розами', desc: 'Резной орнамент из роз вокруг портрета и креста.', price: 'от 33 000 ₽', img: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/bucket/b23cb71d-81e5-411e-8462-c8a1409f0b44.jpg' },
  { title: 'Двойной парный', desc: 'Памятник на двоих фигурной формы с двумя портретами.', price: 'от 48 000 ₽', img: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/bucket/fbdebdca-f29f-494d-a5e1-1d9f87e7f96f.jpg' },
  { title: 'Классический вертикальный', desc: 'Строгая прямая стела из серого мрамора с портретом.', price: 'от 21 000 ₽', img: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/bucket/9e1defb5-eb69-49db-95ef-747b439b45cd.jpg' },
  { title: 'С растительным орнаментом', desc: 'Фигурная стела с резными веточками и крестом.', price: 'от 26 000 ₽', img: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/bucket/20bfe733-48f4-4b4f-a04d-b6c3e5aea812.jpg' },
];

export const MILITARY = [
  { title: 'С бронзовой скульптурой', desc: 'Полноростовая бронзовая фигура воина на гранитном постаменте.', price: 'от 350 000 ₽', img: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/bucket/3f3df90d-57bc-4bfb-a3bc-12ddb8ae6f8f.png' },
  { title: 'С десантной символикой', desc: 'Памятник с цветным портретом и символикой ВДВ.', price: 'от 95 000 ₽', img: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/bucket/27f8766b-581c-4914-bf5f-d3631a8f627a.png' },
  { title: 'С солдатской скульптурой', desc: 'Бронзовая фигура солдата рядом с вертикальным памятником.', price: 'от 280 000 ₽', img: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/bucket/9c77ef79-1139-4510-aa0c-19de0f250117.png' },
  { title: 'С цветным портретом', desc: 'Высокий гранитный памятник с цветной фотографией в полный рост.', price: 'от 75 000 ₽', img: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/bucket/214cd763-d222-4a31-abfc-da84b872abc9.png' },
  { title: 'С портретом и гравировкой', desc: 'Лаконичный вертикальный памятник с цветным портретом во весь рост.', price: 'от 65 000 ₽', img: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/bucket/2a971389-2b9b-411a-97ba-2c7d3af909f7.png' },
];

export const MEMORIAL_COMPLEX = [
  { title: 'Арочный портал', desc: 'Массивная арка на колоннах с полированной стелой в центре.', price: 'от 380 000 ₽', img: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/bucket/9a9488cf-6bdf-42dc-b784-6dffc301d7a2.png' },
  { title: 'Колонный портал с балюстрадой', desc: 'Изогнутый купол на колоннах с балюстрадой и лампадами.', price: '520 000 ₽', img: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/bucket/ca07d703-96ce-4878-bb7a-b08c37e91556.png' },
  { title: 'Беседка-портик', desc: 'Изящный портик с колоннами и шарами-навершиями на постаментах.', price: 'от 840 000 ₽', img: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/bucket/19e1efa0-cd73-4276-b37b-911edf1185d4.png' },
  { title: 'Семейный комплекс с оградой', desc: 'Общий комплекс из чёрного гранита с двумя местами и золотыми вставками.', price: 'от 560 000 ₽', img: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/bucket/56f852a3-4f36-4ec1-849c-7d9ed3cbcf01.png' },
  { title: 'Портал с рифлёными колоннами', desc: 'Арочный портал с рифлёными колоннами и резными вставками.', price: 'от 480 000 ₽', img: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/bucket/dca76023-ac11-4d8f-8e09-2305b9ec5073.png' },
];

export const STONES = [
  { name: 'Мансуровский', desc: 'Светло-серый гранит с мелким зерном.', feat: 'Долговечен, благородный оттенок', img: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/bucket/3c9fe458-da83-4834-bdfe-694fee9f5f59.png' },
  { name: 'Балтик Грин', desc: 'Тёмно-зелёный гранит с крупным рисунком.', feat: 'Прочный, редкий оттенок', img: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/bucket/d1f4914c-1584-4322-ab96-cc882967f9db.png' },
  { name: 'Цветок Урала', desc: 'Светло-серый гранит с равномерной структурой.', feat: 'Морозостоек, не выцветает', img: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/bucket/23c6d1be-6b67-4dc7-a3c0-b100f2ab751e.png' },
  { name: 'Дымовский', desc: 'Тёмный гранит с коричневыми вкраплениями.', feat: 'Прочный, ровный тон', img: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/bucket/7032ded3-9ed7-4195-bb68-f493db888c51.png' },
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

type RevealVariant = 'up' | 'left' | 'right' | 'scale';

export function Reveal({
  children,
  className = '',
  delay = 0,
  variant = 'up',
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
}) {
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
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const hiddenStyle: React.CSSProperties = seen
    ? {}
    : {
        opacity: 0,
        transform:
          variant === 'up' ? 'translateY(36px)' :
          variant === 'left' ? 'translateX(-32px)' :
          variant === 'right' ? 'translateX(32px)' :
          'scale(0.94)',
      };

  const visibleStyle: React.CSSProperties = seen
    ? {
        opacity: 1,
        transform: 'none',
        transition: `opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.75s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      }
    : {
        transition: 'none',
      };

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...hiddenStyle, ...visibleStyle }}
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