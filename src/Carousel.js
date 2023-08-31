import { ForecastObserver } from "./observers"
import RainPercentIcon from "../src/assets/icons/icon-rain-percent.svg"
import { formatWeatherChance } from "./utils/Utils"

export default class Carousel {
  constructor(carouselElement) {
    this.cards = []
    this.carousel = carouselElement
    this.leftButton = carouselElement.children[0]
    this.carouselWindow = carouselElement.children[1]
    this.rightButton = carouselElement.children[2]
    ForecastObserver.subscribe(this.update.bind(this))
  }
  update(data) {
    this.clean()
    console.log(data)
    const weatherByHour = data.weatherByHour
    if (weatherByHour.length === 0) {
      console.log("Error in data show error")
      return
    }

    console.log(this.carouselWindow)
    console.log(this.carousel)
    weatherByHour.forEach((hourlyWeather) => {
      const card = new Card(hourlyWeather)
      console.log(card)
      this.carouselWindow.appendChild(card.getView())
      this.appendCard(card)
    })
  }
  appendCard(card) {
    this.carouselWindow.appendChild(card.getView())
  }

  clean() {
    while (this.carouselWindow.hasChildNodes()) {
      this.carouselWindow.removeChild(this.carouselWindow.firstChild)
    }
  }
}

class Card {
  constructor(data) {
    this.forecastCard = document.createElement("div")
    this.forecastCard.classList.add("forecast-card")

    this.title = document.createElement("p")
    this.title.id = "forecast-title"
    this.title.textContent = data.time

    this.image = document.createElement("img")
    this.image.id = "forecast-image"
    this.image.src = data.condition.img

    this.miniContainer = document.createElement("div")

    this.rainPercentImg = document.createElement("img")
    this.rainPercentImg.id = "rain-percent-icon"
    this.rainPercentImg.src = RainPercentIcon

    this.rainPercent = document.createElement("p")
    this.rainPercent.id = "rain-percent"
    this.rainPercent.textContent = formatWeatherChance(
      data.chanceOfRain,
      data.chanceOfSnow
    )

    this.miniContainer.append(this.rainPercentImg, this.rainPercent)
    this.forecastCard.append(this.title, this.image, this.miniContainer)
  }

  getView() {
    return this.forecastCard
  }
}
