import { CurrentWeather } from "../data/model/CurrentWeather"

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
  const currentWeather = new CurrentWeather(
    response.location.name,
    response.location.region,
    response.location.localtime,
    response.current.temp_f,
    response.current.is_day,
    response.current.condition.text,
    response.current.condition.icon,
    response.current.wind_mph,
    response.current.humidity,
    response.current.feelslike_f,
    response.current.uv
  )

  return currentWeather
}

const roundNumber = (number) => {
  return Math.round(number)
}

export {
  getElement,
  loadImage,
  showErrorMessage,
  disableErrorMessage,
  isBlank,
  getCurrentWeatherFromJson,
  roundNumber,
}
