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

    fizzBuzz: function(whatDoIPutHere) {
      //I feel like I need to declare a variable for the value that the test will pass into the function here (which would be 16), so I can then use it in the for loop below, but I cant figure out how to successfully do this
      var numberArray = [];

      for (var i = 1; i <= whatDoIPutHere; i++) {

          if ((i % 3 === 0) && (i % 5 === 0)) {
              numberArray.push("FIZZBUZZ")

          } else if (i % 3 === 0) {
              numberArray.push("FIZZ")

          } else if (i % 5 === 0) {
              numberArray.push("BUZZ")

          } else {
              numberArray.push(i)

          }
      }
      return numberArray
};


    myMap: function() {
        // your code here
    },

    primes: function() {
        // your code here
    },
}
