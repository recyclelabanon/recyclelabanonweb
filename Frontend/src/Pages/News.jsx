import Hero from "../components/Hero";
import News from "../components/News";

const Newsroom = () => {
  // Detailed dummy data with images
  const news = [
    {
      title: "New Recycling Initiative Launches in Beirut",
      description:
        "Our organization has partnered with local municipalities to launch a city-wide recycling program aimed at reducing landfill waste by 40% over the next two years.",
      date: "2024-03-15",
      image:
        "https://plus.unsplash.com/premium_photo-1683133531613-6a7db8847c72?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFJlY3ljbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Solar Power Project Reaches 50% Completion",
      description:
        "The community solar farm project in Mount Lebanon has successfully installed over 500 panels, providing clean energy to 200 households.",
      date: "2024-03-12",
      image:
        "https://plus.unsplash.com/premium_photo-1679917151937-1b9436e00af7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    },
    {
      title: "Coastal Cleanup Day Attracts 500 Volunteers",
      description:
        "Annual beach cleanup event removed over 2 tons of waste from Lebanon's coastline, with participation from schools and local businesses.",
      date: "2024-03-10",
      image:
        "https://images.unsplash.com/photo-1499898595565-f424ed1d075c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q29hc3RhbCUyMENsZWFudXAlMjBEYXl8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Eco-Friendly Packaging Workshop Success",
      description:
        "Over 100 local businesses attended our sustainable packaging workshop, learning about biodegradable alternatives to plastic.",
      date: "2024-03-08",
      image:
        "https://images.unsplash.com/photo-1650963715806-4de14c148583?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RWNvJTIwRnJpZW5kbHklMjBQYWNrYWdpbmd8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Urban Garden Project Expands",
      description:
        "Three new community gardens opened in Beirut, bringing our total urban green spaces to 15 locations across the city.",
      date: "2024-03-05",
      image:
        "https://plus.unsplash.com/premium_photo-1664303673581-d8fb32e890e6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VXJiYW4lMjBHYXJkZW4lMjBQcm9qZWN0fGVufDB8fDB8fHww",
    },
  ];

  return (
    <div className="pt-16">
      <Hero
            title="Eco Newsrooms"
            subtitle="Stay Updated with Our Latest Environmental Initiatives."
            backgroundImage="https://media.istockphoto.com/id/1428321006/photo/glass-globe-on-newspapers.webp?a=1&b=1&s=612x612&w=0&k=20&c=og620HHVNzJbPQ9dypqoimG9QRmNR7Tsm8TQHXft-D8="
          />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-20">
          <News news={news} />
        </div>
      </div>
    </div>
  );
};

export default Newsroom;
