import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ConsultModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ConsultModal({ open, onClose }: ConsultModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md border border-border/60 bg-card overflow-hidden animate-fade-in">

        {/* Декоративные углы */}
        <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-primary/60 pointer-events-none" />
        <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-primary/60 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-primary/60 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-primary/60 pointer-events-none" />

        {/* Золотое свечение */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, hsl(40 38% 62%), transparent 70%)' }}
        />

        <div className="relative p-8 md:p-10">
          {/* Закрыть */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-muted-foreground hover:text-primary transition-colors"
          >
            <Icon name="X" size={20} />
          </button>

          {/* Шапка */}
          <div className="mb-8">
            <span className="text-xs uppercase tracking-[0.35em] text-primary/80">Бесплатно</span>
            <h2 className="mt-3 text-3xl font-display font-medium leading-tight">
              Заказать звонок
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Перезвоним в течение 15 минут и ответим на все вопросы.
            </p>
          </div>

          {/* Разделитель */}
          <div className="hairline mb-8" />

          {/* Форма */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-background border-border/60 hover:border-primary/40 focus:border-primary rounded-none h-12 transition-colors"
              />
            </div>
            <div>
              <Input
                placeholder="Номер телефона"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-background border-border/60 hover:border-primary/40 focus:border-primary rounded-none h-12 transition-colors"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-12 mt-2"
            >
              Заказать звонок
            </Button>

            <p className="text-xs text-muted-foreground text-center leading-relaxed">
              Нажимая кнопку, вы соглашаетесь с{' '}
              <a href="#" className="underline underline-offset-2 hover:text-primary transition-colors">
                политикой конфиденциальности
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
