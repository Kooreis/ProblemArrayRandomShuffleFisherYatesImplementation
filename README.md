# Question: How do you shuffle an array randomly (implement Fisher–Yates shuffle)? JavaScript Summary

The JavaScript code provided is a solution to the problem of shuffling an array randomly using the Fisher-Yates shuffle algorithm. The function `fisherYatesShuffle` is defined to perform the shuffling operation. It starts by setting a variable `currentIndex` to the length of the array. Then, it enters a loop that continues until `currentIndex` is not zero. In each iteration of the loop, it generates a random index, decreases `currentIndex` by one, and then swaps the elements at `currentIndex` and `randomIndex` in the array. This process ensures that every element in the array has an equal chance of ending up at any position, thus achieving a random shuffle. After defining the function, the code creates an array of numbers from 1 to 10, prints the original array, shuffles the array using the `fisherYatesShuffle` function, and then prints the shuffled array.

---

# TypeScript Differences

The TypeScript version of the solution is almost identical to the JavaScript version. The main difference is that TypeScript includes type annotations, which provide a way to enforce certain types of values. In this case, the `fisherYatesShuffle` function is explicitly declared to take an array of any type (`any[]`) and return an array of any type (`any[]`). This helps to ensure that the function is used correctly, and can provide better autocompletion and error checking in some development environments.

Another minor difference is the way the arrays are printed to the console. In the JavaScript version, the arrays are concatenated with a string to form a single string that is passed to `console.log`. In the TypeScript version, the arrays are passed as separate arguments to `console.log`, which automatically converts them to strings and separates them with a space. This is more of a stylistic difference than a functional one, and both versions produce the same output.

The logic of the Fisher-Yates shuffle algorithm is implemented in the same way in both versions. The algorithm works by iterating over the array from the last element to the first, each time swapping the current element with a randomly chosen element from the remaining unshuffled elements. This ensures that every permutation of the array is equally likely.

---

# C++ Differences

The C++ version of the Fisher-Yates shuffle algorithm is similar to the JavaScript version in terms of the overall logic. Both versions iterate through the array from the end to the beginning, and for each iteration, they swap the current element with a randomly selected element from the remaining unshuffled elements.

However, there are several differences due to the language features and methods used in each version:

1. Random Number Generation: In JavaScript, `Math.random()` is used to generate a random number. In C++, a Mersenne Twister engine (`std::mt19937`) is used with a random device (`std::random_device`) as a seed to generate a random number. This is a more complex but also more robust method of generating random numbers.

2. Array Manipulation: In JavaScript, array elements are swapped using a temporary variable. In C++, the `std::swap()` function is used to swap elements, which is a built-in function in the Standard Template Library (STL).

3. Data Types: JavaScript uses a generic array, while C++ uses a `std::vector<int>`. This is because C++ is a statically typed language and requires the type of elements in the array to be declared.

4. Looping: JavaScript uses a while loop to iterate through the array, while C++ uses a for loop. This is more of a stylistic difference and doesn't affect the functionality of the algorithm.

5. Output: In JavaScript, the array is converted to a string and printed to the console using `console.log()`. In C++, each element of the array is printed to the console using a range-based for loop and `std::cout`.

6. Function Parameters: In JavaScript, the array is passed to the function by value, which means that a copy of the array is made. In C++, the array is passed by reference (`&`), which means that the original array is modified.

---
