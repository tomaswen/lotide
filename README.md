# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @tomas.wen/lotide`

**Require it:**

`const _ = require('@tomas.wen/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head()` : returns the first element of an array.
* `tail()` : returns an array with the first element removed.
* `middle()` : returns the middle element of an array
* `assertArraysEqual(array1,array2)` : asserts two arrays
* `assertEqual(ele1,ele2)` : asserts two elements
* `assertObjectsEqual(obj1,obj2)` : asserts two objects
* `countLetters(input)` : returns the number of times each letter appears in the input
* `countOnly(allItems,itemsToCount)` : return all the indices (zero-based positions) in the allItems where each itemToCount is found.
* `eqArrays(arr1,arr2)` : compares two arrays and returns truthy or falsy.
* `eqObjects(arr1,arr2)` : compares two objects and returns truthy or falsy.
* `findKey(obj,callback)` : find keys using callback function
* `findKeyByValue(obj, value)` : search for a key on an object where its value matches a given value.
* `flatten(arr)` : Given an array with other arrays inside, it can flatten it into a single-level array.
* `letterPositions(string)` : creates an object indicating the indeces where each letter is present in the string.
* `map(arr, callback)` :creates a new array populated with the results of calling a provided function on every element in the calling array.
* `takeUntil(arr, callback)` : creates an array with the elements removed based on callback function
* `without(arr, itemsToRemove)` : take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.