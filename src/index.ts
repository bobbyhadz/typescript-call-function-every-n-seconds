export {};

// EXAMPLE 1 - Call a function every N seconds using TypeScript

function logger(message: string) {
  console.log(`Logger got called with: ${message}`);
}

const seconds = 3;

// 👇️ call function every 3 seconds
setInterval(() => {
  logger('bobbyhadz.com');
}, seconds * 1000);

// ---------------------------------------------------

// // EXAMPLE 2 - Clearing the interval

// function logger(message: string) {
//   console.log(`Logger got called with: ${message}`);
// }

// const seconds = 3;

// const intervalID = setInterval(() => {
//   logger('bobbyhadz.com');
// }, seconds * 1000);

// // 👇️ if some condition is met
// // cancel the interval
// clearInterval(intervalID);

// ---------------------------------------------------

// // EXAMPLE 3 - Calling a function only once after N seconds

// function logger(message: string) {
//   console.log(`Logger got called with: ${message}`);
// }

// const seconds = 3;

// setTimeout(() => {
//   logger('bobbyhadz.com');
// }, seconds * 1000);

// ---------------------------------------------------

// // EXAMPLE 4 - Clearing the timeout

// function logger(message: string) {
//   console.log(`Logger got called with: ${message}`);
// }

// const seconds = 3;

// const timeoutID = setTimeout(() => {
//   logger('bobbyhadz.com');
// }, seconds * 1000);

// // 👇️ if some condition is met
// // cancel the timeout
// clearTimeout(timeoutID);
