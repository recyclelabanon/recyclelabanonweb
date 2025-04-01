// components/EventDetails.jsx
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import moment from 'moment';
import { allEvents } from '../../Data/EventData';
import EventTimeline from './EventTimeline';
import EventRegistrationForm from './EventRegistrationForm';
import { useState } from 'react';

const gallerySettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  adaptiveHeight: true,
  customPaging: i => (
    <div className="w-3 h-3 bg-gray-300 rounded-full transition-all duration-300 hover:bg-green-500" />
  ),
  appendDots: dots => (
    <div className="mt-4">
      <ul className="flex justify-center gap-2">{dots}</ul>
    </div>
  )
};

const EventDetails = () => {
  const { id } = useParams();
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const event = allEvents.find(e => e.id.toString() === id);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md p-8 bg-white rounded-2xl shadow-lg">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Event Not Found</h2>
          <p className="text-gray-600">The event you&pos;re looking for might have been moved or doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Event Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{event.title}</h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {moment(event.start).format('MMM D')} - {moment(event.end).format('MMM D, YYYY')}
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {event.location}
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Media Section */}
            <div className="space-y-8">
              {event.video && (
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="aspect-video bg-gray-100">
                    <iframe 
                      src={event.video}
                      className="w-full h-full"
                      allowFullScreen
                      title={event.title}
                    />
                  </div>
                </div>
              )}

              {event.gallery?.length > 0 && (
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <Slider 
                    {...gallerySettings}
                    beforeChange={(current, next) => setActiveGalleryIndex(next)}
                  >
                    {event.gallery.map((img, index) => (
                      <div key={index} className="relative aspect-video">
                        <img 
                          src={img} 
                          className="w-full h-full object-cover"
                          alt={`Gallery ${index + 1}`}
                          loading="lazy"
                        />
                        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                          {activeGalleryIndex + 1} / {event.gallery.length}
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              )}
            </div>

            {/* Timeline Section */}
            {event.timeline?.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <EventTimeline timeline={event.timeline} />
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-6 lg:h-[calc(100vh-2rem)] lg:overflow-y-auto">
            {/* Registration Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">Status</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      event.status === 'current' 
                        ? 'bg-green-100 text-green-800'
                        : event.status === 'upcoming'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800'
                    }`}>
                      {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-green-500 transition-all duration-500"
                      style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-600 text-right">
                    {event.capacity - event.registered} spots remaining
                  </p>
                </div>

                {event.status === 'upcoming' && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Join the Event</h3>
                    <EventRegistrationForm event={event} />
                  </div>
                )}
              </div>
            </div>

            {/* Quick Info Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
              <h3 className="text-xl font-semibold">Event Highlights</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-gray-700">{event.timeline?.length || 0} Key Activities</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                  <span className="text-gray-700">Detailed Schedule Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;