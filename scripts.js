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

    compareArrays: function() {
      var startArr = [1,2,4,3];
      var diffArr = [1,2,3,4];

      var startArr = startArr.toString();
      var diffArr = diffArr.toString();

      if (startArr === diffArr) {
        return true;
      } else {
        return false;
      }


    },

    fizzBuzz: function() {
        // your code here
    },

    myMap: function() {
        // your code here
    },

    primes: function() {
        // your code here
    },
}
