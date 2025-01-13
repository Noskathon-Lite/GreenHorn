import { BrowserRouter, Route, Routes } from "react-router-dom";

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

function App() {
  return (
    <WeatherDataProvider>
      <GraphDataProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="homePage" element={<HomePage />} />
          <Route index element={<Login />} />
          <Route path="contributions" element={<ProtectedRoute>
              <Contributions />
            </ProtectedRoute>} />
          <Route path="aboutUs" element={<ProtectedRoute>
              <AboutUs />
            </ProtectedRoute>} />
          <Route path="profile" element={<ProtectedRoute>
              <Profile />
            </ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
      </GraphDataProvider>
    </WeatherDataProvider>
      
  );
}

export default App;