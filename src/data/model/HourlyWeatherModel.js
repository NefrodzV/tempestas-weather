import { WeatherConditions } from "./WeatherConditions"

export default function HourlyWeatherModel(
  epocTime,
  isDay,
  time,
  code,
  farenheitTemperature,
  chanceOfRain,
  chanceOfSnow
) {
  this.epocTime = epocTime
  this.isDay = isDay
  this.time = time
  this.code = code
  this.condition = WeatherConditions.getCondition(code, isDay)
  this.farenheitTemperature = farenheitTemperature
  this.chanceOfRain = chanceOfRain
  this.chanceOfSnow = chanceOfSnow
}
