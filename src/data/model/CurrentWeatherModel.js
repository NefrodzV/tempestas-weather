import { formatUvIndex, roundNumber } from "../../utils/Utils"
import { WeatherConditions } from "./WeatherConditions"

// TODO: Change this to get the condition code and chnage the condition to text
// Adding properties like contion description, condition code, condtion img or icon
export default function CurrentWeatherModel(
  farenheitTemperature,
  isDay,
  code,
  windMph,
  humidity,
  feelsLikeinFarenheit,
  uvIndex,
  sunrise,
  sunset
) {
  this.farenheitTemperature = roundNumber(farenheitTemperature)
  this.isDay = isDay
  this.code = code
  this.condition = WeatherConditions.getCondition(code, isDay)
  this.windMph = roundNumber(windMph)
  this.humidity = humidity
  this.feelsLikeinFarenheit = roundNumber(feelsLikeinFarenheit)
  this.uvIndex = formatUvIndex(uvIndex)
  this.sunrise = sunrise
  this.sunset = sunset
}
