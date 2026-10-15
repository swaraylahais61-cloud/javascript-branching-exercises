const score = process.argv[2] !== undefined ? Number(process.argv[2]) : 70;
const attendance = process.argv[3] !== undefined ? Number(process.argv[3]) : 80;

if (score >= 60 && attendance >= 75) {
    console.log("Pass");
} else {
    console.log("Fail");
}