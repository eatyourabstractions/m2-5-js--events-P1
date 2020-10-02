console.log('exercise 2.2');

let main = document.getElementById("main");
let reset = document.createElement("BUTTON");


document.body.appendChild(reset);

for(let idx = 1; idx <= 20; idx++){
    let btn = document.createElement("BUTTON");
    btn.setAttribute('type', 'button');
    btn.setAttribute('class', 'button');
    btn.setAttribute('style', `background-color:tomato`);
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
reset.setAttribute('type', 'button');
reset.setAttribute('class', 'reset');
reset.innerText = "Reset!"
reset.addEventListener("click", function(evt){
    document.querySelectorAll('.button').forEach(b =>{
        b.style.backgroundColor = "tomato";
    });
});

document.body.appendChild(reset);