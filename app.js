module.exports = {

  findMissingNumbers : function (sequence) {
    
    if (typeof sequence !== 'string') {
      return 'ERROR: arguement should be a string';
    }

    var possibleDigits = '0123456789';
    
    var missingDigits = [];

    for (var i = 0; i < possibleDigits.length; i++) {
      if (sequence.indexOf(possibleDigits[i]) === -1) {
        missingDigits.push(parseInt(possibleDigits[i], 10));
      }
    }
    
    return missingDigits;

  },

  swapWords : function (stringArg) {

    if (typeof stringArg !== 'string') {
      return 'ERROR: arguement should be a string';
    }

    var regEx = /(\w+)\s+(\w+)/;
    return stringArg.replace(regEx, "$2, $1");
  
  },

  twoStrings : function (locateStr, circleStr) {

    if (typeof locateStr !== 'string' || typeof circleStr !== 'string' ) {
      return 'ERROR: arguements should be a strings';
    }
    var dblCircleStr = circleStr.concat(circleStr);

    return dblCircleStr.indexOf(locateStr) >= 0;

  },

  palindrome : function (word) {

    if (typeof word !== 'string') {
      return 'ERROR: arguement should be a string';
    }

    return word === word.split('').reverse().join('');

  }
  
};