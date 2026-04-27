import { useState } from 'react';
import { galleryItems } from '../data/dummyData';

const Gallery = () => {
  const [filter, setFilter] = useState('All');

  // Extract unique categories, adding 'All' to the beginning
  const categories = ['All', ...new Set(galleryItems.map(item => item.category))];

  // Filter items based on the selected category
  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 mb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Explore the beautiful moments captured within our church community.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === cat 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid (Masonry effect using column classes) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="break-inside-avoid relative group overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 bg-white"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 will-change-transform"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/60 transition-colors duration-300 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100">
                <span className="text-blue-400 font-medium text-sm mb-1">{item.category}</span>
                <h3 className="text-white text-lg font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            No images found for this category.
          </div>
        )}

      </div>
    </div>
  );
};

export default Gallery;
