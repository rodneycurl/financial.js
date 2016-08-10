# accountant.js
A JavaScript library for calculations related to all things money


### Installation

```shell
  npm install accountantjs --save
```
**or**

- Download or fork the repository from GitHub.
- Place 'accountant.js' in your project and include it in your application.

### Example Usage

```js
  var Accountant = require('accountantjs');
  var acc = new Accountant();
  
  // Calculate Compound Interest
  // Example: account with a $1500 original balance earns 12%/year
  // and is compounded monthly (1%/month) for 12 months
  acc.CompoundInterest(1500, 1, 12);
  // => 190.24
```

### Notes
Accountant.js allows for both decimals and whole number percentages for functions that require 'rate' parameters
```js
  acc.CompoundInterest(1500, 1, 12); // => 190.24
  acc.CompoundInterest(1500, 0.01, 12); // => 190.24 
```
