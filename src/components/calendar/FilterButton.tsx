
import React, { JSX } from 'react';
import { cn } from "@/lib/utils";
import { LucideIcon } from 'lucide-react';

interface FilterButtonProps {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

/**
 * FilterButton Component
 * 
 * A button used to filter events by type (Meetings, Events, Holiday).
 * 
 * @param {LucideIcon} icon - The icon to display
 * @param {string} label - The text to display
 * @param {boolean} isActive - Whether this filter is currently active
 * @param {Function} onClick - Handler for when the filter is clicked
 * @returns {JSX.Element} A button for filtering calendar events
 */
const FilterButton = ({ 
  icon: Icon, 
  label, 
  isActive = false, 
  onClick 
}: FilterButtonProps): JSX.Element => {
  return (
    <button
      className={cn(
        "card-filter-item flex items-center gap-2 px-4 py-2 transition-colors",
        isActive ? "bg-white/30" : ""
      )}
      onClick={onClick}
      aria-pressed={isActive}
    >
      <Icon size={18} className="text-white" />
      <span className="text-white">{label}</span>
    </button>
  );
};

export default FilterButton;