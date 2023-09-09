console.log('testing')


const dropDownArrow = document.querySelector('[data-testid="dropDownArrow"]')

const weekDays = document.querySelector('[data-testid="weekDays"]')

const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]')


const timeSpace = document.querySelector('[data-testid="currentUTCTime"]');


dropDownArrow.addEventListener('click',() =>{
    weekDays.style.display = "block";
   
})

weekDays.addEventListener('click',(e) =>{
    weekDays.style.display = "none";
    thursday.innerHTML = `${e.target.innerHTML}`


})

var currentDate = new Date();
var utcTime = currentDate.getTime();
var utcString = new Date(utcTime).toUTCString();
console.log(utcString)
timeSpace.innerHTML = utcString;



