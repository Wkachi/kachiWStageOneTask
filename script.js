console.log('testing')



const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]')


const timeSpace = document.querySelector('[data-testid="currentUTCTime"]');





// const timestamp = Date.now();
// console.log(`The current timestamp is ${timestamp}`);

//  timeSpace.innerHTML = timestamp;

 let date = new Date("2023-09-10T16:17:41"); // local time
 let utc = Date.UTC( date.getHours(), date.getMinutes(), date.getSeconds()); // UTC time in milliseconds
 let iso = date.toISOString(); // UTC time in string format
 console.log(utc); // 1697187461000
 console.log(iso); // 2023-09-10T16:17:41.000Z
 
 timeSpace.innerHTML = iso;