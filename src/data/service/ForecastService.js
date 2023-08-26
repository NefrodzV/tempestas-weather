import { getCurrentWeatherFromJson } from "../../utils/Utils"
import weatherObserver from "../../weatherObserver"

export const ForecastService = (function createForecastService() {
  const KEY = "186407c1fe2c47229a5131447231908"

  async function getForecast(city) {
    console.log("Searching weather")
    const forecastUrl = `http://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${city}&days=3&aqi=no&alerts=no`
    const response = await fetch(forecastUrl, { mode: "cors" })
    response
      .json()
      .then(
        (response) => {
          const currentWeather = getCurrentWeatherFromJson(response)
          weatherObserver.notify(currentWeather)
          console.log(currentWeather)
        },
        (reject) => {
          console.log("Reject" + reject)
        }
      )
      .catch((err) => {
        console.error(err)
      })
  }

  return {
    getForecast,
  }
})()
