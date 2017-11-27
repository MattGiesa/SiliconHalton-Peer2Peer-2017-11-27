# Silicon Halton - Peer2Peer - 2017-11-27

## TypeScript for JavaScript Beginners
### How TypeScript can focus your learning and increase your confidence in your code
Learning something new can be overwhelming, especially if that thing is [JavaScript in 2016](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f). It's understandable to think that adding yet another new thing would only delay the learning process. But I propose that learning TypeScript will actually get you comfortable with JavaScript faster.

1. TypeScript is a superset of JavaScript. Learning TypeScript _is_ learning JavaScript.
2. Compile time warnings/errors gives you faster feedback on syntax errors, making it faster to learn lessons.
3. You only have to worry about the latest spec, and let TypeScript worry about backwards compatibility.
4. More useful (almost magical) intellisense allows you to move a lot faster and google a lot less. 

### Getting Started
In large, production quality applications that use TypeScript or any transpiled language you'll need to have a build process that can generate JavaScript from your source files. In some cases these build steps can become complicated and confusing, especially if you're new to JavaScript in the first place.

In a simple application or prototype, if you don't need modules and exports, you can skip all of this and leverage TypeScript's compiler settings to get what you need.


### Steps to start writing TypeScript in a simple application:
1. Make sure you have node/npm installed
2. Install TypeScript globally
    ```
        npm install typescript -g
    ```
3. Navigate to your project folder in the command prompt
4. Initialize TypeScript
    ```
        tsc --init
    ```
    * this will create a tsconfig.json file in your project root
    * the tsconfig.json contains all your typescript settings
5. Set the outDir or outFile option in `tsconfig.json` so you can keep the generated JavaScript separate from your source
    * I prefer to keep the generated files separate for a few reasons:
      1. once you're familiar with how TypeScript generates JavaScript the generated files become noise
      2. it's easier to delete all generated files when they're separate from your source files
      3. it's easier to deploy only the generated files to production if they are sectioned off
    * outDir moves all files to the specified folder
    * outFile concatenates all files into a single file, but be careful with this because the order isn't guaranteed to be what your code requires
99. Start writing code!