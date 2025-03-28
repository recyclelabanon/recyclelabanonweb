import { Quote as QuoteIcon } from 'lucide-react';
import img from '/PageImg/breakefreefromplastic.jpeg';

const Quote = () => {
  return (
    <section className="relative h-[600px] overflow-hidden group mt-8">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 transform-gpu transition-transform duration-300">
        <img
          src={img}
          alt="Environmental activism"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 transition-opacity duration-300 group-hover:bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 hover:border-white/30 transition-all duration-500">
            <div className="max-w-3xl mx-auto text-center">
              <QuoteIcon className="h-16 w-16 mx-auto mb-8 opacity-80 animate-float" />
              
              <blockquote className="text-2xl md:text-3xl font-light mb-8 leading-relaxed transition-all duration-300 hover:scale-[1.02]">
                <span className="bg-gradient-to-r from-green-300 to-cyan-300 bg-clip-text text-transparent">
                  The organisation Kehdy founded during Lebanon&apos;s waste crisis presented a beacon of hope for the
                  region with innovative solutions and a strong social base for their work.
                </span>
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <cite className="text-lg font-medium border-l-2 border-white/30 pl-4">
                  Break Free From Plastic
                </cite>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      
    </section>
  );
};

export default Quote;