import "../css/style.css";
import { Cars } from "../Javascript/Products.js";






const wheretoputcards = document.getElementById("container");

Cars.forEach((car) => {
    const html = `
    <div class="card">
        <h2>${car.name}</h2>
        <h3>${car.rarity}</h3>
        <img src="${car.imgurl}" alt="${car.name}">
        <p>${car.description}</p>

    </div>
`;

wheretoputcards.insertAdjacentHTML("beforeend", html);


});
