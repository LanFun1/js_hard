let money = 123000;
let income = "freelance";
let addExpenses = "Internet, Taxi, Food, Communal Apartment";
let deposit = true;
let mission = 1000000;
let period  = 7;


console.log(typeof money);
console.log(typeof deposit);
console.log(typeof income);
console.log(addExpenses.length);
console.log("Период равен ", period, " месяцев");
console.log("Цель заработать", mission, " рублей");
console.log(addExpenses.toLowerCase());

let budgetDay = money / 30;
console.log('budgetDay: ', budgetDay);

let num = 266219; 
let result = 1;
let digit = "";
for(let i = 0; i<6; i++){
  digit = num.toString()[i];  
  result *= +digit; 
}

console.log('result: ', result);

result = result ** 3;
console.log('result: ', result);

let length = result.toString();
console.log(+length[0]+(+length[1]));
