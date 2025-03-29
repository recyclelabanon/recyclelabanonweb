// components/events/EventDetails.jsx
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import moment from 'moment';
import EventTimeline from './EventTimeline';
import EventRegistrationForm from '../EventRegistrationForm';

const gallerySettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const EventDetails = ({ event }) => (
  <div className="max-w-7xl mx-auto px-4 py-12">
    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <h1 className="text-4xl font-bold mb-6">{event.title}</h1>
        
        {event.video && (
          <div className="mb-8 aspect-video bg-gray-100 rounded-xl overflow-hidden">
            <iframe 
              src={event.video}
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        )}

        {event.gallery && (
          <div className="mb-8">
            <Slider {...gallerySettings}>
              {event.gallery.map((img, index) => (
                <div key={index} className="h-96">
                  <img src={img} className="w-full h-full object-cover" />
                </div>
              ))}
            </Slider>
          </div>
        )}

        <EventTimeline timeline={event.timeline} />
      </div>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4">Event Details</h3>
          <div className="space-y-2">
            <p><strong>Date:</strong> {moment(event.start).format('LL')}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Status:</strong> <span className="capitalize">{event.status}</span></p>
          </div>
        </div>

        {event.status === 'upcoming' && (
          <div className="bg-green-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Registration</h3>
            <EventRegistrationForm event={event} />
          </div>
        )}
      </div>
    </div>
  </div>
);

EventDetails.propTypes = {
  event: PropTypes.object.isRequired
};

export default EventDetails;