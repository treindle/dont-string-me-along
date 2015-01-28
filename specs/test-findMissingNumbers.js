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
    console.log('result string',result);
    expect(result).to.equal('267');
   
  });
  
});