### Installation

```shell
  npm install financialjs --save
```
**or**

-   Download or fork the repository from GitHub.
-   Place 'financial.js' in your project and include it in your application.

### Example Usage

```js
  
  var Financial = require('financialjs');
  
  // Calculate Compound Interest
  // Example: account with a $1500 original balance earns 12%/year
  // and is compounded monthly (1%/month) for 12 months
  Financial.CompoundInterest(1500, 1, 12);
  // => 190.24
```

### Notes
In most cases, Financial.js allows for both decimals and whole number percentages for functions that require 'rate' parameters
```js
  Financial.CompoundInterest(1500, 1, 12); // => 190.24
  Financial.CompoundInterest(1500, 0.01, 12); // => 190.24 
```

Financial.js is inspired by Essam Al Joubori's finance.js - http://financejs.org/
