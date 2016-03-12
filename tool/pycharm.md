---
layout: tool
title: PyCharm
type: IDE
languages: python
platforms: Windows, OS X
description: Python code editor and debugger with linting and support for many third-party libraries
homepage: https://www.jetbrains.com/pycharm
company: JetBrains
price: Free
---

PyCharm is an IDE for Python development which includes debugging, on-the-fly syntax checking and linting for Python code and popular thid-party libraries.

## Features

### Code Editing
The code editor is powerful with error checking and linting support for the full Python language.  By default it follows the pep8 standards but the ability to add plugins makes it easy to change styling.  Highlighting can be customised to suit the individual user and is a lot less error prone that that of IDLE.  Any syntax errors found or errors expected at run time are shown in the code window with highlighting of rows given in the scroll bar as well as a code health summary at the top of the screen.

The code editor has intelligent completion built in so it can find available objects, functions and variables when typing, whilst also understanding the significance of language conventions such as `_` indicating a private function or variable.  Any variable names which are allowed but not reccomended or that could cause confusion are warned.

It has a symbolic understanding of folders, such as ones containing templates, resources or unrelated code, and so provides appropriate hints when code or files have to be referenced.

### Debugging
Debugging code is very effective in PyCharm, with the integrated debugger also acting as the console.  If the code is paused or encounters an error then a full call stack is available with the ability to interrogate variables.  Debugging can be started with custom command line parameters to simulate real start-up conditions

### Testing

### Version Control
Support for Git is built in.  Your default git installation is used by default so remotes can be pushed to and pulled from and all commits are tagged with your usual information.  Diff and Merge are available from within the application, but third-party clients can also be used.  Changes are noted in the colour of file names in the file tree and their icon.

### TODO
A convenient task list is built up automatically from any comments in code that begin with `# TODO` or another common variant.

## Third-Party plugins
Integrated into the IDE is a list of third-party plugins that can be quickly added.  If working with a file type not native to PyCharm, such as .gitignore, you can add a plugin which will provide enhanced functionality, such as automatic generation based on language and tools.  Reccomendations for free plugins are sometimes shown within the IDE whilst working.

## Availability

### Community Edition
The Community Edition is a free version of PyCharm with some features left out, such as Web Development and Frameworks, and support for remote development.  Registration is required but can otherwise be easily downloaded from the JetBrains website

### Enterprise Edition
The Enterprise Edition is fully featured and comes with a 30-day free trial.  The Community and Enterprise editions are distinct installs, so an enterprise install won't automatically revert after the trial but instead requires uninstalling.  Similarly, to start a trial you need to download the Enterprise Edition from the JetBrains website.  Licencing is on a subscription basis, but once you have been using a version of PyCharm for 12 months you recieve a "Perpetual Fallback Licence" which gives you access to an identified verion of the software even if you cancel the subscription.