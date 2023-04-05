const inputs = document.querySelectorAll("input");
const tableContainer = document.querySelector(".table-container");
const table = document.querySelector(".data-table");

const submitButton = document.querySelector(".submit-button");

function getFormData() {
    let formData = [];

    let name = inputs[0].value;
    let surname = inputs[1].value;
    let startDate = inputs[2].value;
    let finishDate = inputs[3].value;
    
    let category = document.querySelector("#main-select");
    let categoryValue = category.options[category.selectedIndex].text;

    let subCategory = document.querySelector("#sub-select");
    let subCategoryValue = subCategory.options[subCategory.selectedIndex].text;
    
    let description = document.querySelector("textarea").value;

    formData.push(
        name,
        surname,
        startDate,
        finishDate,
        categoryValue,
        subCategoryValue,
        description
    );

    return formData;
}

function deleteRow(button) {

}

function createRow() {
    let data = getFormData();

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    
    let buttonImage = document.createElement("img");
    buttonImage.src = "./Images/delete.svg";
    deleteButton.appendChild(buttonImage);

    console.log(data);

    let row = document.createElement("tr");
    
    for (let i = 0; i < data.length; i++) {
        let cell = document.createElement("td");
        cell.innerHTML = data[i];
        row.appendChild(cell);

        if (i == 6) {
            let buttonCell = document.createElement("td");
            buttonCell.classList.add("button-table-cell");
            buttonCell.appendChild(deleteButton);
            row.appendChild(buttonCell);
        }
    }

    table.appendChild(row);

    deleteButton.addEventListener("click", function () {
        let buttonParent = deleteButton.parentElement.parentElement;
        buttonParent.remove();
    })
}

submitButton.addEventListener("click", createRow);
