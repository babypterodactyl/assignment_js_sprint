// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
    largestEl: function() {
        var input = [2, 4, 2, 1, 5, 2, 5]
        return Math.max(...input)
    },

    reversed: function(input) {
        input = "I am a special string!"
        var secondString = input.split("")
        var backwardsArray = secondString.reverse();
        var finalArray = backwardsArray.join("");
        return finalArray;
    },

    loudSnakeCase: function() {
        var input = "I am a strange code. I like it though!";
        var str = input.split(/\W+/);

        for (var i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }

        str = str.join('_');
        var str = str.slice(0, -1);
        return str
    },

    compareArrays: function(firstArray, secondArray) {

        if (firstArray === secondArray) {
            return true;
        } else {
            return false;
        }

    },

    fizzBuzz: function() {

        var numberArray = [];

        for (var i = 1; i <= 16; i++) {
            numberArray.push(i);
        }

        console.log(numberArray);

        if (input % 3 === 0 && input % 5 === 0) {
            var replacement = "FIZZBUZZ"
        } else if (input % 3 === 0) {
            replacement = "FIZZ"
        } else if (input % 5 === 0) {
            replacement = "BUZZ"
        } else {
            console.log(false);
        }


    },

    myMap: function() {
        // your code here
    },

    primes: function() {
        // your code here
    },
}
