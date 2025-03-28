import { Leaf, Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const quickLinks = [
    { name: 'Roots', path: '/about' },
    { name: 'Collective Exchange', path: '/team' },
    { name: 'Partners', path: '/partners' },
    { name: 'Impact', path: '/impact' },
    { name: 'Whispering Winds', path: '/news' }
  ];

  const resourceLinks = [
    { name: 'Reflections', path: '/blog' },
    { name: 'Time Trails', path: '/events' },
    { name: 'Support', path: '/support' },
    { name: 'Donate', path: '/donate' },
    { name: 'Programmes', path: '/initiatives' }
  ];

  return (
    <footer className="bg-white mt-auto">
      <div className="container mx-auto md:px-24 px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-6 w-6 text-green-600" />
              <span className="font-bold text-lg">Recycle Lebanon</span>
            </div>
            <p className="text-gray-600 mb-4">
              Empowering communities through A creative ecology NGO accelerating the transition towards regenerative system change a greener future for Lebanon.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              < Linkedin className="text-gray-400 hover:text-green-600 transition-colors" />
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-600 mt-1" />
                <p className="text-gray-600">
                  123 Green Street, Beirut Central District, Lebanon
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-600" />
                <a href="mailto:contact@recyclelebanon.org" className="text-gray-600 hover:text-green-600 transition-colors">
                  contact@recyclelebanon.org
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-600" />
                <a href="tel:+9611234567" className="text-gray-600 hover:text-green-600 transition-colors">
                  +961 1 234 567
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Recycle Lebanon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;