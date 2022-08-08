const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const comNum = Number(input.shift());
const pairNum = Number(input.shift());
const comPair = input.map((el) => el.split(" "));

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  depthFirstRecursive(start) {
    // 함수는 시작 노드를 받음
    const result = []; // 최종 결과를 저장할 배열
    const visited = {}; // 방문한 노드를 저장할 객체
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      // 꼭짓점을 허용하는 헬퍼 함수
      if (!vertex) return null; // 정점이 비어 있으면(배열의 마지막이면) 헬퍼 함수 바로 반환
      // 정점을 방문한 객체에 두고, 해당 정점을 결과 배열에 push
      visited[vertex] = true;
      result.push(vertex);
      // 정점에 대한 adjacencyList의 모든 값(인접 노드)을 반복
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          // 해당 값 중 하나라도 방문하지 않은 경우, 헬퍼 함수 재귀 호출
          return dfs(neighbor);
        }
      });
    })(start); // 시작 노드로 헬퍼 함수 호출

    return result; // 결과 배열 반환
  }
}

let g = new Graph();

for (let i = 1; i <= comNum; i++) {
  g.addVertex(i);
}

for (let i = 0; i < pairNum; i++) {
  g.addEdge(Number(comPair[i][0]), Number(comPair[i][1]));
}

const result = g.depthFirstRecursive("1");

console.log(result.length - 1);