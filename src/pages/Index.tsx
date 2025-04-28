import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import CatalogSection from '@/components/CatalogSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSlider />
        <AboutSection />
        <ServicesSection />
        <CatalogSection />
        <AdvantagesSection />
        <TestimonialsSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
