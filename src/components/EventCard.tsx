import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

interface EventCardProps {
  type: 'upcoming' | 'live';
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  location: string;
  participants: number;
}

export default function EventCard({
  type,
  title,
  description,
  startTime,
  endTime,
  location,
  participants,
}: EventCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          {type === 'live' && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Live
            </span>
          )}
        </div>
        
        <p className="mt-2 text-gray-600">{description}</p>
        
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <span className="text-sm">{startTime} - {endTime}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">{location}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-2" />
            <span className="text-sm">{participants} participants</span>
          </div>
        </div>
        
        <button
          className={`mt-4 w-full py-2 px-4 rounded-lg font-medium transition-colors ${
            type === 'live'
              ? 'bg-green-500 text-white hover:bg-green-600'
              : 'bg-indigo-500 text-white hover:bg-indigo-600'
          }`}
        >
          {type === 'live' ? 'Join Now' : 'Register'}
        </button>
      </div>
    </div>
  );
}