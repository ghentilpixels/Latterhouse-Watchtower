import { events } from "../data/dummyData";
import EventCard from "../components/EventCard";
import { Search, CalendarDays } from "lucide-react";

const Events = () => {
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 mb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Upcoming Events
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Find out what's happening at Latterhouse Watchtower Ecclesia and how
            you can get involved.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 items-center justify-between">
          <div className="relative w-full sm:w-1/2 md:w-1/3">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search events..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-xl text-slate-700 font-medium shadow-sm hover:bg-slate-50 transition-colors w-full sm:w-auto justify-center">
            <CalendarDays className="w-5 h-5 text-blue-600" />
            Download Calendar
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
          {/* Duplicate to show list */}
          {events.map((event) => (
            <EventCard
              key={`duplicate-${event.id}`}
              event={{
                ...event,
                id: event.id + 10,
                title: event.title + " (Repeated)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
