import { Leaf, Users, Heart, Sprout } from 'lucide-react';

const Mission = () => {
  const values = [
    { icon: <Leaf className="h-8 w-8" />, text: 'Empowerment' },
    { icon: <Users className="h-8 w-8" />, text: 'Abundance' },
    { icon: <Heart className="h-8 w-8" />, text: 'Liberation' },
    { icon: <Sprout className="h-8 w-8" />, text: 'Solidarity' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Ecological Tools for Collective Action
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="bg-green-100 rounded-full p-4 inline-block mb-4">
                {value.icon}
              </div>
              <h3 className="font-semibold">{value.text}</h3>
            </div>
          ))}
        </div>

        <p className="text-lg text-center max-w-3xl mx-auto">
          Ecotropics stewards a holistic and action-oriented approach, tackling the cross-sectorial ecology
          crisis through four interconnected programmes emphasising social justice, access to data, conscious
          consumption, art residency and agroecology bio-design alternatives.
        </p>
      </div>
    </section>
  );
};

export default Mission;