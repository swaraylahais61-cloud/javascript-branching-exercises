const number = process.argv[2] !== undefined ? Number(process.argv[2]) : 10;

if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}