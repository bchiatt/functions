var prompt = require('sync-prompt').prompt;

function increment(x){
  x++;
  return x;
}

var z = increment(3);
console.log(z);
z = increment(7);
console.log(z);
z = increment(9);
console.log(z);
z = increment(12);
console.log(z);

function square(x){
  x *= x;
  return x;
}

z = square(3);
console.log(z);
z = square(7);
console.log(z);
z = square(9);
console.log(z);
z = square(12);
console.log(z);

//calculate the area of a room

function area(l, w){
  return l * w;
}

var l = prompt('room length: ');
var w = prompt('room width: ');
i = area(l,w);
console.log('room area: ', i);

//write a volume function

function volume(l,w,h){
  return area(l,w) * h;
}

var l = prompt('length: ');
var w = prompt('width: ');
var h = prompt('height: ');

i = volume(l,w,h);

console.log('volume: ', i);

//function nesting

var i = area(square(increment(3) + increment(4)), square(2));
console.log(i);

var z = area(4,5);

//exploring various functions

function sayHello(){
  console.log('HELLO');
}

function makeUpper(i){
  return i.toUpperCase();
}

var caps = makeUpper('this');
console.log(caps);

sayHello();


function canDrink(age){
  return (age >= 21)
}

var x = canDrink(71);
console.log(x)
var x = canDrink(17);
console.log(x)
var x = canDrink(7);
console.log(x)
/////////////////////////
function letterGrade(i){
  i = parseInt(i);
  if (i>89){
    return 'A';
  }else if (i>79){
    return 'B';
  }else if(i>69){
    return 'C';
  }else if (i>59){
    return 'D';
  }else{
    return 'F';
  }
}

var grade = 75;
var i = letterGrade(grade);
console.log(i);
///////////////////////////

function addTax(amt,per){
  return amt += (amt * (parseInt(per)/100));
}

var amt = prompt('cost: ');
var per = prompt('tax rate: ');
var total = addTax(parseInt(amt),parseInt(per));
console.log('total cost is $' + total + '.');

function sum(){
  var i = 0;
  for (var x = 0; x < numbers.length; x++){
    i += numbers[x];
  }
  return i;
}

var numbers = [];

var response = prompt('Enter a number or (q)uit: ');
while(response != 'q'){
  response = parseInt(response);
  numbers.push(response);
  response = prompt('Enter a number or (q)uit: ');
}

numbersSum = sum(parseInt(numbers));
console.log('the number',numbersSum, 'is the sum of your array.');

//function performing factorial (n!) operation.

function factorial(input){
  switch (input) {
    case 0:
      return 1;
      break;
    case 1:
      return 1;
      break;
    default:
      for(i = (input-1); i > 1; i--){
        input *= i;
      }
      return input;
  }
}

var total = factorial(parseInt(prompt('What is your number? ')));
console.log('factorial =', total);

//functions to randomly roll a dice

function rollDie(){
  return Math.floor(Math.random()*6)+1;
}

for (i = 0; i < 10; i++) {
  console.log('roll:',rollDie());
}

function isPair (roll1,roll2) {
  return roll1 === roll2;
}

//console.log(isPair(rollDie(),rollDie()));

function pairTally(rolls) {
  var pairs = 0;
  for (var i = 0; i < rolls; i++) {
    if (isPair(rollDie(),rollDie())){
    pairs++;
    }
  }
  return pairs;
}

var rolls = 10000;
var pairs = pairTally(rolls);
console.log(pairs);
