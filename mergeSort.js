function mergeSort(arr) {
    // Base case: if the array has less than or equal to one element, it is already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Split the array in half and recursively sort both halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    
    // // Use merge() to combine the sorted halves
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const sortedArray = [];
    let i = 0, j = 0;

    // Combine arrays into sorted array
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArray.push(left[i]);
            i++;
        } else {
            sortedArray.push(right[j]);
            j++;
        }
    }

    // Add any remaining elements from the left array
    while (i < left.length) {
        sortedArray.push(left[i]);
        i++;
    }
    // Add any remaining elements from the right array
    while (j < right.length) {
        sortedArray.push(right[j]);
        j++;
    }

    return sortedArray;
}

const array = [50, 61, 5, 3, 10, 12, 18];
console.log("Sorted array:", mergeSort(array)); // [3, 5, 10, 12, 18, 50, 61]