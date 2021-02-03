
const fn = {
    factorial(num) {
        // https://fr.wikipedia.org/wiki/Factorielle
        // Your code goes here you MUST use recursion
        // This is the base case.
        if (num === 0) return 1;
        // This is the recursive one.
        else return num * module.exports.factorial(num - 1);
    }

}
module.exports = fn