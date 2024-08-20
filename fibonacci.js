function fibs(n) {
  let first = 0, second = 1;
  let fibsArray = [0];

  for (let i = 1; i < n; i++) {
    [first, second] = [second, first + second];
    fibsArray.push(first);
  }

  return fibsArray;
}

console.log(
  fibs(8)
);

function fibsRec(n) {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const current = fibsRec(n - 1);

  const previousNumber = current[current.length - 1] + current[current.length - 2];

  current.push(previousNumber);

  return current;
}


console.log(
  fibsRec(8)
);