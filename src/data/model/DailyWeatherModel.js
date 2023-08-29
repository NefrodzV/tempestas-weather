import { WeatherConditions } from "./WeatherConditions"

export default function DaylyWeatherModel(
  dateEpoch,
  averageFarenheitTemperature,
  code,
  dailyChanceOfRain,
  dailyChanceofSnow
) {
  this.date = dateEpoch // Needs to be formatted
  this.averageFarenheitTemperature = averageFarenheitTemperature
  this.code = code
  this.condition = WeatherConditions.getCondition(code)
  this.dailyChanceOfRain = dailyChanceOfRain
  this.dailyChanceofSnow = dailyChanceofSnow
}
