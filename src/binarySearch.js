const BinarySearch = (inputArray, searchValue) => {
  let max = inputArray.length - 1
  let min = 0
  while (min <= max) {
    let middle = (min + max) / 2
    if(inputArray[middle] === searchValue) {
      return middle
    }
    else {
      if( inputArray[middle] < searchValue) {
        min = inputArray[middle]
      }
      else {
        max = inputArray[middle]
      }
    }
  }

  return -1
}

export default BinarySearch
