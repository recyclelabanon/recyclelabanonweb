// components/events/EventCalendar.jsx
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import PropTypes from 'prop-types';
import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('en');
const localizer = momentLocalizer(moment);

const EventCalendar = ({ events, onSelectEvent }) => {
  // Custom event styling
  const eventStyleGetter = () => ({
    style: {
      backgroundColor: '#f0fdf4',
      border: '1px solid #4ade80',
      borderRadius: '6px',
      color: '#14532d',
      fontSize: '0.875rem',
      padding: '2px 6px',
    },
  });

  // Custom toolbar component
  const CustomToolbar = ({ date, onNavigate, onView, view }) => (
    <div className="mb-4 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <button 
            onClick={() => onNavigate('PREV')}
            className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700"
          >
            ←
          </button>
          <button 
            onClick={() => onNavigate('NEXT')}
            className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700"
          >
            →
          </button>
        </div>
        <span className="text-lg font-semibold text-gray-800">
          {moment(date).format('MMMM YYYY')}
        </span>
        <button
          onClick={() => onNavigate('TODAY')}
          className="px-4 py-1.5 rounded-lg bg-green-600 text-white hover:bg-green-700"
        >
          Today
        </button>
      </div>
      <div className="flex gap-2">
        {['month', 'week', 'day'].map((v) => (
          <button
            key={v}
            onClick={() => onView(v)}
            className={`px-4 py-1.5 rounded-lg capitalize ${
              view === v 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {v}
          </button>
        ))}
      </div>
    </div>
  );

  CustomToolbar.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    onNavigate: PropTypes.func.isRequired,
    onView: PropTypes.func.isRequired,
    view: PropTypes.string.isRequired,
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-12">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={onSelectEvent}
        style={{ height: 600 }}
        components={{
          toolbar: CustomToolbar,
          event: ({ event }) => (
            <div className="hover:bg-green-50 transition-colors">
              {event.title}
            </div>
          ),
        }}
        eventPropGetter={eventStyleGetter}
        dayPropGetter={() => ({ className: 'hover:bg-gray-50' })}
        views={['month', 'week', 'day', 'agenda']}
        defaultView="month"
        popup
        showMultiDayTimes
        min={new Date().setHours(8, 0, 0)}  // 8:00 AM
        max={new Date().setHours(20, 0, 0)} // 8:00 PM
        className="modern-calendar"
      />
    </div>
  );
};

EventCalendar.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      start: PropTypes.instanceOf(Date).isRequired,
      end: PropTypes.instanceOf(Date).isRequired,
    })
  ).isRequired,
  onSelectEvent: PropTypes.func.isRequired,
};

export default EventCalendar;