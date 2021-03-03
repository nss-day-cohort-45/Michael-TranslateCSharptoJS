// Put your code here
const placeNamesArray = [
    "Nashville",
    "Hong Kong",
    "The back yard",
    "Earth",
    "London",
    "The mall",
    "Ryman Auditorium",
    "The Great Wall of China"
];

console.log("All Place Names");

placeNamesArray.forEach(n => console.log(n));

const thePlaceNamesArray = placeNamesArray.filter(n => n.includes("The"));

console.log("'The' Place Names");

thePlaceNamesArray.forEach(n => console.log(n));