const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow duration-300 flex flex-col sm:flex-row gap-5 h-full relative overflow-hidden">
      {/* Date Block */}
      <div className="flex-shrink-0 flex flex-col items-center justify-center w-16 h-16 bg-navy-900 rounded-xl text-white">
        <span className="text-xl font-bold leading-none">{event.day || '01'}</span>
        <span className="text-xs font-semibold tracking-wider uppercase mt-1 text-gray-300">{event.month || 'JAN'}</span>
      </div>
      
      <div className="flex flex-col flex-grow">
        <div className="mb-2 flex items-center">
          <span className={`px-2 py-0.5 text-[10px] font-bold rounded uppercase tracking-wider ${event.badgeColor || 'bg-gold-500 text-white'}`}>
            {event.category || 'EVENT'}
          </span>
        </div>
        <h3 className="text-lg font-bold text-navy-900 leading-tight mb-3">
          {event.title}
        </h3>
        
        <div className="space-y-1.5 mt-auto text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{event.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
