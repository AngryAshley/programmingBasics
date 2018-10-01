function opdracht1(){
    const lapRounds = [2.99,  3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];
    return lapRounds[Math.floor(Math.random() * lapRounds.length)];
}

function opdracht2(){
    const allMyRecords = [
        ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
        ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]
    ];
    for(let i=0; i<allMyRecords.length; i++){        //Pak lengte van de hele 2D array
        for(let x=0; x<allMyRecords[0].length; x++){ //Pak de lengte van de tweede dimensie van de array
            console.log(allMyRecords[i][x]);         //Print de naam van de plaat met de juiste dubbele index
        }
    }
}

///--- Opdracht 3 ---///
const filteredLapRoundsWithForLoop = function () {
    const lapRounds = [2.99,  3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];
    let newArray = [];
    for (let i = 0; i < lapRounds.length; i++) {
 
        if (lapRounds[i] < 4) {
            newArray.push(lapRounds[i]);
        }
    }
    return newArray;
 }
function callBadFuncName(){
    return filteredLapRoundsWithForLoop()  //Om FLRWFL() aan te roepen zonder de hele naam te moeten typen elke keer
}

function opdracht3(){
    const lapRounds = [2.99,  3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];
    let filtered = lapRounds.filter(function(index){return index<4})
    return filtered;
}

/*
 * Filter werkt veel beter in dit geval, omdat de hele for loop hier vermeden kan worden
 * Dit scheelt heel veel code en ook wat tijd om het programma uit te voeren, plus het is een heel stuk overzichtelijker
 */