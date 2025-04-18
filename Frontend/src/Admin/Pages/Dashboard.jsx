import { BarChart3, Users, FileText, Calendar, Newspaper, Folder, MessageSquare } from 'lucide-react';
import PropTypes from 'prop-types';



const StatCard = ({ title, value, icon, className = "bg-white" }) => (
  <div className={`${className} p-6 rounded-lg shadow-md`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500 font-medium">{title}</p>
        <p className="text-2xl font-bold mt-1">{value}</p>
      </div>
      <div className="text-gray-400">{icon}</div>
    </div>
  </div>
);

function Dashboard() {
  // In a real application, these would be fetched from the API
  const stats = [
    { title: 'Total Blogs', value: 24, icon: <FileText size={24} />, className: 'bg-blue-50' },
    { title: 'Total Events', value: 12, icon: <Calendar size={24} />, className: 'bg-green-50' },
    { title: 'News Articles', value: 18, icon: <Newspaper size={24} />, className: 'bg-purple-50' },
    { title: 'Team Members', value: 8, icon: <Users size={24} />, className: 'bg-yellow-50' },
    { title: 'Programs', value: 6, icon: <Folder size={24} />, className: 'bg-pink-50' },
    { title: 'Contact Requests', value: 15, icon: <MessageSquare size={24} />, className: 'bg-indigo-50' },
  ];

  return (
    <div className="space-y-6 p-2">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        <div className="flex items-center space-x-2">
          <BarChart3 className="text-gray-500" />
          <span className="text-gray-500">Analytics</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            className={stat.className}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b">
              <div className="flex items-center space-x-3">
                <FileText className="text-blue-500" size={20} />
                <span>New blog post added: {"Recycling Tips"}</span>
              </div>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b">
              <div className="flex items-center space-x-3">
                <Calendar className="text-green-500" size={20} />
                <span>Event updated: {"Beach Cleanup"}</span>
              </div>
              <span className="text-sm text-gray-500">5 hours ago</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b">
              <div className="flex items-center space-x-3">
                <MessageSquare className="text-purple-500" size={20} />
                <span>New contact form submission</span>
              </div>
              <span className="text-sm text-gray-500">1 day ago</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 bg-blue-50 rounded-lg text-blue-700 hover:bg-blue-100 transition-colors">
              <FileText className="mx-auto mb-2" />
              Create Blog Post
            </button>
            <button className="p-4 bg-green-50 rounded-lg text-green-700 hover:bg-green-100 transition-colors">
              <Calendar className="mx-auto mb-2" />
              Add New Event
            </button>
            <button className="p-4 bg-purple-50 rounded-lg text-purple-700 hover:bg-purple-100 transition-colors">
              <Newspaper className="mx-auto mb-2" />
              Post News
            </button>
            <button className="p-4 bg-yellow-50 rounded-lg text-yellow-700 hover:bg-yellow-100 transition-colors">
              <Users className="mx-auto mb-2" />
              Manage Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Dashboard;