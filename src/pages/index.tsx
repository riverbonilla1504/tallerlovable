import { useEffect } from 'react';
import Calendar from '../components/calendar/Calendar';

/**
 * Index Page
 * 
 * The main landing page that showcases the Calendar component with a 
 * beautiful sunset mountain landscape background to demonstrate the glass effect.
 * 
 * @returns {JSX.Element} The main page with a calendar component
 */
const Index = () => {
  // Set the background image and styles when the component mounts
  useEffect(() => {
    document.body.style.backgroundImage = "url('/854164.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.height = "100vh";
    document.body.style.margin = "0";
    
    // Clean up function to reset styles when component unmounts
    return () => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundPosition = "";
      document.body.style.backgroundAttachment = "";
      document.body.style.height = "";
      document.body.style.margin = "";
    };
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center p-4 sm:p-6">
      <Calendar />
    </main>
  );
};

export default Index;
