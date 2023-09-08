console.log('testing')

const dropDownArrow = document.querySelector('#dropDownArrow')
const weekDays = document.querySelector('.weekDays')
const dayOfTheWeek = document.querySelector('.dayOfTheWeek')
const eachDay = document.querySelector('.eachDay')
const thursday = document.querySelector('#thursday')
const timeSpace = document.querySelector('#timeSpace')


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



