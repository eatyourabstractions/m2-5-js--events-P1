// Exercise 1.1
// ------------
console.log('exercise 1.1');



let clicked = false;
document.addEventListener("click", function(){
    clicked = true;
});
let result = document.getElementsByClassName("result")
window.onload = (event) => {
    setTimeout(() => {
        result[0].innerText = clicked ? 'You Win!' : 'You Lose!'
    }, 1000);
  };