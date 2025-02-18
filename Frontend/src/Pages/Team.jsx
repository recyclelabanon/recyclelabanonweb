import Hero from '../components/Hero';
import Section from '../components/Section';
import TeamMember from '../components/TeamMember';
import Partners from '../components/Partners';
import { useNavigate } from 'react-router-dom';

const Team = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/joinus");
    window.scrollTo(0, 0); // Scroll to top
  };
  const mainTeam = [
    {
      name: 'Dr. Rachel Rosenbaum',
      role: 'Regenerate Hub Product & Data Coordinator',
      description: 'An anthropologist at the University of Arizona, focusing on the politics of infrastructure & circular economy solutions.',
    },
    {
      name: 'Nariman Hamdan',
      role: 'EcoSouk Store Manager',
      description: 'An environmental activist, retailer & marathon runner with a resourceful passion for supporting communities. Active blood donor & volunteers with the Lebanese Red Cross & Civil Defense.',
    },
    {
      name: 'Kevin Matar',
      role: 'TerraPods Lead',
      description: 'An environmental architect & activist with a specialisation in Advanced Ecological Buildings & Biocities. Exploring materials, completed research programme on mycelium & construction waste.',
    },
  ];

  const advisoryBoard = [
    {
      name: 'Dr. Rembrandt Koppelaar',
      role: 'Head of Circular Economy - Research and Innovation Lead',
      description: "Senior expert in Circular Economy, Economics, Modelling, environmental material/product assessment, and techno-economic analysis. PhD from Imperial College London's Centre for Environmental Policy.",
    },
    {
      name: 'Chantale Fahmi',
      role: 'Edging Big Data thru Arts & Culture',
      description: "Lebanese photographer with masters in Art Criticism and Curatorial Studies. Documents social relations and nature's impact on human life.",
    },
    {
      name: "Ala'a Shehabi",
      role: 'Data Management Lead',
      description: 'British-born economics lecturer, activist and writer with PhD in Econometrics from Imperial College London. Deputy director of the Institute for Global Prosperity at University College London.',
    },
  ];

  const boardMembers = [
    {
      name: 'Joslin F. Kehdy',
      role: 'Founder & Director',
      description: 'Studied Mandarin Chinese in Guangzhou, managed operations of a design-build architectural engineering firm in Hawaii, and organized food & travel conferences between England & Lebanon.',
    },
    {
      name: 'Adla Kehdy',
      role: 'Secretary',
      description: 'Senior key account manager at Saba IP & Co with 10 years of experience in intellectual property services industry.',
    },
    {
      name: 'Antranik Arkanian',
      role: 'Treasurer',
      description: 'Specialized in human rights and democratization processes after a decade of experience in private sector business development.',
    },
  ];

  return (
    <div className="pt-16">
      <Hero
        title="Collective Exchange"
        subtitle="Meet the passionate individuals driving environmental change"
        backgroundImage="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <Section title="Work With Us">
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 hover:bg-green-100 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-green-800 mb-4">Join Our Team</h3>
              <p className="text-gray-700 mb-6">Be part of our mission to create sustainable change in Lebanon.</p>
              <button id="join-us" onClick={handleClick} className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors">
                View Open Positions
              </button>
            </div>
            <div className="bg-green-50 hover:bg-green-100 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-green-800 mb-4">Volunteer With Us</h3>
              <p className="text-gray-700 mb-6">Contribute your time and skills to make a difference.</p>
              <button id="join-us"
              onClick={handleClick} className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors">
                Explore Opportunities
              </button>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Core Team" dark>
        <div className="grid md:grid-cols-3 gap-8">
          {mainTeam.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </Section>

      <Section title="Advisory Board">
        <div className="grid md:grid-cols-3 gap-8">
          {advisoryBoard.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </Section>

      <Section title="Board Members" dark>
        <div className="grid md:grid-cols-3 gap-8">
          {boardMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </Section>
      <Partners />
    </div>
  );
};

export default Team