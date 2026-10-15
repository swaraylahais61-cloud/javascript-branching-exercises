// You can test different numbers here (or pass one in terminal: node exercise01_positive_negative.js -5)
let num1 = process.argv[2] !== undefined ? Number(process.argv[2]) : 10;

if (num1 > 0) {
    console.log("Positive");
} else if (num1 < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}