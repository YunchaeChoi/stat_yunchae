#!/usr/bin/env node

const lib = require("./lib");
if (process.argv.length <= 3) {
    console.log("Insufficient parameter!");
    process.exit(1);
}
let command = process.argv[2];
let numbers = process.argv.slice(3, process.argv.length).map((n) => parseFloat(n));

if (numbers.some((n) => isNaN(n))) {
    console.log("Some arguments are not numbers!");
    process.exit(1);
}
let result;
switch (command) {
    case "sum":
        result = lib.sum(numbers);
        break;
    case "avg":
        result = lib.avg(numbers);
        break;
    case "max":
        result = lib.max(numbers);
        break;
    case "med":
        result = lib.med(numbers);
        break;
    case "iqr":
        result = lib.iqr(numbers)[0];
        break;
    case "outlier":
        result = lib.outlier(numbers);
        break;
    default:
        console.log("Wrong command!");
        process.exit(1);
}
if (command == "outlier") {
    result.forEach(ele => console.log(ele));
} else {
    console.log(result);
}
