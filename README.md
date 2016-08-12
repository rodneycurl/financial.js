# Accountant.js
A lightweight financial calculator library - https://ju66ernaut.github.io/accountant.js/


### Installation

```shell
  npm install accountantjs --save
```
**or**

-   Download or fork the repository from GitHub.
-   Place 'accountant.js' in your project and include it in your application.

### Example Usage

```js
  
  var Accountant = require('accountantjs');
  
  // Calculate Compound Interest
  // Example: account with a $1500 original balance earns 12%/year
  // and is compounded monthly (1%/month) for 12 months
  Accountant.CompoundInterest(1500, 1, 12);
  // => 190.24
```

### Notes
In most cases, Accountant.js allows for both decimals and whole number percentages for functions that require 'rate' parameters
```js
  Accountant.CompoundInterest(1500, 1, 12); // => 190.24
  Accountant.CompoundInterest(1500, 0.01, 12); // => 190.24 
```

Accountant.js is inspired by Essam Al Joubori's finance.js - http://financejs.org/
