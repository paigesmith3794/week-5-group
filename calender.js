let date = 1;
for (let i = 0; i < 6; i++) {
    // creates a table row
    let row = document.createElement("tr");

    //creating individual cells, filing them up with data.
    for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
            cell = document.createElement("td");
            cellText = document.createTextNode("");
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        else if (date > daysInMonth(month, year)) {
            break;
        }

        else {
            cell = document.createElement("td");
            cellText = document.createTextNode(date);
            cell.appendChild(cellText);
            row.appendChild(cell);
            date++;
        }


    }

    tbl.appendChild(row); // appending each row into calendar body.
}

}