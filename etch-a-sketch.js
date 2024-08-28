const container = document.querySelector("#container");
const newGridButton = document.querySelector("#newGrid")

newGridButton.addEventListener("click", createGrid)

function getUserGridSize () {
    const userInput = prompt("Please enter the grid size you'd like (ex: 4x2 for 4 rows and 2 columns).")
    .split("x");

    return userInput;
}

function createGrid () { 
    const [gridRows, gridColumns] = getUserGridSize();

    const oldGrid = document.querySelectorAll(".flex-row");
    
    oldGrid.forEach((row) => {
        container.removeChild(row);
    });

    for (i = 0; i < gridRows; i++) {
        let row = document.createElement("div");

        row.classList.add("flex-row");

        container.appendChild(row);

        for (j = 0; j < gridColumns; j++) {
            let cell = document.createElement("div");

            cell.classList.add("cells");
            row.appendChild(cell);
        }
    }
}