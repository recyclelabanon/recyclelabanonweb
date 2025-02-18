import { ArrowRight, Users, ShoppingBag, Palette, Heart } from 'lucide-react';

const Work = () => {
  const programs = [
    {
      title: 'Social Justice',
      icon: <Users className="h-8 w-8" />,
      description: 'Data visualise a circular economy to strengthen nature based solutions',
      link: 'Explore Regenerate Hub Platform',
      image: 'https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?auto=format&fit=crop&q=80',
      tag: 'collective empowerment'
    },
    {
      title: 'Conscious Consumption',
      icon: <ShoppingBag className="h-8 w-8" />,
      description: "The region's first free-from & zero waste shop",
      link: 'Access Local Alternatives at EcoSouk',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80',
      tag: 'collective abundance'
    },
    {
      title: 'Creative Ecology',
      icon: <Palette className="h-8 w-8" />,
      description: 'Cultivate innovation with Self Sufficiency',
      link: 'Visit TerraPods in Baskinta',
      image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80',
      tag: 'collective liberation'
    },
    {
      title: 'Community Action',
      icon: <Heart className="h-8 w-8" />,
      description: 'It starts with you[th] empowerment and awareness raising',
      link: 'Transition BalaPlastic',
      image: 'https://plus.unsplash.com/premium_photo-1681505195930-388c317b7a76?q=80&w=1384&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tag: 'collective solidarity'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Work</h2>
        
        <div className="grid md:grid-cols-4 md:px-16 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 p-6 flex flex-col justify-end text-white">
                <span className="text-sm uppercase tracking-wider mb-2">{program.tag}</span>
                <div className="flex items-center gap-3 mb-3">
                  {program.icon}
                  <h3 className="text-2xl font-bold">{program.title}</h3>
                </div>
                <p className="mb-4">{program.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
                >
                  {program.link}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;