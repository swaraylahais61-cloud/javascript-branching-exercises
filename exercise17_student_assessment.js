const score = process.argv[2] !== undefined ? Number(process.argv[2]) : 70;
const attendance = process.argv[3] !== undefined ? Number(process.argv[3]) : 80;
const assignmentsCompleted = process.argv[4] !== undefined ? Number(process.argv[4]) : 90;

if (score >= 60 && attendance >= 75 && assignmentsCompleted >= 80) {
    console.log("Pass");
} else {
    console.log("Fail");

    if (score < 60) {
        console.log("Score is below 60");
    }
    if (attendance < 75) {
        console.log("Attendance is below 75%");
    }
    if (assignmentsCompleted < 80) {
        console.log("Assignments completed are below 80%");
    }
}