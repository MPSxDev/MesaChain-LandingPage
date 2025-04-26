import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  image: string;
  stars: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, position, image, stars }) => (
  <div className="bg-white p-8 rounded-xl shadow-md">
    <div className="flex mb-4">
      {Array(5).fill(0).map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${i < stars ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
        />
      ))}
    </div>
    <p className="text-gray-700 mb-6 italic">"{quote}"</p>
    <div className="flex items-center">
      <img
        src={image}
        alt={author}
        className="w-12 h-12 rounded-full object-cover mr-4"
      />
      <div>
        <h4 className="font-semibold text-gray-900">{author}</h4>
        <p className="text-gray-600 text-sm">{position}</p>
      </div>
    </div>
  </div>
);

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      quote: "MesaChain has reduced our payment processing fees by 97%, adding thousands of dollars to our bottom line each month.",
      author: "Elena Rodriguez",
      position: "Owner, Coastal Cuisine",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      stars: 5
    },
    {
      quote: "The integrated management system has eliminated the need for 3 separate software tools, saving us time and money.",
      author: "Marcus Chen",
      position: "Manager, Urban Plates",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      stars: 5
    },
    {
      quote: "Our customer retention has increased by 32% since implementing MesaChain's loyalty token program.",
      author: "Sarah Johnson",
      position: "CEO, Bistro Group",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      stars: 5
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Users Are Saying
          </h2>
          <p className="text-xl text-gray-600">
            Discover how MesaChain is transforming restaurant operations worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              image={testimonial.image}
              stars={testimonial.stars}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;