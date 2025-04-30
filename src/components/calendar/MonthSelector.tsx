
import React, { JSX } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MonthSelectorProps {
  month: string;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

/**
 * MonthSelector Component
 * 
 * A component for navigating between months in the calendar.
 * 
 * @param {string} month - The current month and year (e.g., "October, 2024")
 * @param {Function} onPrevMonth - Handler for navigating to the previous month
 * @param {Function} onNextMonth - Handler for navigating to the next month
 * @returns {JSX.Element} A month selector with navigation buttons
 */
const MonthSelector = ({ 
  month, 
  onPrevMonth, 
  onNextMonth 
}: MonthSelectorProps): JSX.Element => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white/10 rounded-full">
      <button 
        onClick={onPrevMonth} 
        className="text-white hover:bg-white/10 rounded-full p-1 transition-colors"
        aria-label="Previous month"
      >
        <ChevronLeft size={20} />
      </button>
      <span className="text-white font-medium">{month}</span>
      <button 
        onClick={onNextMonth} 
        className="text-white hover:bg-white/10 rounded-full p-1 transition-colors"
        aria-label="Next month"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default MonthSelector;