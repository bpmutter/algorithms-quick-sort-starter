function quickSort(array) {
  if(array.length <= 1) return array;

  const pivot = array[0];
  array.shift();

  const leftSide = array.filter(num => num<=pivot);
  const rightSide = array.filter(num => num>pivot);

  const leftSorted = quickSort(leftSide);
  const rightSorted = quickSort(rightSide);

   leftSorted.push(pivot)
  return leftSorted.concat(rightSorted);

  

  // if the length of the array is 0 or 1, return the array

  // set the pivot to the first element of the array
  // remove the first element of the array

  // put all values less than the pivot value into an array called left
  // put all values greater than the pivot value into an array called right

  // call quick sort on left and assign the return value to leftSorted
  // call quick sort on right and assign the return value to rightSorted

  // return the concatenation of leftSorted, the pivot value, and rightSorted
}

const arr = [2, -1, 4, 3, 7, 3];
console.log(quickSort(arr));

module.exports = {
  quickSort
};
