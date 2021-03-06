/**
 * #2: Even Fibonacci numbers
 *
 * Each new term in the Fibonacci sequence is generated by adding the previous
 * two terms. By starting with 1 and 2, the first 10 terms will be:
 *
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 *
 * By considering the terms in the Fibonacci sequence whose values do not exceed
 * four million, find the sum of the even-valued terms.
 */

var sum       = 2; // start with 2 since we won't run a modulus check on the first two fibonacci numbers
var max       = 4000000;
var prev_prev = 1;
var prev      = 2;
var curr      = 0;

while (curr <= max)
{
    curr = prev_prev + prev;

    if (curr % 2 === 0)
    {
        sum += curr;
    }

    prev_prev = prev;
    prev      = curr;
}

console.log(sum);
