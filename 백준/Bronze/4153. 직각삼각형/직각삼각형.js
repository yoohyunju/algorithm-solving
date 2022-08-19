const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

for(let i = 0; i < input.length - 1; i++){
	let arr = input[i].split(' ');
	let maxNum = Math.max(...arr);
	let newArr = arr.filter(el => Number(el) !== maxNum);

	if(newArr[0]*newArr[0] + newArr[1]*newArr[1] === maxNum*maxNum){
		console.log('right');
	}else {
		console.log('wrong');
	}
}