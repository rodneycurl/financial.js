//Accountant.js
//https://github.com/Ju66ernaut/accountant.js
//Accountant.js is inspired by Essam Al Joubori's finance.js - http://financejs.org/
//Copyright 2016 Christopher Diaz, MIT license

/** @constructor */
var Accountant = {
	checkDecimalPercent: function(v){
		if(v > 0.99){
			v /= 100;
		}
		return v;
	}
};

/**
* AnnualPercentageYield(number,number)
* Annual Percentage Yield
* Rate of interest earned when taking into consideration the effect of compounding
* if an account is compounded monthly, numberOfTimesCompounded would equal 12
*
* @param {number} annualInterestRate
* @param {number} numberOfTimesCompounded
* @returns {number}
*/
Accountant.AnnualPercentageYield = function (annualInterestRate, numberOfTimesCompounded){
	var rate = this.checkDecimalPercent(annualInterestRate);
	return Math.pow((1 + (rate / numberOfTimesCompounded)), numberOfTimesCompounded) - 1;
}

/**
* CompoundInterest(number,number,number)
* Compound Interest
* Calculates the interest earned on an account where the amount earned is reinvested
*
* @param {number} principal
* @param {number} ratePerPeriod
* @param {number} numberOfPeriods
* @returns {number}
*/
Accountant.CompoundInterest = function(principal, ratePerPeriod, numberOfPeriods){
	var rate = this.checkDecimalPercent(ratePerPeriod);
	return principal * (Math.pow((1 + rate), numberOfPeriods) - 1);
}

/**
* LoanPayment(number,number,number)
* Loan Payment
* Calculates monthly payment on a Loan
*
* @param {number} presentValue
* @param {number} annualInterestRate
* @param {number} numberOfMonths
* @returns {number}
*/
Accountant.LoanPayment = function(presentValue, annualInterestRate, numberOfMonths){
	var rate = this.checkDecimalPercent(annualInterestRate);
	var monthlyInterestRate = rate / 12;
	return presentValue * monthlyInterestRate / (1 - (Math.pow(1 + monthlyInterestRate, -numberOfMonths)));
}

/**
* SimpleInterest(number,number,number)
* Simple Interest
* Calculates the interest accrued on a loan or savings account that has simple interest
* time is in years
*
* @param {number} principal
* @param {number} annualInterestRaterate
* @param {number} time
* @returns {number}
*/
 Accountant.SimpleInterest = function(principal, annualInterestRaterate, time){
	var rate = this.checkDecimalPercent(annualInterestRaterate);
	return principal * rate * time;
}

/**
* DebtToIncomeRatio(number,number)
* Debt To Income Ratio
* Calculates the debt to income ratio
*
* @param {number} monthlyDebtPayments
* @param {number} monthlyIncome
* @returns {number}
*/
 Accountant.DebtToIncomeRatio = function(monthlyDebtPayments, monthlyIncome){
	return monthlyDebtPayments / monthlyIncome;
}

/**
* Mortgage(number,number,number)
* Mortgage Payment
* Calculates mortgage payment number of periods is in months
*
* @param {number} annualInterestRate
* @param {number} numberOfTimesCompounded
* @returns {number}
*/
 Accountant.Mortgage = function(principal, annualInterestRate, numberOfPeriods){
	var rate = this.checkDecimalPercent(annualInterestRate);
	var monthlyInterestRate = rate / 12;
	var t = monthlyInterestRate * Math.pow((1 + monthlyInterestRate), numberOfPeriods);
	var b = Math.pow((1 + monthlyInterestRate), numberOfPeriods) - 1;
	return principal * (t/b);
}

if (typeof exports !== 'undefined') {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Accountant;
  }
}
