import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useBlogContext } from '../Admin/Context/BlogContext';

const BlogDetail = () => {
  const { slug } = useParams();
  const { getBlogBySlug } = useBlogContext();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const data = await getBlogBySlug(slug);
        setBlog(data);
      } catch (err) {
        console.error('Failed to fetch blog:', err);
        setError('Failed to load this blog post. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlog();
    }
  }, [slug, getBlogBySlug]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="text-lg">Loading blog post...</div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error || 'Blog post not found'}
        </div>
        <Link to="/blog" className="mt-4 inline-block text-blue-600 hover:underline">
          ← Back to all blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link to="/blog" className="text-green-600 hover:text-green-800 mb-4 inline-block">
        ← Back to all blogs
      </Link>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img 
          src={blog.coverImage || '/default-blog.jpg'}
          alt={blog.title}
          className="w-full h-64 md:h-96 object-cover"
        />
        
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap items-center mb-4">
            <span className="text-sm font-semibold px-3 py-1 bg-green-100 text-green-800 rounded-full mr-3">
              {blog.category || 'General'}
            </span>
            <span className="text-sm text-gray-500">
              Published on {new Date(blog.publishedAt || blog.createdAt).toDateString()}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>
          
          <div className="flex items-center mb-8">
            <span className="text-md text-gray-600">By {blog.author}</span>
          </div>
          
          {blog.videoUrl && (
            <div className="mb-8">
              <iframe
                title={blog.title}
                width="100%"
                height="400"
                src={blog.videoUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
          
          <div className="prose max-w-none">
            {/* Render content - you might want to use a Markdown renderer here if your content is in Markdown */}
            <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
          </div>
          
          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-8 pt-4 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;