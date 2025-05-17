"use strict";
const greeting = (name) => {
    return `Hello, ${name}!`;
};
console.log(greeting("2"));
let cours = true;
let cours1 = "1";
let cours2;
let number = [1, 2, 3, 4];
let user = ["mohammad", 2, false];
let color = "red";
function add(x, y) {
    return x + (y || 0);
}
add(1);
function add1(x, y) {
    console.log(x + y);
}
let employee = {
    name: "mohammad",
    id: 1,
    address: (date) => {
        console.log(date);
    },
};
let employee1 = {
    name: "mohammad",
    id: 1,
    address: (date) => {
        console.log(date);
    },
};
let id;
let user3 = {
    name: () => { },
    name1: () => { },
};
let direction = "up";
let input = document.getElementById("input");
input.value = "1";
let input1 = document.getElementById("input");
input1.value = "1";
let input2 = 2;
function error(message) {
    throw new Error(message);
}
error("error");
console.log("error");
