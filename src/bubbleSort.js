const bubbleSort = (inputArray) => {
  let sorting = false
  if( inputArray.length < 2) {
    return inputArray
  }
  for(let index = 0; index < inputArray.length; index ++) {
    let currentValue = inputArray[index]
    let nextValue = inputArray[index+1]
    if(nextValue < currentValue){
      inputArray[index] = nextValue
      inputArray[index+1] = currentValue
      sorting = true
    }
  }

  if(sorting) {
    bubbleSort(inputArray)
  }
  return inputArray
}

export default bubbleSort
