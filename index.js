// instruccion 1

// console.log('siguiente')

// ej funcion (a,b) => funcion(2,3)

// const variable = "cualquiera";
// console.log(variable);

// for (let n = 0; n < 10000; n++) {
//   console.log(n);
// } // big O(n)

// console.log("otro mensaje");

// => return / console.log instruccion 1
// => siguiente
// => 5

// CODIGO SINCRONICO

// function hacealgo(){
//     function(()=>function(){
//         console.log()
//         function(()=>(){

//         }){

//         }
//     }){

//     }
// }  callback hell // piramida de la muerte

// fs.readdir(source, function (err, files) {
//     if (err) {
//       console.log('Error finding files: ' + err)
//     } else {
//       files.forEach(function (filename, fileIndex) {
//         console.log(filename)
//         gm(source + filename).size(function (err, values) {
//           if (err) {
//             console.log('Error identifying file size: ' + err)
//           } else {
//             console.log(filename + ' : ' + values)
//             aspect = (values.width / values.height)
//             widths.forEach(function (width, widthIndex) {
//               height = Math.round(width / aspect)
//               console.log('resizing ' + filename + 'to ' + height + 'x' + height)
//               this.resize(width, height).write(dest + 'w' + width + '_' + filename, function(err) {
//                 if (err) console.log('Error writing file: ' + err)
//               })
//             }.bind(this))
//           }
//         })
//       })
//     }
//   })

// setTimeout && setInterval

const myFunc = function (arg) {
  console.log("llamo al server se demora 10s", arg);
  //llamada a un servidor
};

// setTimeout(myFunc, 10000, "argumento1");

// setTimeout(() => {
//   console.log("esto primero");
// }, 12000);

// setTimeout(() => {
//   console.log("esto segundo");
// }, 13000);

// const startBtn = document.querySelector(".js-start");
// const stopBtn = document.querySelector(".js-stop");
// let timerId = null;

// startBtn.addEventListener("click", () => {
//   timerId = setInterval(() => {
//     console.log(`un mensaje ${Math.random()}`);
//   }, 1000);
// });

// stopBtn.addEventListener("click", () => {
//   clearInterval(timerId);
//   console.log(`Interval with id ${timerId} has stopped!`);
// });

// if (timerId) {
//   console.log("aca hay algo");
// } else {
//   console.log("no hay nada");
//   console.log(timerId);
// }

// 1 de enero de 1970 calculo del tiempo en ordenadores

//  orden de los valores que recibe el objeto Date// año, el mes, el día del mes o de la semana, la hora, el minuto, el segundo y el milisegundo

console.log(new Date("2030-03-16")); // 2030-03-16T00:00:00.000Z
console.log(new Date("2030-03")); // 2030-03-01T00:00:00.000Z
console.log(new Date("2018")); // 2018-01-01T00:00:00.000Z
console.log(new Date("03/16/2030")); // 2030-03-16T05:00:00.000Z
console.log(new Date("2030/03/16")); // 2030-03-16T05:00:00.000Z
console.log(new Date("2030/3/16")); // 2030-03-16T05:00:00.000Z
console.log(new Date("March 16, 2030")); // 2030-03-16T05:00:00.000Z
console.log(new Date("March 16, 2030 14:25:00")); // 2030-03-16T19:25:00.000Z
console.log(new Date("2030-03-16 14:25:00")); // 2030-03-16T19:25:00.000Z
console.log(new Date("2030-03-16T14:25:00")); // 2030-03-16T19:25:00.000Z
console.log(new Date("16 March 2030")); // 2030-03-16T05:00:00.000Z

// promises / promesas
// async await

// date

// class Name{
//     constructor(){
//         super()
//     }

//     // get
//     get Value(){
//         // def
//     }

//     // set
//     set changeValue(name){
//         //def
//     }
// }
