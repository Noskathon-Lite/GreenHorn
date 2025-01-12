import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contributions from "./pages/Contributions";
import AboutUs from "./pages/AboutUs";
import Profile from "./pages/Profile";

import AirActivities1 from "./activities/AirActivities1";
import { CarbonCalcProvider } from "./context/CarbonCalcProvider";

function App() {
  return (
    <CarbonCalcProvider>
      <AirActivities1 />
    </CarbonCalcProvider>
      // <BrowserRouter>
      //   <Routes>
      //     <Route index element={<HomePage />} />
      //     <Route path="contributions" element={<Contributions />} />
      //     <Route path="aboutUs" element={<AboutUs />} />
      //     <Route path="profile" element={<Profile />} />
      //   </Routes>
      // </BrowserRouter>
  );
}

export default App;