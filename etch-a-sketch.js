const container = document.querySelector("#container");
const newGridButton = document.querySelector("#newGrid");

newGridButton.addEventListener("click", createGrid);
container.addEventListener("mouseover", (e) => darkenCell(e));

function getUserGridSize () {
    const userInput = prompt("Please enter the grid size you'd like (ex: 4x2 for 4 rows and 2 columns - max 100x100).")
    .split("x");

    if (userInput[0] > 100 || userInput[1] > 100) {
        alert("Please enter a valid number.");
    } else {
        return userInput;
    }
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
            cell.setAttribute("style", "background-color: rgba(0,0,0,0)")
            row.appendChild(cell);
        }
    }
}

function darkenCell (event) {
    let cellBgColor = event.target.style.backgroundColor.slice(5, -1).split(", ").map(parseFloat);

    if (cellBgColor[3] != 1) {
        cellBgColor[3] = cellBgColor[3] + 0.1;
        event.target.style.backgroundColor = `rgba(${cellBgColor[0]},${cellBgColor[1]},${cellBgColor[2]},${cellBgColor[3]})`
    }
}