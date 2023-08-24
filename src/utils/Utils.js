// Utility functions
export const getElement = (selector) => {
  const element = document.querySelector(selector)
  if (element === null) {
    return console.log(
      "Searched element with selector: " + selector + "is null"
    )
  }
  return element
}

export const loadImage = (img, path) => {
  img.src = path
}
