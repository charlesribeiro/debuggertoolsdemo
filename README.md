# debuggertoolsdemo

Material for a demo for front-end debugging tools

# TL;DR

Here is a brief list of the tools to be used in this tutorial.

## Debugger for Chrome

As of late 2021, [https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome] has been deprecated, and the current approach for debugging front-end apps within Visual Studio Code is using the built-in debug feature on the left side-bar.

Just make sure to correctly edit the launch.json file inside the .vscode directory to point to the port being used for serving the project (typically for Angular apps, port 4200).

  

## Jest Runner

This will help debug our Jest tests easily straight from the Visual Studio Code IDE (i.e. including breakpoints). [https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner]

  

# How to start debugging

## Plain console.log, console.warn statements


There are some things to have in mind when trying to debug a code. The first step is usually trying to reproduce the bug.

Once it has been reproduced, the most basic way is to do a quick debug is throught adding print statements (equivalent to console.log [https://developer.mozilla.org/en-US/docs/Web/API/Console] or alert in javascript) and checking their output in the browser developer tools. Those outputs might tell you if a certain function has been called, check some variables values etc.

  

[https://developer.mozilla.org/en-US/docs/Web/API/Console/log]

  

This surely will help to some extent in finding some bugs, however, things can quickly get confusing and the output might get very hard to read. Another issue is that, as a general rule, console statements should do not be done in excess (or at all for most production code), as they have a footprint in performance.

  

## Dev tools

Google Chrome and Firefox offer very convenient debug tools (Dev Tools in the case of Google Chrome, Browsing Console for Firefox).

## Google Chrome Dev Tools

Dev tools for Chrome are easily available from Menu > More tools > Developer Tools or by Option + ⌘ + C (MAC) / Shift + CTRL + J (Linux/Windows). 
You can also change some settings (like dark mode, set network throttling profiles) on the settings panel from Dev Tools indicated by the cogwheel icon. Make sure to explore features like the Toggle Device Toolbar.

### Elements
Check this tutorial [this tutorial for css](https://developer.chrome.com/docs/devtools/css/)

  
- [https://developer.chrome.com/docs/devtools/css/#view]
   
- [https://developer.chrome.com/docs/devtools/css/#declarations]
   
- [https://developer.chrome.com/docs/devtools/css/#classes]
   
- [https://developer.chrome.com/docs/devtools/css/#pseudostates]
 
- [https://developer.chrome.com/docs/devtools/css/#box-model]

### Sources

You can check the file sources and add breakpoints straight from the sources tab. You can also long click the 'Resume script execution button', it will show additional options for debugging the current file.
Make sure to explore features like conditional breakpoints, restart frame etc.
