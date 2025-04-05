import { useState } from 'react';
import { Plus, Search, Edit2, Trash2, Users } from 'lucide-react';



function Teams() {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data - in real app, this would come from an API
  const teamMembers = [
    {
      id: '1',
      name: 'Sarah Hassan',
      role: 'Program Director',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      department: 'Management',
      joinDate: '2023-06-15',
      email: 'sarah.hassan@recyclelabanon.org'
    },
    {
      id: '2',
      name: 'Ahmad Khalil',
      role: 'Community Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      department: 'Operations',
      joinDate: '2023-08-01',
      email: 'ahmad.khalil@recyclelabanon.org'
    }
  ];

  const filteredMembers = teamMembers.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Team Members</h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-green-700">
          <Plus size={20} />
          <span>Add Member</span>
        </button>
      </div>

      <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search team members..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <select className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
          <option value="all">All Departments</option>
          <option value="management">Management</option>
          <option value="operations">Operations</option>
          <option value="programs">Programs</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map((member) => (
          <div key={member.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative h-48">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 flex space-x-2">
                <button className="p-1.5 bg-white rounded-full text-blue-600 hover:text-blue-800 shadow-sm">
                  <Edit2 size={16} />
                </button>
                <button className="p-1.5 bg-white rounded-full text-red-600 hover:text-red-800 shadow-sm">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-green-600 font-medium">{member.role}</p>
              <div className="mt-3 space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <Users size={16} className="mr-2" />
                  <span>{member.department}</span>
                </div>
                <p>Joined: {new Date(member.joinDate).toLocaleDateString()}</p>
                <p className="text-blue-600">{member.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;