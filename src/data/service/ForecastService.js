import { CurrentWeather } from "../model/Weather"

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
          // console.log(response)
          const currentWeather = new CurrentWeather(
            response.location.name,
            response.location.region,
            response.location.localtime,
            response.current.temp_c,
            response.current.is_day,
            response.current.condition.text,
            response.current.condition.icon,
            response.current.wind_mph,
            response.current.humidity,
            response.current.feelslike_c,
            response.current.feelslike_f,
            response.current.uv
          )

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
