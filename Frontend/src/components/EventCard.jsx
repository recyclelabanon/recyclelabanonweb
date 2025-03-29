// components/events/EventCard.jsx
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const EventCard = ({ event, onRegister }) => {
  const statusColors = {
    current: 'bg-blue-100 text-blue-800',
    upcoming: 'bg-green-100 text-green-800',
    past: 'bg-gray-100 text-gray-800'
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <span className={`${statusColors[event.status]} px-3 py-1 rounded-full text-sm`}>
          {event.status.toUpperCase()}
        </span>
        <h3 className="text-xl font-semibold mt-2">{event.title}</h3>
        <p className="text-gray-600 mt-2">{event.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <Link 
            to={`/events/${event.id}`} 
            className="text-green-600 hover:text-green-700 font-medium"
          >
            View Details →
          </Link>
          {event.status === 'upcoming' && (
            <button 
              onClick={() => onRegister(event)}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
            >
              Register Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  event: PropTypes.object.isRequired,
  onRegister: PropTypes.func.isRequired
};

export default EventCard;