const fn = {
    fibonnacci(num) {
        // https://fr.wikipedia.org/wiki/Suite_de_Fibonacci
        // To use rescursion you'll have to call module.exports.fibonnacci
        // Your code goes here you MUST use recursion
        if (num <= 1) return 1;

        return module.exports.fibonnacci(num - 1) + module.exports.fibonnacci(num - 2);
    }

}
module.exports = fn