
var CHROME = require("chrome", "nr-common");
var APP = require("app", "nr-common");


exports.main = function(args) {

    CHROME.getWindow().open("narwhalrunner://"+APP.getApp().getInternalName()+"/"+APP.getApp().getPackageName()+"/content/editorWindow.xul",
                            "editor-window",
                            "chrome,left=200,top=200,resizable=yes,scrollbars=no,status=no");
        
    // notify NarwhalRunner that application is loaded    
    APP.getApp().started();

}
