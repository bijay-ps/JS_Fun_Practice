// 1. Write a function identity that takes an argument and returns that argument
const identity = (x) => x

// 2. Write a binary function addb that takes two numbers and returns their sum
const addb = (x, y) => x + y

// 3. Write a binary function subb that takes two numbers and returns their difference
const subb = (x, y) => x - y

//4. Write a binary function mulb that takes two numbers and returns their product
const mulb = (x, y) => x * y

//5. Write a binary function minb that takes two numbers and returns the smaller one
const minb = (a, b) => Math.min(a, b)

//6. Write a binary function maxb that takes two numbers and returns the larger one
const maxb = (a, b) => Math.max(a, b)

//7. Write a function add that is generalized for any amount of arguments
const add = (...nums) => nums.reduce((acc, cur) => acc + cur)

//8. Write a function sub that is generalized for any amount of arguments
const sub = (...nums) => nums.reduce((acc, cur) => acc - cur)

//9. Write a function mul that is generalized for any amount of arguments
const mul = (...nums) => nums.reduce((acc, cur) => acc * cur)

//10. Write a function min that is generalized for any amount of arguments
const min = (...nums) => nums.reduce((acc, cur) => Math.min(acc, cur))

//11. Write a function max that is generalized for any amount of arguments
const max = (...nums) => nums.reduce((acc, cur) => Math.max(acc, cur))
