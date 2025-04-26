import React from 'react';
import { FacebookIcon, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
  import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/logo-mesachain.svg" 
                alt="MesaChain Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="mb-4 pr-4">
              Revolutionizing restaurant management with blockchain technology 
              to reduce costs and enhance customer experiences.
            </p>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="text-gray-400 hover:text-[#f15a24] transition-colors duration-300">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#f15a24] transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#f15a24] transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#f15a24] transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#f15a24] transition-colors duration-300">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#f15a24] transition-colors duration-300">Features</a></li>
              <li><a href="#" className="hover:text-[#f15a24] transition-colors duration-300">Pricing</a></li>
              <li><a href="#" className="hover:text-[#f15a24] transition-colors duration-300">Case Studies</a></li>
              <li><a href="#" className="hover:text-[#f15a24] transition-colors duration-300">Testimonials</a></li>
              <li><a href="#" className="hover:text-[#f15a24] transition-colors duration-300">API Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#f15a24] transition-colors duration-300">Help Center</a></li>
              <li><a href="#" className="hover:text-[#f15a24] transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-[#f15a24] transition-colors duration-300">Guides & Tutorials</a></li>
              <li><a href="#" className="hover:text-[#f15a24] transition-colors duration-300">Webinars</a></li>
              <li><a href="#" className="hover:text-[#f15a24] transition-colors duration-300">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#f15a24] transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-[#f15a24] transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="hover:text-[#f15a24] transition-colors duration-300">Press</a></li>
              <li><a href="#" className="hover:text-[#f15a24] transition-colors duration-300">Partners</a></li>
              <li><a href="#" className="hover:text-[#f15a24] transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MesaChain. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-sm hover:text-[#f15a24] transition-colors duration-300">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-sm hover:text-[#f15a24] transition-colors duration-300">Terms of Service</Link>
            <Link to="/security" className="text-sm hover:text-[#f15a24] transition-colors duration-300">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;