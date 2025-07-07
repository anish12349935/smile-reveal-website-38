
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ReviewsSection from '@/components/ReviewsSection';
import FAQSection from '@/components/FAQSection';
import FeaturesSection from '@/components/FeaturesSection';
import ContactForm from '@/components/ContactForm';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';
import DecorativeBackground from '@/components/DecorativeBackground';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <HeroSection />
      <ReviewsSection />
      <div className="relative">
        <DecorativeBackground variant="subtle" />
        <FAQSection />
      </div>
      <div className="relative">
        <DecorativeBackground variant="subtle" />
        <FeaturesSection />
      </div>
      <ContactForm />
      <div className="relative">
        <DecorativeBackground variant="subtle" />
        <BeforeAfterSection />
      </div>
      <div className="relative">
        <DecorativeBackground variant="subtle" />
        <TeamSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
