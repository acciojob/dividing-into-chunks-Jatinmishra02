const divide = (arr, n) => {
  const result = [];
  let currentChunk = [];
  let currentSum = 0;

  arr.forEach(num => {
    if (currentSum + num <= n) {
      currentChunk.push(num);
      currentSum += num;
    } else {
      result.push(currentChunk);
      currentChunk = [num];
      currentSum = num;
    }
  });

  if (currentChunk.length > 0) {
    result.push(currentChunk);
  }

  return result;
};

const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, parseInt(n))));
