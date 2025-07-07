import { Shield, Clock, Award, Heart } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Advanced Technology",
    description: "State-of-the-art equipment and digital imaging for precise, comfortable treatments."
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Extended hours and emergency care available. Book online or call anytime."
  },
  {
    icon: Award,
    title: "Expert Specialists",
    description: "Board-certified dentists with decades of experience in cosmetic and restorative dentistry."
  },
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description: "Personalized treatment plans tailored to your unique needs and comfort level."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Choose Our Dental Care
          </h2>
          <p className="text-xl text-dental-gray max-w-2xl mx-auto">
            Experience the difference with our comprehensive approach to dental health and patient care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border-0 shadow-lg hover-lift bg-white rounded-xl p-8 text-center animate-fade-in stagger-animation"
              style={{ '--stagger': index } as any}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-dental-blue-dark rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-in" style={{ animationDelay: `${index * 0.1 + 0.2}s` } as any}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="text-dental-gray leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;