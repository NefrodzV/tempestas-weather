import { formatUvIndex, roundNumber } from "../../utils/Utils"

// TODO: Change this to get the condition code and chnage the condition to text
// Adding properties like contion description, condition code, condtion img or icon
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
    this.windsMph = roundNumber(windsMph)
    this.humidity = humidity
    this.feelsLikeFarenheit = roundNumber(feelsLikeFarenheit)
    this.uvIndex = formatUvIndex(uvIndex)
    this.sunrise = sunrise
    this.sunset = sunset
  }
}
