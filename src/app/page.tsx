"use client";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calendar from '../components/calendar/Calendar';


const queryClient = new QueryClient();
const App = () => (
    <main className=" flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white bg-[url('854164.jpg')] bg-cover bg-center">
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <Toaster />
                <Sonner />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Calendar />} />
                    </Routes>
                </BrowserRouter>
            </TooltipProvider>
        </QueryClientProvider>
    </main>

);



export default App;