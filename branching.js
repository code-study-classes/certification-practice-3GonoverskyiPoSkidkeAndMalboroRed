//1
export function incrementIfPositive(number) {
    if (number > 0) {
        return number + 1;
    } else {
        return number;
    }
}

console.log(incrementIfPositive(5)); // 6
console.log(incrementIfPositive(-3)); // -3
console.log(incrementIfPositive(0)); // 0


//2
export function getIndexOfSmallerNumber(number1, number2) {
    if (number1 < number2) {
        return 1;
    } else if (number1 > number2) {
        return 2;
    } else {
        return 1; // порядковый номер первого числа при равенстве
    }
}

console.log(getIndexOfSmallerNumber(5, 8)); // 1
console.log(getIndexOfSmallerNumber(10, 3)); // 2
console.log(getIndexOfSmallerNumber(7, 7)); // 1


//3
function findMiddleNumber(number1, number2, number3) {
    let min = Math.min(number1, number2, number3);
    let max = Math.max(number1, number2, number3);

    if (number1 !== min && number1 !== max) {
        return number1;
    } else if (number2 !== min && number2 !== max) {
        return number2;
    } else {
        return number3;
    }
}

console.log(findMiddleNumber(5, 8, 3)); // 5
console.log(findMiddleNumber(10, 3, 8)); // 8
console.log(findMiddleNumber(7, 7, 7)); // 7


// 4 
export function findUniqueNumber(number1, number2, number3, number4) {
    if (number1 === number2 && number1 === number3) {
        return 4;
    } else if (number1 === number2 && number1 === number4) {
        return 3;
    } else if (number1 === number3 && number1 === number4) {
        return 2;
    } else {
        return 1;
    }
}

// Пример использования
console.log(findUniqueNumber(5, 5, 5, 8)); // 4
console.log(findUniqueNumber(2, 2, 7, 2)); // 3
console.log(findUniqueNumber(1, 0, 1, 1)); // 2


// 5
export function calculateF(x) {
    if (x < 0) {
        return 0;
    } else if (Math.floor(x) % 2 === 0) {
        return 1;
    } else {
        return -1;
    }
}

console.log(calculateF(-1)); // 0
console.log(calculateF(0.5)); // 1
console.log(calculateF(1.5)); // -1


//6
export function describeNumber(n) {
    if (n < 10) {
        return "нечетное однозначное число";
    } else if (n < 100) {
        if (n % 2 === 0) {
            return "четное двузначное число";
        } else {
            return "нечетное двузначное число";
        }
    } else {
        if (n % 2 === 0) {
            return "четное трехзначное число";
        } else {
            return "нечетное трехзначное число";
        }
    }
}

console.log(describeNumber(24)); // "четное двузначное число"
console.log(describeNumber(137)); // "нечетное трехзначное число"
console.log(describeNumber(5)); // "нечетное однозначное число"


//7 
export function getDayName(dayNumber) {
    if (dayNumber === 1) {
        return "monday";
    } else if (dayNumber === 2) {
        return "tuesday";
    } else if (dayNumber === 3) {
        return "wednesday";
    } else if (dayNumber === 4) {
        return "thursday";
    } else if (dayNumber === 5) {
        return "friday";
    } else if (dayNumber === 6) {
        return "saturday";
    } else if (dayNumber === 7) {
        return "sunday";
    } else {
        return "Invalid day number.";
    }
}

console.log(getDayName(1)); // "monday"
console.log(getDayName(4)); // "thursday"
console.log(getDayName(7)); // "sunday"


//8

export function describeAge(age) {
    if (age < 20 || age > 69) {
        return "Invalid age";
    }

    const units = ["", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];
    const tens = ["", "десять", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят"];

    if (age >= 20 && age <= 29) {
        return tens[Math.floor(age / 10)] + " " + (age % 10 === 0 ? "лет" : units[age % 10] + " " + (age % 10 === 1 ? "год" : "лет"));
    } else {
        return tens[Math.floor(age / 10)] + " " + (age % 10 === 0 ? "лет" : units[age % 10] + " " + (age % 10 === 1 ? "год" : "лет"));
    }
}

console.log(describeAge(20)); // "двадцать лет"
console.log(describeAge(32)); // "тридцать два года"
console.log(describeAge(41)); // "сорок один год"

//9
export function describeAge(age) {
    const units = ["", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];
    const tens = ["", "десять", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят"];
    
    const unit = units[age % 10];
    const ten = tens[Math.floor(age / 10)];
    
    if (unit === "один") {
        return `${ten} ${unit} год`;
    } else {
        return `${ten} ${unit} лет`;
    }
}

console.log(describeAge(20)); // "двадцать лет"
console.log(describeAge(32)); // "тридцать два года"
console.log(describeAge(41)); // "сорок один год"







//10


export function describeAge(age) {
    let description;

    switch (age) {
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
        case 25:
        case 26:
        case 27:
        case 28:
        case 29:
            description = age + " лет";
            break;
        case 30:
        case 31:
        case 32:
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
            description = age + " лет";
            break;
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
        case 48:
        case 49:
            description = age + " лет";
            break;
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
        case 58:
        case 59:
            description = age + " лет";
            break;
        case 60:
        case 61:
        case 62:
        case 63:
        case 64:
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
            description = age + " лет";
            break;
        default:
            description = "Invalid age";
    }

    return description;
}


export function describeNumber2(number) {
    let description = "";
    
    switch (Math.floor(number / 100)) {
        case 1:
            description = "Число в диапазоне 100-199";
            break;
        case 2:
            description = "Число в диапазоне 200-299";
            break;
        case 3:
            description = "Число в диапазоне 300-399";
            break;
        case 4:
            description = "Число в диапазоне 400-499";
            break;
        case 5:
            description = "Число в диапазоне 500-599";
            break;
        case 6:
            description = "Число в диапазоне 600-699";
            break;
        case 7:
            description = "Число в диапазоне 700-799";
            break;
        case 8:
            description = "Число в диапазоне 800-899";
            break;
        case 9:
            description = "Число в диапазоне 900-999";
            break;
        default:
            description = "Число не входит в указанный диапазон";
    }
    
    return description;
}


