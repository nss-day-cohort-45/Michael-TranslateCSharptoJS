// Put your code here

const getAllSpells = () => {
    const spells = [
        {
            name: "Turn enemy into a newt",
            isEvil: true,
            energyRequired: 5.1
        },
        {
            name: "Conjure some gold for a local charity",
            isEvil: false,
            energyRequired: 2.99
        },
        {
            name: "Give a deaf person the ability to heal",
            isEvil: false,
            energyRequired: 12.2
        },
        {
            name: "Make yourself emperor of the universe",
            isEvil: true,
            energyRequired: 100.0
        },
        {
            name: "Convince your relatives your political views are correct",
            isEvil: false,
            energyRequired: 2921.5
        }
    ];

    return spells;
};

console.log("Do you believe in magic?");
console.log("------------------------");

const spellsArray = getAllSpells();


const goodBook = spellsArray.filter(s => !s.isEvil);
const evilBook = spellsArray.filter(s => s.isEvil);

console.log("Evil Book")
evilBook.forEach(s => console.log(`${s.name}`));
console.log(" ");
console.log("Good Book")
goodBook.forEach(s => console.log(`${s.name}`));