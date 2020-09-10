

let itemNames = document.getElementById("itemName");
let addItems = document.getElementById("addItem");
let nameNeededAlert = document.getElementById("nameNeeded");
let itemList ;

if(localStorage.getItem("myItems") == null){
    itemList = [];
}
else{
    itemList = JSON.parse(localStorage.getItem("myItems"));
    displayItem();
}



function addItem()
{

    if(itemNames.value == ""){
        nameNeededAlert.classList.replace("d-none","d-block");
    }

    else {

        nameNeededAlert.classList.replace("d-block","d-none");

        let item = itemNames.value;

    itemList.push(item);
    localStorage.setItem("myItems" , JSON.stringify(itemList))
    displayItem();
    clearForm();
    }    
}

addItems.addEventListener("click" , addItem);

function displayItem(){
    let itemContent = "";
    for(var i = 0 ; i < itemList.length ; i++){
        
        itemContent += `<div class="d-flex container item">
			<p class="form-control mb-0 pt-2">${itemList[i]}</p>
			<button onclick="deleteItem(${i})" class="btn btn-danger">X</button>
			</div>`;


    }

    document.getElementById('column').innerHTML = itemContent;

}


function clearForm(){
    itemNames.value = "";
}

function deleteItem(index){

    itemList.splice(index , 1);
    localStorage.setItem("myItems" , JSON.stringify(itemList));
    displayItem();
}