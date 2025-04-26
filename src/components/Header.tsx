import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (hash: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: hash } });
    } else {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/">
              <img 
                src="/logo-mesachain.svg" 
                alt="MesaChain Logo" 
                className="h-8 w-auto"
              />
            </a>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <NavLink href="#features" onClick={() => handleNavClick('#features')}>Features</NavLink>
            <NavLink href="#targets" onClick={() => handleNavClick('#targets')}>Who It's For</NavLink>
            <NavLink href="#how-it-works" onClick={() => handleNavClick('#how-it-works')}>How It Works</NavLink>
            <NavLink href="#pricing" onClick={() => handleNavClick('#pricing')}>Pricing</NavLink>
          </div>
          
          <div className="hidden md:block">
            <button 
              onClick={() => navigate('/signup')} 
              className="bg-[#f15a24] hover:bg-[#d94e1f] text-white font-medium py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <MobileNavLink href="#features" onClick={() => { setIsOpen(false); handleNavClick('#features'); }}>Features</MobileNavLink>
            <MobileNavLink href="#targets" onClick={() => { setIsOpen(false); handleNavClick('#targets'); }}>Who It's For</MobileNavLink>
            <MobileNavLink href="#how-it-works" onClick={() => { setIsOpen(false); handleNavClick('#how-it-works'); }}>How It Works</MobileNavLink>
            <MobileNavLink href="#pricing" onClick={() => { setIsOpen(false); handleNavClick('#pricing'); }}>Pricing</MobileNavLink>
            <div className="pt-4">
              <button className="w-full bg-[#f15a24] hover:bg-[#d94e1f] text-white font-medium py-2 px-4 rounded-full">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => (
  <a 
    href={href} 
    className="text-gray-700 hover:text-[#f15a24] font-medium transition-colors duration-300"
    onClick={onClick}
  >
    {children}
  </a>
);

const MobileNavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => (
  <a 
    href={href} 
    className="block py-2 px-4 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#f15a24] rounded-md"
    onClick={onClick}
  >
    {children}
  </a>
);

export default Header;