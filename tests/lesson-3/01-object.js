//Ex-1
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021 
}

console.log(`Manuafactored by ${car.year}`);

//EX-2
const person = {
    name: "Iris",
    address: {
        street: "10 Downing Street",
        city: "London",
        country: "UK"
    }
}

console.log(`Address: ${person.address.street}`);

//Ex-3
const student = {
  name: "Iris",
  grades: {
    math: 9,
    english: 8
  }
}

console.log(`Math Score: ${student["grades"] ["math"]}`);

//Ex-4
const setting = {
    volumn: 50,
    brightness: "medium"
}

setting.volumn = 80;
console.log(setting);

//Ex-5
const bike = {

}

bike.color = "black";
console.log(bike);

//Ex-6
const employee = {
    employeeName: "Iris",
    age: 35
}

delete employee.age;
console.log(employee);

//Ex-7
const school = {
    classA: ["An", "Binh", "Chau"],
    classB: ["Dao", "Huong", "Giang"]
}

console.log(school);