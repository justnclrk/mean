module.exports = function (){
    return {
        add: function(num1, num2) { 
            console.log("the sum is:", num1 + num2); 
        },
        multiply: function(num1, num2) {
            console.log("the numbers multiplied is:", num1 * num2);
        },
        square: function(num) {
            console.log("the square root is:", Math.sqrt(num));
        },
        random: function(num1, num2) {
            console.log("random number:", Math.random(num1, num2));
        }
    }
};