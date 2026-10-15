const score = process.argv[2] !== undefined ? Number(process.argv[2]) : 85;

if (score < 0 || score > 100) {
    console.log("Invalid score");
} else if (score >= 80) {
    console.log("A");
} else if (score >= 70) {
    console.log("B");
} else if (score >= 60) {
    console.log("C");
} else if (score >= 50) {
    console.log("D");
} else {
    console.log("E");
}