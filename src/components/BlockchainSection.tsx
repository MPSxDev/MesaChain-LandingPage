import React, { useState } from 'react';
import { DollarSign, Zap, Clock, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BlockchainSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabContent = [
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Minimal Transaction Fees",
      content: "Process payments with fees as low as $0.001 per transaction using the Stellar blockchain, saving thousands in payment processing costs annually.",
      image: "https://images.pexels.com/photos/1055081/pexels-photo-1055081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast Settlements",
      content: "Stellar blockchain enables near-instant settlement of transactions, meaning you get access to your funds in seconds, not days.",
      image: "https://miro.medium.com/v2/resize:fit:2000/1*NNuXGPGdDT5IyKnfOgniBQ.png"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Operation",
      content: "Unlike traditional banking systems, blockchain operates around the clock, allowing transactions to be processed at any time, day or night.",
      image: "https://images.pexels.com/photos/9352/glass-time-watch-business.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enhanced Security",
      content: "Blockchain's cryptographic security ensures that all transactions are secure, transparent, and immutable, reducing fraud and errors.",
      image: "https://mediaandmore.co.uk/wp-content/uploads/2020/03/cyber-security.jpg"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Power of Blockchain for Restaurants
          </h2>
          <p className="text-xl text-gray-600">
            MesaChain leverages Stellar blockchain technology to revolutionize restaurant financial operations.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden relative h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <img 
                    src={tabContent[activeTab].image}
                    alt={tabContent[activeTab].title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent">
                    <motion.h3 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-2xl font-bold text-white mb-4"
                    >
                      {tabContent[activeTab].title}
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-lg text-white"
                    >
                      {tabContent[activeTab].content}
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
          <div className="lg:w-2/5 order-1 lg:order-2">
            <div className="bg-white rounded-xl shadow-md">
              <div className="divide-y divide-gray-200">
                {tabContent.map((tab, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full text-left p-6 flex items-start transition-all duration-300 ${
                      activeTab === index ? 'bg-orange-50' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    <motion.div 
                      className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                        activeTab === index ? 'bg-[#f15a24] text-white' : 'bg-gray-100 text-gray-500'
                      }`}
                      whileHover={{ rotate: 5 }}
                    >
                      {tab.icon}
                    </motion.div>
                    <div>
                      <h4 className={`text-lg font-medium ${
                        activeTab === index ? 'text-[#f15a24]' : 'text-gray-900'
                      }`}>
                        {tab.title}
                      </h4>
                      <p className="text-gray-600 text-sm mt-1 line-clamp-1">
                        {tab.content.substring(0, 60)}...
                      </p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockchainSection;