// Task 1
function getFactorial (num) {
    if (num === 1 || num === 0) {
        return 1;
    } else {
        return num * getFactorial(num - 1);
    }
}
console.log(getFactorial(3));


// Task 2
function pow(num, degree) {
    if (num === 1 || num === 0 && degree === 0) {
        return 1;
    } else {
        return (degree !== 1) ? num * pow(num, degree-1) : num;
    }
}
console.log(pow(3, 4));


// Task 3
function sum(a, b) {
    if(b === 0)
        return a;
    return sum(a + 1, b - 1);
}

console.log(sum(20, 30));