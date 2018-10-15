let buttonPresses = 0;
let buttonWidth = 500;
let buttonHeight = 500;
let fontSize = 100;
button = document.getElementById("knompie")
button.addEventListener('click', buttonPress_Knompie);

function buttonPress_Knompie(event){
    buttonPresses++
    if(buttonPresses % 10 == 0){ /// decreases button size variables
        buttonWidth *= .9;
        buttonHeight *= .9;
        fontSize *= .9;
    }
    ///apply button size variables
    button.style = `width: ${buttonWidth}px; height: ${buttonHeight}px; font-size: ${fontSize}px;`;
    button.innerHTML = "Level " + buttonPresses
}

/// Opdracht 2 \\\
let list = document.getElementById("list");
let list_button = document.getElementById("submit");
list_button.addEventListener('click', list_submit);
let total = 0;
let totalDisplay = document.getElementById("total");

function list_update(){
    total = 0
    Array.prototype.forEach.call(list.children[0].children, list_clear)
    Object.keys(boodschappen).forEach(list_reload)
    totalDisplay.innerHTML = `€${Math.floor(total).toString()},${function() {let n = Math.round((total%1)*100).toString(); if (n.length == 1) return "0" + n; return n}()}`;
}

function list_clear(){
    while(list.children[0].children.length > 0){
        list.children[0].removeChild(list.children[0].children[0])
    }
}
function list_remove(name){
    delete boodschappen[name];
    list_update();
}
function list_reload(e,i){
    let n = e;
    let p = boodschappen[e].price;
    let a = boodschappen[e].amount;
    list_Add(n, p, a);
    total += Number(p) * Number(a);
}
function list_Add(itemName, itemPrice, itemAmount){
    let newItem = list.insertRow(list.children[0].length);
    let name = newItem.insertCell(0);
    let price = newItem.insertCell(1);
    let amount = newItem.insertCell(2);
    let remove = newItem.insertCell(3);
    name.innerHTML = itemName;
    price.innerHTML = itemPrice;
    amount.innerHTML = itemAmount;
    remove.innerHTML = `<a onClick="list_remove('${itemName}')">Verwijderen</a>`;
}

function list_submit(){
    if(Object.keys(boodschappen).includes(document.getElementById("name").value)){
        if(boodschappen[document.getElementById("name").value].price == document.getElementById("price").value){
            boodschappen[document.getElementById("name").value].amount = boodschappen[document.getElementById("name").value].amount + 1
        } else {
            boodschappen[`${document.getElementById("name").value}`] = {
                price: Number(document.getElementById("price").value),
                amount: Number(document.getElementById("amount").value)
            }
        }
    } else {
        boodschappen[`${document.getElementById("name").value}`] = {
            price: Number(document.getElementById("price").value),
            amount: Number(document.getElementById("amount").value)
        }
    }
    list_update()
}

let boodschappen = {
    "Ketchup":{
        price: 1.70,
        amount: 1,
    },
    "Knorr Wereld gerecht":{
        price: 2.39,
        amount: 1,
    },
    "King pepermunt":{
        price: 1.89,
        amount: 1,
    },
    "Elstar appels":{
        price: 1.79,
        amount: 1,
    },
    "Axe":{
        price: 2.59,
        amount: 1,
    },
    "Tandenborstels":{
        price: 0.99,
        amount: 666,
    },

}
