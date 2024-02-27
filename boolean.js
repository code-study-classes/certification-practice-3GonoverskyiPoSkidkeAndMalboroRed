import { abs } from "prelude-ls";

// 1
function isPositive(A) {
  return A > 0;
}

const number = 5 ? console.log(number, 'положительное число') : console.log(number, 'отрицательное число');
if (isPositive(number)) {
  console.log(number, 'Положительное число');
}
export { isPositive };

// 2
function isOdd(A) {
  if (A % 2 !== 0) {
    return true;
  }
  return false;
}
export { isOdd };

// 3
function checkInequality(A, B) {
  const result = !!(A > 2 && B <= 3);
  return result;
}

export { checkInequality };

// 4
function checkInequality2(A, B) {
  return A >= 0 || B < -2;
}

export { checkInequality2 };

// 5
function checkBetweenNumbers(A, B, C) {
  return B > A && B < C;
}

export { checkBetweenNumbers };



// 6
function checkOddThreeDigitNumber(number) {
    return Number.isInteger(number) && number >= 100 && number <= 999
      ? number % 2 !== 0
      : false;
  }
export {checkOddThreeDigitNumber}

//7
export function checkUniqueDigits(number) {
    
    const digits = String(Math.abs(number)).split('');
    const uniqueDigits = new Set(digits);

    return digits.length === 3 && digits.length === uniqueDigits.size;
}

checkUniqueDigits(123); // true
checkUniqueDigits(122); // false
checkUniqueDigits(-987); // true
checkUniqueDigits(1234); // false
checkUniqueDigits(-77); // false




//8
export function isSecondQuadrant(x, y) {
    return x < 0 && y > 0;
}

isSecondQuadrant(-2, 3); // true
isSecondQuadrant(5, -1); // false
isSecondQuadrant(-1, -2); // false
