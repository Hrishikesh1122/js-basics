/************************************************************
 * Selection practice problems
 * @author Hrishikesh Ugavekar
 * @Since 10-07-2021
 ************************************************************/

//Case 1 Min and Max among 5 three digit random numbers
var randomNumbers = new Array(5);
for(let i=0;i<randomNumbers.length;i++){
    randomNumbers[i]=Math.floor(Math.random()*(999-100+1)+100);
}
randomNumbers.forEach(element => console.log(element))
var max=randomNumbers[0]; var min = randomNumbers[0];
randomNumbers.forEach(element => {max = Math.max(max,element); min=Math.min(min,element)})
console.log("Maximum number is : "+max);
console.log("Minumum element is : "+min);