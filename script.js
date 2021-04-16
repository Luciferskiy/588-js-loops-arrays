//Цикл з лічильником
//for (let i = 2; i <= 50; i++) {
//  if (i % 2 == 0){
//    console.log(i);
//  }
//}

//Цикл з передумовою
//let num = parseFloat(prompt('Enter a Number'));
//while(isNaN(num)){
//  parseFloat(prompt('Enter a Number'));
//}

//let num;
//do {
//  num =   parseFloat(prompt('Enter a Number'))
//} while (isNaN(num))

const cars = ['Tesla X', 'Porsche Panamera', 'Audi eTron', 'Toyota Camry'];
cars[4] = 'BMW X3';
cars[5] = 'Subaru Forester';
cars.push('Ford F150');
//console.log(cars);
cars[4] = 'Mercedes GLE350';
//console.log(cars);
//console.log(cars[2]);
cars.sort(); //.reverse();

//for (let i = cars.length - 1; i >= 0; i--){
//   console.log(i, cars[i]);
//}
const compare = (a, b) => a - b;

let nums = [1, 12, 31, 14, 151, 42, 222];
nums.sort( compare);

nums[100] = 42;
console.log(nums.length);

console.log(nums[7]);
//console.log(nums);
//for(let i = 0; i < nums.length; i++){
//  console.log(nums[i])
//}
nums.forEach(el => console.log(el));
