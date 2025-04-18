import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useNewsContext } from '../Admin/Context/NewsContext';
import Hero from "../components/Hero";

const NewsPage = () => {
  const { news, loading, error, refreshNews, categories } = useNewsContext();
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    refreshNews();
  }, [refreshNews]);

  const filtered = filter === 'All'
    ? news
    : news.filter(item => (item.category || 'General') === filter);

  if (loading) return <div className="p-8">Loading news...</div>;
  if (error) return (
    <div className="p-8 text-red-500">
      Error loading news: {error}
      <button onClick={refreshNews} className="ml-4 px-3 py-1 bg-blue-500 text-white rounded">
        Retry
      </button>
    </div>
  );

  return (
    <div className="pt-16">
      <Hero
        title="Latest News"
        subtitle="Stay updated with the most recent news and press releases from our organization."
        backgroundImage="https://img.freepik.com/free-photo/media-press-release-newsletter-update-concept_53876-120580.jpg"
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setFilter('All')}
            className={`px-4 py-2 rounded-full ${
              filter === 'All' ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >All</button>
          {categories && categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full ${
                filter === cat ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >{cat}</button>
          ))}
        </div>

        {/* News Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(newsItem => (
              <motion.div
                key={newsItem._id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={newsItem.coverImage || '/default-news.jpg'}
                  alt={newsItem.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                      {newsItem.category || 'General'}
                    </span>
                    <span className="text-xs text-gray-500 ml-3">
                      {new Date(newsItem.publishedAt || newsItem.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{newsItem.title}</h3>
                  <p className="text-gray-600 mb-4">{newsItem.summary}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {newsItem.author}</span>
                    <Link
                      to={`/news/${newsItem.slug}`}
                      className="text-blue-600 font-medium hover:text-blue-700"
                    >Read more →</Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center py-10">No news articles found for {filter}.</p>
        )}
      </div>
    </div>
  );
};

export default NewsPage;