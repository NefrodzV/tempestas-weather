export default function ForecastModel(
  LocationModel,
  CurrentWeather,
  DailyWeather,
  HourlyWeather
) {
  this.location = LocationModel
  this.currentWeather = CurrentWeather
  this.weatherByDays = DailyWeather
  this.weatherbyHour = HourlyWeather
}
