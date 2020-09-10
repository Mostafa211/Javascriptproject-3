

let username = document.getElementById("usernameInput");
let email = document.getElementById("emailInput");
let phone = document.getElementById("phoneInput");
let usernameAlert = document.getElementById("usernameAlert");
let emailAlert = document.getElementById("emailAlert");
let phoneAlert = document.getElementById("phoneAlert");

function validateUsername(){
    if(username.value == ""){
        usernameAlert.classList.replace("d-none","d-block");
    }
    else{
        usernameAlert.classList.replace("d-block","d-none");
    }
}

username.addEventListener("blur" , validateUsername);

function validateEmail(){
    let regex = /^[a-z0-9-_.]{5,30}@[a-z-]{2,20}\.[a-z]{2,10}$/i;
    if(regex.test(email.value) == true){
        emailAlert.classList.replace("d-block","d-none");
    }
    else{
        emailAlert.classList.replace("d-none","d-block");
    }
}

email.addEventListener("blur" , validateEmail);

function validatePhone(){
    let regex = /^(002|\+2)?01[0125][0-9]{8}$/;
    if(regex.test(phone.value) == true){
        phoneAlert.classList.replace("d-block","d-none");
    }
    else{
        phoneAlert.classList.replace("d-none","d-block");
    }
}

phone.addEventListener("blur" , validatePhone);

let message = document.getElementById("messageInput");

function letterCount(){
    let count = message.value;
    if(count.length < 30){
        document.getElementById("lettersRemaining").innerHTML = (30- (count.length += 1) + " letter remaining");
    }
    else{
        document.getElementById("lettersRemaining").innerHTML = "done";
    }
}

message.addEventListener("keyup" , letterCount);