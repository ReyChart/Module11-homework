// Option №1

const powerNaturalNumber1 = (x, n) => Math.pow(x, n);
console.log(powerNaturalNumber1(2, 5));

// Option №2

const powerNaturalNumber2 = (x, n) => {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
};

console.log(powerNaturalNumber2(3, 8));