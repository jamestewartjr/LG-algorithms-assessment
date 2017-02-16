const mergeSort = (inputArray) => {
  const middle = inputArray.length / 2
  const left = inputArray.slice(0, middle)
  const right = inputArray.slice(middle, inputArray.length)
  if( inputArray.length < 2) {
    return inputArray
  }
  return merge(mergeSort(left), mergeSort(right))

}

const merge = (left, right) => {
  const finalArray = []
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

export default mergeSort
