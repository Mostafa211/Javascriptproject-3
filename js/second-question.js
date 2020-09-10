

let question2 = document.getElementById("q2");
let h2 = document.getElementById("hoverHere");
let audio = new Audio('./audio/1.mp3');

h2.addEventListener("mouseenter" , function(){
    question2.classList.add("change-colors");
    audio.play();
    enableLoop();
})

h2.addEventListener("mouseleave" , function(){
    question2.classList.remove("change-colors");
    audio.pause();
    enableLoop();
})

function enableLoop() {
  audio.loop = true;
}
