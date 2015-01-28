module.exports = {

  findMissingNumbers : function () {
    var possibleDigits = '0123456789';
    
    var missingDigits = '';

    var sequence = "9899100101103104105";

    for (var i = 0; i < possibleDigits.length; i++) {
      if (sequence.indexOf(possibleDigits[i]) === -1) {
        missingDigits = missingDigits.concat(possibleDigits[i]);
      }
    }
    
    return missingDigits;

  },

  swapWords : function () {

    var name = 'Jay Won';
  
  },

  twoStrings : function () {


  },

  palindrome : function () {

     var input = 'racecar';

  }
};