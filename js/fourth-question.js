

let r = document.getElementById("r");
let g = document.getElementById("g");
let b = document.getElementById("b");
let changeBackground = document.getElementById("q4");
let allLetters = [r , g, b];

function changeAll(){
    for(var i=0; i<allLetters.length; i++){
    allLetters[i].classList.add("black-to-all");
    };
}

function reverseAll(){
    for(var i=0; i<allLetters.length; i++){
    allLetters[i].classList.remove("black-to-all");
    };
}

r.addEventListener("mouseenter" , function(){
    changeAll();            
    changeBackground.style.backgroundColor = "#ff0000";

})

r.addEventListener("mouseleave", function(){
    reverseAll();
    changeBackground.style.backgroundColor = "";
})


g.addEventListener("mouseenter" , function(){
    changeAll();
    changeBackground.style.backgroundColor = "#00ff00";
})

g.addEventListener("mouseleave" , function(){
    reverseAll();
    changeBackground.style.backgroundColor = "";
})


b.addEventListener("mouseenter" , function(){
    changeAll();
    changeBackground.style.backgroundColor = "#0000ff";
})

b.addEventListener("mouseleave" , function(){
    reverseAll();
    changeBackground.style.backgroundColor = "";
})