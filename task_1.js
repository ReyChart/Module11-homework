// Option №1

function countEvenOdd(arr) {
  let evenCount = 0;
  let oddCount = 0;
  let zeroCount = 0;
  let otherCount = 0;
  
  for (let i=0; i < arr.length; i++) {
    if (arr[i] !==0 && typeof(arr[i]) !== 'number' || isNaN(arr[i])) {
      otherCount++;
    } else if (arr[i] === 0) {
      zeroCount++;
    } else if (arr[i] % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
  console.log(`Even elements: ${evenCount}`);
  console.log(`Odd elements: ${oddCount}`);
  console.log(`Zero elements: ${zeroCount}`);
  console.log(`Other elements: ${otherCount}`);
}

let arr1 = [0, null, undefined, 1, 2, 3, 4, 5, 6, "s", "k", NaN];
countEvenOdd(arr1);

// Option №2

let arr2 = [0, null, undefined, 1, 2, 3, 4, 5, 6, "s", "k", NaN];

function countEvenOdd(arr) {
  let evenCount = 0;
  let oddCount = 0;
  let zeroCount = 0;
  let otherCount = 0;
  
  for (let i=0; i < arr.length; i++) {
    if (arr[i] !==0 && typeof(arr[i]) !== 'number' || isNaN(arr[i])) {
      otherCount++;
    } else if (arr[i] === 0) {
      zeroCount++;
    } else if (arr[i] % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
  return [evenCount, oddCount, zeroCount, otherCount];
}

let result = countEvenOdd(arr2);

console.log(`Even elements: ${result[0]}`);
console.log(`Odd elements: ${result[1]}`);
console.log(`Zero elements: ${result[2]}`);
console.log(`Other elements: ${result[3]}`);



