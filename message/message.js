const team = [
    {
        name: "Nicolas Hagen",
        number: 1,
        position: "GK",
    },
    {
        name: "Andres Herrera",
        number: 2,
        position: "DF"
    },
    {
        name: "Rudy Camacho",
        number: 4,
        position: "DF"
    },
    {
        name: "Darlington Nagbe",
        number: 6,
        position: "MF"
    },
    {
        name: "Dylan Chambost",
        number: 7,
        position: "MF"
    },
    {
        name: "Daniel Gazdag",
        number: 8,
        position: "MF"
    },
    {
        name: "Diego Rossi",
        number: 10,
        position: "FW"
    },
    {
        name: "Ibrahim Aliyu",
        number: 11,
        position: "MF"
    },
    {
        name: "AZ Jackson",
        number: 13,
        position: "MF"
    },
    {
        name: "Amar Sejdic",
        number: 14,
        position: "MF"
    },
    {
        name: "Taha Habroune",
        number: 16,
        position: "FW"
    },
    {
        name: "Malte Amundsen",
        number: 18,
        position: "DF"
    },
    {
        name: "Jacen Russell-Rowe",
        number: 19,
        position: "FW"
    },
    {
        name: "Mo Farsi",
        number: 23,
        position: "DF"
    },
    {
        name: "Sean Zawadzki",
        number: 25,
        position: "Yes"
    },
    {
        name: "Max Arfsten",
        number: 27,
        position: "DF/FW"
    },
    {
        name: "Patrick Schulte",
        number: 28,
        position: "GK"
    },
    {
        name: "Steven Moreira",
        number: 31,
        position: "DF"
    },
    {
        name: "Hugo Picard",
        number: 69,
        position: "Incoming"
    }
];

const createMessage = () => {
    const randNum = Math.floor(Math.random() * team.length);
    console.log(`Today's player is ${team[randNum].name}, who plays as a ${team[randNum].position} wearing number ${team[randNum].number}.`);
}

createMessage();