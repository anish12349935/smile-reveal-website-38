import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ReviewsSection from '@/components/ReviewsSection';
import FAQSection from '@/components/FAQSection';
import FeaturesSection from '@/components/FeaturesSection';
import ContactForm from '@/components/ContactForm';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ReviewsSection />
      <FAQSection />
      <FeaturesSection />
      <ContactForm />
      <BeforeAfterSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Index;