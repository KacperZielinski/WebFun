// say hello
let name = "Foo.."
console.log(`Hello ${name}`);

// rest operator
const add = (start, ...num) => {
    let sum = start;
    num.forEach(value => sum += value);
    return sum;
}

console.log(add(0, 1, 2, 3));   // => [1,2,3]

