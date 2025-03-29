import Hero from "../components/Hero";
import Event from "../components/Event";

const Events = () => {
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

  return (
    <div className="pt-16">
      <Hero
        title="Join Our Events"
        subtitle="Be part of something bigger - connect, learn, and make an impact."
        backgroundImage="https://image.shutterstock.com/image-photo/corporate-development-seminar-business-people-260nw-2485558527.jpg"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-20">
          <Event upcomingEvents={upcomingEvents} pastEvents={pastEvents} />
        </div>
      </div>
    </div>
  );
};

export default Events;
