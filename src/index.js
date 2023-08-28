import "./style.css"
import logoSvg from "./assets/icons/icon-goddess-logo.svg"
import discordSvg from "./assets/icons/icon-discord.svg"
import chevronLeftSvg from "./assets/icons/chevron-left.svg"
import chevronRightSvg from "./assets/icons/chevron-right.svg"
import uvSvg from "./assets/icons/icon-uv.svg"
import sunsetSvg from "./assets/icons/icon-sunset.svg"
import humiditySvg from "./assets/icons/icon-humidity.svg"
import windsSvg from "./assets/icons/icon-winds.svg"

import {
  disableErrorMessage,
  getElement,
  isBlank,
  loadImage,
  showErrorMessage,
} from "./utils/Utils"
import { ForecastObserver } from "./observers"
import { ForecastService } from "./data/service/ForecastService"
import { Strings } from "./res/Strings"
import { WeatherConditions } from "./data/model/WeatherConditions"
console.log("Hello Tempestas")

const service = ForecastService

// Setting the default images of the page
const logoImage = getElement(".logo img")
const discordImage = getElement("#discord-link img")
const leftButtonImg = getElement("#left img")
const rightButtonImg = getElement("#right img")
const uvImage = getElement("#uv-img")
const humidityImg = getElement("#humidity-img")
const windsImg = getElement("#winds-img")
const sunsetImg = getElement("#sunset-img")

const getDefaultWeather = () => {
  service.getForecast("London")
}
const handleEnter = (event) => {
  const parent = event.target
  if (
    event.key === "Enter" &&
    (parent.validity.valueMissing || isBlank(parent.value))
  ) {
    showErrorMessage(parent, "Cannot search empty value")
    //reset the caret
    parent.value = ""
    return
  }

  if (event.key === "Enter") {
    service.getForecast(parent.value)
  }
}

const handleInput = (event) => {
  const parent = event.target
  if (!parent.validity.valueMissing && !isBlank(parent.value)) {
    disableErrorMessage(parent)
  }
}

const updateLocationWeather = (currentWeather) => {
  // current weather obj
  console.log(currentWeather)
  const temperaturePara = getElement(".temperature")
  const conditionImage = getElement("#condition-image")
  const conditionPara = getElement(".condition")
  const temperatureFeelsPara = getElement(".temperature-feels")
  const locationPara = getElement("#location")

  temperaturePara.textContent =
    currentWeather.temperatureFarenheit +
    Strings.DEGREE_SYMBOL_HEX +
    Strings.FARENHEIT_SYMBOL

  conditionPara.textContent = currentWeather.condition
  temperatureFeelsPara.textContent =
    "Feels like " +
    currentWeather.feelsLikeFarenheit +
    Strings.DEGREE_SYMBOL_HEX +
    Strings.FARENHEIT_SYMBOL

  locationPara.textContent = currentWeather.city
}

const updateWeatherDescriptions = (currentWeather) => {
  const uvIndexPara = getElement("#uv-index")
  const humidityPara = getElement("#humidity")
  const windsPara = getElement("#winds")
  const sunrisePara = getElement("#sunrise")
  const sunsetPara = getElement("#sunset")

  uvIndexPara.textContent = currentWeather.uvIndex
  humidityPara.textContent = currentWeather.humidity + Strings.PERCENT_SYMBOL
  windsPara.textContent = `${currentWeather.windsMph} ${Strings.MILES_PER_HOUR}`

  sunrisePara.textContent = currentWeather.sunrise
  sunsetPara.textContent = currentWeather.sunset
}

ForecastObserver.subscribe(updateLocationWeather)
ForecastObserver.subscribe(updateWeatherDescriptions)

getDefaultWeather()

console.log(WeatherConditions.getCondition(1000))

loadImage(logoImage, logoSvg)
loadImage(discordImage, discordSvg)
loadImage(leftButtonImg, chevronLeftSvg)
loadImage(rightButtonImg, chevronRightSvg)
loadImage(uvImage, uvSvg)
loadImage(humidityImg, humiditySvg)
loadImage(windsImg, windsSvg)
loadImage(sunsetImg, sunsetSvg)

const searchInput = getElement("#search")
searchInput.addEventListener("keydown", handleEnter)
searchInput.addEventListener("input", handleInput)
