function opdracht1(num){
 if(num < 6){ 
     console.log(`Onvoldoende`);
 } else if(num >= 6 && num < 7) {
     console.log(`Voldoende`);
 } else if(num >= 7){
     console.log('Gudes');
 }
}
function opdracht2(num){
 switch(num){
    case 1: //Cases 1-5, onvoldoende
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('Onvoldoende');
        break;
    case 6: //Case 6, voldoende
        console.log('Voldoende');
        break;
    case 7: //Cases 7-10, goed
    case 8:
    case 9:
    case 10:
        console.log('Goed');
        break;
    default: //Case voor alles wat niet tussen 1-10 valt
        console.log('1-10 eh, we zitten niet in frankrijk :|');
 }
}
function opdracht3(){
const purchasedBook = true;
const job = "teacher";
const inTrain = false;

if(purchasedBook == true){
    if(job == "teacher"){
        if(inTrain == true){
            console.log("Finally I can enjoy my book");
        } else {
            console.log("I don't have time to read my book");
        }
    } else {
        console.log("I'm too busy studying to read my book");
    }
} else {
    Console.log("I don't have a book to enjoy");
}

}