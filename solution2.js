function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const pointsPerKmOverLimit = 1;

    if (speed <= speedLimit) {
        console.log("Ok");
        return;
    }

    const kmOverLimit = speed - speedLimit;
    const demeritPoints = Math.floor(kmOverLimit / kmPerDemeritPoint);

    if (demeritPoints >= 12) {
        console.log("License suspended");
    } else {
        console.log("Points:", demeritPoints);
    }
}

