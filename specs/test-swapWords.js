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
});