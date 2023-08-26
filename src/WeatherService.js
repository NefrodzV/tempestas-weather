export const WeatherService = (function createWeatherService() {
  const KEY = "186407c1fe2c47229a5131447231908"

  async function getWeather(city) {
    console.log("Searching weather")
    const searchUrl = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`
    const response = await fetch(searchUrl, { mode: "cors" })
    response
      .json()
      .then(
        (response) => {
          console.log(response.current)
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
    getWeather,
  }
})()
