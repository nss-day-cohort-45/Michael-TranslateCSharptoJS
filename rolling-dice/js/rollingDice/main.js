// Put your code here
const unicodeSwitch = (value) => {
    switch (value) {
        case 1:
            return "\u2680";
        case 2:
            return "\u2681";
        case 3:
            return "\u2682";
        case 4:
            return "\u2683";
        case 5:
            return "\u2684";
        case 6:
            return "\u2685";
    }
}

console.log("Let's roll some dice, baby!");
console.log("---------------------------");

for (var i = 0; i < 10; i++) {
    const die1 = Math.ceil(Math.random() * 6);
    const die2 = Math.ceil(Math.random() * 6);

    let message = `${unicodeSwitch(die1)} + ${unicodeSwitch(die2)} = ${die1 + die2}`;
    if (die1 == die2) {
        message += " DOUBLES!";
    }

    console.log(message);
}