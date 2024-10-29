import React from 'react';
import { Calendar, Clock, MapPin, Image, Lightbulb, PlusCircle } from 'lucide-react';

export default function CreateEventForm() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Create New Event</h2>
      
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Event Name</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter event name"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Describe your event"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Start Time</label>
            <div className="mt-1 relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="datetime-local"
                className="block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">End Time</label>
            <div className="mt-1 relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="datetime-local"
                className="block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <div className="mt-1 relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              className="block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Select location on map"
            />
          </div>
          <div className="mt-2 h-48 bg-gray-100 rounded-lg">
            {/* Google Maps integration would go here */}
            <div className="h-full flex items-center justify-center text-gray-500">
              Map Preview
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <button
            type="button"
            className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-500"
          >
            <PlusCircle className="w-5 h-5" />
            <span>Add Puzzle</span>
          </button>
          
          <button
            type="button"
            className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-500"
          >
            <Lightbulb className="w-5 h-5" />
            <span>Add Hint</span>
          </button>
          
          <button
            type="button"
            className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-500"
          >
            <Image className="w-5 h-5" />
            <span>Add Photo Requirement</span>
          </button>
        </div>
        
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Create Event
          </button>
        </div>
      </form>
    </div>
  );
}