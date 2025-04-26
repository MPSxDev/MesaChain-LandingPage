import React from 'react';
import { DollarSign, Package, Users, Gift, BarChart4, Globe, Plug, Smartphone } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-[#f15a24] mb-5">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Integrated Payment System",
      description: "Process payments with minimal fees (<$0.001) via Stellar blockchain technology."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Customer Mobile App",
      description: "Enable customers to order, pay, and manage loyalty points from their devices."
    },
    {
      icon: <Package className="h-6 w-6" />,
      title: "Inventory Management",
      description: "Track stock levels in real-time and predict future needs with smart analytics."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Staff Management",
      description: "Simplify scheduling, payroll, and performance tracking for your entire team."
    },
    {
      icon: <Gift className="h-6 w-6" />,
      title: "Tokenized Loyalty Program",
      description: "Create and manage custom loyalty tokens to keep customers coming back."
    },
    {
      icon: <BarChart4 className="h-6 w-6" />,
      title: "Advanced Analytics",
      description: "Make informed decisions with comprehensive data visualizations and insights."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Multi-location Support",
      description: "Manage multiple establishments from a single, intuitive dashboard."
    },
    {
      icon: <Plug className="h-6 w-6" />,
      title: "Supplier Integration",
      description: "Streamline ordering and payment processes with your suppliers."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Revolutionize Your Restaurant Management
          </h2>
          <p className="text-xl text-gray-600">
            MesaChain combines cutting-edge blockchain technology with comprehensive management tools to solve the biggest challenges in food service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;