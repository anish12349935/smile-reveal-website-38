
import { Button } from '@/components/ui/button';
import { Star, Shield, Award, Heart } from 'lucide-react';
import dentalHero from '@/assets/dental-hero.jpg';

const HeroSection = () => {
  return (
    <section className="relative h-[700px] bg-gradient-to-br from-background via-dental-blue-light/20 to-background overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <Star className="absolute top-20 left-10 w-8 h-8 text-primary" />
        <Shield className="absolute top-32 right-20 w-10 h-10 text-primary" />
        <Award className="absolute bottom-32 left-20 w-6 h-6 text-primary" />
        <Heart className="absolute bottom-20 right-32 w-8 h-8 text-primary" />
        <Star className="absolute top-1/2 left-1/4 w-6 h-6 text-primary" />
        <Shield className="absolute top-1/3 right-1/3 w-8 h-8 text-primary" />
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-16 left-16 w-32 h-32 border border-primary rounded-full"></div>
        <div className="absolute top-1/2 right-16 w-24 h-24 border border-primary rounded-full"></div>
        <div className="absolute bottom-16 left-1/3 w-20 h-20 border border-primary rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Your Perfect Smile
                <span className="block text-dental-blue-dark">Starts Here</span>
              </h1>
              <p className="text-xl text-dental-gray leading-relaxed max-w-xl">
                Experience world-class dental care with our expert team. We combine 
                cutting-edge technology with personalized treatment to give you the 
                confident smile you deserve.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-dental-blue-dark">
                Book Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Learn More
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex items-center space-x-8 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-dental-gray">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-dental-gray">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-dental-gray">Success Rate</div>
              </div>
            </div>
          </div>
          
          {/* Right content - Hero image */}
          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <img 
                src={dentalHero} 
                alt="Modern dental clinic"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white fill-current" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Excellent Care</div>
                    <div className="text-xs text-dental-gray">5.0 Rating</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-6 -right-6 w-full h-full bg-primary/10 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
