import {
  getCurrentWeatherFromJson,
  getForecastFromJson,
} from "../../utils/Utils"
import { ForecastObserver } from "../../observers"

export const ForecastService = (function createForecastService() {
  const KEY = "186407c1fe2c47229a5131447231908"

  async function getForecast(city) {
    const forecastUrl = `http://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${city}&days=3&aqi=no&alerts=no`
    const response = await fetch(forecastUrl, { mode: "cors" })
    response
      .json()
      .then(
        (response) => {
          const ForecastModel = getForecastFromJson(response)
          ForecastObserver.notify(ForecastModel)
          console.log(ForecastModel)
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
