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
    image: patient1
  },
  {
    id: 2,
    name: "Daniel Lee",
    rating: 5,
    comment: "From the warm welcome to the expert care, everything was perfect. Highly recommend to anyone looking for a trusted dental clinic.",
    image: patient2
  },
  {
    id: 3,
    name: "Emily Carter",
    rating: 4,
    comment: "Painless, precise, and professional. Every step was clearly explained, and I've never been more confident about my dental health.",
    image: patient3
  },
  {
    id: 4,
    name: "Michael Nguyen",
    rating: 5,
    comment: "Beautifully designed space and even better service. You can tell they truly care about their patients, and that personal touch makes all the difference.",
    image: patient4
  },
  {
    id: 5,
    name: "Alex Thompson",
    rating: 4,
    comment: "Outstanding experience from start to finish. The technology is impressive and the results speak for themselves.",
    image: patient5
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
  return (
    <div 
      className="bg-white rounded-xl p-6 shadow-lg hover-lift animate-fade-in stagger-animation"
      style={{ '--stagger': index } as any}
    >
      <div className="flex items-start space-x-4">
        <img 
          src={review.image} 
          alt={review.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-dental-blue-light"
        />
        <div className="flex-1">
          <p className="text-dental-gray mb-4 leading-relaxed text-sm">
            "{review.comment}"
          </p>
          <div className="space-y-2">
            <StarRating rating={review.rating} />
            <h4 className="font-semibold text-primary text-base">
              {review.name}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            What our patients<br />say about us
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;