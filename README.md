# remove-empty-lines [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/remove-empty-lines.svg)](https://www.npmjs.com/package/remove-empty-lines) [![Downloads](https://img.shields.io/npm/dt/remove-empty-lines.svg)](https://www.npmjs.com/package/remove-empty-lines) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Remove empty lines from a string.

## :cloud: Installation
    
```sh
$ npm i --save remove-empty-lines
```

            
## :clipboard: Example

        

```js
const removeEmptyLines = require("remove-empty-lines");

console.log(removeEmptyLines(
    `Hello

World!

  **   **

  **   **

     -

*         *

 *********`
));
// =>
// Hello
// World!
//   **   **
//   **   **
//      -
// *         *
//  *********
```
    
## :memo: Documentation
        
### `removeEmptyLines(a, b)`
Remove empty lines from a string.

#### Params
- **Number** `a`: Param descrpition.
- **Number** `b`: Param descrpition.

#### Return
- **Number** Return description.

        
## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :scroll: License
    
[MIT][license] © [Ionică Bizău][website]
    
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md