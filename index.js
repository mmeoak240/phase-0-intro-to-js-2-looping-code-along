
const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(array, event) {
let newObj = [];
for (let i = 0; i < names.length; i++ ){
 newObj[i] = `Thank you, ${array[i]}, for the wonderful ${event} gift!`
 debugger;
}
return newObj;
}

writeCards(names, "surprise")

function countDown() {
  for (let i = 10; i > -1; i--) {
    console.log(i);
  }
}