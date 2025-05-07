"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function formatString(input, toUpper) {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}
formatString("Hello"); // Output: "HELLO"
formatString("Hello", true); // Output: "HELLO"
formatString("Hello", false); // Output: "hello"
function filterByRating(items) {
    return items.filter((item) => item.rating >= 4);
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];
filterByRating(books);
// Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]
function concatenateArrays(...arrays) {
    return arrays.reduce((acc, current) => { return [...acc, ...current]; }, []);
}
concatenateArrays(["a", "b"], ["c"]); // Output: ["a", "b", "c"]
concatenateArrays([1, 2], [3, 4], [5]); // Output: [1, 2, 3, 4, 5]
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        console.log(`Make ${this.make}, Yest ${this.year}`);
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        console.log(`Model ${this.model}`);
    }
}
const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo(); // Output: "Make: Toyota, Year: 2020"
myCar.getModel(); // Output: "Model: Corolla"
function processValue(value) {
    return typeof value === "string" ? value.length : value * 2;
}
processValue("hello"); // Output: 5
processValue(10); // Output: 20
function getMostExpensiveProduct(products) {
    if (products.length === 0) {
        return null;
    }
    return products.reduce((prev, current) => (prev.price > current.price) ? prev : current);
}
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];
getMostExpensiveProduct(products);
// Output: { name: "Bag", price: 50 }
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    if (day === Day.Friday || day === Day.Saturday) {
        return "Weekend";
    }
    else {
        return "Weekday";
    }
}
getDayType(Day.Monday); // Output: "Weekday"
getDayType(Day.Sunday); // Output: "Weekend"
function squareAsync(n) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (n >= 0) {
                    resolve(n * n);
                }
                else {
                    reject("Negative number not allowed");
                }
            }, 1000);
        });
    });
}
squareAsync(4).then(console.log); // Output after 1s: 16
squareAsync(-3).catch(console.error); // Output: Error: Negative number not allowed
