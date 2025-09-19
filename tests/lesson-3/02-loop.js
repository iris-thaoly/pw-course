//Ex-1
let total = 0;

for (let i = 1; i <= 100; i++) {
    total += i;
}

console.log(total);

//Ex-2
for (let x = 2; x <= 9; x++) {
    console.log("Bảng cửu chương " + x);
    for (let y = 1; y <= 10; y++) {
        console.log(x + " * " + y + " = " + (x * y));
    }
    console.log("----------------");
}

//Ex-3
let oddNumbers = [];

for (let a = 1; a <= 99; a += 2) {
    oddNumbers.push(a);
}

console.log(oddNumbers);

//Ex-4
for (let e = 1; e <= 10; e++) {
    console.log("user" + e + "@gmail.com");
}

//Ex-5
const income = [
    { month: 1, total: 100 },
    { month: 2, total: 100 },
    { month: 3, total: 100 },
    { month: 4, total: 100 },
    { month: 5, total: 100 },
    { month: 6, total: 100 },
    { month: 7, total: 100 },
    { month: 8, total: 100 },
    { month: 9, total: 100 },
    { month: 10, total: 100 },
    { month: 11, total: 100 },
    { month: 12, total: 100 }
]

let totalIncome = 0;
for (let i = 0; i < income.length; i++) {
    totalIncome += income[i].total;
}
console.log("Tổng doanh thu năm:", totalIncome);
