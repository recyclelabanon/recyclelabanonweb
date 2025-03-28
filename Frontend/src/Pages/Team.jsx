import Hero from '../components/Hero';
import Section from '../components/Section';
import TeamMember from '../components/TeamMember';
import Partners from '../components/Partners';
import { useNavigate } from 'react-router-dom';

const Team = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/joinus");
    window.scrollTo(0, 0);
  };

  const mainTeam = [
    {
      name: 'Dr. Rachel Rosenbaum',
      role: 'Regenerate Hub Product & Data Coordinator',
      description: 'An anthropologist at the University of Arizona, focusing on the politics of infrastructure & circular economy solutions.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Nariman Hamdan',
      role: 'EcoSouk Store Manager',
      description: 'An environmental activist, retailer & marathon runner with a resourceful passion for supporting communities. Active blood donor & volunteers with the Lebanese Red Cross & Civil Defense.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Kevin Matar',
      role: 'TerraPods Lead',
      description: 'An environmental architect & activist with a specialisation in Advanced Ecological Buildings & Biocities. Exploring materials, completed research programme on mycelium & construction waste.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
  ];

  const advisoryBoard = [
    {
      name: 'Dr. Rembrandt Koppelaar',
      role: 'Head of Circular Economy - Research and Innovation Lead',
      description: "Senior expert in Circular Economy, Economics, Modelling, environmental material/product assessment, and techno-economic analysis. PhD from Imperial College London's Centre for Environmental Policy.",
      image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Chantale Fahmi',
      role: 'Edging Big Data thru Arts & Culture',
      description: "Lebanese photographer with masters in Art Criticism and Curatorial Studies. Documents social relations and nature's impact on human life.",
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: "Ala'a Shehabi",
      role: 'Data Management Lead',
      description: 'British-born economics lecturer, activist and writer with PhD in Econometrics from Imperial College London. Deputy director of the Institute for Global Prosperity at University College London.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
  ];

  const boardMembers = [
    {
      name: 'Joslin F. Kehdy',
      role: 'Founder & Director',
      description: 'Studied Mandarin Chinese in Guangzhou, managed operations of a design-build architectural engineering firm in Hawaii, and organized food & travel conferences between England & Lebanon.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Adla Kehdy',
      role: 'Secretary',
      description: 'Senior key account manager at Saba IP & Co with 10 years of experience in intellectual property services industry.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Antranik Arkanian',
      role: 'Treasurer',
      description: 'Specialized in human rights and democratization processes after a decade of experience in private sector business development.',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
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
            <div className="bg-green-50 p-8 rounded-lg transition-transform duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-green-800 mb-4">Join Our Team</h3>
              <p className="text-gray-700 mb-6">Be part of our mission to create sustainable change in Lebanon.</p>
              <button 
                onClick={handleClick} 
                className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                View Open Positions
              </button>
            </div>
            <div className="bg-green-50 p-8 rounded-lg transition-transform duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-green-800 mb-4">Volunteer With Us</h3>
              <p className="text-gray-700 mb-6">Contribute your time and skills to make a difference.</p>
              <button 
                onClick={handleClick} 
                className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Explore Opportunities
              </button>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Core Team" dark>
        <div className="flex flex-wrap justify-center gap-12">
          {mainTeam.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </Section>

      <Section title="Advisory Board" className='content-center'> 
        <div className="flex flex-wrap justify-center gap-12">
          {advisoryBoard.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </Section>

      <Section title="Board Members" dark>
        <div className="flex flex-wrap justify-center gap-12">
          {boardMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </Section>
      
      <Partners />
    </div>
  );
};

export default Team;