//Accountant.js
//Christopher Diaz
//Copyright - 2016


var should = require('chai').should();
var Accountant = require('../accountant');

describe('AccountantJS', function(){

    it('should calculate compound interest', function(){
       Accountant.CompoundInterest(1500, 1, 12).should.equal(190.23754519795466);
       Accountant.CompoundInterest(1500, 0.01, 12).should.equal(190.23754519795466);
    });

    it('should calculate annual percentage yield', function(){
       Accountant.AnnualPercentageYield(4, 24).should.equal(0.04077611957728178);
       Accountant.AnnualPercentageYield(0.04, 24).should.equal(0.04077611957728178);
    });

    it('should calculate debt to income', function(){
       Accountant.DebtToIncomeRatio(2500, 8000).should.equal(0.3125);
    });

    it('should calculate simple interest', function(){
       Accountant.SimpleInterest(15000, 4, 10).should.equal(6000);
    });

    it('should calculate a monthly loan payment', function(){
       Accountant.LoanPayment(15000, 4, 60).should.equal(276.24783082898847);
       Accountant.LoanPayment(15000, 0.04, 60).should.equal(276.24783082898847);
    });

    it('should calculate a monthly mortgage payment', function(){
       Accountant.Mortgage(350000, 4, 360).should.equal(1670.953534129085);
       Accountant.Mortgage(350000, 0.04, 360).should.equal(1670.953534129085);
    });
    
    it('should calculate the future value of the given sum', function(){
       Accountant.FutureValue(1000, 0.005, 12).should.equal(1061.6778118644977); 
    });
});
