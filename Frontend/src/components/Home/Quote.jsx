import { Quote as QuoteIcon } from 'lucide-react';

const Quote = () => {
  return (
    <section className="bg-green-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <QuoteIcon className="h-12 w-12 mx-auto mb-6 opacity-50" />
          <blockquote className="text-2xl md:text-3xl font-light mb-6">
            The organisation Kehdy founded during Lebanon&apos;s waste crisis presented a beacon of hope for the
            region with innovative solutions and a strong social base for their work.
          </blockquote>
          <cite className="text-lg">― Break Free From Plastic</cite>
        </div>
      </div>
    </section>
  );
};

export default Quote;