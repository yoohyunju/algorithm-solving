const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ');

const N = input[0];
const K = input[1];
let arr = [];

for(let i = 1; i < N + 1; i++) {
	if(N % i === 0) {
		arr.push(i);
	}
}

arr[K - 1] ? console.log(arr[K - 1]) : console.log(0);