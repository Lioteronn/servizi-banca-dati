const subCategories = document.querySelectorAll("optgroup");
const mainSelectDropdown = document.querySelector("#main-select");
const subSelectDropdown = document.querySelector("#sub-select");
console.log(subSelectDropdown);

function showCategories(category) {
    let categoryID = category.id;

    subCategories.forEach((ele) => {
        if (!ele) return;

        if (ele.id == categoryID && ele.hasAttribute("hidden")) {
            console.log(ele);
            ele.removeAttribute("hidden");
        } 
        else if (ele.id == categoryID && !ele.hasAttribute("hidden")) {
            ele.setAttribute("hidden", "hidden");
        }
    });
}

function hideCategories() {
    subCategories.forEach((e) => e.setAttribute("hidden", "hidden"));
    subSelectDropdown.value = "";
}

mainSelectDropdown.addEventListener("change", function () {
    let selectedCategory = mainSelectDropdown.options[mainSelectDropdown.selectedIndex];

    hideCategories();
    showCategories(selectedCategory);
});
