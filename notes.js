console.log("First log");
console.log("Second log");
console.log("Third log");

// second block

// Will run first
console.log("First log");

setTimeout(() => {
  // Will run last, after 2000 milliseconds
  console.log("Second log");
}, 2000);

// Will run second
console.log("Third log");

// third block

setTimeout(() => {
  console.log("this is first but will console second");
}, 1000);

setTimeout(() => {
  console.log("this is seconf but will console first");
}, 500);

console.log("this is last but will happen before anything else");

setTimeout(
  (args) => {
    console.log("asd", args);
  },
  100,
  "asd",
  "asd2"
);
