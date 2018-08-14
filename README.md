# Color Logger

---

Color Logger is a simple wrapper for Chalk.

# Usage
---
To start using color logger in your app, first install it using npm, then require it,
```js const cl = require('colorlogger');```

### Error Messages
Error messages can be logged using ```js cl.error('Message');```
### Info Messages
Error messages can be logged using ```js cl.info('Message');```
### Debug Messages
Error messages can be logged using ```js cl.debug('Message');```
### Warn Messages
Error messages can be logged using ```js cl.Warn('Message');```
### Silly Messages
Error messages can be logged using ```js cl.Silly('Message');```
### Hex Coloring
Color logger also supports using hex to color messages with custom colors.
```js cl.hex("Hex Code", "Message");```
**Here, the hex code must be a string!**
### RGB Messages
Color logger also supports using RGB values to color messages with custom colors.
```js cl.hex(R value,G value ,B value , "Message");```
**Here, the number must be a number and not a string!**

# Contributing
---
Feel free to contribute to this project and make it better!
