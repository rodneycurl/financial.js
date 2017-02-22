# Financial.js
A lightweight financial calculator library - https://ju66ernaut.github.io/financial.js/


### Installation

```shell
  npm install financialjs --save
```
**or**

-   Download or fork the repository from GitHub.
-   Place 'financial.js' in your project and include it in your application.

### Example Usage

```js
  
  const Financial = require('financialjs');

  // Calculate Mortgage Payment  
  // A mortgage with a principal balance of 350000 paid over 360 months (30 years) at an interest rate of 4%     
  Financial.Mortgage(350000, 4, 360); //(principal, annualInterestRate, numberOfPeriods)
  // => 1670.953534129085
  
  // Calculate Compound Interest
  // An account with a $1500 original balance earns 12%/year and is compounded monthly (1%/month) for 12 months
  Financial.CompoundInterest(1500, 1, 12); //(principal, ratePerPeriod, numberOfPeriods)
  // => 190.23754519795466
  
```

### Notes
In most cases, Financial.js allows for both decimal and whole number percentages for functions that require 'rate' parameters
```js
  Financial.CompoundInterest(1500, 1, 12); // => 190.24
  Financial.CompoundInterest(1500, 0.01, 12); // => 190.24 
```

Financial.js is inspired by Essam Al Joubori's finance.js - http://financejs.org/
