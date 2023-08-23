import "./style.css"
console.log("Hello Tempestas")

let nums = [1, 2, 3, 4, 5, 6, 5]

let isLessThan1Ten = nums.every((num) => typeof num === "number")
console.log(isLessThan1Ten)
