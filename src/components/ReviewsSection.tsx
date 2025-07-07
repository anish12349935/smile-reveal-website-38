
import { Star } from 'lucide-react';
import patient1 from '@/assets/patient-1.jpg';
import patient2 from '@/assets/patient-2.jpg';
import patient3 from '@/assets/patient-3.jpg';
import patient4 from '@/assets/patient-4.jpg';
import patient5 from '@/assets/patient-5.jpg';

const reviews = [
  {
    id: 1,
    name: "Sarah Mitchell",
    rating: 5,
    comment: "The team was incredibly professional and made me feel at ease throughout the entire process. My smile has never looked better, and I genuinely look forward to my visits now.",
    image: patient1,
    size: "large"
  },
  {
    id: 2,
    name: "Daniel Lee",
    rating: 5,
    comment: "From the warm welcome to the expert care, everything was perfect. Highly recommend to anyone looking for a trusted dental clinic.",
    image: patient2,
    size: "medium"
  },
  {
    id: 3,
    name: "Emily Carter",
    rating: 5,
    comment: "Painless, precise, and professional. Every step was clearly explained, and I've never been more confident about my dental health.",
    image: patient3,
    size: "small"
  },
  {
    id: 4,
    name: "Michael Nguyen",
    rating: 5,
    comment: "Beautifully designed space and even better service. You can tell they truly care about their patients, and that personal touch makes all the difference.",
    image: patient4,
    size: "small"
  },
  {
    id: 5,
    name: "Alex Thompson",
    rating: 5,
    comment: "Outstanding experience from start to finish. The technology is impressive and the results speak for themselves.",
    image: patient5,
    size: "tall"
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'text-primary fill-current' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

const ReviewCard = ({ review, index }: { review: any; index: number }) => {
  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2 h-[280px] md:h-[320px]';
      case 'tall':
        return 'md:col-span-1 md:row-span-2 h-[280px] md:h-[320px]';
      case 'medium':
        return 'md:col-span-1 md:row-span-1 h-[240px] md:h-[200px]';
      case 'small':
        return 'md:col-span-1 md:row-span-1 h-[240px] md:h-[200px]';
      default:
        return 'md:col-span-1 md:row-span-1 h-[240px] md:h-[200px]';
    }
  };

  return (
    <div 
      className={`bg-white rounded-xl p-4 md:p-6 shadow-lg hover-lift animate-fade-in stagger-animation ${getSizeClasses(review.size)}`}
      style={{ '--stagger': index } as any}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start space-x-3 md:space-x-4 mb-3 md:mb-4">
          <img 
            src={review.image} 
            alt={review.name}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-dental-blue-light flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-primary text-sm md:text-base mb-1">
              {review.name}
            </h4>
            <StarRating rating={review.rating} />
          </div>
        </div>
        
        <p className="text-dental-gray leading-relaxed text-xs md:text-sm flex-1">
          "{review.comment}"
        </p>
      </div>
    </div>
  );
};

const ReviewsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            What our patients<br />say about us
          </h2>
        </div>
        
        {/* Mobile: Simple single column, Desktop: Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto auto-rows-min">
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
