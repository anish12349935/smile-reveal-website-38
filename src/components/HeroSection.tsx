
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import heroImage from '@/assets/dental-hero.jpg';
import beforeTeeth from '@/assets/before-teeth.jpg';
import afterTeeth from '@/assets/after-teeth.jpg';

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-xl shadow-lg">
      <div className="relative h-80">
        {/* Before Image */}
        <img 
          src={beforeTeeth} 
          alt="Before treatment" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* After Image with clip-path */}
        <img 
          src={afterTeeth} 
          alt="After treatment" 
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            clipPath: `polygon(${sliderPosition}% 0%, 100% 0%, 100% 100%, ${sliderPosition}% 100%)`
          }}
        />
        
        {/* Slider Line */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <ChevronRight className="w-4 h-4 text-primary" />
          </div>
        </div>
        
        {/* Range Input */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleSliderChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
        />
        
        {/* Labels */}
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
          Before
        </div>
        <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
          After
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section id="home" className="relative h-[800px] bg-gradient-to-br from-background to-dental-blue-light flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in">
              GET THE{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-dental-blue-dark bg-clip-text text-transparent">
                SMILE
              </span>{" "}
              YOU DESERVE
            </h1>
            
            <p className="text-xl text-dental-gray leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' } as any}>
              Experience world-class dental care with our state-of-the-art facility 
              and expert team. Transform your smile with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' } as any}>
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-dental-blue-dark hover-scale">
                Book Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-white hover-scale"
              >
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 text-dental-gray animate-bounce-in" style={{ animationDelay: '0.6s' } as any}>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10k+</div>
                <div className="text-sm">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99%</div>
                <div className="text-sm">Success Rate</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Before/After Slider */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' } as any}>
            <BeforeAfterSlider />
            
            <div className="mt-8 text-center animate-fade-in" style={{ animationDelay: '0.8s' } as any}>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Real Results from Real Patients
              </h3>
              <p className="text-dental-gray">
                Slide to see the amazing transformation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
