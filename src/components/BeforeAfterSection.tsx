
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import beforeTeeth from '@/assets/before-teeth.jpg';
import afterTeeth from '@/assets/after-teeth.jpg';
import patient1 from '@/assets/patient-1.jpg';
import patient2 from '@/assets/patient-2.jpg';
import patient3 from '@/assets/patient-3.jpg';
import patient4 from '@/assets/patient-4.jpg';
import patient5 from '@/assets/patient-5.jpg';
import dentalHero from '@/assets/dental-hero.jpg';

const beforeAfterCases = [
  {
    id: 1,
    beforeImage: beforeTeeth,
    afterImage: afterTeeth,
    title: "Smile Makeover",
    description: "Complete transformation with veneers and whitening"
  },
  {
    id: 2,
    beforeImage: patient1,
    afterImage: patient2,
    title: "Orthodontic Treatment",
    description: "Straightened teeth with invisible aligners"
  },
  {
    id: 3,
    beforeImage: patient3,
    afterImage: patient4,
    title: "Dental Implants",
    description: "Replaced missing teeth with natural-looking implants"
  },
  {
    id: 4,
    beforeImage: patient5,
    afterImage: dentalHero,
    title: "Teeth Whitening",
    description: "Professional whitening for a brighter smile"
  },
  {
    id: 5,
    beforeImage: dentalHero,
    afterImage: patient1,
    title: "Gum Contouring",
    description: "Reshaped gums for a more balanced smile"
  },
  {
    id: 6,
    beforeImage: patient2,
    afterImage: patient3,
    title: "Full Reconstruction",
    description: "Complete dental restoration for optimal function"
  }
];

const BeforeAfterCard = ({ beforeImage, afterImage, title, description }: {
  beforeImage: string;
  afterImage: string;
  title: string;
  description: string;
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white border-0">
      <div className="relative h-64 overflow-hidden">
        {/* Before Image */}
        <img 
          src={beforeImage} 
          alt="Before treatment" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* After Image with clip-path */}
        <img 
          src={afterImage} 
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
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
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
        <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs font-medium">
          Before
        </div>
        <div className="absolute bottom-2 right-2 bg-primary bg-opacity-90 text-white px-2 py-1 rounded text-xs font-medium">
          After
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">
          {title}
        </h3>
        <p className="text-dental-gray">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

const BeforeAfterSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Real Results, Real Transformations
          </h2>
          <p className="text-xl text-dental-gray max-w-3xl mx-auto">
            See the incredible transformations our patients have achieved with our advanced 
            dental treatments and personalized care approach.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beforeAfterCases.map((case_) => (
            <BeforeAfterCard
              key={case_.id}
              beforeImage={case_.beforeImage}
              afterImage={case_.afterImage}
              title={case_.title}
              description={case_.description}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-dental-gray mb-6">
            Ready to start your transformation journey?
          </p>
          <div className="inline-flex items-center space-x-2 bg-dental-blue-light px-6 py-3 rounded-full">
            <span className="text-primary font-semibold">
              Schedule your consultation today and see what's possible for your smile
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
