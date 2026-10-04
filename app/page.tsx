import Header from '@/components/Header';
import TrustBadge from '@/components/TrustBadge';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Categories from '@/components/Categories';
import MenuSection from '@/components/MenuSection';
import WhyJSM from '@/components/WhyJSM';
import Reviews from '@/components/Reviews';
import Outlets from '@/components/Outlets';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Reveal from '@/components/Reveal';

export default function Home() {
  return (
    <>
      <Header />
      <TrustBadge />
      <Reveal>
        <main>
          <Hero />
          <Story />
          <Categories />
          <MenuSection />
          <WhyJSM />
          <Reviews />
          <Outlets />
        </main>
        <Footer />
        <WhatsAppButton />
      </Reveal>
    </>
  );
}
