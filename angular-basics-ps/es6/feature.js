/// say hello from template string
let fooName = "Foo.."
console.log(`Hello ${fooName}`);

/// rest operator, allow pass multiple args to func
const add = (start, ...num) => {
    let sum = start;
    num.forEach(value => sum += value);
    return sum;
}

console.log(add(0, 1, 2, 3));   // => [1,2,3]

/// spread operator, makes shallow copy
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

/// property shorthand
const prop1 = 'prop1'
const prop2 = 'prop2'

// regular
const p = {
    prop0: 'prop0',
    prop1: prop1,
    prop2: prop2
}

// newest
const p_es6 = {
    prop0: 'prop0',
    prop1,
    prop2
}

/// destrukturyzacja, destructing assignment
const { name, city } = person;  // create new variables, const name = person.name, const city = person.city
const { newName, ...other} = person;
console.log(newName)    // must be exactly the same as obj prop, here it gives undefined!
console.log(other)

// pretty useful here
const obj1 = {
    obj_name: '1Stephan',
    obj_city: '1Wroclaw',
}

const obj2 = {
    objName: '2Stephan',
    objCity: '2Wroclaw',
};
// without ';' it yelling about variable is not initialized, that's why we should use ';'
[obj1, obj2].map(p => p.objName);
[obj1, obj2].map(({objName}) => objName);

// another useful
const arr = [1,2,3,4,5];
const [firstEl, secondEl, ...rest] = arr;
console.log(firstEl)
console.log(secondEl)
console.log(rest)

// ecma2020
const ob = {
    a: {
        b: {
            c: 'gotcha'
        }
    }
}

let ccc = ob && ob.a && ob.a.b && ob.a.b.c;   // gives nested 'gotcha' without undefined errors
ccc = ob?.a?.b?.c;  // the same here
let backendArray = [];
let res = backendArray?.length;
console.log(res)
backendArray = undefined;
res = backendArray?.length; // without '?' it gives Reference Error, with '?' just string undefined.
console.log(res)