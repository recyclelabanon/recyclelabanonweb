// components/Events.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { allEvents } from '../../Data/EventData';
import EventCalendar from './EventCalendar';
import EventRegistrationForm from './EventRegistrationForm';
import EventCard from './EventCard';
import Modal from './Modal';

const Events = () => {
  const [viewMode, setViewMode] = useState('list');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showRegistration, setShowRegistration] = useState(false);
  const navigate = useNavigate();

  // Event filtering logic
  const now = new Date("2024-04-18");
  const currentEvents = allEvents.filter(e => new Date(e.start) <= now && new Date(e.end) >= now);
  const upcomingEvents = allEvents.filter(e => new Date(e.start) > now && e.status !== 'current');
  const pastEvents = allEvents.filter(e => new Date(e.end) < now);


  const handleSelectEvent = (event) => {
    navigate(`/events/${event.resource.id}`);
  };

  const handleRegisterClick = (event) => {
    setSelectedEvent(event);
    setShowRegistration(true);
  };

  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* View Toggle */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <h2 className="text-3xl font-bold text-gray-900">Events Calendar</h2>
          <div className="flex gap-2">
            <button 
              onClick={() => setViewMode('list')} 
              className={`px-4 py-2 rounded-lg transition-all ${
                viewMode === 'list' 
                  ? 'bg-green-600 text-white shadow-md hover:bg-green-700' 
                  : 'bg-white text-gray-600 shadow-sm hover:bg-gray-50'
              }`}
            >
              List View
            </button>
            <button 
              onClick={() => setViewMode('calendar')} 
              className={`px-4 py-2 rounded-lg transition-all ${
                viewMode === 'calendar' 
                  ? 'bg-green-600 text-white shadow-md hover:bg-green-700' 
                  : 'bg-white text-gray-600 shadow-sm hover:bg-gray-50'
              }`}
            >
              Calendar
            </button>
          </div>
        </div>

        {/* Content */}
        {viewMode === 'calendar' ? (
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <EventCalendar 
              events={allEvents.map(e => ({
                title: e.title,
                start: new Date(e.start),
                end: new Date(e.end),
                resource: e
              }))} 
              onSelectEvent={handleSelectEvent}
            />
          </div>
        ) : (
          <div className="space-y-12">
            <EventSection 
              title="Current Events" 
              events={currentEvents} 
              onRegister={handleRegisterClick} 
            />
            <EventSection 
              title="Upcoming Events" 
              events={upcomingEvents} 
              onRegister={handleRegisterClick} 
            />
            <EventSection 
              title="Past Events" 
              events={pastEvents} 
            />
          </div>
        )}

        <Modal isOpen={showRegistration} onClose={() => setShowRegistration(false)}>
          {selectedEvent && <EventRegistrationForm event={selectedEvent} />}
        </Modal>
      </div>
    </div>
  );
};

const EventSection = ({ title, events, onRegister }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.length > 0 ? (
          events.map(event => (
            <EventCard 
              key={event.id} 
              event={event} 
              onRegister={onRegister ? () => onRegister(event) : null}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 italic">No events in this category</p>
          </div>
        )}
      </div>
    </div>
  );
};

EventSection.propTypes = {
  title: PropTypes.string.isRequired,
  events: PropTypes.array.isRequired,
  onRegister: PropTypes.func,
};

export default Events;