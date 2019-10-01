function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase(question) == "left") return "L";
    if (result.toLowerCase(question) == "right") return "R";
    throw new Error("Invalid direction: " + result);
}

function look() {
    if (promptDirection("Which way?") == "L") {
        return "a house";
    } else {
        return "two angry bears";
    }
}

try {
    console.log("You see ", look());
} catch (error) {
    console.log("Something went wrong: ", error);
}