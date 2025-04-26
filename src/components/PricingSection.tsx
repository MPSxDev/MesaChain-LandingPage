import React from 'react';
import { Check } from 'lucide-react';

interface PlanProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PricingPlan: React.FC<PlanProps> = ({ name, price, description, features, isPopular }) => (
  <div className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ${
    isPopular ? 'border-2 border-[#f15a24] ring-4 ring-orange-100 relative' : ''
  }`}>
    {isPopular && (
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#f15a24] text-white px-4 py-1 rounded-full text-sm font-semibold">
        Most Popular
      </div>
    )}
    <div className="p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600">/month</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-[#f15a24] mr-2 mt-0.5" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
        isPopular 
          ? 'bg-[#f15a24] text-white hover:bg-[#d94e1f]' 
          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
      }`}>
        Get Started
      </button>
    </div>
  </div>
);

const PricingSection: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      description: "Perfect for small cafés and food trucks",
      features: [
        "Stellar blockchain payments",
        "Basic inventory management",
        "Up to 5 staff accounts",
        "Simple loyalty program",
        "Standard customer app",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: "$199",
      description: "Ideal for established restaurants",
      features: [
        "All Starter features",
        "Advanced inventory forecasting",
        "Unlimited staff accounts",
        "Enhanced loyalty tokens",
        "Custom-branded mobile app",
        "24/7 priority support",
        "Staff performance analytics"
      ],
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      description: "For restaurant chains with multiple locations",
      features: [
        "All Professional features",
        "Multi-location management",
        "Advanced supplier integration",
        "Custom reporting & dashboards",
        "API access for custom integrations",
        "Dedicated account manager",
        "Employee scheduling & payroll"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that fits your restaurant's needs and start saving today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingPlan
              key={index}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Need a custom solution for your specific needs?</p>
          <button className="bg-transparent hover:bg-gray-100 text-gray-800 font-medium py-2 px-6 border border-gray-300 rounded-full transition-all duration-300">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;