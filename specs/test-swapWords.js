var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var dsma = require('./../app.js'); 

describe('app.swapWords', function() {

  it('should be defined as a Function', function() {
    
    expect(dsma.swapWords).to.be.instanceOf(Function);
  
  });

  it("should receive two words seperated by space, and swap them with a comma between.", function() {
    var testString = 'Jay Won';
    var result = dsma.swapWords(testString);
    
    expect(result).to.be.equal('Won, Jay');
  });

  it('If non-string arguement is passed, return error', function() {
     var testArg = 1234;
     var result = dsma.swapWords(testArg);
     expect(result).to.be.equal('ERROR: arguement should be a string');
  });


});