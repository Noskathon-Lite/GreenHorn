import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contributions from "./pages/Contributions";
import AboutUs from "./pages/AboutUs";
import Profile from "./pages/Profile";

function App() {
  return (
      <BrowserRouter>
      <Routes>
      <Route index element={<HomePage />} />
            <Route path="contributions" element={<Contributions />} />
            <Route path="aboutUs" element={<AboutUs />} />
            <Route path="profile" element={<Profile />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;