
const fn = {
    factorial(num) {
        // https://fr.wikipedia.org/wiki/Factorielle
        // To use rescursion you'll have to call module.exports.factorial
        // Your code goes here you MUST use recursion
        if (num === 0) return 1;
        // This is the recursive one.
        else return num * module.exports.factorial(num - 1);
    }

}
module.exports = fn