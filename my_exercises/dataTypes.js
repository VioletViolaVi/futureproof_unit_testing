// 3. Determine data types:

/* 
- 1 ----> number
- “90” ----> string
- 1-234-233-422 ----> NaN
- “Hello” ----> string
- Hello ----> undefined 
- [3, 4, 6, 9] ----> array
- [1, [a, b, c], 45] ----> array
- { name: ‘Alan’, occupation: ‘programmer’} ----> object 
*/

console.log(typeof 1);
console.log(typeof "90");
console.log(typeof 1 - 234 - 233 - 422);
console.log(typeof "Hello");
console.log(typeof Hello);
console.log(typeof [3, 4, 6, 9]);
console.log(typeof [1, ["a", "b", "c"], 45]);
console.log(typeof { name: "Alan", occupation: "programmer" });
