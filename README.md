# Crimson-Tools

A Simple NPM toolbox for useful things

remember to use: `npm install && npm link`
# Done

 - Get certain number of proxies
 - Get proxies from specific country
 - Write the proxies to a file
 - Add the CLI interpreter

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

 - TODO: Handle if cant connect to any proxy server

# Contact Me

Email: mederic.burlet@gmail.com

Discord: https://discord.gg/2DeDe2Q
