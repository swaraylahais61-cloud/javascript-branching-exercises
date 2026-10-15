const hours = process.argv[2] !== undefined ? Number(process.argv[2]) : 5;

if (hours <= 0) {
    console.log("Invalid parking hours");
} else {
    let fee;

    if (hours === 1) {
        fee = 5000;
    } else {
        fee = 5000 + (hours - 1) * 3000;
    }

    if (fee > 20000) {
        fee = 20000;
    }

    console.log(`Parking fee: Rp${fee.toLocaleString("en-US")}`);
}