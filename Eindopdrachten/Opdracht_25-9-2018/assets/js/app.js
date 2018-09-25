function fibonacci(num){                          ///recursive fibonacci function voor opdracht 1
    if(num == 0){
        return 0;
    } else if(num ==1){
        return 1;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}
function opdracht1(){
    for(let i=1; i <= 10; i++){
        console.log(fibonacci(i));
    }
}

function sleep(milliseconds) {                               //Van internet, om opdracht 2 te laten werken
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
}
function opdracht2(year){
    for(let i=10; i>0; i--){
        console.log(i);         //Logs every number from 10 to 1
        sleep(1000);
    }
    if(year == 2276){
        year = "Fallout 5"
    }
    console.log(`Happy ${year}!`);
}

///--- OPDRACHT 3 ---   Moet zo worden opgeroepen, anders werkt hij niet
opdracht3_decl()
console.log(sum());

let sum = function opdracht3_e(){
    let y = 7;
    console.log(y);
}
function opdracht3_decl(){
    let y = 5;
    console.log(y);
}