// components/events/EventTimeline.jsx
import PropTypes from 'prop-types';

const EventTimeline = ({ timeline }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4">Event Timeline</h2>
    <div className="space-y-4">
      {timeline.map((step, index) => (
        <div key={index} className="flex items-center gap-4">
          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white">
            {index + 1}
          </div>
          <div>
            <p className="font-semibold">{step.step}</p>
            <p className="text-gray-600">{step.date}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

EventTimeline.propTypes = {
  timeline: PropTypes.array.isRequired
};

export default EventTimeline;