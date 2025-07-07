
import { Star } from 'lucide-react';
import patient1 from '@/assets/patient-1.jpg';
import patient2 from '@/assets/patient-2.jpg';
import patient3 from '@/assets/patient-3.jpg';
import patient4 from '@/assets/patient-4.jpg';
import patient5 from '@/assets/patient-5.jpg';
import { Button } from '@/components/ui/button';

const reviews = [
  {
    id: 1,
    name: "Sarah Mitchell",
    rating: 5,
    title: "A Lifesaver for My Health",
    comment: "Dealing with stress, Healthnity's mental health services were a real breakthrough. The guidance I received helped me build and I now feel more in control of my mental wellness. Truly life-changing journey!",
    image: patient1,
    profession: "Yoga Professional"
  },
  {
    id: 2,
    name: "Daniel Lee",
    rating: 5,
    title: "Truly Transformative Support",
    comment: "Burnout had left me completely drained, but Healthnity's dedicated care team helped me restore balance and clarity. Their compassionate support and expert guidance made a remarkable difference. I feel stronger, more focused, and truly back on track with my life.",
    image: patient2,
    profession: "Marketing Executive"
  },
  {
    id: 3,
    name: "Emily Carter",
    rating: 5,
    title: "Exactly What I Needed Most",
    comment: "I was unsure at first, but Healthnity went beyond my expectations. The wellness sessions helped me reconnect with myself and handle daily stress with more ease. It's been a healing, empowering, and genuinely uplifting journey that brought peace and clarity.",
    image: patient3,
    profession: "Freelance Designer"
  },
  {
    id: 4,
    name: "Michael Nguyen",
    rating: 5,
    title: "Transformative Health Experience",
    comment: "Healthnity's care programs have completely changed the way I approach my health. The tailored support and comprehensive treatments made me feel refreshed and centered. I highly recommend it to anyone seeking better well-being!",
    image: patient4,
    profession: "Fitness Enthusiast"
  },
  {
    id: 5,
    name: "Alex Thompson",
    rating: 5,
    title: "A Lifesaver for Recovery",
    comment: "As someone struggling with anxiety and sleep issues, I couldn't have asked for better support. The personalized approach and coping skills sessions have been incredibly helpful. I'm truly thankful for the positive changes in my life.",
    image: patient5,
    profession: "Corporate Manager"
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex space-x-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="w-5 h-5 text-primary fill-current"
        />
      ))}
    </div>
  );
};

const ReviewCard = ({ review }: { review: any }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <StarRating rating={review.rating} />
      
      <h3 className="text-lg font-semibold text-foreground mb-3">
        {review.title}
      </h3>
      
      <p className="text-dental-gray leading-relaxed text-sm mb-6">
        {review.comment}
      </p>
      
      <div className="flex items-center space-x-3 mt-auto">
        <img 
          src={review.image} 
          alt={review.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-dental-blue-light"
        />
        <div>
          <h4 className="font-semibold text-primary text-sm">
            {review.name}
          </h4>
          <p className="text-xs text-dental-gray">
            {review.profession}
          </p>
        </div>
      </div>
    </div>
  );
};

const ReviewsSection = () => {
  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 border-2 border-white rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Patients Are Saying
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Discover how Healthnity has empowered individuals to take control of their 
            health through real stories and experiences. Your journey to better health 
            starts here!
          </p>
          <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
            Make an Appointment
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
