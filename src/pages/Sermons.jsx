import { sermons } from "../data/dummyData";
import SermonCard from "../components/SermonCard";
import { Search } from "lucide-react";

const Sermons = () => {
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 mb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sermons & Messages
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Catch up on past series, listen to recent messages, and dive deeper
            into God's Word.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search & Filters (UI Only) */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by title, speaker, or series..."
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          </div>
          <select className="px-6 py-4 rounded-xl border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium text-slate-700 sm:w-48 cursor-pointer">
            <option>All Series</option>
            <option>Faith Foundations</option>
            <option>Prayer Life</option>
            <option>Kingdom Economy</option>
          </select>
        </div>

        {/* Sermon Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sermons.map((sermon) => (
            <SermonCard key={sermon.id} sermon={sermon} />
          ))}
          {/* Duplicate to show scrolling grid */}
          {sermons.map((sermon) => (
            <SermonCard
              key={`duplicate-${sermon.id}`}
              sermon={{ ...sermon, id: sermon.id + 10 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sermons;
