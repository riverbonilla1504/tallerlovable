    
import React, { JSX } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFilterClick?: () => void;
}

/**
 * SearchBar Component
 * 
 * A search input with a filter button for searching events.
 * 
 * @param {string} value - The current search value
 * @param {Function} onChange - Handler for when the search value changes
 * @param {Function} onFilterClick - Handler for when the filter button is clicked
 * @returns {JSX.Element} A search bar for filtering events
 */
const SearchBar = ({ 
  value, 
  onChange, 
  onFilterClick 
}: SearchBarProps): JSX.Element => {
  return (
    <div className="card-search flex items-center px-4 py-2 w-full">
      <Search size={20} className="text-white mr-2" />
      <input
        type="text"
        placeholder="Search by name or day..."
        value={value}
        onChange={onChange}
        className="bg-transparent border-none text-white placeholder-white/70 flex-1 focus:outline-none"
      />
      <button 
        onClick={onFilterClick} 
        className="text-white"
        aria-label="Advanced filters"
      >
        <SlidersHorizontal size={20} />
      </button>
    </div>
  );
};

export default SearchBar;