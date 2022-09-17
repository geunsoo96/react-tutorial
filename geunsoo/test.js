// q배열 1,2.345
// map을 써서 새로운 함수
// filter 3을 제외한거

let arr = [1, 2, 3, 4, 5];
let arrMap = arr.map(value => value + 1);
console.log(arrMap);
let arrFilter = arrMap.filter(value => value != 3);
console.log(arrFilter);
let a = a;