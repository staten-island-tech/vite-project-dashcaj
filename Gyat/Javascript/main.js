import "../css/style.css";
import { Cars } from "../Javascript/Products.js";


/* to change theme */
document.getElementById("theme").addEventListener("click", function(event){
    event.preventDefault();
    
    if(document.body.classList.contains("cool")){
        document.body.classList.add("warm");
        document.body.classList.remove("cool");
    } else {
        document.body.classList.add("cool");
        document.body.classList.remove("warm ");
    }
})




/* this is where to put the cards */
const wheretoputcards = document.getElementById("container");


/* this is inserting the cards on the screen */
function showcards(Cars){
    Cars.forEach((car) => {
        const html = `
        <div class="card">
            <h2>${car.name}</h2>
            <img class="pictures1" src="${car.image}" alt="${car.name}">
            <h3>${car.rarity}</h3>
            <p>${car.description}</p>

        </div>
    `;
    wheretoputcards.insertAdjacentHTML("beforeend", html);
    });
};
showcards(Cars);






/* below is the filter for each button */

document.getElementById("Original").addEventListener("click", function(event){
    event.preventDefault();
    wheretoputcards.innerHTML = "";
    showcards(Cars);
});





document.getElementById("rare").addEventListener("click", function(event){
    event.preventDefault();
    wheretoputcards.innerHTML = "";
    const rare = Cars.filter((car) => car.rarity === "Rare");
    showcards(rare);
});




document.getElementById("very rare").addEventListener("click", function(event){
    event.preventDefault();
    wheretoputcards.innerHTML = "";
    const veryrare = Cars.filter((car) => car.rarity === "Very Rare");
    showcards(veryrare);
});





document.getElementById("import").addEventListener("click", function(event){
    event.preventDefault();
    wheretoputcards.innerHTML = "";
    const impor = Cars.filter((car) => car.rarity === "Import");
    showcards(impor);
});



document.getElementById("limited").addEventListener("click", function(event){
    event.preventDefault();
    wheretoputcards.innerHTML = "";
    const limited = Cars.filter((car) => car.rarity === "Limited");
    showcards(limited);
});
