# debuggertoolsdemo
Material for a demo for front-end debugging tools
# TL;DR
Here is a brief list of the tools to be used in this tutorial.
## Debugger for Chrome
As of late 2021, [https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome] has been deprecated, and the current approach for debugging front-end apps within Visual Studio Code is using the built-in debug feature on the left side-bar.
Just make sure to correctly edit the launch.json file inside the .vscode directory to point to the port being used for serving the project (typically for Angular apps, port 4200).

## Jest Runner
This will help debug our Jest tests easily straight from the Visual Studio Code IDE (i.e. including breakpoints). [https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner]