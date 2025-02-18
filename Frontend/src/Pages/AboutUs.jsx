import Hero from '../components/Hero';
import Section from '../components/Section';

const AboutUs = () => {
  return (
    <div className="pt-16">
      <Hero
        title="Founding Roots"
        subtitle="Catalyzing systemic change through creative ecology since 2015"
        backgroundImage="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2013&q=80"
      />

      <Section title="Our Mission">
        <div className="prose prose-lg max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed mb-6">
            We steward an interconnected approach to tackle the cross-sectorial ecology crisis.
            Established in 2015, Recycle Lebanon is a trailblazing Lebanese NGO on a mission to catalyse
            systemic change through creative ecology.
          </p>
        </div>
      </Section>

      <Section title="Our Vision" dark>
        <div className="prose prose-lg prose-invert max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed mb-6">
            Recycle Lebanon stewards a holistic and action-oriented approach, tackling the cross-sectorial ecology
            crisis through four interconnected programmes emphasising social justice, access to data, conscious
            consumption, creative residency and agroecology bio-design alternatives.
          </p>
          <p className="text-lg leading-relaxed">
            We aim to model a circular economy and demonstrate the viability of regenerative practices to inspire
            others with practical, and hands-on examples to join us in growing a circular future.
          </p>
        </div>
      </Section>

      <Section title="Impact Statement">
        <div className="prose prose-lg max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed mb-6">
            As a committed advocate for transformative impact, Recycle Lebanon&apos;s holistic programmes shape our
            interconnected future, fostering resilience and cultivating ecological tools for collective liberation.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-green-50 hover:bg-green-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-4">RegenerateHub</h3>
              <p className="text-gray-700">
                Propels data driven community engagement, fostering climate-driven practices and resilient ecosystems.
              </p>
            </div>
            <div className="bg-green-50 hover:bg-green-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-4">EcoSouk</h3>
              <p className="text-gray-700">
                Nurtures conscious living and local economies, connecting makers and consumers.
              </p>
            </div>
            <div className="bg-green-50 hover:bg-green-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-4">TerraPods</h3>
              <p className="text-gray-700">
                Fosters innovation and self sufficiency through STEAM-driven collaboration.
              </p>
            </div>
            <div className="bg-green-50 hover:bg-green-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Dive Into Action</h3>
              <p className="text-gray-700">
                Sparks a transformative shift toward environmental conscious actions.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Our Story" dark>
        <div className="prose prose-lg prose-invert max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed mb-6">
            The waste crisis was the last [plastic] straw in a crippling state where water, electricity, air quality, and
            basic rights dance in complacent corruption.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Recycle Lebanon - a pun to re[psy]cle the system from mindsets to actions.
          </p>
          <p className="text-lg leading-relaxed">
            The name of the NGO Recycle Lebanon is a pun, encapsulating our mission to re[psy]cle the system,
            fostering a shift from conventional linear mindsets towards actions that embrace an environmentally
            conscious approach.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default AboutUs