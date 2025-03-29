// components/Events.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { allEvents } from '../Data/EventData';
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

  console.log('Current Events:', currentEvents);
  console.log('Upcoming Events:', upcomingEvents);

  const handleSelectEvent = (event) => {
    navigate(`/events/${event.resource.id}`);
  };

  const handleRegisterClick = (event) => {
    setSelectedEvent(event);
    setShowRegistration(true);
  };

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* View Toggle */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Events Calendar</h2>
          <div className="flex gap-4">
            <button 
              onClick={() => setViewMode('list')} 
              className={`px-4 py-2 rounded-2xl ${viewMode === 'list' ? 'bg-green-400 text-white hover:bg-green-700' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              List View
            </button>
            <button 
              onClick={() => setViewMode('calendar')} 
              className={`px-4 py-2 rounded-2xl ${viewMode === 'calendar' ? 'bg-green-400 text-white hover:bg-green-700' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              Calendar
            </button>
          </div>
        </div>

        {/* Content */}
        {viewMode === 'calendar' ? (
          <EventCalendar 
            events={allEvents.map(e => ({
              title: e.title,
              start: new Date(e.start),
              end: new Date(e.end),
              resource: e
            }))} 
            onSelectEvent={handleSelectEvent}
          />
        ) : (
          <>
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
          </>
        )}

        {/* Registration Modal */}
        <Modal isOpen={showRegistration} onClose={() => setShowRegistration(false)}>
          {selectedEvent && <EventRegistrationForm event={selectedEvent} />}
        </Modal>
      </div>
    </div>
  );
};

const EventSection = ({ title, events, onRegister }) => {
  console.log(`Rendering ${title} with events:`, events);
  return (
    <div className="mb-12">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.length > 0 ? (
          events.map(event => (
            <EventCard 
              key={event.id} 
              event={event} 
              onRegister={onRegister ? () => onRegister(event) : null}
            />
          ))
        ) : (
          <p className="text-gray-600">No events available</p>
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