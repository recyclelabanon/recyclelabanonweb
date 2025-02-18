import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Event = ({ upcomingEvents, pastEvents }) => {
  return (
    <div className="  p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Events</h2>

      {/* Upcoming Events */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Upcoming Events
        </h3>
        {upcomingEvents && upcomingEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {event.title}
                  </h4>
                  <p className="text-gray-600 mb-2">{event.description}</p>
                  <p className="text-sm text-gray-500 mb-4">
                    Date: {event.date} | Location: {event.location}
                  </p>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300">
                    Register Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No upcoming events. Stay tuned!</p>
        )}
      </div>

      {/* Past Events */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Past Events
        </h3>
        {pastEvents && pastEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {event.title}
                  </h4>
                  <p className="text-gray-600 mb-2">{event.description}</p>
                  <p className="text-sm text-gray-500 mb-4">
                    Date: {event.date} | Location: {event.location}
                  </p>
                  <button className="mt-4 text-green-600 font-medium hover:text-green-700 transition-colors">
                Learn more →
              </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No past events available.</p>
        )}
      </div>
    </div>
  );
};

Event.propTypes = {
  upcomingEvents: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
  pastEvents: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};

export default Event;