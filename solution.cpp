```cpp
#include <iostream>
#include <vector>
#include <random>
#include <algorithm>

void fisherYatesShuffle(std::vector<int>& arr) {
    std::random_device rd;
    std::mt19937 gen(rd());

    for (int i = arr.size() - 1; i > 0; --i) {
        std::uniform_int_distribution<> dis(0, i);
        std::swap(arr[i], arr[dis(gen)]);
    }
}

int main() {
    std::vector<int> arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    fisherYatesShuffle(arr);

    for (int i : arr) {
        std::cout << i << " ";
    }

    return 0;
}
```