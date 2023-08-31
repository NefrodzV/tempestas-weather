import { format } from "date-fns"
import CurrentWeatherModel from "../data/model/CurrentWeatherModel"
import DailyWeatherModel from "../data/model/DailyWeatherModel"
import ForecastModel from "../data/model/ForecastModel"
import HourlyWeatherModel from "../data/model/HourlyWeatherModel"
import LocationModel from "../data/model/LocationModel.js"
import Strings from "../res/Strings.js"

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

const getCurrentWeatherFromJson = (response) => {
  let sunrise = null
  let sunset = null

  if (!response.forecast.forecastday.length === 0) {
    sunrise = response.forecast.forecastday[0].astro.sunrise
    sunset = response.forecast.forecastday[0].astro.sunset
  }

  return new CurrentWeatherModel(
    response.current.temp_f,
    response.current.is_day,
    response.current.condition.code,
    response.current.wind_mph,
    response.current.humidity,
    response.current.feelslike_f,
    response.current.uv,
    sunrise,
    sunset
  )
}
const getLocationFromJson = (response) => {
  const name = response.location.name
  const epocLocalTime = response.location.localtime_epoch
  return new LocationModel(name, epocLocalTime)
}

const getWeatherByDaysFromJson = (response) => {
  const dailyWeatherModels = []
  const forecastDays = response.forecast.forecastday

  if (forecastDays.length === 0) {
    return dailyWeatherModels
  }
  forecastDays.forEach((element) => {
    const dailyWeatherModel = new DailyWeatherModel(
      element.date_epoch,
      element.day.avgtemp_f,
      element.day.condition.code,
      element.day.daily_chance_of_rain,
      element.day.daily_chance_of_snow
    )
    dailyWeatherModels.push(dailyWeatherModel)
  })
  return dailyWeatherModels
}

// This will probably need an update only get the hourly weather from one day
// and if its 11pm or more it doesnt return anything
const getHourlyWeatherFromJson = (response) => {
  const hourlyWeatherModels = []
  const forecastDays = response.forecast.forecastday
  console.log(forecastDays)
  if (forecastDays.length === 0) {
    return hourlyWeatherModels
  }
  const localTimeEpoch = response.location.localtime_epoch
  const weatherByHours = forecastDays[0].hour

  weatherByHours.forEach((hourlyWeather) => {
    if (hourlyWeather.time_epoch > localTimeEpoch) {
      const hourlyWeatherModel = new HourlyWeatherModel(
        hourlyWeather.time_epoch,
        hourlyWeather.is_day,
        hourlyWeather.time,
        hourlyWeather.condition.code,
        hourlyWeather.temp_f,
        hourlyWeather.chance_of_rain,
        hourlyWeather.chance_of_snow
      )
      hourlyWeatherModels.push(hourlyWeatherModel)
    }
  })
  return hourlyWeatherModels
}

const getForecastFromJson = (response) => {
  const LocationModel = getLocationFromJson(response)
  const CurrentWeatherModel = getCurrentWeatherFromJson(response)
  const dailyWeatherModels = getWeatherByDaysFromJson(response)
  const hourlyWeatherModels = getHourlyWeatherFromJson(response)
  console.log(hourlyWeatherModels)
  return new ForecastModel(
    LocationModel,
    CurrentWeatherModel,
    dailyWeatherModels,
    hourlyWeatherModels
  )
}

const formatWeatherChance = (rainChance, snowChance) => {
  const rainChanceFormat = `${rainChance}%`
  const snowChanceFormat = `${snowChance}%`
  return rainChance > snowChance ? rainChanceFormat : snowChanceFormat
}

const formatEpochTime = (epochValue) => {
  const time = new Date(epochValue * 1000)
  // Returns hour and am or pm
  const formattedTime = format(time, "h a")

  return formattedTime
}
export {
  getElement,
  loadImage,
  showErrorMessage,
  disableErrorMessage,
  isBlank,
  getForecastFromJson,
  getCurrentWeatherFromJson,
  roundNumber,
  formatUvIndex,
  formatWeatherChance,
  formatEpochTime,
}
