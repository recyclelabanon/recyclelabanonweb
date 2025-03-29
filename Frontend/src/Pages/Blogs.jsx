import Blog from "../components/Blog";
import Hero from "../components/Hero";

const Blogs = () => {
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
        title=" Insights & Stories"
        subtitle="Explore the latest updates, stories, and insights from our community."
        backgroundImage="https://img.freepik.com/free-photo/information-articles-blogging-device-screen_53876-124046.jpg?uid=R193627658&ga=GA1.1.91846166.1742625654&semt=ais_hybrid"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-20">
          <Blog blogs={blogs} />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
