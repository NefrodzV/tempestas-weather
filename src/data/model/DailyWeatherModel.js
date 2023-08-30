import { WeatherConditions } from "./WeatherConditions"

// Weather by day object
export default function DailyWeatherModel(
  dateEpoch,
  averageFarenheitTemperature,
  code,
  dailyChanceOfRain,
  dailyChanceofSnow
) {
  this.date = dateEpoch // Needs to be formatted
  this.averageFarenheitTemperature = averageFarenheitTemperature
  this.code = code
  this.condition = WeatherConditions.getCondition(code, false)
  this.dailyChanceOfRain = dailyChanceOfRain
  this.dailyChanceofSnow = dailyChanceofSnow
}
