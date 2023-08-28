import { CurrentWeatherModel } from "../data/model/CurrentWeatherModel"

// Utility functions
const getElement = (selector) => {
  const element = document.querySelector(selector)
  return element
}

const loadImage = (img, path) => {
  img.src = path
}

const showErrorMessage = (parent, errorMessage) => {
  const errorElement = parent.nextElementSibling
  errorElement.textContent = errorMessage
  if (errorElement.hasAttribute("show")) return
  errorElement.toggleAttribute("show")
}

const disableErrorMessage = (parent) => {
  const errorElement = parent.nextElementSibling
  if (errorElement.hasAttribute("show")) {
    errorElement.toggleAttribute("show")
  }
}

const isBlank = (string) => {
  return string.trim() === ""
}

const getCurrentWeatherFromJson = (response) => {
  console.log(response)
  const currentWeather = new CurrentWeatherModel(
    response.location.name,
    response.location.country,
    response.location.localtime,
    response.current.temp_f,
    response.current.is_day,
    response.current.condition.code,
    response.current.wind_mph,
    response.current.humidity,
    response.current.feelslike_f,
    response.current.uv,
    response.forecast.forecastday[0].astro.sunrise,
    response.forecast.forecastday[0].astro.sunset
  )

  return currentWeather
}

const roundNumber = (number) => {
  return Math.round(number)
}

const formatUvIndex = (uvIndex) => {
  const LOW = "Low"
  const MEDIUM = "Medium"
  const HIGH = "High"
  if (uvIndex < 3) return LOW
  if (uvIndex > 2 && uvIndex < 8) return MEDIUM
  return HIGH
}

export {
  getElement,
  loadImage,
  showErrorMessage,
  disableErrorMessage,
  isBlank,
  getCurrentWeatherFromJson,
  roundNumber,
  formatUvIndex,
}
