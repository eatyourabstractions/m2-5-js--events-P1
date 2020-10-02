// Exercise 1.2
// ------------
console.log('exercise 1.2');


let displayTime = document.getElementById("time");
let [max, min] = [1, 5];

let timeReminder = Math.floor(Math.random() * (max - min + 1) + min) 
displayTime.innerText = timeReminder;

let result = document.getElementsByClassName("result")
let timer;
document.addEventListener("click", function(){
    clearInterval(timer);
    result[0].innerText = "You Win!";
});


window.onload = (event) => {
     timer = setInterval(function(){
        if(timeReminder <= 0){
            clearInterval(timer);
            result[0].innerText = "You Lose!";
        }else { 
            timeReminder -= 1
            displayTime.innerText = timeReminder
        }
    },1000);
  };