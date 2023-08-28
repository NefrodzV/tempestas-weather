import { formatUvIndex, roundNumber } from "../../utils/Utils"
import { WeatherConditions } from "./WeatherConditions"

// TODO: Change this to get the condition code and chnage the condition to text
// Adding properties like contion description, condition code, condtion img or icon
export default function CurrentWeatherModel(
  city,
  region,
  localTime,
  temperatureFarenheit,
  isDay,
  code,
  windsMph,
  humidity,
  feelsLikeFarenheit,
  uvIndex,
  sunrise,
  sunset
) {
  this.city = city
  this.region = region
  this.localTime = localTime
  this.temperatureFarenheit = roundNumber(temperatureFarenheit)
  this.isDay = isDay
  this.code = code
  this.condition = WeatherConditions.getCondition(code)
  this.windsMph = roundNumber(windsMph)
  this.humidity = humidity
  this.feelsLikeFarenheit = roundNumber(feelsLikeFarenheit)
  this.uvIndex = formatUvIndex(uvIndex)
  this.sunrise = sunrise
  this.sunset = sunset
}
