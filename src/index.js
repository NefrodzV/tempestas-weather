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
import Carousel from "./Carousel"

const service = ForecastService

// Setting the default images of the page

const loadTabIcon = () => {
  const link = document.createElement("link")
  link.setAttribute("rel", "icon")
  link.href = logoSvg
  document.head.appendChild(link)
}

const loadDefaultImages = () => {
  const logoImage = getElement(".logo img")
  const discordImage = getElement("#discord-link img")
  const leftButtonImg = getElement("#left img")
  const rightButtonImg = getElement("#right img")
  const uvImage = getElement("#uv-img")
  const humidityImg = getElement("#humidity-img")
  const windsImg = getElement("#winds-img")
  const sunsetImg = getElement("#sunset-img")
  loadImage(logoImage, logoSvg)
  loadImage(discordImage, discordSvg)
  loadImage(leftButtonImg, chevronLeftSvg)
  loadImage(rightButtonImg, chevronRightSvg)
  loadImage(uvImage, uvSvg)
  loadImage(humidityImg, humiditySvg)
  loadImage(windsImg, windsSvg)
  loadImage(sunsetImg, sunsetSvg)
}
const getDefaultWeather = () => {
  service.getForecast("Ponce")
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

const updateLocationWeather = (data) => {
  // current weather obj
  const temperaturePara = getElement(".temperature")
  const conditionImage = getElement("#condition-image")
  const conditionPara = getElement(".condition")
  const temperatureFeelsPara = getElement(".temperature-feels")
  const locationPara = getElement("#location")

  const currentWeather = data.currentWeather
  console.log(currentWeather)

  temperaturePara.textContent =
    currentWeather.farenheitTemperature + Strings.DEGREE_SYMBOL_HEX

  conditionPara.textContent = currentWeather.condition.text
  temperatureFeelsPara.textContent =
    "Feels like " +
    currentWeather.feelsLikeinFarenheit +
    Strings.DEGREE_SYMBOL_HEX

  conditionImage.src = currentWeather.condition.img
  locationPara.textContent = data.location.city
}

const updateWeatherDescriptions = (data) => {
  const uvIndexPara = getElement("#uv-index")
  const humidityPara = getElement("#humidity")
  const windsPara = getElement("#winds")
  const sunrisePara = getElement("#sunrise")
  const sunsetPara = getElement("#sunset")

  uvIndexPara.textContent = data.currentWeather.uvIndex
  humidityPara.textContent =
    data.currentWeather.humidity + Strings.PERCENT_SYMBOL
  windsPara.textContent = `${data.currentWeather.windMph} ${Strings.MILES_PER_HOUR}`

  sunrisePara.textContent = data.currentWeather.sunrise
  sunsetPara.textContent = data.currentWeather.sunset
}

// Main
loadTabIcon()
loadDefaultImages()
getDefaultWeather()

const searchInput = getElement("#search")
searchInput.addEventListener("keydown", handleEnter)
searchInput.addEventListener("input", handleInput)

const carouselElement = document.querySelector(".carousel")
const carousel = new Carousel(carouselElement)

console.log(carousel)

// Setting my observers
ForecastObserver.subscribe(updateLocationWeather)
ForecastObserver.subscribe(updateWeatherDescriptions)
