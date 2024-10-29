import React from 'react';
import { Medal } from 'lucide-react';

export default function Leaderboard() {
  const leaders = [
    {
      rank: 1,
      name: "Alex Johnson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
      score: 2500,
      time: "1:45:30"
    },
    {
      rank: 2,
      name: "Sarah Williams",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
      score: 2350,
      time: "1:50:15"
    },
    {
      rank: 3,
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
      score: 2200,
      time: "1:55:45"
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Leaderboard</h2>
        <Medal className="w-6 h-6 text-yellow-500" />
      </div>
      
      <div className="space-y-4">
        {leaders.map((leader) => (
          <div
            key={leader.rank}
            className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <span className={`w-8 h-8 flex items-center justify-center rounded-full font-bold ${
              leader.rank === 1 ? 'bg-yellow-100 text-yellow-700' :
              leader.rank === 2 ? 'bg-gray-100 text-gray-700' :
              'bg-orange-100 text-orange-700'
            }`}>
              {leader.rank}
            </span>
            
            <img
              src={leader.avatar}
              alt={leader.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">{leader.name}</h3>
              <p className="text-sm text-gray-500">Completion Time: {leader.time}</p>
            </div>
            
            <div className="text-right">
              <span className="font-bold text-indigo-600">{leader.score}</span>
              <p className="text-sm text-gray-500">points</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}