Here is a TypeScript console application that implements the Fisher-Yates shuffle algorithm:

```typescript
function fisherYatesShuffle(array: any[]): any[] {
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

let arrayToShuffle = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Original Array: ", arrayToShuffle);
console.log("Shuffled Array: ", fisherYatesShuffle(arrayToShuffle));
```

This application defines a function `fisherYatesShuffle` that takes an array as an argument and returns a new array with the elements shuffled. It then creates an array `arrayToShuffle`, prints it to the console, shuffles it using the `fisherYatesShuffle` function, and prints the shuffled array to the console.