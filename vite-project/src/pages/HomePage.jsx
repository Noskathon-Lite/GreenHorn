import NavBar from "../components/NavBar"
import WeatherReport from "../components/WeatherReport"
import AirPollution from "../actions_components/AirPollution"
import Footer from "../components/Footer"

function HomePage() {
  return (
    <div>
      <NavBar />
      <WeatherReport />
      <AirPollution />
      <Footer />
    </div>
  )
}

export default HomePage