
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
    title: "Marketing Executive",
    rating: 5,
    comment: "The team was incredibly professional and made me feel at ease throughout the entire process. My smile has never looked better, and I genuinely look forward to my visits now.",
    image: patient1,
  },
  {
    id: 2,
    name: "Daniel Lee",
    title: "Software Developer",
    rating: 5,
    comment: "From the warm welcome to the expert care, everything was perfect. Highly recommend to anyone looking for a trusted dental clinic.",
    image: patient2,
  },
  {
    id: 3,
    name: "Emily Carter",
    title: "Graphic Designer",
    rating: 5,
    comment: "Painless, precise, and professional. Every step was clearly explained, and I've never been more confident about my dental health.",
    image: patient3,
  },
  {
    id: 4,
    name: "Michael Nguyen",
    title: "Business Owner",
    rating: 5,
    comment: "Beautifully designed space and even better service. You can tell they truly care about their patients, and that personal touch makes all the difference.",
    image: patient4,
  },
  {
    id: 5,
    name: "Alex Thompson",
    title: "Project Manager",
    rating: 5,
    comment: "Outstanding experience from start to finish. The technology is impressive and the results speak for themselves.",
    image: patient5,
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex space-x-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? 'text-primary fill-current' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

const ReviewCard = ({ review }: { review: any }) => {
  return (
    <div className="flex-shrink-0 w-80 bg-white rounded-lg p-6 shadow-lg mx-4">
      <StarRating rating={review.rating} />
      
      <h3 className="text-lg font-semibold text-gray-900 mb-3">
        {review.comment.split('.')[0]}.
      </h3>
      
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        {review.comment}
      </p>
      
      <div className="flex items-center space-x-3">
        <img 
          src={review.image} 
          alt={review.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-gray-900">
            {review.name}
          </h4>
          <p className="text-sm text-gray-500">
            {review.title}
          </p>
        </div>
      </div>
    </div>
  );
};

const ReviewsSection = () => {
  // Duplicate reviews for infinite scroll effect
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section className="py-16 md:py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            What Our Patients Are Saying
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Discover how our dental care has empowered individuals to take control of their 
            health through real stories and experiences. Your journey to better health starts here!
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors">
            Make an Appointment
          </button>
        </div>
        
        {/* Infinite scrolling container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-infinite-scroll">
            {duplicatedReviews.map((review, index) => (
              <ReviewCard key={`${review.id}-${index}`} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
