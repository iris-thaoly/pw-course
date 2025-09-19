//Ex-1
function multiply(a, b) {
    return a * b;
}

let result1 = multiply(3, 5);
console.log(result1);

let result2 = multiply(9, 10);
console.log(result2);

//Ex-2
function findMin(a, b, c) {

    if (a < b && a < c) {
        return a;
    }
    if (b < a && b < c) {
        return b;
    }
    if (c < a && c < b) {
        return c;
    }
}

minNumber1 = findMin(5, 10, 3);
console.log(minNumber1);

minNumber2 = findMin(5, 2, 9);
console.log(minNumber2);

//Ex-3
const student = [
    { name: "Iris", score: 85 },
    { name: "Olga", score: 72 },
    { name: "Denis", score: 90 },
    { name: "Oleg", score: 65 },
    { name: "Emma", score: 95 }
];
const threshold = 80;

function getTopStudent(student, threshold) {
    let result3 = [];
    for (let i = 0; i < student.length; i++) {
        if (student[i].score >= threshold) {
            result3.push(student[i].name);
        }
    }
    return result3;
}
let topStudent = getTopStudent(student, threshold);
console.log(topStudent);

//Ex-4
function calculateInterest(principal, rate, years) {
    return principal + principal * rate * years / 100;
}

total = calculateInterest(150, 5, 1);
console.log(total);