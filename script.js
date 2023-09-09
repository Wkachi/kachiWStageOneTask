console.log('testing')



const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]')


const timeSpace = document.querySelector('[data-testid="currentUTCTime"]');





const timestamp = Date.now();
console.log(`The current timestamp is ${timestamp}`);

 timeSpace.innerHTML = timestamp;


