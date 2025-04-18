// components/BlogDetail.jsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { useBlogContext } from '../Admin/Context/BlogContext';

const BlogDetail = () => {
  const { slug } = useParams();
  const { getBlogBySlug } = useBlogContext();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await getBlogBySlug(slug);
        setBlog(data);
      } catch (err) {
        console.error(err);
        setError('Failed to load blog post');
      } finally {
        setLoading(false);
      }
    })();
  }, [slug, getBlogBySlug]);

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (error || !blog) {
    return (
      <div className="p-8 text-center text-red-500">
        {error || 'Blog post not found'}
        <div className="mt-4">
          <Link to="/blog" className="text-blue-500 hover:underline">
            ← Back to all blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <Link to="/blog" className="inline-flex items-center text-gray-600 hover:text-gray-800">
          <ArrowLeft size={18} className="mr-2" />
          Back to Blog
        </Link>
      </div>

      <article className="mb-12">
        {/* Cover Image */}
        {blog.coverImage && (
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-96 object-cover mb-8 rounded-lg"
          />
        )}

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-500">
            <span className="inline-flex items-center">
              <Calendar size={16} className="mr-1.5" />
              {new Date(blog.createdAt).toLocaleDateString()}
            </span>
            <span className="inline-flex items-center">
              <User size={16} className="mr-1.5" />
              {blog.author}
            </span>
            {blog.category && (
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {blog.category}
              </span>
            )}
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {blog.title}
          </h1>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          {blog.content.split('\n').map((p, i) => (
            <p key={i} className="mb-6">{p}</p>
          ))}
        </div>

        {/* Tags */}
        {blog.tags?.length > 0 && (
          <div className="border-t pt-8">
            <div className="flex items-center gap-3">
              <Tag size={20} className="text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </article>
    </div>
  );
};

export default BlogDetail;
