import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { NAV } from '@/components/shared';

interface HeaderProps {
  scrolled: boolean;
}

export default function Header({ scrolled }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
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
    </>
  );
}
