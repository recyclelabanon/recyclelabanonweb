export const currentEvents = [
  {
    id: 1,
    title: "Beirut Green Week",
    description:
      "Week-long sustainability festival featuring workshops, markets, and expert panels on urban ecology.",
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
    formSchema: [
      {
        name: "fullName",
        label: "Full Name",
        type: "text",
        required: true,
        placeholder: "Enter your full name"
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        required: true,
        placeholder: "Enter your email"
      }
    ],
    registrationStatus: "Open"
  },
  {
    id: 2,
    title: "Tech for Good Summit",
    description:
      "A gathering of innovators using technology to drive positive social change.",
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
    formSchema: [
      {
        name: "fullName",
        label: "Full Name",
        type: "text",
        required: true
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        required: true
      }
    ],
    registrationStatus: "Open"
  },
  {
    id: 3,
    title: "Eco-Friendly Startup Expo",
    description:
      "Showcasing startups that focus on sustainability and green innovation.",
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
    formSchema: [
      {
        name: "fullName",
        label: "Full Name",
        type: "text",
        required: true
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        required: true
      }
    ],
    registrationStatus: "Open"
  },
  {
    id: 4,
    title: "Digital Art Festival",
    description:
      "An interactive exhibition featuring digital artists from around the world.",
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
    formSchema: [
      {
        name: "fullName",
        label: "Full Name",
        type: "text",
        required: true
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        required: true
      }
    ],
    registrationStatus: "Open"
  },
  {
    id: 5,
    title: "Beirut Food Festival",
    description:
      "A celebration of Lebanese and international cuisines with live cooking shows.",
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
    formSchema: [
      {
        name: "fullName",
        label: "Full Name",
        type: "text",
        required: true
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        required: true
      }
    ],
    registrationStatus: "Open"
  }
];

// Upcoming Events (at least 5)
export const upcomingEvents = [
  {
    id: 6,
    title: "Mediterranean Cleanup Initiative",
    description:
      "Coastal cleanup day across 5 beaches with waste sorting and recycling workshops.",
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
    formSchema: [
      {
        name: "fullName",
        label: "Full Name",
        type: "text",
        required: true
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        required: true
      },
      {
        name: "volunteerType",
        label: "Volunteer Type",
        type: "select",
        required: false,
        options: [
          { value: "beach", label: "Beach Cleanup" },
          { value: "sorting", label: "Waste Sorting" },
          { value: "education", label: "Education Team" }
        ]
      }
    ],
    registrationStatus: "Open"
  },
  {
    id: 7,
    title: "AI & Ethics Conference",
    description:
      "Exploring the ethical implications of artificial intelligence in society.",
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
    formSchema: [
      {
        name: "fullName",
        label: "Full Name",
        type: "text",
        required: true
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        required: true
      }
    ],
    registrationStatus: "Open"
  },
  {
    id: 8,
    title: "Sustainable Fashion Workshop",
    description:
      "Learn how to create eco-friendly fashion pieces from recycled materials.",
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
    formSchema: [
      {
        name: "fullName",
        label: "Full Name",
        type: "text",
        required: true
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        required: true
      }
    ],
    registrationStatus: "Open"
  },
  {
    id: 9,
    title: "Green Energy Expo",
    description:
      "Exhibition showcasing the latest in renewable energy technologies.",
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
    formSchema: [
      {
        name: "fullName",
        label: "Full Name",
        type: "text",
        required: true
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        required: true
      }
    ],
    registrationStatus: "Open"
  },
  {
    id: 10,
    title: "Urban Farming Conference",
    description:
      "A conference dedicated to the growth of urban agriculture and sustainable food systems.",
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
    formSchema: [
      {
        name: "fullName",
        label: "Full Name",
        type: "text",
        required: true
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        required: true
      }
    ],
    registrationStatus: "Open"
  },
  {
    id: 11,
    title: "Recycling Innovation Summit",
    description:
      "Summit focusing on innovative recycling methods and sustainable waste management.",
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
    formSchema: [
      {
        name: "fullName",
        label: "Full Name",
        type: "text",
        required: true
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        required: true
      }
    ],
    registrationStatus: "Open"
  }
];

// Past Events (at least 5)
export const pastEvents = [
  {
    id: 12,
    title: "Solar Power Symposium",
    description:
      "Annual conference on renewable energy adoption in urban environments.",
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
    formSchema: [],
    registrationStatus: "Closed"
  },
  {
    id: 13,
    title: "Historic Preservation Forum",
    description:
      "A forum discussing the challenges and successes in preserving historical sites.",
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
    formSchema: [],
    registrationStatus: "Closed"
  },
  {
    id: 14,
    title: "Cultural Heritage Workshop",
    description:
      "Workshop focused on preserving local cultural heritage through art and history.",
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
    formSchema: [],
    registrationStatus: "Closed"
  },
  {
    id: 15,
    title: "Renewable Energy Workshop",
    description:
      "Hands-on workshop on installing and maintaining renewable energy systems.",
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
    formSchema: [],
    registrationStatus: "Closed"
  },
  {
    id: 16,
    title: "Local Arts Fair",
    description:
      "Celebration of local art and craftsmanship featuring numerous exhibitions.",
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
    formSchema: [],
    registrationStatus: "Closed"
  }
];

// Combine all events into one array for convenience
export const allEvents = [
  ...currentEvents,
  ...upcomingEvents,
  ...pastEvents
];

// Helper function to filter events based on the current date
export const getFilteredEvents = () => {
  const now = new Date();
  return {
    current: currentEvents.filter(
      (e) => new Date(e.start) <= now && new Date(e.end) >= now
    ),
    upcoming: upcomingEvents.filter((e) => new Date(e.start) > now),
    past: pastEvents.filter((e) => new Date(e.end) < now)
  };
};
