const username = process.argv[2] !== undefined ? process.argv[2] : "admin";
const password = process.argv[3] !== undefined ? process.argv[3] : "LSS2026@";

if (username === "admin" && password === "LSS2026@") {
    console.log("Login successful");
} else if (username !== "admin" && password !== "LSS2026@") {
    console.log("Incorrect username and password");
} else if (username !== "admin") {
    console.log("Incorrect username");
} else {
    console.log("Incorrect password");
}