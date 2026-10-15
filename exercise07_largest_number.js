const a = process.argv[2] !== undefined ? Number(process.argv[2]) : 12;
const b = process.argv[3] !== undefined ? Number(process.argv[3]) : 8;

if (a > b) {
    console.log(`${a} is the larger number.`);
} else if (b > a) {
    console.log(`${b} is the larger number.`);
} else {
    console.log("Both numbers are equal");
}