module.exports = {

  findMissingNumbers : function (sequence) {
    var possibleDigits = '0123456789';
    
    var missingDigits = '';

    for (var i = 0; i < possibleDigits.length; i++) {
      if (sequence.indexOf(possibleDigits[i]) === -1) {
        missingDigits = missingDigits.concat(possibleDigits[i]);
      }
    }
    
    return missingDigits;

  },

  swapWords : function (stringArg) {

    var regEx = /(\w+)\s+(\w+)/;
    return stringArg.replace(regEx, "$2, $1");
  
  },

  twoStrings : function () {


  },

  palindrome : function () {

     var input = 'racecar';

  }
};