import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Blog = ({ blogs }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Blogs</h2>
      {blogs && blogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <p className="text-sm text-gray-500 mb-4">
                  Published on: {blog.date} | Author: {blog.author}
                </p>
                <button className="mt-4 text-green-600 font-medium hover:text-green-700 transition-colors">
                Read more →
              </button>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No blogs available at the moment.</p>
      )}
    </div>
  );
};

Blog.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};

export default Blog;