// import AirPollution from "../actions_components/AirPollution"
import NavBar from "../components/NavBar"
import WeatherReport from "../components/WeatherReport"

function HomePage() {
  return (
    <div>
      <NavBar />
      <WeatherReport />
      {/* <AirPollution /> */}
    </div>
  )
}

export default HomePage