// iterative approach to generate fibonacci sequence
function fibs(n) {
    const fibSequence = []; // init empty arr to store sequence

    if (n === 0) return [0];
    if (n === 1) return [0, 1];

    // Start the sequence with the first two numbers
    fibSequence[0] = 0; 
    fibSequence[1] = 1;

    // Generate the rest of the sequence
    for (let i = 2; i < n; i++) {
        fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];

    }
    return fibSequence;
}
/* ----------------- recursive approach to generate fibonacci sequence --------------------- */

function fibsResc(n) {
    // Base cases
    if (n === 0) return [0];
    if (n === 1) return [0, 1];

    // Recursive case: Generate the sequence up to (n - 1) terms
    const sequence = fibsResc(n - 1);

    // Calculate the next Fibonacci number and add it to the sequence
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);

    return sequence;
}
// fibs iteratively usage
const x = 10; // generate first 10 fibonacci numbers
console.log(fibs(x)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// fibs recursively usage
const y = 10; // Number of terms in the Fibonacci sequence
console.log(fibsResc(y)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
 