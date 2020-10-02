console.log('exercise 2.3');

let main = document.getElementById("main");



for(let idx = 1; idx <= 20; idx++){
    let w = Math.floor(Math.random() * 90);
    let h = Math.floor(Math.random() * 90);
    let btn = document.createElement("BUTTON");
    btn.setAttribute('type', 'button');
    btn.setAttribute('class', 'button');
    btn.setAttribute('style', `left:${w}vw;top:${h}vh;background-color:tomato`);
    btn.innerText = idx;
    btn.addEventListener("click", function(evt){
        let bgcolor = evt.target.style.backgroundColor;
        if(bgcolor === "tomato"){
            evt.target.style.backgroundColor = "teal";
        } else {
            evt.target.style.backgroundColor = "tomato";
        }
    })
    main.appendChild(btn)
}
