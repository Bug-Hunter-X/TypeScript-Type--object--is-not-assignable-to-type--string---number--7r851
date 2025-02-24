function printArray(arr: any[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

const myArray = [1, 2, 3, 4, 5];
printArray(myArray); // Works fine

const myStringArray = ['a', 'b', 'c', 'd', 'e'];
printArray(myStringArray); // Works fine

const myMixedArray = [1, 'a', 2, 'b', 3];
printArray(myMixedArray); // Also works fine

const myObjectsArray = [{id: 1, name: 'a'}, {id: 2, name: 'b'}];
printArray(myObjectsArray); // Works fine now

//Solution
//To resolve this, using the any type is sufficient to bypass the strict type checking of the TypeScript compiler.