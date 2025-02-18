import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <div className="relative h-full">
          {/* Image slider */}
          <img
            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80"
            alt="Environmental sustainability"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-white px-4">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            A circular system change to re-psyc&apos;le our mindset towards action
          </h1>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full flex items-center justify-center mx-auto transition-colors">
            Learn More
            <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;