
const prompt = require("prompt-sync")();
// Javascript code to Count Palindromic Subsequence
// in a given String

function countPS(str) {
    let N = str.length;

    // create a 2D array to store the count
    // of palindromic subsequence
    let cps = new Array(N);
    for (let i = 0; i < N; i++) {
        cps[i] = new Array(N);
        for (let j = 0; j < N; j++) {
            cps[i][j] = 0;
        }
    }

    // palindromic subsequence of length 1
    for (let i = 0; i < N; i++)
        cps[i][i] = 1;

    // check subsequence of length L is
    // palindrome or not
    for (let L = 2; L <= N; L++) {
        for (let i = 0; i <= N - L; i++) {
            let k = L + i - 1;
            if (str[i] == str[k]) {
                cps[i][k] = cps[i][k - 1]
                    + cps[i + 1][k] + 1;
            } else {
                cps[i][k] = cps[i][k - 1]
                    + cps[i + 1][k]
                    - cps[i + 1][k - 1];
            }
        }
    }

    // return total palindromic subsequence
    return cps[0][N - 1];
}

// Driver program
let str = prompt("enter any string : ");
console.log("Total palindromic "
    + "subsequence are : "
    + countPS(str));




