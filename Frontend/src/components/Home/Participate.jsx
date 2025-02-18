import { Calendar, Users, Palette, Leaf } from 'lucide-react';

const Participate = () => {
  const opportunities = [
    {
      icon: <Leaf className="h-6 w-6" />,
      title: 'Agroecology trainings',
      date: 'April - August 2024',
      type: 'Training'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Sustainable Packaging Youth Fellowship',
      date: '6-12 May 2024',
      type: 'Fellowship'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'The Big Brotherhood Masculine Leadership Retreat',
      date: 'June 2024',
      type: 'Fellowship'
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: 'Biodiversity Art Residency',
      date: 'July - September 2024',
      type: 'Fellowship'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Participate</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 md:px-24 gap-6">
          {opportunities.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-green-100 rounded-full p-3 inline-block mb-4">
                {item.icon}
              </div>
              <span className="text-sm text-green-600 font-semibold mb-2 block">
                {item.type}
              </span>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <div className="flex items-center text-gray-600">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="text-sm">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Participate;