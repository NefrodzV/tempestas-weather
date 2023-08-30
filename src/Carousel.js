import { ForecastObserver } from "./observers"

export default class Carousel {
  constructor(carouselElement) {
    this.cards = []
    this.carousel = carouselElement
    this.leftButton = carouselElement.children[0]
    this.carouselWindow = carouselElement.children[1]
    this.rightButton = carouselElement.children[2]

    ForecastObserver.subscribe(this.update)
  }

  update(data) {
    const card = new Card("data")
    console.log("calling update")
  }
}

class Card {
  constructor(data) {
    this.forecastCard = document.createElement("div")
    this.forecastCard.classList.add("forecast-card")

    this.title = document.createElement("p")
    this.title.id = "forecast-title"

    this.image = document.createElement("img")
    this.image.id = "forecast-image"

    this.miniContainer = document.createElement("div")

    this.rainPercentImg = document.createElement("img")
    this.rainPercentImg.id = "rain-percent-icon"

    this.rainPercent = document.createElement("p")
    this.rainPercent.id = "rain-percent"

    this.miniContainer.append(this.rainPercentImg, this.rainPercent)
    this.forecastCard.append(this.title, this.image, this.miniContainer)
  }

  getView() {
    return this.forecastCard
  }
}
