var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var dsma = require('./../app.js'); 

describe('app.findMissingNumbers', function() {

  it('should be defined as a Function', function() {
    
    expect(dsma.findMissingNumbers).to.be.instanceOf(Function);
  
  });

  it('should find the missing numbers "267"', function() {
    var testString = '9899100101103104105';
    var result = dsma.findMissingNumbers(testString);
    expect(result).to.deep.equal([2, 6, 7]);
   
  });

   it('If non-string arguement is passed, return error', function() {
     var testArg = 9899100101103104105;
     var result = dsma.findMissingNumbers(testArg);
     expect(result).to.be.equal('ERROR: arguement should be a string');
        });

});