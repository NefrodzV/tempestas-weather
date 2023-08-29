import { WeatherConditions } from "./WeatherConditions"

export default function WeatherModel(
  farenheitTemperature,
  isDay,
  code,
  windMph,
  humidity,
  uvIndex,
  sunset,
  sunrise,
  chanceOfRain,
  chanceOfSnow
) {
  this.farenheitTemperature = farenheitTemperature
  this.isDay = isDay
  this.code = code
  this.condition = WeatherConditions.getCondition(code)
  this.windMph = windMph
  this.humidity = humidity
  this.uvIndex = uvIndex
  this.sunrise = sunrise
  this.sunset = sunset
  this.chanceOfRain = chanceOfRain
  this.chanceOfSnow = chanceOfSnow
}
