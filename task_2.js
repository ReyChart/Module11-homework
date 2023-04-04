function isPrimeNumber(num) {
  if (num > 1000) {
    return 'incorrect data';
  } else if (num === 0 || num === 1) {
    return 'not prime or composite';
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return 'composite number';
      }
    }
  }
  return 'prime number';
}
  
let randomNum = Math.floor(Math.random()*1100);
let number = isPrimeNumber(randomNum);
console.log(`The number ${randomNum} is ${number}`);