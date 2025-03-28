import { Calendar, Users, Palette, Leaf, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Participate = () => {
  const opportunities = [
    {
      icon: <Leaf className="h-6 w-6 text-green-600" />,
      title: 'Agroecology trainings',
      date: 'April - August 2024',
      type: 'Training',
      image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1471&auto=format&fit=crop',
    },
    {
      icon: <Users className="h-6 w-6 text-green-600" />,
      title: 'Sustainable Packaging Youth Fellowship',
      date: '6-12 May 2024',
      type: 'Fellowship',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1469&auto=format&fit=crop',
    },
    {
      icon: <Users className="h-6 w-6 text-green-600" />,
      title: 'The Big Brotherhood Masculine Leadership Retreat',
      date: 'June 2024',
      type: 'Fellowship',
      image: 'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?q=80&w=1430&auto=format&fit=crop',
    },
    {
      icon: <Palette className="h-6 w-6 text-green-600" />,
      title: 'Biodiversity Art Residency',
      date: 'July - September 2024',
      type: 'Fellowship',
      image: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1470&auto=format&fit=crop',
    }
  ];

  // Past event images for carousel (7-10 images)
  const pastEvents = [
    'https://images.unsplash.com/photo-1586771107445-d3ca888129ce?q=80&w=1470',
    'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?q=80&w=1587',
    'https://images.unsplash.com/photo-1524179091875-b494986c6e1b?q=80&w=1470',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470',
    'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?q=80&w=1415',
    'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1469',
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1470',
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1484'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === pastEvents.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [pastEvents.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === pastEvents.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? pastEvents.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-gray-50 md:px-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Participate</h2>
        
        {/* Opportunity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
  {opportunities.map((item, index) => (
    <div
      key={index}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
    >
      {/* Main Image - fixed height */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute top-4 left-4 bg-green-100 rounded-full p-2">
          {item.icon}
        </div>
        <span className="absolute top-4 right-4 bg-white/90 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">
          {item.type}
        </span>
      </div>

      {/* Content - flex-grow to push button down */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
        <div className="flex items-center text-gray-600 mb-4">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="text-sm">{item.date}</span>
        </div>

        {/* Register Button - mt-auto pushes it to bottom */}
        <button className="mt-auto w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg flex items-center justify-center transition-colors">
          Register Now
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  ))}
</div>

        {/* Past Events Carousel */}
        <div className="relative h-64 md:h-80 lg:h-96 mb-16 rounded-xl overflow-hidden shadow-lg mt-16">
          {/* Carousel Images */}
          <div className="relative h-full w-full">
            {pastEvents.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Past event ${index + 1}`}
                loading="lazy"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 p-2 rounded-full hover:bg-white transition-colors z-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 p-2 rounded-full hover:bg-white transition-colors z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {pastEvents.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-white' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Participate;