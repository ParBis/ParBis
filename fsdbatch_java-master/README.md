# fsdbatch_java

    UI
        HTML (Structure)
            - Websocket
            - Fetch API
            - Local storage
            - App Cache
        CSS (Presentation)
            - CSS 3 Transitions
            - SVG
        JS  (Behavior)
            - Data types
                Loosely typed language
                Functions are treated as objects
                Functions can be passed as arguments
                Function can be retured from within a function
                Function scopes

            Ist Phase - Create scope
                Outer Fn: [x: undefined , inner: undefined]
                Inner Fn: [x: undefined]

            IInd Phase - Execution
                Outer Fn: [x: 2 , inner: fn]
                Inner Fn: [x: undefined]
            
            - Async flow using setTimeout
            - Callbacks in Javascript
            - Callbacks vs Promises - Promises have come up as substitute to Callbacks, you dont have to expose functionality
            http://es6-features.org/#PromiseUsage
            - ECMA Script (ES) 
                ES5, ES6, ES7

    Exercise: Reverse a string
        var name = "Puneet"
        function to reverse the string
        output --> "teenUp"

        capitalize the first letter of a sentence
        "its a rainy Evening here in DELhi"
        -->
        "Its a rainy evening here in delhi"

        JQuery

        Angular 5
            Typescript
    
    Steps to install http-server
        1. NodeJS installed
        2. npm install -g http-server

    Promise based Ajax API's
        1. Fetch (HTML 5 feature supported by all new browsers)
        2. $.ajax (jquery library and will run on all the browsers)

    JQuery: It is a library of common reusable functions in Javascript

    Assignment 1: Load and HTML table using Ajax. Use the employees.json. Table contains following columns
    "id"
    "first_name"
    "last_name"
    "email"
    "gender"
    "ip_address"


    Writing more and more Javascript is essential to utlize client's (mobile/desktop) resources

    Javascript makes our code cubersome, not easy to maintain. For even small things we need to write a lot of Javascipt

    Is there a solution?

    Frameworks come to rescue, Angular, React, Ember...

    For a dynamic UI, what is your preference
    1. Javascript: Low level programming language.
    2. JQuery: Gives you the commonly used functions, but still its a small library.
    3. Angular: Framework, where its gives you everything needed go create a dynamic UI.

    Assignment 2. Create a clock that ticks every 1 second using JQuery

    Assignment 3. Practice grid layout and test for different resolution




    Why Angular??

    Steps for creating first angular project using CLI

    Visual Code plugin: Angular 5 and TypeScript/HTML VS Code Snippets by Dan Wahlin


    1. Check node installation : node -v & npm -v
    2. install as a package angular-cli: npm install -g @angular/cli
        - Angular Cli is command line tool for getting a dummy/scaffolding project
    3. ng new your-project-name
    -- unfinished.. boz of error on my machine
    4. ng serve
    5. ng g component feature/new-cmp
    


    Steps to manually create Angular project without CLI

    1. npm init to create package.json(contain depedencies)
    2. npm install -- install dependencies in package.json
    3. Create 3 files
        a. main.ts -- To bootstrap or start the project
        b. app.module.ts -- To wrap everything in a package
        c. app.component.ts -- Component a unit in Angular
    4. Transcompile
        a. tsc -w
        b. tsconfig.json -- config file for transcompile instructions
    5. index.html --> html page and contains scripts to dynamically load .js files using SystemJS (library to dynamically load JS files)
    6. systemjs.config.js (configuration for  SystemJS library to load all the files)


    Android -> Playstore to install other apps
    Node -> Npm to install other package/libs

    How do you run this setup

    1. On command prompt go the directory cd "fsdbatch_java/01UILAYER/04angular/01firstangular"
    2. npm install -> see node_modules in the directory
    3. npm run compile, http-server


    Typescript


    Angular
    
        - Create Component
        - Component is always part of a module
        - Boostrap sequence --> Module -> One component
        - Nested Component
        - Data Bindings
            - Interpolation {{ }}: Read a value from the class into the component
            - Property Binding [ ]: Read as attributes into the component
            - Event Binding () : Read it outside the component or component's output
            - Two-way binding [( )]


        Localstorage to work
            1. Install a library:  npm install --save angular-webstorage-service
            2. Import the module for the library
            3. Dependency Inject the StorageService to set and get values
            4. Change from Session storage(temprorary, close d tab) -> LocalStorage




