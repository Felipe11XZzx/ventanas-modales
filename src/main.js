import "./style.css";

document.querySelector("#app").innerHTML = `
    <button class="show-modal">Show modal 1</button>
        <button class="show-modal">Show modal 2</button>
        <button class="show-modal">Show modal 3</button>
        <div class="modal hidden">
        <button class="close-modal">&times;</button>
        <h1>I'm a modal window :😍</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
        </p>
        </div>
        <div class="overlay hidden"></div>
`;

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

console.log(modal, overlay, btnCloseModal, btnsOpenModal);

// Definimos la funcion closeModal
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Definimos la funcion openModal
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// Definimos la funcion openModal a cada uno de los botones
btnsOpenModal.forEach(btn => {
  btn.addEventListener("click", openModal);
});
