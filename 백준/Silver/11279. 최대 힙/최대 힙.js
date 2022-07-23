const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const N = input[0];

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element); // 값을 힙의 values 속성에 push
    this.bubbleUp(); // 값을 올바른 위치까지 Bubble Up
  }
  bubbleUp() {
    let idx = this.values.length - 1; // values 배열의 길이
    const element = this.values[idx]; // 추가 된 요소 값
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2); // 요소의 부모 인덱스
      let parent = this.values[parentIdx]; // 부모 요소의 값
      if (element <= parent) break; // 자식이 부모와 같거나 작으면 루프 중지
      // 부모보다 자식이 크면 swap
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    } else return 0;
    return max;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let heap = new MaxBinaryHeap();
let result = [];

for (let i = 1; i <= N; i++) {
  if (input[i] === 0) {
    result.push(heap.extractMax());
  }
  heap.insert(input[i]);
}

console.log(result.join("\n"));