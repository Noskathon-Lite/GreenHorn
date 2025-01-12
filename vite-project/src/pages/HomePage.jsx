import NavBar from "../components/NavBar"
import WeatherReport from "../components/WeatherReport"
import AirPollution from "../actions_components/AirPollution"

function HomePage() {
  return (
    <div>
      <NavBar />
      <WeatherReport />
      <AirPollution />
    </div>
  )
}

export default HomePage