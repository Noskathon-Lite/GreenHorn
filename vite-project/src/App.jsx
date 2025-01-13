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
import supabase from "./supabaseClient";  // Import supabase client

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Fetch current session on initial load
    const { data: currentSession } = supabase.auth.getSession(); // Use getSession() instead of session()
    setSession(currentSession);

    // Listen for authentication state changes
    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    // No need to unsubscribe in this case
    return () => {
      // Cleanup logic not needed anymore
    };
  }, []);

  return (
    <WeatherDataProvider>
      <GraphDataProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="homePage" element={<HomePage />} />
            {/* Pass setSession as a prop to Login */}
            <Route path="/" index element={<Login setSession={setSession} />} />
            {/* Pass session as a prop to ProtectedRoute */}
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
