import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useBlogContext } from '../Context/BlogContext';
import BlogForm from '../Components/BlogForm';

function AdminBlogEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getBlogById, addBlog, updateBlog } = useBlogContext();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(id ? true : false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const fetchedBlog = await getBlogById(id);
        setBlog(fetchedBlog);
      } catch (err) {
        setError('Failed to load blog data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchBlog();
    }
  }, [id, getBlogById]);

  const handleSubmit = async (formData) => {
    try {
      if (id) {
        await updateBlog(id, formData);
      } else {
        await addBlog(formData);
      }
      navigate('/admin/blogs');
    } catch (err) {
      setError('Failed to save blog');
      console.error(err);
    }
  };

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">
        {id ? 'Edit Blog Post' : 'Create New Blog Post'}
      </h1>
      <BlogForm
        initialData={blog}
        onSubmit={handleSubmit}
        onCancel={() => navigate('/admin/blogs')}
      />
    </div>
  );
}

export default AdminBlogEdit;