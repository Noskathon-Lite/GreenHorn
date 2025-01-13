import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import Contributions from "./pages/Contributions";
import AboutUs from "./pages/AboutUs";

import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

import { GraphDataProvider } from "./contexts/GraphDataProvider";
import { WeatherDataProvider } from "./contexts/WeatherDataProvider";
import ScrollToTop from "./components/ScrollToTop";

import { CarbonCalcProvider } from "./contexts/CarbonCalcProvider";
import supabase from "./supabaseClient"; 

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
  
    const { data: currentSession } = supabase.auth.getSession(); 
    setSession(currentSession);


    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });


    return () => {
    };
  }, []);

  return (
    <WeatherDataProvider>
      <GraphDataProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="homePage" element={<HomePage />} />
            <Route path="/" index element={<Login setSession={setSession} />} />
            <Route path="contributions" element={<ProtectedRoute session={session}><Contributions /></ProtectedRoute>} />
            <Route path="aboutUs" element={<ProtectedRoute session={session}><AboutUs /></ProtectedRoute>} />
            <Route path="profile" element={<ProtectedRoute session={session}><Profile /></ProtectedRoute>} />
          </Routes>
        </BrowserRouter>
      </GraphDataProvider>
    </WeatherDataProvider>
  );
}

export default App;
