var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var dsma = require('./../app.js'); 

describe('app.twoStrings', function() {

  it('should be defined as a Function', function() {
    
    expect(dsma.twoStrings).to.be.instanceOf(Function);
  
  });

    it('should be within the circular variation of the word', function() {
    
    var cirString = 'hello';
    var findString = 'oh';
    var result = dsma.twoStrings(findString, cirString);

    expect(result).to.equal(true);

  
    });

    it('If non-string arguements are passed, return error', function() {
     var testArg = 1234;
     var testArg2 = '4321'; 
     var result = dsma.twoStrings(testArg, testArg2);
     expect(result).to.be.equal('ERROR: arguements should be a strings');
    });
});