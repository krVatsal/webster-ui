import React from 'react';
import { Trophy, User, HelpCircle, Map } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <Map className="w-8 h-8" />
            <span className="text-xl font-bold">Campus Quest</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <button className="nav-btn group">
              <Trophy className="w-5 h-5" />
              <span className="nav-tooltip">Leaderboard</span>
            </button>
            
            <button className="nav-btn group">
              <HelpCircle className="w-5 h-5" />
              <span className="nav-tooltip">Help</span>
            </button>
            
            <button className="flex items-center space-x-2 bg-indigo-500 px-4 py-2 rounded-full hover:bg-indigo-400 transition">
              <User className="w-5 h-5" />
              <span>Profile</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}