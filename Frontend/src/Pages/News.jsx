import Blog from "../components/Blog";
import Event from "../components/Event";
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

  const upcomingEvents = [
    {
      title: "Sustainable Living Expo",
      description:
        "Join us for a 3-day exhibition featuring the latest in green technology, sustainable fashion, and eco-friendly home solutions.",
      date: "2024-04-20",
      location: "Beirut Forum, Downtown",
      image:
        "https://plus.unsplash.com/premium_photo-1739145088586-eb1042a3be9e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFN1c3RhaW5hYmxlJTIwTGl2aW5nJTIwRXhwb3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Tree Planting Day",
      description:
        "Help us plant 1000 native trees in the Chouf Reserve. All equipment and training provided. Families welcome!",
      date: "2024-04-22",
      location: "Chouf Biosphere Reserve",
      image:
        "https://plus.unsplash.com/premium_photo-1661306439777-cb0bd3cb984a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VHJlZSUyMFBsYW50aW5nJTIwRGF5fGVufDB8fDB8fHww",
    },
  ];

  const pastEvents = [
    {
      title: "Green Energy Workshop",
      description:
        "Hands-on workshop teaching solar panel installation and maintenance, attended by 150 participants.",
      date: "2023-09-15",
      location: "Beirut Technical Institute",
      image:
        "https://plus.unsplash.com/premium_photo-1716385892480-be9089767f4a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEdyZWVuJTIwRW5lcmd5JTIwV29ya3Nob3B8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Eco-Entrepreneur Summit",
      description:
        "Annual conference connecting green startups with investors, featuring 50 exhibitors and 20 keynote speakers.",
      date: "2023-11-10",
      location: "Beirut Marina",
      image:
        "https://plus.unsplash.com/premium_photo-1681131451273-c7605c51e06e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RWNvJTIwRW50cmVwcmVuZXVyJTIwU3VtbWl0fGVufDB8fDB8fHww",
    },
  ];

  const blogs = [
    {
      title: "The Future of Urban Sustainability",
      description:
        "Exploring innovative solutions for green cities, from vertical gardens to smart waste management systems. Learn how urban areas can become more sustainable and environmentally friendly.",
      date: "2024-03-01",
      author: "Lina Khoury",
      image:
        "https://images.unsplash.com/photo-1556983852-43bf21186b2a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VGhlJTIwRnV0dXJlJTIwb2YlMjBVcmJhbiUyMFN1c3RhaW5hYmlsaXR5fGVufDB8fDB8fHww",
    },
    {
      title: "Zero-Waste Kitchen Guide",
      description:
        "Practical tips for reducing food waste and creating a sustainable kitchen environment. Discover how small changes in your daily routine can make a big impact on the environment.",
      date: "2024-02-25",
      author: "Omar Fakhoury",
      image:
        "https://plus.unsplash.com/premium_photo-1681492110487-501c13eb596f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8WmVybyUyMFdhc3RlJTIwS2l0Y2hlbiUyMEd1aWRlfGVufDB8fDB8fHww",
    },
    {
      title: "Renewable Energy in Lebanon",
      description:
        "Analysis of current renewable energy adoption and future potential in the Lebanese context. Understand the challenges and opportunities in transitioning to renewable energy sources.",
      date: "2024-02-18",
      author: "Nour Hamade",
      image:
        "https://plus.unsplash.com/premium_photo-1679469727193-f8c4b31a2204?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmVuZXdhYmxlJTIwRW5lcmd5JTIwaW4lMjBMZWJhbm9ufGVufDB8fDB8fHww",
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
          <Event upcomingEvents={upcomingEvents} pastEvents={pastEvents} />
          <Blog blogs={blogs} />
        </div>

        
      </div>
    </div>
  );
};

export default Newsroom;
