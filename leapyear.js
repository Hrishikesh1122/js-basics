//selection case 3 : Check if leap year or not
let year = process.argv[2]
function checkIfLeapYear() {
    if ((year % 4==0) && (year % 100 !=0) || (year % 400==0)) {
        console.log("Leap year");
    } else {
        console.log("Not leap year");
    }
}
checkIfLeapYear();

