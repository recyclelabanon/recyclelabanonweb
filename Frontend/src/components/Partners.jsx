import { useNavigate } from "react-router-dom";
import Hero from './Hero';
import Section from './Section';
import PartnerGrid from './PartnerGrid';

const Partners = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/joinus");
    window.scrollTo(0, 0); // Scroll to top
  };
  const coalitions = [
    { name: 'Break Free From Plastic', category: 'coalition' },
    { name: 'Chimica Verde Bionet', category: 'coalition' },
    { name: 'IPEN', category: 'coalition' },
    { name: 'GAIA', category: 'coalition' },
    { name: 'DAWERRA', category: 'coalition' },
  ];

  const donors = [
    { name: 'COBIAC', category: 'donor' },
    { name: 'Mercy Corp', category: 'donor' },
    { name: 'March', category: 'donor' },
    { name: 'Talaya', category: 'donor' },
    { name: 'The Embassy of Finland', category: 'donor' },
    { name: 'EcoWise', category: 'donor' },
    { name: 'CLIMAS', category: 'donor' },
    { name: 'The Embassy of Japan', category: 'donor' },
    { name: 'The Asfari Foundation', category: 'donor' },
  ];

  const governmentPartners = [
    { name: 'Ministry of Environment', category: 'government' },
    { name: 'Ministry of Industry', category: 'government' },
  ];

  const projectPartners = [
    { name: 'Imperium Code', category: 'project' },
    { name: 'Acted Lebanon', category: 'project' },
    { name: 'UNDP', category: 'project' },
    { name: 'University of Arizona Environment', category: 'project' },
    { name: 'RELIEF', category: 'project' },
    { name: 'AUB ESDU', category: 'project' },
    { name: 'AUB Neighbourhood Initiative', category: 'project' },
    { name: "Mashrou'Leila", category: 'project' },
    { name: 'GreenPeace', category: 'project' },
    { name: 'Colonel Brewery', category: 'project' },
    { name: 'Falamanke', category: 'project' },
  ];

  return (
    <div className="pt-16">
      <Hero
        title="Allies and Benefactors"
        subtitle="Our partners in creating sustainable change"
        backgroundImage="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
      />

      <Section title="Our Network">
        <div className="max-w-7xl mx-auto">
          <PartnerGrid title="Coalitions" partners={coalitions} />
          <PartnerGrid title="Government Partners" partners={governmentPartners} />
          <PartnerGrid title="Project Partners" partners={projectPartners} />
          <PartnerGrid title="Donors" partners={donors} />
        </div>
      </Section>

      <Section title="Join Our Network" dark>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg mb-8">
          We&apos;re always looking to collaborate with organizations that share our vision for a sustainable future.
        </p>
        <button
          id="join-us"
          onClick={handleClick}
          className="bg-green-600 cursor-pointer text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors"
        >
          Become a Partner
        </button>
      </div>
    </Section>
    </div>
  );
};

export default Partners