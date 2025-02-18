
import PropTypes from 'prop-types';

const TeamMember = ({ name, role, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {image && (
        <div className="h-48 w-full">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-green-600 font-medium mb-4">{role}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

TeamMember.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default TeamMember;