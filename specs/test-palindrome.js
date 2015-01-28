var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var dsma = require('./../app.js'); 

describe('app.palindrome', function() {

  it('should be defined as a Function', function() {
    
    expect(dsma.palindrome).to.be.instanceOf(Function);
  
  });

  it('should test if a word is a palindrome', function() {
    
    var testString = 'racecar';
    var result = dsma.palindrome(testString);
    expect(result).to.be.equal(true);
   
  });

  it('If non-string arguement is passed, return error', function() {
     var testArg = 1234;
     var result = dsma.palindrome(testArg);
     expect(result).to.be.equal('ERROR: arguement should be a string');
  });

  it("should have palindrome within string", function() {
    var testString = 'Jesse';
    var result = dsma.palindrome(testString);
    expect(result).to.be.equal(true);
  });
  
});