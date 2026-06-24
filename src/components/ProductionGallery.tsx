import { useEffect, useRef, useState, useCallback } from 'react';
import Icon from '@/components/ui/icon';

const PHOTOS = [
  {
    url: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/bucket/14ed68cd-0cc5-4c37-a154-db914bb38b64.jpg',
    caption: 'Цех гидроабразивной резки камня',
  },
  {
    url: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/bucket/5eb47436-e0d3-44a4-b20d-474eed424abd.jpg',
    caption: 'Склад готовой продукции на территории',
  },
  {
    url: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/bucket/7483d251-1ec3-4d04-9438-4d15fbb9d890.jpg',
    caption: 'Открытый склад заготовок из натурального камня',
  },
  {
    url: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/bucket/7be2bebb-188e-4aca-937a-135ea6fb1a6f.jpg',
    caption: 'Цех лазерной гравировки',
  },
  {
    url: 'https://cdn.poehali.dev/projects/c1825239-e0ac-4fcb-8c28-51248b561aa8/bucket/4f513460-1aa6-4c34-a940-6cdc4d5e04df.jpg',
    caption: 'Производственный цех с мостовым краном',
  },
];

export default function ProductionGallery() {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const overlayRef = useRef<HTMLDivElement>(null);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + PHOTOS.length) % PHOTOS.length), []);
  const next = useCallback(() => setCurrent((c) => (c + 1) % PHOTOS.length), []);

  const prevLb = useCallback(() => setLightbox((c) => c !== null ? (c - 1 + PHOTOS.length) % PHOTOS.length : null), []);
  const nextLb = useCallback(() => setLightbox((c) => c !== null ? (c + 1) % PHOTOS.length : null), []);

  // Keyboard navigation
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowLeft') prevLb();
      if (e.key === 'ArrowRight') nextLb();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, prevLb, nextLb]);

  // Touch / swipe for main slider
  const onTouchStart = (e: React.TouchEvent) => { startX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dx) > 40) { if (dx < 0) { next(); } else { prev(); } }
  };

  // Mouse drag for main slider
  const onMouseDown = (e: React.MouseEvent) => { startX.current = e.clientX; setDragging(true); };
  const onMouseUp = (e: React.MouseEvent) => {
    if (!dragging) return;
    setDragging(false);
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 40) { if (dx < 0) { next(); } else { prev(); } }
  };

  return (
    <>
      {/* ── SLIDER ── */}
      <div className="mt-6 select-none">
        {/* Main image */}
        <div
          className="relative aspect-[16/10] overflow-hidden border border-border/40 cursor-pointer group"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onClick={() => setLightbox(current)}
        >
          {PHOTOS.map((p, i) => (
            <img
              key={p.url}
              src={p.url}
              alt={p.caption}
              draggable={false}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${i === current ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/70 backdrop-blur-sm border border-border/60 px-4 py-2 flex items-center gap-2 text-sm text-foreground">
              <Icon name="ZoomIn" size={16} className="text-primary" />
              Открыть
            </div>
          </div>

          {/* Arrow buttons */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-background/70 backdrop-blur-sm border border-border/60 flex items-center justify-center hover:border-primary/60 hover:text-primary transition-colors z-10"
          >
            <Icon name="ChevronLeft" size={18} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-background/70 backdrop-blur-sm border border-border/60 flex items-center justify-center hover:border-primary/60 hover:text-primary transition-colors z-10"
          >
            <Icon name="ChevronRight" size={18} />
          </button>

          {/* Counter */}
          <div className="absolute bottom-3 right-3 bg-background/70 backdrop-blur-sm border border-border/40 px-3 py-1 text-xs text-muted-foreground font-mono z-10">
            {current + 1} / {PHOTOS.length}
          </div>
        </div>

        {/* Caption */}
        <p className="mt-2 text-xs text-muted-foreground text-center tracking-wide transition-opacity duration-300">
          {PHOTOS[current].caption}
        </p>

        {/* Dot pagination */}
        <div className="flex items-center justify-center gap-2 mt-3">
          {PHOTOS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-none ${
                i === current
                  ? 'w-6 h-1.5 bg-primary'
                  : 'w-1.5 h-1.5 bg-border hover:bg-primary/50'
              }`}
            />
          ))}
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 mt-3">
          {PHOTOS.map((p, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`relative flex-1 aspect-[4/3] overflow-hidden transition-all duration-300 ${
                i === current ? 'ring-1 ring-primary' : 'opacity-50 hover:opacity-80'
              }`}
            >
              <img src={p.url} alt="" draggable={false} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* ── LIGHTBOX ── */}
      {lightbox !== null && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[200] flex items-center justify-center"
          onClick={(e) => { if (e.target === overlayRef.current) setLightbox(null); }}
        >
          <div className="absolute inset-0 bg-background/95 backdrop-blur-md" />

          {/* Close */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 z-20 w-10 h-10 bg-card border border-border/60 flex items-center justify-center hover:border-primary/60 hover:text-primary transition-colors"
          >
            <Icon name="X" size={20} />
          </button>

          {/* Prev */}
          <button
            onClick={prevLb}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-card border border-border/60 flex items-center justify-center hover:border-primary/60 hover:text-primary transition-colors"
          >
            <Icon name="ChevronLeft" size={22} />
          </button>

          {/* Image */}
          <div className="relative z-10 max-w-4xl w-full px-16 md:px-24">
            <img
              src={PHOTOS[lightbox].url}
              alt={PHOTOS[lightbox].caption}
              className="w-full max-h-[80vh] object-contain"
            />
            <p className="mt-4 text-center text-sm text-muted-foreground">
              {PHOTOS[lightbox].caption}
            </p>
            {/* Dot pagination в lightbox */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {PHOTOS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox(i)}
                  className={`transition-all duration-300 rounded-none ${
                    i === lightbox
                      ? 'w-6 h-1.5 bg-primary'
                      : 'w-1.5 h-1.5 bg-border hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Next */}
          <button
            onClick={nextLb}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-card border border-border/60 flex items-center justify-center hover:border-primary/60 hover:text-primary transition-colors"
          >
            <Icon name="ChevronRight" size={22} />
          </button>
        </div>
      )}
    </>
  );
}