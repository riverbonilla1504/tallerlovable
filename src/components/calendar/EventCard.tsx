
import React, { JSX } from 'react';
import { MoreVertical } from 'lucide-react';

interface Attendee {
  id: string;
  avatar?: string;
}

interface EventCardProps {
  title: string;
  timeRange: string;
  location?: string;
  attendees?: Attendee[];
  tags?: string[];
  onOptionsClick?: () => void;
}

/**
 * EventCard Component
 * 
 * Displays an event in the calendar with title, time range, location, attendees, and tags.
 * 
 * @param {string} title - The event title
 * @param {string} timeRange - The time range of the event (e.g., "8:00 AM to 9:00 AM")
 * @param {string} location - The location of the event
 * @param {Array<Attendee>} attendees - List of attendees
 * @param {Array<string>} tags - List of tags
 * @param {Function} onOptionsClick - Handler for when the options button is clicked
 * @returns {JSX.Element} A card displaying event information
 */
const EventCard = ({ 
  title, 
  timeRange, 
  location, 
  attendees = [], 
  tags = [], 
  onOptionsClick 
}: EventCardProps): JSX.Element => {
  return (
    <article className="card-yellow p-4 text-left">
      <header className="flex justify-between items-start mb-1">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <button 
          onClick={onOptionsClick} 
          className="text-gray-700 hover:text-gray-900"
          aria-label="More options"
        >
          <MoreVertical size={20} />
        </button>
      </header>
      <p className="text-sm text-gray-700 mb-3">{timeRange}</p>
      
      <div className="flex justify-between items-end">
        <div className="flex -space-x-2">
          {attendees.slice(0, 3).map((attendee, i) => (
            <span 
              key={attendee.id} 
              className="w-8 h-8 rounded-full bg-gray-200 border-2 border-yellow-200 flex items-center justify-center text-xs"
              aria-label="Attendee"
            >
              {attendee.avatar ? (
                <img 
                  src={attendee.avatar} 
                  alt="Attendee" 
                  className="w-full h-full rounded-full object-cover" 
                />
              ) : (
                i + 1
              )}
            </span>
          ))}
          {attendees.length > 3 && (
            <span 
              className="w-8 h-8 rounded-full bg-gray-200 border-2 border-yellow-200 flex items-center justify-center text-xs"
              aria-label={`+${attendees.length - 3} more attendees`}
            >
              +{attendees.length - 3}
            </span>
          )}
        </div>

        <div className="flex gap-2">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-yellow-300 rounded-full text-xs text-gray-900"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {location && (
        <footer className="mt-3 text-sm text-gray-700">
          <p>{location}</p>
        </footer>
      )}
    </article>
  );
};

export default EventCard;