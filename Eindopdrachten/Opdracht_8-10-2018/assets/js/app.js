function opdracht1(){
    let mark1 = document.getElementById("course1").children[1].innerHTML;
    let mark2 = document.getElementById("course2").children[1].innerHTML;
    let mark3 = document.getElementById("course3").children[1].innerHTML;
    let mark4 = document.getElementById("course4").children[1].innerHTML;
    let grades = document.getElementById("grades");
    let averageRow = grades.insertRow(grades.children[0].children.length);
    let cell1 = averageRow.insertCell(0);
    let cell2 = averageRow.insertCell(1);
    cell1.innerHTML = "Gemiddelde";
    cell2.innerHTML = (+mark1+ +mark2+ +mark3+ +mark4)/4; //add up all marks and divide by 4
}

function technicolor(object, i, color){
    object.children[i].style = "background-color: " + color.toString() //apply color to object's child number "i"
}

function opdracht2(){
    let courses = document.getElementsByClassName("course")
    let len = courses[0].children.length
    for(let i=0; i<=len; i++){
        if(i % 2 == 0){
            technicolor(courses[0], i, "#ff40ee")
        }
    }
} //Color made possible by Techicolor ©

function createImageElement(url){
    let img = document.createElement("img")
    let div = document.getElementById("images")
    if(div.children.length >= 2){ // If an image is present, remove that image and load a new one
        div.removeChild(div.lastChild)
    }
    img.src=url
    div.appendChild(img)
}

