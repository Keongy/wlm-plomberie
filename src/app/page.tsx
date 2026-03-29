import Partners from '@/components/sections/Partners';
import About from '@/components/sections/About';
import Hero from '@/components/sections/Hero';
import Reviews from '@/components/sections/Reviews';
import Services from '@/components/sections/Services';
import ContactZone from '@/components/sections/ContactZone';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Reviews />
      <Services />
      <Partners />
      <ContactZone />
    </>
  );
}
