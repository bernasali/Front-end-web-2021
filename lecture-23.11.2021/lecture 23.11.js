const fieldElement = document.getElementById("field");
const listElement = document.querySelector("#task-list");
const counterElement = document.getElementsByClassName("counter")[0];
const filterAllElement = document.getElementById("filter-all-btn");
const filterActiveElement = document.getElementById("filter-active-btn");
const filterCompletedElement = document.getElementById("filter-completed-btn");

const updateCounter = () => {
    counterElement.innerText = `${
    listElement.querySelectorAll("li:not(.done)").length
  } left`;
};


fieldElement.addEventListener("change", (event) => {
    const task = document.createElement("li");

    task.innerHTML = `
    <input type="checkbox" />
    <span>${event.target.value}</span>
    <button class="delete-btn">X</button>
  `;

    event.target.value = "";

    listElement.appendChild(task);

    updateCounter();
});

listElement.addEventListener("input", (event) => {
    const checkboxElement = event.target;
    const spanElement = checkboxElement.parentElement.querySelector("span");

    spanElement.classList.toggle("line-through", checkboxElement.checked);
    spanElement.parentElement.classList.toggle("done", checkboxElement.checked);

    updateCounter();
});

listElement.addEventListener("click", (event) => {
    const element = event.target;

    if (element.classList.contains("delete-btn")) {
        const listItemElement = element.parentElement;
        const list = listItemElement.parentElement;

        list.removeChild(listItemElement);
        updateCounter();
    }
});

filterAllElement.addEventListener("click", (event) => {
    const listItems = listElement.querySelectorAll("li");

    listItems.forEach((element) => element.removeAttribute("hidden"));
});

filterActiveElement.addEventListener("click", (event) => {
    const listItems = listElement.querySelectorAll("li");

    listItems.forEach((element) =>
        element.toggleAttribute("hidden", element.classList.contains("done"))
    );
});

filterCompletedElement.addEventListener("click", (event) => {
    const listItems = listElement.querySelectorAll("li");

    listItems.forEach((element) =>
        element.toggleAttribute("hidden", !element.classList.contains("done"))
    );
});