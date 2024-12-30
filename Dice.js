// Purpose: Roll a dice and display the number
const min = 1;
const max = 6;
let dice;


const Roll = document.getElementById("Roll");
const Nums = document.getElementById("Num");
const Reset = document.getElementById("Reset");


Roll.onclick = function() {
    dice = Math.floor(Math.random() * max) + min;
    Nums.textContent = dice;
}

Reset.onclick = function() {
    Nums.textContent = 0;
}

