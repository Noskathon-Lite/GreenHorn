import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import Contributions from "./pages/Contributions";
import AboutUs from "./pages/AboutUs";
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
          <Route index element={<HomePage />} />
          <Route path="contributions" element={<Contributions />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      </GraphDataProvider>
    </WeatherDataProvider>
      
  );
}

export default App;