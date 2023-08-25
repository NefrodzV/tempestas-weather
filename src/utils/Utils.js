// Utility functions
const getElement = (selector) => {
  const element = document.querySelector(selector)
  return element
}

const loadImage = (img, path) => {
  img.src = path
}

const showErrorMessage = (parent, errorMessage) => {
  const errorElement = parent.nextElementSibling
  errorElement.textContent = errorMessage
  if (errorElement.hasAttribute("show")) return
  errorElement.toggleAttribute("show")
}

const disableErrorMessage = (parent) => {
  const errorElement = parent.nextElementSibling
  if (errorElement.hasAttribute("show")) {
    errorElement.toggleAttribute("show")
  }
}

const isBlank = (string) => {
  return string.trim() === ""
}

export { getElement, loadImage, showErrorMessage, disableErrorMessage, isBlank }
