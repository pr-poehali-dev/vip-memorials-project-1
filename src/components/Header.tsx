import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { NAV, LOGO_URL, PHONE_DISPLAY, PHONE_TEL, DOCS } from '@/components/shared';

interface HeaderProps {
  scrolled: boolean;
}

export default function Header({ scrolled }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

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
            <a href={PHONE_TEL} className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">
              {PHONE_DISPLAY}
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
      </header>

      {/* MOBILE FULLSCREEN MENU */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-[100] bg-background flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border/60 shrink-0">
            <a href="#hero" onClick={() => setMenuOpen(false)} className="flex items-center">
              <img src={LOGO_URL} alt="VIP памятники" className="h-9 w-auto" />
            </a>
            <button onClick={() => setMenuOpen(false)} aria-label="Закрыть меню" className="text-foreground p-1">
              <Icon name="X" size={26} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto pb-24">
            <nav className="container flex flex-col">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-4 text-base text-foreground hover:text-primary border-b border-border/40 transition-colors"
                >
                  {n.label}
                </a>
              ))}

              <a
                href={PHONE_TEL}
                className="flex items-center gap-2 text-base font-medium text-foreground py-5 border-b border-border/40"
              >
                <Icon name="Phone" size={17} className="text-primary" />
                {PHONE_DISPLAY}
              </a>

              <div className="py-6">
                <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Документы</h4>
                <ul className="space-y-3">
                  {DOCS.map((d) => (
                    <li key={d.label}>
                      <a href={d.href} onClick={() => setMenuOpen(false)} className="text-sm text-foreground/80 hover:text-primary transition-colors">
                        {d.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            <div className="container pb-8 pt-2 text-center text-xs text-muted-foreground border-t border-border/40">
              © {new Date().getFullYear()} VIP памятники. Все права защищены.
            </div>
          </div>
        </div>
      )}

      {/* MOBILE ACTION BAR */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 grid grid-cols-3 bg-background/95 backdrop-blur-xl border-t border-border/60 safe-bottom">
        {[
          { icon: 'Phone', label: 'Позвонить', href: PHONE_TEL },
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