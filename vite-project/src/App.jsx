import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contributions from "./pages/Contributions";
import AboutUs from "./pages/AboutUs";
import Profile from "./pages/Profile";

import AirActivities1 from "./activities/AirActivities1";

function App() {
  return (
<<<<<<< HEAD
        <div>
          <AirActivities1 />
        </div>
=======
      <BrowserRouter>
      <Routes>
      <Route index element={<HomePage />} />
            <Route path="contributions" element={<Contributions />} />
            <Route path="aboutUs" element={<AboutUs />} />
            <Route path="profile" element={<Profile />} />
      </Routes>
      </BrowserRouter>
>>>>>>> 5370872a1289688d9c97dc36a38938152dc1c21c
  );
}

export default App;