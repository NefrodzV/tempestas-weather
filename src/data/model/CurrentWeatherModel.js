import { roundNumber } from "../../utils/Utils"

export class CurrentWeatherModel {
  constructor(
    city,
    region,
    localTime,
    temperatureFarenheit,
    isDay,
    condition,
    icon,
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
    this.condition = condition
    this.icon = icon
    this.windsMph = windsMph
    this.humidity = humidity
    this.feelsLikeFarenheit = roundNumber(feelsLikeFarenheit)
    this.uvIndex = uvIndex
    this.sunrise = sunrise
    this.sunset = sunset
  }
}
