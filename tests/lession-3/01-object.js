let car = {
    make: "Toyota",
    model:"Corolla",
    year: 2021
};

console.log(car.year);



let person = {
    name: "Mi",
    address: {
        street: "Hong Bang",
        city: "Ho Chi Minh",
        country: "Viet Nam"
    }
};

console.log("Ten duong la " + person.address.street);



let student = {
    name: "Chi",
    grades: {
        math: 8,
        english: 9
    }
};

console.log(`Diem mon toan ${student["grades"]["math"]}`);



let setting = {
    volume: 5,
    brightness: 6
};

setting.volume = 10;

console.log(setting);


let bike = {}
bike.color = "Blue"

console.log(bike);



let employee = {
    name: "Mi",
    age: 3
};

delete employee.age;

console.log(employee);



const school = {
    classA: ["An", "Binh", "Chau"],
    classB: ["Dao", "Huong", "Giang"]
}