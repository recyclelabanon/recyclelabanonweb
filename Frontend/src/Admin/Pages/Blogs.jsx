import { useState } from 'react';
import { Plus, Search, Edit2, Trash2 } from 'lucide-react';


function Blogs() {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data - in real app, this would come from an API
  const blogs = [
    {
      id: '1',
      title: 'Recycling Best Practices',
      excerpt: 'Learn about the most effective ways to recycle...',
      author: 'John Doe',
      date: '2024-02-20',
      status: 'published',
    },
    {
      id: '2',
      title: 'Sustainable Living Tips',
      excerpt: 'Simple ways to reduce your environmental impact...',
      author: 'Jane Smith',
      date: '2024-02-19',
      status: 'draft',
    },
  ];

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Blog Posts</h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-green-700">
          <Plus size={20} />
          <span>New Post</span>
        </button>
      </div>

      <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <select className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
          <option value="all">All Status</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Author
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredBlogs.map((blog) => (
              <tr key={blog.id}>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="font-medium">{blog.title}</span>
                    <span className="text-sm text-gray-500">{blog.excerpt}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{blog.author}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{blog.date}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    blog.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {blog.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-3">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Edit2 size={18} />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Blogs;