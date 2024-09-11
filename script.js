const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");

const myButton = document.querySelector("#my-button");

myButton.addEventListener("click", () => {
    if (inputBox.value == "") {
        alert("You must right something!")
    } else {
        const newList = document.createElement("li");
        newList.innerText = inputBox.value;
        listContainer.appendChild(newList)
        inputBox.value = "";

        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        newList.appendChild(span);
        saveData(); 
    }

})

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        // if (Array.from(e.target.classList).includes("checked")) {
        //     e.target.classList.remove("checked");
        // } else {
        //     e.target.classList.add("checked");
        saveData()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
})

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();