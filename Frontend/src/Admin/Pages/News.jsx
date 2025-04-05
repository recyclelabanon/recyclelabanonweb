import { useState } from 'react';
import { Plus, Search, Edit2, Trash2 } from 'lucide-react';



function News() {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data - in real app, this would come from an API
  const newsArticles = [
    {
      id: '1',
      title: 'New Recycling Center Opens in Beirut',
      excerpt: 'A state-of-the-art recycling facility has opened...',
      author: 'Sarah Johnson',
      date: '2024-02-20',
      category: 'Infrastructure',
      featured: true,
    },
    {
      id: '2',
      title: 'Lebanon Achieves Recycling Milestone',
      excerpt: 'The country has reached a significant milestone...',
      author: 'Mike Wilson',
      date: '2024-02-19',
      category: 'Achievement',
      featured: false,
    },
  ];

  const filteredNews = newsArticles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">News Articles</h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-green-700">
          <Plus size={20} />
          <span>New Article</span>
        </button>
      </div>

      <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search news..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <select className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
          <option value="all">All Categories</option>
          <option value="infrastructure">Infrastructure</option>
          <option value="achievement">Achievement</option>
          <option value="community">Community</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredNews.map((article) => (
          <div key={article.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  {article.featured && (
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mt-2">{article.title}</h3>
                <p className="text-gray-600 mt-2">{article.excerpt}</p>
                <div className="mt-4 text-sm text-gray-500">
                  <span>{article.author}</span>
                  <span className="mx-2">•</span>
                  <span>{article.date}</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="text-blue-600 hover:text-blue-800">
                  <Edit2 size={18} />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;