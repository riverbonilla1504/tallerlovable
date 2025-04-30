import React, { JSX } from 'react';
import { cn } from "@/lib/utils";

interface DayButtonProps {
  day: string;
  date: string;
  isActive?: boolean;
  onClick?: () => void;
}

/**
 * DayButton Component
 * 
 * Displays a single day in the calendar with the day name and date.
 * Highlights the active/selected day.
 * 
 * @param {string} day - The day name (e.g., 'Mon', 'Tue')
 * @param {string} date - The date number (e.g., '01', '02')
 * @param {boolean} isActive - Whether this day is currently selected
 * @param {Function} onClick - Handler for when the day is clicked
 * @returns {JSX.Element} A button representing a day in the calendar
 */
const DayButton = ({ 
  day, 
  date, 
  isActive = false, 
  onClick 
}: DayButtonProps): JSX.Element => {
  return (
    <button
      className={cn(
        "flex flex-col items-center justify-center rounded-lg w-16 h-16 transition-colors",
        isActive ? "active-day" : "text-white hover:bg-white/10"
      )}
      onClick={onClick}
      aria-pressed={isActive}
    >
      <span className="text-sm">{day}</span>
      <span className="text-2xl font-semibold">{date}</span>
    </button>
  );
};

export default DayButton;
