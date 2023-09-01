import { ForecastObserver } from "./observers"
import RainPercentIcon from "../src/assets/icons/icon-rain-percent.svg"
import { formatEpochTime, formatWeatherChance } from "./utils/Utils"

export default class Carousel {
  constructor(carouselElement) {
    this.counter = 0
    this.cards = []
    this.carousel = carouselElement
    this.leftButton = carouselElement.children[0]
    this.leftButton.addEventListener("click", () => {
      if (this.counter === 0) return
      this.counter++
      this.applyTranslate()
    })
    this.carouselWindow = carouselElement.children[1]
    this.rightButton = carouselElement.children[2]
    this.rightButton.addEventListener("click", () => {
      if (Math.abs(this.counter) + 3 >= this.cards.length) {
        return
      }
      this.counter--
      this.applyTranslate()
    })
    ForecastObserver.subscribe(this.update.bind(this))
  }
  update(data) {
    this.clean()
    const weatherByHour = data.weatherByHour
    if (weatherByHour.length === 0) {
      console.log("Error in data show error")
      return
    }

    weatherByHour.forEach((hourlyWeather) => {
      const card = new Card(hourlyWeather)
      this.cards.push(card)
      this.appendCard(card)
    })
  }
  appendCard(card) {
    this.carouselWindow.appendChild(card.getView())
  }

  clean() {
    this.counter = 0
    this.cards.length = 0
    while (this.carouselWindow.hasChildNodes()) {
      this.carouselWindow.removeChild(this.carouselWindow.firstChild)
    }
  }

  applyTranslate() {
    this.cards.forEach((card) => {
      const translate = `${246 * this.counter}px`
      card.getView().style.transform = `translate(${translate},0)`
    })
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
