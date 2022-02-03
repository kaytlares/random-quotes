// Named function
function myFunction() {
    return 1;
}
console.log(myFunction())

// Anon function (no name, use function keyword)
let myFunc = function() { 
    return 1;
}

// Another function
let myFunc2 = myFunc 
console.log(myFunc2())

//Arrow function (Return value directly)
let myFuncArrow = a => a + 1
console.log(myFuncArrow(110))

//Arrow function (Return value in block)
let myFuncArrow2 = ()=> {return {a: 5} }
console.log(myFuncArrow2())

//Working with highorder functions

function myHigherOrderFunction (parameterFunction){
    return parameterFunction()
}

console.log(myHigherOrderFunction(() => {return{a:5} }))

//Passing something N times

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
      action(i);
    }
  }
  
  repeat(3, console.log);

//3-1. flattening(list)
//Using the reduce method and concat method to flatten an array of arrays into a single array. Or minimizing arrays.
let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]

export function flattening(inputList) {
    return inputList.reduce((ae1,ae2) => ae1.concat(ae2))
}

console.log(flattening(arrays))

//3-2. loop(value, test, update, body)
/*Write a higher-order function loop that provides something like a for loop statement. It takes a value, a test function, an 
update function, and a body function. Each iteration, it first runs the test function on the current loop value and stops if 
that returns false. Then it calls the body function, giving it the current value. Finally, it calls the update function to 
create a new value and starts from the beginning.
*/

//When defining the function, you can use a regular loop to do the actual looping.

export function loop(value, test, update, body) {
    for(let curValue = value; test(curValue); curValue = update(curValue)){
        body(curValue)
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
loop(0,  n=> n < 3, n => n + 1, console.log);

//3-3. everyLoop(array, test)
//3-4. everySome(array, test)

/*Analogous to the some method, arrays also have an every method. This one returns true when the given function returns true for every element in the array. 
In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.
Implement two versions of every (everySome and everyLoop) as a function that takes an array and a predicate function as parameters. 
Write two versions, one using a loop and one using the some method.
*/
export function everyLoop(array, test) {
  // Your code here.
  let returnValue = true
  for (let item of array) {
      returnValue = returnValue && test(item)
  }
  return returnValue
}

export function everySome(array, test) {
// Your code here.
//test(item1) or test(item2) or test(item3)
//There isn't an item in array that doesn't meet the test
return !array.some(item => { 
    console.log("Applying the test to " + item + " with result " + test(item))
    if (!test(item)) { 
    console.log("I found an item that doesn't meet the rest!")
    }
    return !test(item)
})
}
 //Whether any given item passes the test

console.log(everySome([1, 3, 5], n => n < 10));
// → true
console.log(everySome([2, 4, 16], n => n < 10));
// → false
console.log(everySome([], n => n < 10));
// → true

console.log(everyLoop([1, 3, 5], n => n < 10));
// → true
console.log(everyLoop([2, 4, 16], n => n < 10));
// → false
console.log(everyLoop([], n => n < 10));
// → true


