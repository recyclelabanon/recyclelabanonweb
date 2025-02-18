import { Briefcase, MessageSquare, BookOpen } from 'lucide-react';

const HireUs = () => {
  const services = [
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: 'Consultancy',
      items: [
        'Advisory',
        'Creative Ecology',
        'Circular Economy',
        'Data Collection',
        'Mapping and Visualisation'
      ],
      clients: ['AUB', 'MedWaves', 'Amaze Creative Studio']
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: 'Masterclasses and Speaking',
      items: ['Dutch University', 'GreenMena Network'],
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Workshops & Trainings',
      items: ['Custom workshops', 'Corporate training', 'Community programs'],
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Hire Us</h2>
        
        <div className="grid md:grid-cols-3 md:px-24 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-green-100 rounded-full p-4 inline-block mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li key={idx} className="text-gray-600">{item}</li>
                ))}
              </ul>
              {service.clients && (
                <div className="mt-6">
                  <h4 className="font-semibold mb-2">Previous Clients:</h4>
                  <p className="text-gray-600">{service.clients.join(', ')}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HireUs;