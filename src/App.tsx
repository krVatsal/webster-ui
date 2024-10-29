import React from 'react';
import Navbar from './components/Navbar';
import EventCard from './components/EventCard';
import CreateEventForm from './components/CreateEventForm';
import Leaderboard from './components/Leaderboard';

function App() {
  const upcomingEvents = [
    {
      title: "Campus History Hunt",
      description: "Explore the rich history of our campus through this exciting scavenger hunt!",
      startTime: "2024-03-20 14:00",
      endTime: "2024-03-20 16:00",
      location: "Main Campus",
      participants: 24
    },
    {
      title: "Science Building Mystery",
      description: "Solve puzzles and discover secrets in the Science Building!",
      startTime: "2024-03-22 15:00",
      endTime: "2024-03-22 17:00",
      location: "Science Complex",
      participants: 18
    }
  ];

  const liveEvents = [
    {
      title: "Library Quest",
      description: "Navigate through the library's hidden treasures and solve riddles!",
      startTime: "Now",
      endTime: "1 hour remaining",
      location: "University Library",
      participants: 32
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Live Events Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Live Events</h2>
              <div className="grid gap-6">
                {liveEvents.map((event, index) => (
                  <EventCard
                    key={index}
                    type="live"
                    {...event}
                  />
                ))}
              </div>
            </section>

            {/* Upcoming Events Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
              <div className="grid gap-6">
                {upcomingEvents.map((event, index) => (
                  <EventCard
                    key={index}
                    type="upcoming"
                    {...event}
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <CreateEventForm />
            <Leaderboard />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;