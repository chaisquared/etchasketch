function getSquareNum() {
    let squares = parseInt(prompt("enter a number between 1 and 100"))

    // check if our parsed value is actually a real number
    if (isNaN(squares)) {
        alert("Invalid input!")
        return 0
    }
    return parseInt(squares);
}

function grid(num) {
    let container = document.getElementById('container')
    for (let i = 0; i < num; i++) {
        let row = document.createElement("div")
        row.className = "row"

        for (let j = 0; j < num; j++) {
            let square = document.createElement("div")
            square.className = "square"
            row.appendChild(square)
            square.addEventListener("mouseover", hover)
        }

        container.appendChild(row)

    }
}


function hover(event) {
    // let current = elem.style.opacity
    event.target.style.backgroundColor = "#7ca392";
    // if (current) {
    //     column.style.opacity = Number(current) + 0.1
    // }
}

grid(getSquareNum())

