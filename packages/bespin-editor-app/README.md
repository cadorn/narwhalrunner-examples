
Bespin Editor Application
=========================

A port of [despin](http://github.com/past/despin).


Running the app
---------------

In the example workspace (see [here](http://github.com/cadorn/narwhalrunner-examples) for setup instructions):

    pinf build-program packages/bespin-editor-app
    nr launch --dev --program packages/bespin-editor-app

*NOTE: It currently only works if launched via Firefox. If launched as XULRunner app there is a security
exception that needs looking into. It can be avoided by loading some modules more natively with
narwhalrunner, but this refactoring has not been done yet.*
