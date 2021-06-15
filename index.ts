'use strict';

/**
 * @desc: Function is defined to yield data lazily (Generator function)
 * @param anyArray : Array<any>
 */
function* processArrayList(anyArray: Array<any>) {
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
const getArrayLength = (anyArray: Array<any>) : Number => {
    return anyArray.length;
}


export const getIterableArray = (anyArray: Array<any>) : Array<any> => {
    //Calling the generator function
    const generatorIterableObject = processArrayList(anyArray);
    const newFormatedArray = []
    //Iterating iterable object returned by generator
    for(let obj of generatorIterableObject) {
        newFormatedArray.push(obj)
    }
    return newFormatedArray;
}
