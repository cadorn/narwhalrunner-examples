
Bespin Editor Application
=========================

A port of [despin](http://github.com/past/despin).


Running the app
---------------

The following instructions assume you have a testing playground setup as described [here](http://github.com/cadorn/narwhalrunner-examples).

    // Install the app
    tusk package install http://github.com/cadorn/narwhalrunner-examples/raw/master/catalog.json bespin-editor-app
    
    // Build the app
    tusk package --package bespin-editor-app build
    
    // Launch the app
    nr launch --dev --app firefox --package bespin-editor-app
    
