// say hello
let name = "Foo.."
console.log(`Hello ${name}`);

// rest operator, allow pass multiple args to func
const add = (start, ...num) => {
    let sum = start;
    num.forEach(value => sum += value);
    return sum;
}

console.log(add(0, 1, 2, 3));   // => [1,2,3]

// spread operator, makes shallow copy
const array1 = [1, 2, 3, 4, 5];
const array2 = [array1, 6, 7];      // => [[1,2,3,4,5], 6, 7]
const array3 = [...array1, 6, 7];   // => [1,2,3,4,5,6,7] removes '[]' es6 feature!

const person = {
    name: 'Stephan',
    city: 'Wroclaw',
    details: {
        id: 52,
        position: 'worker'
    }
}

const superPerson = {
    ...person,
    superFlag: true
}

// shallow copy, primitive value are copied to new place in memory..
person.name = 'Stephan1'
superPerson.name = 'Stephan2'
console.log(person.name)
console.log(superPerson.name)
// ..whereas object reference is unchanged.
console.log(superPerson.details.position)
console.log(Object.is(person.details, superPerson.details))
superPerson.details.position = 'super-worker'
console.log(superPerson.details.position)
console.log(person.details.position)



