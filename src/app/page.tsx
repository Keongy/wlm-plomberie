import Partners from '@/components/sections/Partners';
import About from '@/components/sections/About';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import InterventionZone from '@/components/sections/InterventionZone';
import ReassuranceBar from '@/components/sections/ReassuranceBar';
import QuoteForm from '@/components/sections/QuoteForm';
import GoogleReviews from '@/components/sections/GoogleReviews';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <GoogleReviews />
      <Services />
      <Partners />
      <InterventionZone />
      <ReassuranceBar />
      <QuoteForm />
    </>
  );
}
