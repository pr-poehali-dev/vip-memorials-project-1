import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import HeroCatalog from '@/components/HeroCatalog';
import WhyUsFaqContacts from '@/components/WhyUsFaqContacts';

export default function Index() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header scrolled={scrolled} />
      <main>
        <HeroCatalog />
        <WhyUsFaqContacts />
      </main>
    </div>
  );
}