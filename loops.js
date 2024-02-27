export function sumOfSquares(A, B) {
    let sum = 0;
    for (let i = A; i <= B; i++) {
        sum += i * i;
    }
    return sum;
}

console.log(sumOfSquares(2, 5)); // Вернет 54
console.log(sumOfSquares(1, 3)); // Вернет 14




export function power(A, N) {
    let result = 1;
    for (let i = 0; i < N; i++) {
        result *= A;
    }
    return result;
}

console.log(power(2, 3)); // Вернет 8 (2^3)
console.log(power(5, 2)); // Вернет 25 (5^2)