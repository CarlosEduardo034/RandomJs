function RandonDice(max) {
    return Math.floor(Math.random() * max + 1);
};

const btnMD = document.getElementById("btnMD");
btnMD.addEventListener("click", () => {
    document.getElementById("result").innerHTML = RandonDice(2);
});
const btnD4 = document.getElementById("btnD4");
btnD4.addEventListener("click", () => {
    document.getElementById("result").innerHTML = RandonDice(4);
});
const btnD6 = document.getElementById("btnD6");
btnD6.addEventListener("click", () => {
    document.getElementById("result").innerHTML = RandonDice(6);
});
const btnD8 = document.getElementById("btnD8");
btnD8.addEventListener("click", () => {
    document.getElementById("result").innerHTML = RandonDice(8);
});
const btnD10 = document.getElementById("btnD10");
btnD10.addEventListener("click", () => {
    document.getElementById("result").innerHTML = RandonDice(10);
});
const btnD12 = document.getElementById("btnD12");
btnD12.addEventListener("click", () => {
    document.getElementById("result").innerHTML = RandonDice(12);
});
const btnD20 = document.getElementById("btnD20");
btnD20.addEventListener("click", () => {
    document.getElementById("result").innerHTML = RandonDice(20);
});
const btnD100 = document.getElementById("btnD100");
btnD100.addEventListener("click", () => {
    document.getElementById("result").innerHTML = RandonDice(100);
});