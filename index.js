// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
    if (pickup >= 43) {
        return pickup - 42
    }
    else if (pickup < 43) {
        return 42 - pickup
    }
}

function distanceFromHqInFeet(pickup) {
    let distanceBlocks = distanceFromHqInBlocks(pickup)
    return distanceBlocks * 264
}

function distanceTravelledInFeet(pickup, dropoff) {
    if (pickup > dropoff) {
        return (pickup - dropoff) * 264
    }
    else if (pickup < dropoff) {
        return (dropoff - pickup) * 264
    }
}

function calculatesFarePrice(pickup, dropoff) {
    let tripLength = distanceTravelledInFeet(pickup, dropoff)
    if (tripLength <= 400 && tripLength < 2000) {
        return 0
    }
    else if (tripLength >= 2000 && tripLength <= 2500) {
        return 25.00
    }
    else if (tripLength > 2500) {
        return 'cannot travel that far'
    }
    else if (tripLength > 400 && tripLength < 2000) {
        return Math.round(((tripLength * 0.02) - 8) * 100) / 100
    }
}