
var APP = require("app", "nr-common").getApp()


exports.main = function(args) {

    APP.getChrome().getWindow().open(APP.getContentBaseUrl()+"/editorWindow.xul",
                            "editor-window",
                            "chrome,left=200,top=200,resizable=yes,scrollbars=no,status=no");
        
    // notify NarwhalRunner that application is loaded    
    APP.started();

}
