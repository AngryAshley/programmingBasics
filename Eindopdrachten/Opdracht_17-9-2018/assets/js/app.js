function opdracht1(num){
 if(num % 2 == 0){
     console.log(`${num} is even`);
 } else {
     console.log(`${num} is oneven`);
 }
}
function opdracht2(){
 let string = "Programming is not so cool";
 string=string.replace("not ","");
 console.log(string);
}
function opdracht3(){
let num = 1400;
let string = "Ik woon in Naboo"

if(num == string){ //Dit is een slecht idee, want een integer zal nooit hetzelfde zijn als een string dus de uitkomst is altijd false
    console.log("Num is het zelfde als string");
} else {
    console.log("Num is niet hetzelfde als string");
}
}
