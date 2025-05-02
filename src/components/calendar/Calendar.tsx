"use client";
import React, { JSX, useState } from 'react';
import GlassCard from '../GlassCard';
import DayButton from './DayButton';
import FilterButton from './FilterButton';
import EventCard from './EventCard';
import SearchBar from './SearchBar';
import MonthSelector from './MonthSelector';
import { Calendar as CalendarIcon, Search, ChevronLeft, ChevronRight } from 'lucide-react';

// Mock data for our component
const DAYS = [
  { day: 'Fri', date: '31' },
  { day: 'Sat', date: '01' },
  { day: 'Sun', date: '02' },
  { day: 'Mon', date: '03' },
  { day: 'Tue', date: '04' },
];

const EVENTS = [
  {
    id: '1',
    title: 'Meeting with James Brown',
    timeRange: '8:00 AM to 9:00 AM',
    location: 'On ZOOM.',
    attendees: [
      { id: '1' },
      { id: '2' },
      { id: '3' },
      { id: '4' },
      { id: '5' },
    ],
    tags: ['Marketing'],
    type: 'meetings',
  },
];

/**
 * Calendar Component
 * 
 * A comprehensive calendar view with day selection, event filtering, search,
 * and event display.
 * 
 * @returns {JSX.Element} A complete calendar interface with glass effect
 */
const Calendar = (): JSX.Element => {
  const [activeDay, setActiveDay] = useState('02');
  const [activeMonth, setActiveMonth] = useState('October, 2024');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Handlers for our component interactions
  const handleDayClick = (date: string) => setActiveDay(date);
  const handleFilterClick = (filterId: string) => {
    setActiveFilter(activeFilter === filterId ? null : filterId);
  };
  const handlePrevMonth = () => {
    // In a real app, we would calculate the previous month
    setActiveMonth('September, 2024');
  };
  const handleNextMonth = () => {
    // In a real app, we would calculate the next month
    setActiveMonth('November, 2024');
  };
  const handlePrevDay = () => {
    const currentIndex = DAYS.findIndex(day => day.date === activeDay);
    if (currentIndex > 0) {
      setActiveDay(DAYS[currentIndex - 1].date);
    }
  };
  const handleNextDay = () => {
    const currentIndex = DAYS.findIndex(day => day.date === activeDay);
    if (currentIndex < DAYS.length - 1) {
      setActiveDay(DAYS[currentIndex + 1].date);
    }
  };

  // Filter events based on active filter and search query
  const filteredEvents = EVENTS.filter(event => {
    if (activeFilter && event.type !== activeFilter) return false;
    if (searchQuery) {
      return event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location?.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return true;
  });

  return (
    <GlassCard className="max-w-md mx-auto w-full font-poppins">
      {/* Header */}
      <header className="flex justify-between items-center mb-4 font-poppins">
        <div className="flex items-center text-white">
          <CalendarIcon className="mr-2" size={22} />
          <h2 className="text-xl">Schedule</h2>
        </div>
        <a href="#" className="text-white flex items-center font-poppins">
          See all
          <ChevronRight size={16} className="ml-1 font-poppins" />
        </a>
      </header>

      {/* Month selector */}
      <MonthSelector
        month={activeMonth}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
      />

      {/* Days selector */}
      <nav className="flex justify-between items-center my-4 relative font-poppins">
        <button
          className="absolute left-0 text-white p-1 bg-black/20 rounded-full font-poppins z-10"
          onClick={handlePrevDay}
          aria-label="Previous day"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex  font-poppins overflow-x-auto space-x-2 py-2 w-full scrollbar-hide px-6">
          {DAYS.map((day) => (
            <DayButton
              key={day.date}
              day={day.day}
              date={day.date}
              isActive={activeDay === day.date}
              onClick={() => handleDayClick(day.date)}
            />
          ))}
        </div>

        <button
          className="absolute right-0 text-white p-1 bg-black/20 rounded-full z-10 font-poppins"
          onClick={handleNextDay}
          aria-label="Next day"
        >
          <ChevronRight size={18} />
        </button>
      </nav>

      {/* Search */}
      <SearchBar
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Filters */}
      <div className="flex justify-between gap-2 mt-4 mb-6 font-poppins">
        <FilterButton
          icon={CalendarIcon}
          label="Meetings"
          isActive={activeFilter === 'meetings'}
          onClick={() => handleFilterClick('meetings')}
        />
        <FilterButton
          icon={CalendarIcon}
          label="Events"
          isActive={activeFilter === 'events'}
          onClick={() => handleFilterClick('events')}
        />
        <FilterButton
          icon={CalendarIcon}
          label="Holiday"
          isActive={activeFilter === 'holiday'}
          onClick={() => handleFilterClick('holiday')}
        />
      </div>

      {/* Events */}
      <div className="space-y-3 font-poppins">
        {filteredEvents.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            timeRange={event.timeRange}
            location={event.location}
            attendees={event.attendees}
            tags={event.tags}
          />
        ))}

        {filteredEvents.length === 0 && (
          <p className="text-white text-center py-4 font-poppins ">No events found.</p>
        )}
      </div>
    </GlassCard>
  );
};

export default Calendar;