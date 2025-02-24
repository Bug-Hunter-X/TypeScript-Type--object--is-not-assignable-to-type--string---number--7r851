# TypeScript Type 'object' is not assignable to type 'string | number'
This repository demonstrates a common issue in TypeScript where type checking can be too strict, leading to errors even if the code works correctly in JavaScript.  The problem arises when using the `any[]` type with a function designed to print arrays of mixed types or objects.

## The Bug
The `bug.ts` file contains a function `printArray` that takes an array of `any` type as input and prints each element to the console. While this function works correctly with arrays of numbers, strings, or a mix of both, it fails when passed an array of objects. This is because TypeScript's type system enforces that all elements in the array must match the specified type.