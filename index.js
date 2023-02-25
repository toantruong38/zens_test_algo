function findMinMaxSum(arr) {
  let minSum = Infinity;
  let maxSum = 0;
  let totalSum = 0;

  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
  }

  for (let i = 0; i < arr.length; i++) {
    let sum = totalSum - arr[i];
    minSum = Math.min(minSum, sum);
    maxSum = Math.max(maxSum, sum);
  }

  console.log(`${minSum} ${maxSum}`);
}

findMinMaxSum([1, 2, 3, 4, 5]);
