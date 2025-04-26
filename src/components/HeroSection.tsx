import { ArrowRight, Star } from 'lucide-react';
import type React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="mb-6 inline-flex items-center px-3 py-1 bg-orange-100 text-[#f15a24] rounded-full">
              <Star className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Revolutionizing Restaurant Management</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              The Future of <span className="text-[#f15a24]">Restaurant</span> Management is Here
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              MesaChain seamlessly integrates comprehensive management tools with Stellar
              blockchain, reducing costs and enhancing customer experiences for food service
              establishments.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-[#f15a24] hover:bg-[#d94e1f] text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-3 px-8 rounded-full transition-all duration-300">
                Watch Demo
              </button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />
                ))}
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">
                  Trusted by <span className="font-semibold">2,000+</span> restaurants worldwide
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-5/12 relative">
            <div className="relative z-10 bg-white p-2 rounded-xl shadow-xl">
              <img
                src="https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Restaurant management dashboard"
                className="rounded-lg w-full"
              />
              <div className="absolute top-10 left-10 bg-white/90 backdrop-blur-sm px-4 py-5 rounded-lg shadow-lg flex items-center space-x-2 animate-bounce">
                <span className="text-gray-700 font-medium">Pay with</span>
                <img
                  src="/logo-mesachain.svg"
                  alt="MesaChain Logo"
                  className="h-6 w-auto"
                />
              </div>
            </div>
            <div className="absolute top-10 -right-10 w-32 h-32 bg-[#f15a24] rounded-full opacity-20 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500 rounded-full opacity-10 blur-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
