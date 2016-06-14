# once-on-transition-end

[![NPM version][npm-image]][npm-url]

> A higher order function that provides a timeout to the `transitionEnd` event


## Install

```
$ npm install --save once-on-transition-end
```


## How to use

```javascript
import onceOnTransitionEnd from 'once-on-transition-end';

const element = document.getElementById('foo'); // the DOM element
const callback = function() { } // the function to invoke when the transition is done or after the timeout, whatever happens first
const timeout = 1000; // the timeout

onceOnTransitionEnd(element, callback, timeout);
```


## License

MIT © [Jonathan Persson](https://github.com/jonathanp)

[npm-url]: https://npmjs.org/package/once-on-transition-end
[npm-image]: https://badge.fury.io/js/once-on-transition-end.svg