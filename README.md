# Generator-Iteration
A node module to process large array list into more efficient way using generator function.

# Installation

`npm install generator-iteration`


# Description

In the real world of data processing and manipulation, we have always come across a problem where the execution time for lengthy arrays is always a challenge and it becomes more challenging when the dataset is very large.
We always go with a typical approach i.e we make an API call to fetch the data then iterate the data for data manipulation and processing. But just consider a scenario where the dataset fetched is too large and in that case we need to consider the optimal execution time for better performance. It will be really cool if we lazily process our iterable dataset which optimizes the execution time and also gives us a better performance. We can all achieve it by introducing generator functions.


# Key Points

1. With the capability of laziness and optimized execution, the generator functions can be utilized on the browser side (web applications) as well where we can render a large amount of data lazily and can also optimize its execution time as well.
2. Since the generator function returns a special iterable object, it becomes very easy for data modification/manipulation or processing as we have access to each object of the iterable array.
3. In the single thread environment of javascript, the generator functions help us a lot by pushing the limits and allowing us to run and execute heavy non I/0 processes in an optimized way.
4. Generator Functions are pretty much a well-known approach in python where large data sets need to be processed in many data science studies and analysis.


# Usage

Node.js
```
const {getIterableArray} = require('generator-iterator')

//get the array lazily loaded
// Array Can be Array<any>, the array list will be computed lazily
// Can insert Large Array List
const lazilyLoadedArray = getIterableArray([1,2,3,4])
console.log(lazilyLoadedArray); //[1,2,3,4]
```

Using import statement
```
import {getIterableArray} from 'generator-iterator'

//get the array lazily loaded
// Array Can be Array<any>, the array list will be computed lazily
// Can insert Large Array List
const lazilyLoadedArray = getIterableArray([1,2,3,4])
console.log(lazilyLoadedArray); //[1,2,3,4]
```


# License 

MIT



