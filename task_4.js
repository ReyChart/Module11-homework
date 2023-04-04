// Option №1

function printNumbers(from, to) {
    let current = from;
    let intervalId = setInterval(function() {
        console.log(current);
        if (current === to) {
            clearInterval(intervalId);
        }
        current++;
    }, 1000);
}

printNumbers(5, 15);

// Option №2

function printNumbers(from, to) {
    let current = from;
    const intervalId = setInterval(() => {
        console.log(current);
        if (current === to) {
            clearInterval(intervalId);
        }
        current++;
    }, 1000);
}

printNumbers(1,20);