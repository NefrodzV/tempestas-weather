export default function ForecastDayModel(
  LocationModel,
  WeatherModel,
  HourlyWeatherModels
) {
  this.location = LocationModel
  this.currentWeather = WeatherModel
  this.hourlyWeather = HourlyWeatherModels
}
