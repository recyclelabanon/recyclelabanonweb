import Hero from '../components/Hero';
import Section from '../components/Section';
import Program from '../components/Program';

const Initiatives = () => {
  const programs = [
    {
      title: 'RegenerateHub',
      description: 'RegenerateHub circular economy platform aims to engage community action by data visualising access to nature-based alternatives. With RegenerateHub, the organisation provides valuable data and insights that drive systemic change and promote transparent practices.',
      image: 'https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1951&q=80',
      accomplishments: [
        { label: 'Data Points Cleaned', value: '10,000+' },
        { label: 'Data Points Mapped', value: '7,000+' },
        { label: 'Surveyed Entries', value: '3,027' },
        { label: 'Validated Data', value: '1,522' },
      ],
      callToActions: [
        { label: 'Access Data Platform', action: 'explore' },
        { label: 'Become a User', action: 'register' },
      ],
    },
    {
      title: 'EcoSouk',
      description: 'An eco-conscious marketplace offering access to reusable, nature based and plastic-free products with a refill bar on tap. Packed with over 150 local producers and change makers showcasing artisanal crafts, selfcare and botanical remedies.',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80',
      accomplishments: [
        { label: 'Local Producers', value: '150+' },
        { label: 'Workshops Held', value: '50' },
        { label: 'Trees Distributed', value: '150' },
        { label: 'Plastic Bags Diverted', value: '6,000' },
      ],
      callToActions: [
        { label: 'Visit EcoSouk', action: 'visit' },
        { label: 'Become a Producer', action: 'register' },
      ],
    },
    {
      title: 'TerraPods',
      description: 'A hub for creative ecology, integrating agroecology, bio-design, and the arts in a biodiverse space featuring farmland, food forests, medicinal and dye gardens.',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
      accomplishments: [
        { label: 'Land Area', value: '6,000m²' },
        { label: 'Plants Farmed', value: '2,000' },
        { label: 'Produce Harvested', value: '2,000kg' },
        { label: 'Workers Hired', value: '20' },
      ],
      callToActions: [
        { label: 'Volunteer on the Farm', action: 'volunteer' },
        { label: 'Apply for Residency', action: 'apply' },
      ],
    },
    {
      title: 'Dive Into Action',
      description: 'A policy and empowerment programme with zero waste clean ups, balaplastic transitions, food waste events and native planting initiatives.',
      image: 'https://images.unsplash.com/photo-1618477462146-050d2767eac4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80',
      accomplishments: [
        { label: 'Waste Sorted', value: '800 tons' },
        { label: 'Clean Ups', value: '200' },
        { label: 'Volunteers', value: '8,000' },
        { label: 'Plastic-free Meals', value: '16,000' },
      ],
      callToActions: [
        { label: 'Join a Clean Up', action: 'join' },
        { label: 'Start a Campaign', action: 'start' },
      ],
    },
  ];

  return (
    <div className="pt-16">
      <Hero
        title="Ecological Programmes"
        subtitle="Fostering sustainable change through interconnected initiatives"
        backgroundImage="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2013&q=80"
      />

      <Section title="Our Programs">
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Program key={index} {...program} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Initiatives