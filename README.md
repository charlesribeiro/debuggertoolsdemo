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
Once it has been reproduced, the most basic way is to do a quick debug is throught adding print statements (equivalent to console.log or alert in javascript) and checking their output in the browser developer tools. Those outputs might tell you if a certain function has been called, check some variables values etc.

[https://developer.mozilla.org/en-US/docs/Web/API/Console/log]

This surely will help to some extent in finding some bugs, however, things can quickly get confusing and the output might get very hard to read. Another issue is that, as a general rule, console statements should do not be done in excess (or at all for most production code), as they have a footprint in performance.

## Dev tools

