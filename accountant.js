//Accountant.js
//https://github.com/Ju66ernaut/accountant.js
//Copyright 2016 Christopher Diaz, MIT license

//Instantiate Accountant class
var Accountant = function(){};

//+===== CALCULATORS ======

//Annual Percentage Yield
//Description: Rate of interest earned when taking into consideration the effect of compounding
//if an account is compounded monthly, numberOfTimesCompounded would equal 12
Accountant.prototype.AnnualPercentageYield = function(annualInterestRate, numberOfTimesCompounded){
    var rate = checkDecimalPercent(annualInterestRate);
    
    return Math.pow((1 + (rate / numberOfTimesCompounded)), numberOfTimesCompounded) - 1;
};


//Compound interest
//Description: Calculates the interest earned on an account where the amount earned is reinvested
Accountant.prototype.CompoundInterest = function(principal, ratePerPeriod, numberOfPeriods){
    var rate = checkDecimalPercent(ratePerPeriod);

    return principal * (Math.pow((1 + rate), numberOfPeriods) - 1);
};

//Loan Payment
//Description: Calculates payment on a Loan
Accountant.prototype.LoanPayment = function(presentValue, ratePerPeriod, numberOfPeriods){
    var rate = checkDecimalPercent(ratePerPeriod);

    return presentValue * rate / (1 - (Math.pow(1 + rate, -numberOfPeriods)));
};

//Simple Interest
//Description: Calculates the interest accrued on a loan or savings account that has simple interest
//time is in years
Accountant.prototype.SimpleInterest = function(principal, rate, time){
    var rate = checkDecimalPercent(rate);

    return principal * rate * time;
};

//Debt To Income Ratio
//Description: Calculates the debt to income ratio 
Accountant.prototype.DebtToIncome = function(monthlyDebtPayments, monthlyIncome){
    return monthlyDebtPayments / monthlyIncome;
};


//Mortgage Payment
//Description: Calculates mortgage payment
//number of periods is in months
Accountant.prototype.Mortgage = function(principal, annualInterestRate, numberOfPeriods){
    var rate = checkDecimalPercent(annualInterestRate);
    var monthlyInterestRate = rate / 12;

    var t = monthlyInterestRate * Math.pow((1 + monthlyInterestRate), numberOfPeriods);
    var b = Math.pow((1 + monthlyInterestRate), numberOfPeriods) - 1;
    return principal * (t/b);
};


//+===== UTILITY =======
function checkDecimalPercent(v){
    if(v > 0.99){
        v /= 100;
    }
    return v;
}


//TODO:
//incorporate precision


if (typeof exports !== 'undefined') {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Accountant;
  }
}
