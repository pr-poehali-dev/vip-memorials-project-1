import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { NAV, LOGO_URL } from '@/components/shared';

interface HeaderProps {
  scrolled: boolean;
}

export default function Header({ scrolled }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-background/90 backdrop-blur-xl border-b border-border/60 py-2 md:py-3' : 'bg-transparent py-3 md:py-5'
        }`}
      >
        <div className="container flex items-center justify-between gap-4">
          <a href="#hero" className="flex items-center shrink-0">
            <img src={LOGO_URL} alt="VIP памятники" className="h-9 md:h-12 w-auto" />
          </a>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide whitespace-nowrap">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4 xl:gap-5 shrink-0">
            <a href="tel:+70000000000" className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">
              +7 (000) 000-00-00
            </a>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-4 xl:px-5 text-sm">
              Заказать звонок
            </Button>
          </div>

          <button
            className="lg:hidden text-foreground p-1 -mr-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Меню"
          >
            <Icon name={menuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-border/60">
            <nav className="container flex flex-col">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3.5 text-sm text-muted-foreground hover:text-primary border-b border-border/40 transition-colors"
                >
                  {n.label}
                </a>
              ))}
              <div className="py-4 flex flex-col gap-3">
                <a href="tel:+70000000000" className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Icon name="Phone" size={16} className="text-primary" />
                  +7 (000) 000-00-00
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* MOBILE ACTION BAR */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 grid grid-cols-3 bg-background/95 backdrop-blur-xl border-t border-border/60 safe-bottom">
        {[
          { icon: 'Phone', label: 'Позвонить', href: 'tel:+70000000000' },
          { icon: 'MessageCircle', label: 'WhatsApp', href: '#' },
          { icon: 'Send', label: 'Telegram', href: '#' },
        ].map((a) => (
          <a
            key={a.label}
            href={a.href}
            className="flex flex-col items-center justify-center gap-1 py-2.5 text-muted-foreground hover:text-primary border-r border-border/40 last:border-0 transition-colors"
          >
            <Icon name={a.icon} size={18} />
            <span className="text-[10px]">{a.label}</span>
          </a>
        ))}
      </div>
    </>
  );
}
