### Installation

```shell
  npm install financialjs --save
```
**or**

-   Download or fork the repository from GitHub.
-   Place 'financial.js' in your project and include it in your application.

### Notes
In most cases, Financial.js allows for both decimal and whole number percentages for functions that require 'rate' parameters
```js
  const Financial = require('financialjs');

  Financial.CompoundInterest(1500, 1, 12); // => 190.24
  Financial.CompoundInterest(1500, 0.01, 12); // => 190.24 
```

* [Financial](#Financial) : <code>object</code>
    * [.AnnualPercentageYield(annualInterestRate, numberOfTimesCompounded)](#Financial.AnnualPercentageYield) ⇒ <code>number</code>
    * [.CompoundInterest(principal, ratePerPeriod, numberOfPeriods)](#Financial.CompoundInterest) ⇒ <code>number</code>
    * [.LoanPayment(presentValue, annualInterestRate, numberOfMonths)](#Financial.LoanPayment) ⇒ <code>number</code>
    * [.SimpleInterest(principal, annualInterestRaterate, time)](#Financial.SimpleInterest) ⇒ <code>number</code>
    * [.DebtToIncomeRatio(monthlyDebtPayments, monthlyIncome)](#Financial.DebtToIncomeRatio) ⇒ <code>number</code>
    * [.Mortgage(principal, annualInterestRate, numberOfPeriods)](#Financial.Mortgage) ⇒ <code>number</code>
    * [.FutureValue(presentValue, monthlyInterestRate, numberOfMonths)](#Financial.FutureValue) ⇒ <code>number</code>
    * [.PresentValue(presentValue, monthlyInterestRate, numberOfMonths)](#Financial.PresentValue) ⇒ <code>number</code>
    * [.ReturnOnInvestment(earnings, initialInvestment)](#Financial.ReturnOnInvestment) ⇒ <code>number</code>
    * [.RuleOf72(annualInterestRate)](#Financial.RuleOf72) ⇒ <code>number</code>
    * [.CashFlow(income, expenses)](#Financial.CashFlow) ⇒ <code>number</code>
    * [.InflationAdjustedReturn(investmentReturn, inflationRate)](#Financial.InflationAdjustedReturn) ⇒ <code>number</code>
    * [.Gains(marketPrice, purchasePrice)](#Financial.Gains) ⇒ <code>number</code>

<a name="Financial.AnnualPercentageYield"></a>

### Financial.AnnualPercentageYield(annualInterestRate, numberOfTimesCompounded) ⇒ <code>number</code>
if an account is compounded monthly, numberOfTimesCompounded would equal 12nding

**Kind**: static method of <code>[Financial](#Financial)</code>

| Param | Type | Description |
| --- | --- | --- |
| annualInterestRate | <code>number</code> |  |
| numberOfTimesCompounded | <code>number</code> | (months) |

<a name="Financial.CompoundInterest"></a>

### Financial.CompoundInterest(principal, ratePerPeriod, numberOfPeriods) ⇒ <code>number</code>
Calculates the interest earned on an account where the amount earned is reinvested

**Kind**: static method of <code>[Financial](#Financial)</code>

| Param | Type |
| --- | --- |
| principal | <code>number</code> |
| ratePerPeriod | <code>number</code> |
| numberOfPeriods | <code>number</code> |

<a name="Financial.LoanPayment"></a>

### Financial.LoanPayment(presentValue, annualInterestRate, numberOfMonths) ⇒ <code>number</code>
Calculates monthly payment on a Loan

**Kind**: static method of <code>[Financial](#Financial)</code>

| Param | Type |
| --- | --- |
| presentValue | <code>number</code> |
| annualInterestRate | <code>number</code> |
| numberOfMonths | <code>number</code> |

**Example**
```js
The monthly payment of a loan with a presentValue (balance) of $15000 at a 4% annual interest rate over 60 months (5 years)

Financial.LoanPayment(15000, 4, 60)
// => 276.24783082898847
```
<a name="Financial.SimpleInterest"></a>

### Financial.SimpleInterest(principal, annualInterestRaterate, time) ⇒ <code>number</code>
time is in yearsnterest accrued on a loan or savings account that has simple interest

**Kind**: static method of <code>[Financial](#Financial)</code>

| Param | Type |
| --- | --- |
| principal | <code>number</code> |
| annualInterestRaterate | <code>number</code> |
| time | <code>number</code> |

<a name="Financial.DebtToIncomeRatio"></a>

### Financial.DebtToIncomeRatio(monthlyDebtPayments, monthlyIncome) ⇒ <code>number</code>
Calculates the debt to income ratio

**Kind**: static method of <code>[Financial](#Financial)</code>

| Param | Type |
| --- | --- |
| monthlyDebtPayments | <code>number</code> |
| monthlyIncome | <code>number</code> |

**Example**
```js
A monthly income of $8000 and a monthly debt of 2500

Financial.DebtToIncomeRatio(2500, 8000);
// => 0.3125 (~31%)
```
<a name="Financial.Mortgage"></a>

### Financial.Mortgage(principal, annualInterestRate, numberOfPeriods) ⇒ <code>number</code>
Calculates mortgage payment (number of periods is in months)

**Kind**: static method of <code>[Financial](#Financial)</code>

| Param | Type |
| --- | --- |
| principal | <code>number</code> |
| annualInterestRate | <code>number</code> |
| numberOfPeriods | <code>number</code> |

**Example**
```js
A mortgage with a principal balance of 350000 paid over 360 months (30 years) at an interest rate of 4%

Financial.Mortgage(350000, 4, 360);
// => 1670.953534129085
```
<a name="Financial.FutureValue"></a>

### Financial.FutureValue(presentValue, monthlyInterestRate, numberOfMonths) ⇒ <code>number</code>
Calculates Future Value of an amount

**Kind**: static method of <code>[Financial](#Financial)</code>

| Param | Type |
| --- | --- |
| presentValue | <code>number</code> |
| monthlyInterestRate | <code>number</code> |
| numberOfMonths | <code>number</code> |

<a name="Financial.PresentValue"></a>

### Financial.PresentValue(presentValue, monthlyInterestRate, numberOfMonths) ⇒ <code>number</code>
Calculates Present Value of an amount

**Kind**: static method of <code>[Financial](#Financial)</code>

| Param | Type |
| --- | --- |
| presentValue | <code>number</code> |
| monthlyInterestRate | <code>number</code> |
| numberOfMonths | <code>number</code> |

<a name="Financial.ReturnOnInvestment"></a>

### Financial.ReturnOnInvestment(earnings, initialInvestment) ⇒ <code>number</code>
Calculates Return on Investmentr)

**Kind**: static method of <code>[Financial](#Financial)</code>

| Param | Type |
| --- | --- |
| earnings | <code>number</code> |
| initialInvestment | <code>number</code> |

<a name="Financial.RuleOf72"></a>

### Financial.RuleOf72(annualInterestRate) ⇒ <code>number</code>
Use whole number percent for this calculationney)

**Kind**: static method of <code>[Financial](#Financial)</code>

| Param | Type |
| --- | --- |
| annualInterestRate | <code>number</code> |

<a name="Financial.CashFlow"></a>

### Financial.CashFlow(income, expenses) ⇒ <code>number</code>
Calculates cash flow based on income and expenses

**Kind**: static method of <code>[Financial](#Financial)</code>

| Param | Type |
| --- | --- |
| income | <code>number</code> |
| expenses | <code>number</code> |

<a name="Financial.InflationAdjustedReturn"></a>

### Financial.InflationAdjustedReturn(investmentReturn, inflationRate) ⇒ <code>number</code>
Calculates the return of an investment after adjusted for inflation

**Kind**: static method of <code>[Financial](#Financial)</code>

| Param | Type |
| --- | --- |
| investmentReturn | <code>number</code> |
| inflationRate | <code>number</code> |

<a name="Financial.Gains"></a>

### Financial.Gains(marketPrice, purchasePrice) ⇒ <code>number</code>
Calculates Gains or losses in whole percent

**Kind**: static method of <code>[Financial](#Financial)</code>

| Param | Type |
| --- | --- |
| marketPrice | <code>number</code> |
| purchasePrice | <code>number</code> |

Financial.js is inspired by Essam Al Joubori's finance.js - http://financejs.org/
