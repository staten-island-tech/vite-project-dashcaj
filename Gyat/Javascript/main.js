import "../css/style.css";
import { Cars } from "../Javascript/Products.js";

document.getElementById("theme").addEventListener("click", function(){
    if(document.body.classList.contains("cool")){
        document.body.classList.add("warm");
        document.body.classList.remove("cool");
    } else {
        document.body.classList.add("cool");
        document.body.classList.remove("warm ");
    }



})




const wheretoputcards = document.getElementById("container");

Cars.forEach((car) => {
    const html = `
    <div class="card">
        <h2>${car.name}</h2>
        <h3>${car.rarity}</h3>
        <p>${car.description}</p>

    </div>
`;

wheretoputcards.insertAdjacentHTML("beforeend", html);


});
