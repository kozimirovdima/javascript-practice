const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const color = document.querySelector(".color");
const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    const randomN = randomNumber();
    document.body.style.backgroundColor = colors[randomN];
    color.textContent = colors[randomN];
    console.log(color);
})
function randomNumber() {
    return Math.floor(Math.random() * colors.length);
}