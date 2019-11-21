// Add your functions here
function map(array, func) {
  return array.map(func)
}

function reduce(array, startingPoint=0) {
  return array.reduce((startingPoint, currentVal) => startingPoint += currentVal)
}