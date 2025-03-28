import { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', fullName: 'Terra', description: 'Home', path: '/' },
    { name: 'About Us', fullName: 'Founding Roots', description: 'About Us', path: '/about' },
    { name: 'Initiatives', fullName: 'Ecological Programmes', description: 'Initiatives', path: '/initiatives' },
    { name: 'Team', fullName: 'Collective Exchange', description: 'Team & Join us', path: '/team' },
    { name: 'News', fullName: 'Whispering Winds', description: 'Newsroom/Press & Media', path: '/news' },
    { name: 'Blog', fullName: 'Reflections', description: 'Newsletter & blog', path: '/blog' },
    { name: 'Events', fullName: 'Time Trail', description: 'Calendar & Events', path: '/events' },
    { name: 'Impact', fullName: 'Impact', description: 'Transparency & Annual Report', path: '/impact' },
    { name: 'Contact', fullName: 'Sow a Connection', description: 'Contact Us', path: '/contacts' },
    { name: 'Donate', fullName: 'Grow a Tree', description: 'Donate', path: '/donate' }
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md fixed w-full z-50 shadow-sm">
      <div className="container mx-auto md:px-16">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => handleNavigation('/')}
          >
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="font-bold text-xl">Recycle Lebanon</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(item.path)}
                className={`px-4 py-2 rounded-md transition-colors relative group
                  ${isActive(item.path)
                    ? 'text-green-600 bg-green-50 font-medium'
                    : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                  }`}
              >
                {item.name}
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="pt-2">
                    <div className="bg-white rounded-lg shadow-lg px-4 py-2 whitespace-nowrap text-sm">
                      <div className="font-medium text-green-600">{item.fullName}</div>
                      <div className="text-gray-600">{item.description}</div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-1">
            {navItems.map((item, index) => (
              <div 
                key={index} 
                onClick={() => handleNavigation(item.path)}
                className={`block px-4 py-2 rounded-md cursor-pointer
                  ${isActive(item.path)
                    ? 'bg-green-50 text-green-600'
                    : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
                  }`}
              >
                <div className="font-medium">{item.fullName}</div>
                <div className={`text-sm ${isActive(item.path) ? 'text-green-500' : 'text-gray-500'}`}>
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;