import { formatEpochTime } from "../../utils/Utils"
import { WeatherConditions } from "./WeatherConditions"

export default function HourlyWeatherModel(
  timeZone,
  epocTime,
  isDay,
  code,
  farenheitTemperature,
  chanceOfRain,
  chanceOfSnow
) {
  this.timeZone = timeZone
  this.epocTime = epocTime
  this.time = formatEpochTime(epocTime, timeZone)
  this.isDay = isDay
  this.code = code
  this.condition = WeatherConditions.getCondition(code, isDay)
  this.farenheitTemperature = farenheitTemperature
  this.chanceOfRain = chanceOfRain
  this.chanceOfSnow = chanceOfSnow
}
