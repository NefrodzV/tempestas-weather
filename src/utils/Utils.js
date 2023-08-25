// Utility functions
const getElement = (selector) => {
  const element = document.querySelector(selector)
  // if (element === null) {
  //   return console.log(
  //     "Searched element with selector: " + selector + "is null"
  //   )
  // }
  console.log(element)
  return element
}

const loadImage = (img, path) => {
  img.src = path
}

const showErrorMessage = (parent, errorMessage) => {
  console.log(parent)
  const errorElement = parent.nextElementSibling
  errorElement.textContent = errorMessage
  if (errorElement.hasAttribute("show")) return
  errorElement.toggleAttribute("show")
}

const isBlank = (string) => {
  return string.trim() === ""
}

export { getElement, loadImage, showErrorMessage, isBlank }
