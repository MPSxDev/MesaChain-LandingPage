import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#f15a24] to-orange-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Restaurant Operations?
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Join thousands of restaurants that are already saving money and delighting customers with MesaChain.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-[#f15a24] font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white hover:bg-white/10 text-white font-medium py-3 px-8 rounded-full transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
          
          <div className="lg:w-5/12 bg-white p-8 rounded-xl shadow-xl">
            <h3 className="text-[#f15a24] text-xl font-bold mb-6">Get Started Today</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
                  Full Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#f15a24] focus:border-[#f15a24]" 
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#f15a24] focus:border-[#f15a24]" 
                  placeholder="your@email.com"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="restaurant" className="block text-gray-700 text-sm font-medium mb-2">
                  Restaurant Name
                </label>
                <input 
                  type="text" 
                  id="restaurant" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#f15a24] focus:border-[#f15a24]" 
                  placeholder="Your restaurant"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="size" className="block text-gray-700 text-sm font-medium mb-2">
                  Restaurant Size
                </label>
                <select 
                  id="size" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#f15a24] focus:border-[#f15a24]"
                >
                  <option value="">Select your restaurant size</option>
                  <option value="small">Small (1 location)</option>
                  <option value="medium">Medium (2-5 locations)</option>
                  <option value="large">Large (6+ locations)</option>
                </select>
              </div>
              <button 
                type="submit" 
                className="w-full bg-[#f15a24] hover:bg-[#d94e1f] text-white font-medium py-3 px-4 rounded-lg transition-all duration-300"
              >
                Request Information
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;