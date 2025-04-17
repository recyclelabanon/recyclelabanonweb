// ------------------------------
// Provided Data Arrays (with formSchema removed)
// ------------------------------
const currentEvents = [
  {
    id: 1,
    title: "Beirut Green Week",
    description:
      "Beirut Green Week is an immersive, week-long celebration dedicated to sustainability and environmental innovation. This festival brings together a vibrant community of eco-enthusiasts to participate in interactive workshops, explore bustling markets featuring green products, and engage with expert panels discussing urban ecology challenges and solutions. Attendees will experience creative exhibitions and dynamic events that inspire environmental stewardship throughout Downtown Beirut.",
    start: "2024-04-15",
    end: "2024-04-22",
    location: "Downtown Beirut",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&auto=format",
    status: "current",
    gallery: [
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&auto=format",
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&auto=format"
    ],
    video: "https://www.youtube.com/embed/urban-ecology",
    timeline: [
      { step: "Opening Ceremony", date: "2024-04-15" },
      { step: "Main Exhibition", date: "2024-04-16" },
      { step: "Networking Day", date: "2024-04-20" }
    ],
    capacity: 500,
    registered: 427,
    registrationStatus: "Open"
  },
  {
    id: 2,
    title: "Tech for Good Summit",
    description:
      "Tech for Good Summit is an inspiring assembly where forward-thinking innovators and technology leaders converge to explore and implement digital solutions that drive transformative social change. The summit offers insightful keynote presentations, interactive panels, and collaborative workshops, encouraging creative problem-solving and fostering partnerships that leverage technology to address pressing social issues, empower communities remarkably, and promote a more equitable future.",
    start: "2024-04-16",
    end: "2024-04-23",
    location: "Beirut Digital District",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format",
    status: "current",
    gallery: [],
    video: null,
    timeline: [],
    capacity: 350,
    registered: 312,
    registrationStatus: "Open"
  },
  {
    id: 3,
    title: "Eco-Friendly Startup Expo",
    description:
      "Eco-Friendly Startup Expo is an engaging exhibition dedicated to showcasing pioneering startups that are revolutionizing sustainability and green innovation. This event provides a platform for emerging entrepreneurs to present cutting-edge eco-friendly products and solutions. Attendees will have the opportunity to network with industry experts, discover innovative technologies, and explore creative strategies designed to foster a greener future while supporting responsible business practices.",
    start: "2024-04-18",
    end: "2024-04-25",
    location: "City Center Mall",
    image:
      "https://images.unsplash.com/photo-1497493292307-31c376b6e479?w=600&auto=format",
    status: "current",
    gallery: [],
    video: null,
    timeline: [],
    capacity: 200,
    registered: 175,
    registrationStatus: "Open"
  },
  {
    id: 4,
    title: "Digital Art Festival",
    description:
      "Digital Art Festival is a vibrant celebration of creativity and technology, offering an interactive exhibition that brings together digital artists from across the globe. The festival features immersive installations, dynamic live demonstrations, and collaborative projects that push the boundaries of digital expression. Visitors will explore a diverse array of art forms, engage with innovative creators, and experience cutting-edge digital media in a stimulating, culturally rich environment.",
    start: "2024-04-17",
    end: "2024-04-24",
    location: "Art Hub Beirut",
    image:
      "https://images.unsplash.com/photo-1509529711801-deac231925ac?w=600&auto=format",
    status: "current",
    gallery: [],
    video: null,
    timeline: [],
    capacity: 600,
    registered: 540,
    registrationStatus: "Open"
  },
  {
    id: 5,
    title: "Beirut Food Festival",
    description:
      "Beirut Food Festival is a lively gastronomic event celebrating the rich diversity of Lebanese and international cuisines. Attendees can indulge in a wide array of culinary delights, enjoy live cooking shows, and experience interactive food demonstrations from renowned chefs. The festival creates a vibrant atmosphere where food lovers gather to explore new flavors, share cultural traditions, and appreciate the art of cooking in an engaging and festive environment.",
    start: "2024-04-19",
    end: "2024-04-24",
    location: "Downtown Beirut",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&auto=format",
    status: "current",
    gallery: [],
    video: null,
    timeline: [],
    capacity: 800,
    registered: 710,
    registrationStatus: "Open"
  }
];

const upcomingEvents = [
  {
    id: 6,
    title: "Mediterranean Cleanup Initiative",
    description:
      "Mediterranean Cleanup Initiative is an impactful coastal environmental action day dedicated to revitalizing the shoreline across five local beaches. Participants will engage in extensive waste sorting activities, take part in recycling workshops, and work collectively to remove pollutants from the marine environment. This initiative not only promotes community responsibility and environmental awareness but also fosters a spirit of cooperation to preserve the natural beauty of Jounieh Bay for future generations.",
    start: "2025-05-05",
    end: "2026-05-05",
    location: "Jounieh Bay",
    image:
      "https://images.unsplash.com/photo-1570804439978-9fddf2a5b978?w=600&auto=format",
    status: "upcoming",
    gallery: [],
    video: null,
    timeline: [],
    capacity: 200,
    registered: 143,
    registrationStatus: "Open"
  },
  {
    id: 7,
    title: "AI & Ethics Conference",
    description:
      "AI & Ethics Conference is a thought-provoking event that delves into the complex ethical dimensions of artificial intelligence and its profound impact on society. Industry experts, ethicists, and technologists will engage in dynamic discussions and interactive panels to examine issues such as bias, privacy, and accountability. The conference aims to foster a balanced dialogue, promote responsible AI development, and inspire innovative solutions for emerging ethical challenges in technology.",
    start: "2024-05-10",
    end: "2024-05-12",
    location: "Lebanese University",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format",
    status: "upcoming",
    gallery: [],
    video: null,
    timeline: [],
    capacity: 250,
    registered: 89,
    registrationStatus: "Open"
  },
  {
    id: 8,
    title: "Sustainable Fashion Workshop",
    description:
      "Sustainable Fashion Workshop is an interactive learning experience designed for creative individuals passionate about eco-friendly design. During this hands-on workshop, participants will learn innovative techniques to transform recycled materials into stylish, sustainable fashion pieces. Experts in sustainable design will guide attendees through material selection, pattern design, and upcycling methods, inspiring a commitment to environmental responsibility and creative expression within modern fashion.",
    start: "2024-05-15",
    end: "2024-05-15",
    location: "Beirut Fashion Hub",
    image:
      "https://images.unsplash.com/photo-1521334884684-d80222895322?w=600&auto=format",
    status: "upcoming",
    gallery: [],
    video: null,
    timeline: [],
    capacity: 150,
    registered: 80,
    registrationStatus: "Open"
  },
  {
    id: 9,
    title: "Green Energy Expo",
    description:
      "Green Energy Expo is a comprehensive exhibition dedicated to presenting the most recent advancements in renewable energy technologies. This event gathers industry pioneers, innovative startups, and expert researchers to demonstrate cutting-edge solutions that harness sustainable power sources. Visitors will explore interactive displays, gain insights through expert talks, and discover emerging trends that are shaping the future of clean energy and contributing to a greener, more sustainable global landscape.",
    start: "2024-05-20",
    end: "2024-05-22",
    location: "Expo Center Beirut",
    image:
      "https://images.unsplash.com/photo-1573164574231-7c1f4f5a5b14?w=600&auto=format",
    status: "upcoming",
    gallery: [],
    video: null,
    timeline: [],
    capacity: 300,
    registered: 200,
    registrationStatus: "Open"
  },
  {
    id: 10,
    title: "Urban Farming Conference",
    description:
      "Urban Farming Conference is a forward-thinking gathering that focuses on advancing urban agriculture and sustainable food systems in metropolitan areas. The conference brings together experts, urban farmers, and policymakers to explore innovative practices, share research insights, and discuss emerging trends in sustainable food production. Participants will benefit from interactive sessions, practical workshops, and collaborative networking opportunities aimed at transforming urban landscapes through agricultural innovation.",
    start: "2024-05-25",
    end: "2024-05-26",
    location: "City University",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=600&auto=format",
    status: "upcoming",
    gallery: [],
    video: null,
    timeline: [],
    capacity: 400,
    registered: 250,
    registrationStatus: "Open"
  },
  {
    id: 11,
    title: "Recycling Innovation Summit",
    description:
      "Recycling Innovation Summit is a dynamic event that brings together industry leaders, environmental experts, and creative thinkers to explore groundbreaking recycling methods and sustainable waste management practices. The summit will feature interactive sessions, in-depth panel discussions, and hands-on workshops designed to inspire new ideas and practical solutions for reducing waste. Attendees will leave with innovative strategies to transform recycling processes and enhance community sustainability efforts.",
    start: "2024-05-28",
    end: "2024-05-28",
    location: "Innovation Hub",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&auto=format",
    status: "upcoming",
    gallery: [],
    video: null,
    timeline: [],
    capacity: 350,
    registered: 180,
    registrationStatus: "Open"
  }
];

const pastEvents = [
  {
    id: 12,
    title: "Solar Power Symposium",
    description:
      "Solar Power Symposium is an annual conference that brings together experts, researchers, and industry leaders to explore the latest trends in renewable energy adoption within urban environments. The symposium focuses on solar energy innovations, sustainable infrastructure solutions, and practical strategies for integrating clean power into cityscapes. Through keynote speeches, technical sessions, and networking opportunities, participants are encouraged to drive forward the transition towards a greener, more energy-efficient future.",
    start: "2023-11-20",
    end: "2023-11-22",
    location: "Lebanese American University",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&auto=format",
    status: "past",
    gallery: [],
    video: null,
    timeline: [],
    capacity: 300,
    registered: 278,
    registrationStatus: "Closed"
  },
  {
    id: 13,
    title: "Historic Preservation Forum",
    description:
      "Historic Preservation Forum is a comprehensive discussion platform dedicated to exploring both the challenges and triumphs associated with preserving historical sites. This engaging forum brings together experts, heritage professionals, and community advocates to share insights, best practices, and innovative approaches for conserving cultural landmarks. Through interactive panels and in-depth discussions, participants examine the importance of maintaining historical integrity while adapting to modern urban development pressures.",
    start: "2023-10-10",
    end: "2023-10-12",
    location: "Downtown Beirut",
    image:
      "https://images.unsplash.com/photo-1581091012184-98f3b3d7cc15?w=600&auto=format",
    status: "past",
    gallery: [],
    video: null,
    timeline: [],
    capacity: 250,
    registered: 220,
    registrationStatus: "Closed"
  },
  {
    id: 14,
    title: "Cultural Heritage Workshop",
    description:
      "Cultural Heritage Workshop is a hands-on event designed to explore and preserve local cultural traditions through the dynamic lens of art and history. Participants will engage in creative activities, learn about traditional techniques, and explore the rich tapestry of cultural narratives that define the community. This workshop aims to inspire a deeper appreciation for cultural heritage while fostering skills that connect historical practices with contemporary artistic expressions.",
    start: "2023-09-15",
    end: "2023-09-15",
    location: "Cultural Center",
    image:
      "https://images.unsplash.com/photo-1561484938-30f0ddad3cc8?w=600&auto=format",
    status: "past",
    gallery: [],
    video: null,
    timeline: [],
    capacity: 150,
    registered: 130,
    registrationStatus: "Closed"
  },
  {
    id: 15,
    title: "Renewable Energy Workshop",
    description:
      "Renewable Energy Workshop is an interactive, practical session focused on the installation and maintenance of modern renewable energy systems. Participants will receive step-by-step training on solar panel setup, wind turbine operation, and other sustainable energy technologies. The workshop emphasizes hands-on learning, safety protocols, and troubleshooting techniques to ensure effective system performance. Attendees will gain valuable skills and insights to confidently adopt renewable energy solutions in both residential and commercial settings.",
    start: "2023-08-05",
    end: "2023-08-05",
    location: "Tech Hub",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&auto=format",
    status: "past",
    gallery: [],
    video: null,
    timeline: [],
    capacity: 200,
    registered: 190,
    registrationStatus: "Closed"
  },
  {
    id: 16,
    title: "Local Arts Fair",
    description:
      "Local Arts Fair is a vibrant celebration dedicated to showcasing the rich diversity of local art and craftsmanship. This event brings together artists, artisans, and creative communities to present a wide range of exhibitions, interactive installations, and live demonstrations. Visitors are invited to immerse themselves in the cultural spirit of the region, experience unique artistic expressions, and appreciate the intricate skill and creativity that define local craftsmanship traditions.",
    start: "2023-07-20",
    end: "2023-07-21",
    location: "Art District",
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&auto=format",
    status: "past",
    gallery: [],
    video: null,
    timeline: [],
    capacity: 300,
    registered: 260,
    registrationStatus: "Closed"
  }
];

// ------------------------------
// Normalize Data to a Common Structure
// ------------------------------

// Format a date object to a readable string.
const formatDate = (date) => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Map a provided event to our simple event structure.
// We use the event's start date for the "date" field and assign a default "time" value.
const mapEvent = (event, defaultCategory = "General") => {
  return {
    id: event.id,
    title: event.title,
    date: formatDate(new Date(event.start)),
    time: "All Day", // Default value (adjust as needed)
    location: event.location,
    image: event.image,
    category: defaultCategory,
    // Convert "current" to "ongoing" to match the sample structure.
    status: event.status === "current" ? "ongoing" : event.status,
  };
};

// Combine all events into one array using the mapEvent helper.
export const events = [
  ...currentEvents.map((e) => mapEvent(e)),
  ...upcomingEvents.map((e) => mapEvent(e)),
  ...pastEvents.map((e) => mapEvent(e)),
];

// ------------------------------
// Enrich Event Details
// ------------------------------

// getEventById returns the basic event details from the events array and adds extra info.
export const getEventById = (id) => {
  const event = events.find((event) => event.id === id);
  if (!event) return undefined;

  return {
    ...event,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl sit amet nisl.",
    organizer: "EventHorizon Team",
    speakers: ["John Doe", "Jane Smith", "Robert Johnson"],
    attendees: Math.floor(Math.random() * 500) + 100,
    website: "https://example.com/events/" + id,
    timeline: [
      {
        id: 1,
        time: "08:00 AM",
        title: "Registration & Breakfast",
        description:
          "Check in and enjoy a complimentary breakfast with other attendees",
        completed: event.status === "past" || event.status === "ongoing",
      },
      {
        id: 2,
        time: "09:00 AM",
        title: "Opening Keynote",
        description: "Welcome speech and introduction to the event theme",
        completed: event.status === "past" || event.status === "ongoing",
      },
      {
        id: 3,
        time: "10:30 AM",
        title: "Workshop Session 1",
        description:
          "Interactive workshops in different tracks based on your interests",
        completed: event.status === "past",
      },
      {
        id: 4,
        time: "12:00 PM",
        title: "Networking Lunch",
        description:
          "Enjoy lunch while networking with speakers and other attendees",
        completed: event.status === "past",
      },
      {
        id: 5,
        time: "02:00 PM",
        title: "Panel Discussion",
        description:
          "Industry leaders discuss the future trends and challenges",
        completed: event.status === "past",
      },
      {
        id: 6,
        time: "04:00 PM",
        title: "Closing Remarks & Networking",
        description: "Wrap-up session followed by drinks and networking",
        completed: event.status === "past",
      },
    ],
  };
};

// ------------------------------
// Filter Functions
// ------------------------------

// Filter events by status.
export const getUpcomingEvents = () =>
  events.filter((event) => event.status === "upcoming");

export const getOngoingEvents = () =>
  events.filter((event) => event.status === "ongoing");

export const getPastEvents = () =>
  events.filter((event) => event.status === "past");
