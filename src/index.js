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
console.log("Hello Tempestas")

// Setting the default images of the page
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

  // TODO: Search the term
}

const handleInput = (event) => {
  const parent = event.target
  if (!parent.validity.valueMissing && !isBlank(parent.value)) {
    disableErrorMessage(parent)
  }
}

const searchInput = getElement("#search")
searchInput.addEventListener("keydown", handleEnter)
searchInput.addEventListener("input", handleInput)

const buttonRight = getElement("#right")
console.log(buttonRight)
