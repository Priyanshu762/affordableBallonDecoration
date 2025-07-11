import React from 'react';
import { Search } from 'lucide-react';

const SearchAndFilter = ({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, categories }) => {
  return (
    <section className="bg-white shadow-sm" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <div className="container mx-auto" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
        <div className="flex flex-col lg:flex-row items-center justify-between" style={{ gap: '1.5rem' }}>
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search gallery..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              style={{ padding: '0.75rem 1rem 0.75rem 2.5rem' }}
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap" style={{ gap: '0.5rem' }}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={{ padding: '0.5rem 1rem' }}
              >
                {category.label}
                <span className="opacity-80" style={{ marginLeft: '0.5rem' }}>{category.count}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchAndFilter;
