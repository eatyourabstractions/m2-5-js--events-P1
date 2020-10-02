console.log('exercise 2.4');


let playBtn = document.getElementById("play");
let displayTime = document.getElementById("time");
let bigMsg = document.getElementById("bigMsg");

let [mx, mn] = [10, 5];
let rand = Math.floor(Math.random() * (mx - mn + 1) + mn) 
let timer;
let score = [];


function btnListener(evt, btn){
    evt.target.style.backgroundColor = "teal";
    if(!score.includes(btn.innerText)){
        score.push(btn.innerText)
    }

    if(score.length === rand){
        clearInterval(timer);
        bigMsg.innerText = "You Win!";
        bigMsg.style.backgroundColor = "green";
        bigMsg.style.display = "inline";
        removeListeners();
        
    }  
}

const addListeners = function() { 
    document.querySelectorAll('.button').forEach(btn =>{
        btn.addEventListener("click",e => btnListener(e, btn))
    })
}

const removeListeners = function() { 
    document.querySelectorAll('.button').forEach(btn =>{
        btn.addEventListener("click",e => btnListener)
    })
}

playBtn.addEventListener("click",function(){
    let [mx, mn] = [10, 5];
    addListeners();
    playBtn.style.display = "none";
    let timeReminder = rand * 2
    displayTime.style.display = "inline";
    displayTime.innerText = timeReminder;

    timer = setInterval(function(){
        if(timeReminder <= 0){
            clearInterval(timer);
            bigMsg.innerText = "You Lose!";
            bigMsg.style.backgroundColor = "red";
            bigMsg.style.display = "inline";
            removeListeners()
            
            
        }else { 
            timeReminder -= 1
            displayTime.innerText = timeReminder
        }
    },1000);

});


let [max, min] = [90, 10];

for(let idx = 1; idx <= rand; idx++){
    let w = Math.floor(Math.random()*(max-min+1)+min);
    let h = Math.floor(Math.random()*(max-min+1)+min);
    let btn = document.createElement("BUTTON");
    btn.setAttribute('type', 'button');
    btn.setAttribute('class', 'button');
    btn.setAttribute('style', `left:${w}vw;top:${h}vh;background-color:tomato`);
    btn.innerText = idx;
    
    main.appendChild(btn)
}

