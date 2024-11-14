Here is a JavaScript console application that implements the Fisher-Yates shuffle algorithm:

```javascript
function fisherYatesShuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Original Array: " + array);
console.log("Shuffled Array: " + fisherYatesShuffle(array));
```

This script first defines a function `fisherYatesShuffle` that takes an array as an argument and shuffles it using the Fisher-Yates algorithm. Then it creates an array of numbers from 1 to 10, prints the original array to the console, shuffles the array using the `fisherYatesShuffle` function, and prints the shuffled array to the console.