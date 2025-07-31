// Object containing soccer player data
// This code snippet is part of a larger application that displays a random soccer player's information.
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
        name: "Wessam Abou Ali",
        number: 9,
        position: "FW"
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
        name: "Derrick Jones",
        number: 20,
        position: "MF"
    },
    {
        name: "Yevhen Cheberko",
        number: 21,
        position: "DF"
    },
    {
        name: "Abraham Romero",
        number: 22,
        position: "GK"
    },
    {
        name: "Mo Farsi",
        number: 23,
        position: "DF"
    },
    {
        name: "Evan Bush",
        number: 24,
        position: "GK"
    },
    {
        name: "Sean Zawadzki",
        number: 25,
        position: "Yes"
    },
    {
        name: "Lassi Lappalainen",
        number: 26,
        position: "MF"
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
        name: "Cole Mrowka",
        number: 29,
        position: "MF"
    },
    {
        name: "Steven Moreira",
        number: 31,
        position: "DF"
    },
    {
        name: "Hugo Picard",
        number: 30,
        position: "MF"
    },
    {
        name: "Stanislav Lapkes",
        number: 41,
        position: "GK"
    },
    {
        name: "Tristan Brown",
        number: 44,
        position: "MF"
    },
    {
        name: "Cesar Ruvalcaba",
        number: 48,
        position: "DF"
    }
];

// Function to create a message with a random soccer player's information
const createMessage = () => {
    const randNum = Math.floor(Math.random() * team.length);
    return `Also, today's soccer player is ${team[randNum].name}, who plays as a ${team[randNum].position} wearing number ${team[randNum].number}.`;
};

// Function to display the message in the HTML element with id "crew"
const displayMessage = (msg) => {
    const crewElement = document.getElementById("crew");
    crewElement.textContent = msg;
};


// Object containing extra information about various projects on this site
const projects = {
    desmoto: {
        description: "A motorcycle simulation game.",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "./desmoto/index.html"
    },
    dicegame: {
        description: "A simple dice rolling game.",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "./dicegame/dicegame.html"
    },
    fotomatic: {
        description: "A photo editing application.",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "./fotomatic/index.html"
    },
    palindromechecker: {
        description: "A tool to check if a word is a palindrome.",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "./palindrome/palindrome.html"
    },
    teacozy: {
        description: "An online store for tea cozies.",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "./teacozy/index.html"
    }
};

// Grab all project list items then add event listeners to them
const projectItems = document.querySelectorAll(".project a");

projectItems.forEach(item => {
    item.addEventListener("mouseover", (event) => {
        event.preventDefault();
        const projectName = item.textContent.toLowerCase().replace(/\s+/g, '');
        const project = projects[projectName];
         displayProjectInfo(project, event.target);
    });
    item.addEventListener("mouseout", (event) => {
        const projectInfo = event.target.querySelector(".project-info");
        if (projectInfo && projectInfo.classList.contains("project-info")) {
            projectInfo.remove();
        }
    });
});

// Display additional information next to the project name
const displayProjectInfo = (project, target) => {
    const projectInfo = document.createElement("div");
    projectInfo.classList.add("project-info");
    projectInfo.innerHTML = `
        <p><strong>Description:</strong> ${project.description}</p>
    `;
    target.appendChild(projectInfo);
};