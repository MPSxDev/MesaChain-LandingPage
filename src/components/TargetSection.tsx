import { Building2, ChefHat, Pizza, Truck, User } from 'lucide-react';
import type React from 'react';

interface TargetCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

const TargetCard: React.FC<TargetCardProps> = ({ icon, title, description, benefits }) => (
  <div className="relative overflow-hidden bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#f15a24]">
    <div className="absolute -right-6 -top-6 w-24 h-24 bg-orange-100 rounded-full opacity-50" />
    <div className="relative z-10">
      <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center text-[#f15a24] mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-5">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="h-5 w-5 text-[#f15a24] mt-0.5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-gray-700">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const TargetSection: React.FC = () => {
  const targets = [
    {
      icon: <Pizza className="h-7 w-7" />,
      title: 'Restaurant & Café Owners',
      description:
        'Independent establishments looking to streamline operations and boost profitability.',
      benefits: [
        'Reduce payment processing fees by up to 98%',
        'Simplify management of all operations',
        'Increase customer loyalty and retention',
        'Make data-driven business decisions',
      ],
    },
    {
      icon: <Building2 className="h-7 w-7" />,
      title: 'Chain Establishments',
      description: 'Medium-sized chains with 5-50 locations seeking unified management.',
      benefits: [
        'Centralized control across all locations',
        'Standardized processes and reporting',
        'Simplified supplier relationship management',
        'Unified customer experience and loyalty program',
      ],
    },
    {
      icon: <ChefHat className="h-7 w-7" />,
      title: 'Service Staff',
      description:
        'Waiters, cashiers, and chefs who need intuitive tools to provide excellent service.',
      benefits: [
        'Simplified order management system',
        'Clear communication between front and back of house',
        'Easy access to schedules and timesheets',
        'Streamlined payment and tip processing',
      ],
    },
    {
      icon: <User className="h-7 w-7" />,
      title: 'Customers',
      description: 'Frequent diners looking for convenient and rewarding experiences.',
      benefits: [
        'Mobile ordering and payment options',
        'Earn and redeem loyalty points easily',
        'Discover personalized recommendations',
        'Seamless reservation management',
      ],
    },
    {
      icon: <Truck className="h-7 w-7" />,
      title: 'Suppliers',
      description: 'Food and beverage suppliers serving the restaurant industry.',
      benefits: [
        'Receive orders digitally in real-time',
        'Faster payment processing',
        'Better demand forecasting',
        'Streamlined delivery coordination',
      ],
    },
  ];

  return (
    <section id="targets" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who Benefits from MesaChain?
          </h2>
          <p className="text-xl text-gray-600">
            Our platform is designed to serve every stakeholder in the restaurant ecosystem,
            creating value throughout the industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {targets.map((target, index) => (
            <TargetCard
              key={index}
              icon={target.icon}
              title={target.title}
              description={target.description}
              benefits={target.benefits}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetSection;
