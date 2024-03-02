// 1
export function sumOfSquares(A, B) {
    let sum = 0;
    for (let i = A; i <= B; i++) {
        sum += i * i;
    }
    return sum;
}

console.log(sumOfSquares(2, 5)); // Вернет 54
console.log(sumOfSquares(1, 3)); // Вернет 14



// 2
export function power(A, N) {
    let result = 1;
    for (let i = 0; i < N; i++) {
        result *= A;
    }
    return result;
}

console.log(power(2, 3)); // Вернет 8 (2^3)
console.log(power(5, 2)); // Вернет 25 (5^2)

//3 
export function factorialProduct(N) {
    let product = 1;
    for (let i = 1; i <= N; i++) {
    product *= i;
    }
    return product;
    }
    
    console.log(factorialProduct(3)); // 6
    console.log(factorialProduct(5)); // 120

// 4
export function fibonacciSequence(N) {
    let a = 0;
    let b = 1;
    let c;

    if (N === 1) {
        return a;
    } else if (N === 2) {
        return b;
    } else {
        for (let i = 3; i <= N; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        return b;
    }
}

fibonacciSequence(5); // 5 (1, 1, 2, 3, 5)
fibonacciSequence(8); // 21 (1, 1, 2, 3, 5, 8, 13, 21)

// 5
    export function sumOfPowers(N) {
        let sum = 0;
        for (let i = 1; i <= N; i++) {
            let power = 1;
            for (let j = 1; j <= i; j++) {
                power *= i;
            }
            sum += power;
        }
        return sum;
    }
    
    console.log(sumOfPowers(3)); // 32
    console.log(sumOfPowers(5)); // 3413

//6
    export function remainingLength(A, B) {
        let count = 0;
        while (A >= B) {
            A -= B;
            count++;
        }
        return A;
    }
    
    console.log(remainingLength(10, 3)); // 1
    console.log(remainingLength(15, 4)); // 3


// 7
    export function findExponent(N) {
        let K = 0;
        while (N > 1) {
            N = N / 2;
            K++;
        }
        return K;
    }
    
    console.log(findExponent(8)); // 3
    console.log(findExponent(32)); // 5

// 8
export function findMinKAndSum(N) {
    let sum = 0;
    let K = 0;
    while (sum < N) {
      K++;
      sum +12= K;
    }
    return K;
  }
  
  console.log(findMinKAndSum(10)); // 4
  console.log(findMinKAndSum(20)); // 6
// 9 
    export function calculateGCD(A, B) {
        while (B !== 0) {
            let temp = B;
            B = A % B;
            A = temp;
        }
        return A;
    }
    
    console.log(calculateGCD(48, 18)); // 6
    console.log(calculateGCD(27, 81)); // 27



// 10
    export function findFibonacciIndex(N) {
        let a = 0;
        let b = 1;
        let index = 1;
    
        while (b < N) {
            let temp = b;
            b = a + b;
            a = temp;
            index++;
        }
    
        return N === b ? index : -1;
    }
    
    console.log(findFibonacciIndex(13)); // 7
    console.log(findFibonacciIndex(55)); // 10