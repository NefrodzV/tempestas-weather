export default function ForecastModel(
  LocationModel,
  CurrentWeather,
  weatherByDays,
  weatherByHours
) {
  this.location = LocationModel
  this.currentWeather = CurrentWeather
  this.weatherByDays = weatherByDays
  this.weatherbyHour = weatherByHours
}
