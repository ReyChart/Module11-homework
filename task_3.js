// Option №1 (closure)

function sumNumber(numOne) {
    return function iternalFunc(numTwo) {
        return numOne + numTwo;
    }
}
    
let result = sumNumber(7)(11);
console.log(result);

// Option №2 (ES6 row)

const sumValues = a => b => a + b;

const result2 = sumValues(18)(35);
console.log(result2);