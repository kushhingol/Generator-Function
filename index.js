'use strict';

/**
 * @desc: Function is defined to yield data lazily (Generator function)
 * @param anyArray : Array<any>
 */
function* processArrayList(anyArray) {
    const arrayLength = getArrayLength(anyArray);
    if(arrayLength) {
        let i =0;
        for(i; i<arrayLength; i++) {
            yield anyArray[i];
        }
    }
}

/**
 * @desc: Function is defined to get Array Length
 * @param anyArray : Array<any>
 * @returns Number
 */
const getArrayLength = (anyArray) => {
    return anyArray.length;
}


const getIterableArray = (anyArray) => {
    //Calling the generator function
    const generatorIterableObject = processArrayList(anyArray);
    const newFormatedArray = []
    //Iterating iterable object returned by generator
    for(let obj of generatorIterableObject) {
        newFormatedArray.push(obj)
    }
    return newFormatedArray;
}

module.exports.getIterableArray = getIterableArray;
