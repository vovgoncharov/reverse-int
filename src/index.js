module.exports = function reverse (n) {
    let number = n.toString().split("").reverse().join("");
    return parseInt(number, 10);
}
