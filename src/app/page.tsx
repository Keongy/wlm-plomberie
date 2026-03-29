import Partners from '@/components/sections/Partners';
import About from '@/components/sections/About';
import Hero from '@/components/sections/Hero';
import Reviews from '@/components/sections/Reviews';
import Services from '@/components/sections/Services';
import InterventionZone from '@/components/sections/InterventionZone';
import ReassuranceBar from '@/components/sections/ReassuranceBar';
import QuoteForm from '@/components/sections/QuoteForm';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Reviews />
      <Services />
      <Partners />
      <InterventionZone />
      <ReassuranceBar />
      <QuoteForm />
    </>
  );
}
