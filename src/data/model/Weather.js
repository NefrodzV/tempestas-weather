export class CurrentWeather {
  constructor(
    city,
    region,
    localTime,
    temperatureCelsius,
    isDay,
    condition,
    icon,
    windsMph,
    humidity,
    feelsLikeCelsius,
    feelsLikeFarenheit,
    uvIndex
  ) {
    this.city = city
    this.region = region
    this.localTime = localTime
    this.temperatureCelsius = temperatureCelsius
    this.isDay = isDay
    this.condition = condition
    this.icon = icon
    this.windsMph = windsMph
    this.humidity = humidity
    this.feelsLikeCelsius = feelsLikeCelsius
    this.feelsLikeFarenheit = feelsLikeFarenheit
    this.uvIndex = uvIndex
  }
}
