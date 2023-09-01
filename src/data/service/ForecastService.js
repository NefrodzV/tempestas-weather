import {
  getCurrentWeatherFromJson,
  getForecastFromJson,
} from "../../utils/Utils"
import { ForecastObserver, SearchErrorObserver } from "../../observers"

export const ForecastService = (function createForecastService() {
  const KEY = "186407c1fe2c47229a5131447231908"

  async function getForecast(city) {
    const forecastUrl = `http://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${city}&days=3&aqi=no&alerts=no`
    await fetch(forecastUrl, { mode: "cors" })
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        //This will make the next then() run reject callback
        throw new Error("Https error! status: " + response.status)
      })
      .then(
        function onSuccess(response) {
          const ForecastModel = getForecastFromJson(response)
          ForecastObserver.notify(ForecastModel)
          console.log(ForecastModel)
          console.log(response)
        },
        function onReject(reject) {
          console.log("Promise rejected")
          console.log(reject)
          SearchErrorObserver.notify()
        }
      )
  }

  return {
    getForecast,
  }
})()
