import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import moment from 'moment';
import { events as allEvents } from '../../Data/EventData';
import EventTimeline from './EventTimeline';
import EventRegistrationForm from './EventRegistrationForm';
import { useState } from 'react';
import { motion } from 'framer-motion';

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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-md p-8 bg-white rounded-2xl shadow-xl"
        >
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Event Not Found</h2>
          <p className="text-gray-600">
            The event you’re looking for might have been moved or doesn’t exist.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-200 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Event Header */}
        <motion.header
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
            {event.title}
          </h1>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-gray-700">
                {moment(event.start).format('MMM D')} - {moment(event.end).format('MMM D, YYYY')}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-gray-700">{event.location}</span>
            </div>
          </div>
        </motion.header>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description Section */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-2xl shadow-xl p-6"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">About the Event</h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {event.description}
              </p>
            </motion.section>

            {/* Media Section */}
            {event.video && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="aspect-video bg-gray-100">
                  <iframe 
                    src={event.video}
                    className="w-full h-full"
                    allowFullScreen
                    title={event.title}
                  />
                </div>
              </motion.div>
            )}

            {event.gallery?.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
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
                      <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                        {activeGalleryIndex + 1} / {event.gallery.length}
                      </div>
                    </div>
                  ))}
                </Slider>
              </motion.div>
            )}

            {/* Timeline Section */}
            {event.timeline?.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-2xl shadow-xl p-6"
              >
                <EventTimeline timeline={event.timeline} />
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-6 lg:self-start">
            {/* Registration Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-white rounded-2xl shadow-xl p-6 border border-green-50"
            >
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-center">Join the Event</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Available Spots</span>
                      <span className="font-medium text-green-600">
                        {event.capacity - event.registered} remaining
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-gradient-to-r from-green-400 to-green-600 h-2.5 rounded-full transition-all duration-500" 
                        style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                      />
                    </div>
                  </div>
                  
                  {event.status === 'upcoming' && <EventRegistrationForm event={event} />}
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3 text-gray-600">
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm">
                        Starts in {moment(event.start).fromNow(true)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Info Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-white rounded-2xl shadow-xl p-6 space-y-4"
            >
              <h3 className="text-xl font-semibold">Event Highlights</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{event.timeline?.length || 0} Key Activities</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Detailed Schedule Available</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
