# Crimson-Tools

A Simple NPM toolbox for useful things

Suggestions are welcome! Please don't hesitate to contact me for ideas.

# Installation

## Global Use

To use **Crimson Tools** globally it is a simple as:

```js
npm install -g crimson-tools
```

## In Project use

first install the package with

```js
npm install crimson-tools
```

Then you simply need to require it and use the function(s):

```js
const crimsonTools = require('crimson-tools');
```

### Example

```js
// Require the Crimson Tools
const crimsonTools = require('crimson-tools');
// Get 5 proxies from France
crimsonTools.getProxy(5,"fr");
```

The `getProxy` function returns an array of proxies.

The `getProxy` function by default is logged you can always cancel logging as follows

```js
crimsonTools.getProxy(5,"fr", false);
```

# Done

 - Get certain number of proxies
 - Get proxies from specific country
 - Write the proxies to a file
 - Add the CLI interpreter
 - Add the wrapper function

![Example of progress](./res/proxyList.gif)

# CLI Information

---
Crimson Tools
---

 ```
 crimson-tools --tool type --optionalToolParameter optionalToolParameterValue
 ```

---
Tool Types:
---
 --- `help`

 --- `proxy`

 ------ `proxyNumber` = number of proxy to find eg: 5

 ------ `country` (optional) = two letter string eg: fr

---
Command examples:
---
```
 crimson-tools --tool help
 crimson-tools --tool proxy --proxyNumber 5
 crimson-tools --tool proxy --proxyNumber 5 --country fr
 ```

# Output Example

```
195.83.197.229:80
176.31.182.77:80
51.254.45.80:3128
89.38.149.154:3128
46.218.73.162:80
51.15.65.152:8080
51.15.65.152:3128
195.83.197.50:80
195.83.197.148:80
51.15.65.152:8118
```
# Github

[Contribute here to the project](https://github.com/crimson-med/Crimson-Tools)

# To Do

 - TODO: Handle if can't connect to any proxy server
 - TODO: Add concat for the file instead of overiding on each call.
 - TODO: Add more proxy websites

# Contact Me

Email: mederic.burlet@gmail.com

Discord: https://discord.gg/2DeDe2Q
