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
    
    it('should calculate present value', function(){
       Accountant.PresentValue(100, 5, 1).should.equal(95.23809523809524);
       Accountant.PresentValue(100, 0.05, 1).should.equal(95.23809523809524);
    });
    
    it('should calculate return on investment', function(){
       Accountant.ReturnOnInvestment(5500, 5000).should.equal(0.1); 
    });
    
    it('should calculate the rule of 72 years', function() {
       Accountant.RuleOf72(6).should.equal(12);
    });
    
    it('should calculate cash flow', function() {
       Accountant.CashFlow(8000, 4500).should.equal(3500);
    });
    
    it('should calculate inflation adjust return', function() {
       Accountant.InflationAdjustedReturn(8, 3).should.equal(4.854368932038833)
       Accountant.InflationAdjustedReturn(0.08, 0.03).should.equal(4.854368932038833)
    });
    
     it('should calculate the percentage increase in whole percent (gains or losses)', function() {
       Accountant.Gains(100, 70).should.equal(42.857142857142854);
    });
});
