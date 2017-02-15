export default function mergeSort(inputArray){
  var middle = inputArray.length / 2
  var left = inputArray.slice(0, middle)
  var right = inputArray.slice(middle, inputArray.length)
  if( inputArray.length < 2) return inputArray

  return merge(mergeSort(left), mergeSort(right))

}

var merge = function(left, right) {
  var finalArray = []
  while(left.length || right.length){
    if(left.length && right.length){
      if(left[0] < right[0]) {
        finalArray.push(left.shift())
      } else {
        finalArray.push(right.shift())
      }
    } else if (left.length){
      finalArray.push(left.shift())
    } else {
      finalArray.push(right.shift())
    }
  }
  return finalArray
}
