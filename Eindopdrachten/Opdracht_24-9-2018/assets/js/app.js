function opdracht1(num){
const numbers = [1,4,39,57,294,583,792,420,5937];
const numLen = numbers.length;
let i=0;
while(i < numLen){
    if(numbers[i] % 4 == 0){
        console.log(`${numbers[i]} is deelbaar door 4`);
    } else {
        console.log(`${numbers[i]} is niet deelbaar door 4`)
    }
    i++
}
}
function opdracht2(){
let i = 0;
let fib = [1,1,0,0,0,0,0,0,0,0];
while(i < 9){
 if(fib[i] != 0){
     console.log(fib[i]); //Print char if already defined
 } else {                 //Else, calculate the next number
     fib[i] = fib[i-1] + fib[i-2];
     console.log(fib[i]);
 }
 i++;
}
}
function opdracht3(){
let arr = [2, 4, 8, 9, 12, 13];
let sum = 0;
    for(let i=0; i < arr.length; i++){
        sum += arr[i];                   //add up sum and number on index I
    }
console.log(sum)
}