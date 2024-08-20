function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  let i = 0;
  let j = 0;

  const newArray = [];

  while (i < left.length && j < right.length) {

    if (left[i] < right[j]) {
      newArray.push(left[i]);
      i++;
    } else {
      newArray.push(right[j]);
      j++;
    }

  }

  while (i < left.length) {
    newArray.push(left[i]);
    i++;    
  }

  while (j < right.length) {
    newArray.push(right[j]);
    j++;    
  }

  return newArray;

}

console.log(
  mergeSort([-2, 1500, -8, 12, 16, 0, 2, -1000])
);