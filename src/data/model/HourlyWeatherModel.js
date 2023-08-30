import { WeatherConditions } from "./WeatherConditions"

export default function HourlyWeatherModel(
  epocTime,
  isDay,
  time,
  code,
  farenheitTemperature,
  chanceofRain,
  chanceOfSnow
) {
  this.epocTime = epocTime
  this.isDay = isDay
  this.time = time
  this.code = code
  this.condition = WeatherConditions.getCondition(code, isDay)
  this.farenheitTemperature = farenheitTemperature
  this.chanceofRain = chanceofRain
  this.chanceOfSnow = chanceOfSnow
}
