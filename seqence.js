/************************************************************
 * Sequence practice problems
 * @author Hrishikesh Ugavekar
 * @Since 10-07-2021
 ************************************************************/

//Case 1 : Use random function to get random sigle digit number
let number = Math.floor(Math.random()*10);
console.log(number);

//Case 2 :  Use random to get dice number between 1 to 6 
let diceNumber = 1+ Math.floor(Math.random()*10)%6;
console.log(diceNumber);

//case 3 : Add two random dice numbers
let diceNumber1 = 1+ Math.floor(Math.random()*10)%6;
let diceNumber2 = 1+ Math.floor(Math.random()*10)%6;
console.log(diceNumber1 + diceNumber2);