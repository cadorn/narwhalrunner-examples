function Editor(filename) {
  if (!filename)
    throw new Error("filename must be supplied.");
  this.filename = filename;
}

Editor.prototype = {
  CHARSET: 'utf-8',

  _component: null,

  get fullPath() {
    return FileIO.open(this.filename);
  },

  get url() {
    return FileIO.path(this.fullPath);
  },

  get extension() {
    var i = this.filename.lastIndexOf('.');
    if (i === -1)
      return "js";
    return this.filename.substring(i+1, this.filename.length);
  },

  initUI: function (divId, window, prefs) {
    // Loads and configures the objects that the editor needs
    this._component = new bespin.editor.Component(
        divId,
        {language: this.extension,
         loadfromdiv: false,
         set: {
           autoindent: prefs.autoindent,
           codecomplete: prefs.codecomplete,
           highlightline: prefs.highlightline,
           smartmove: prefs.smartmove,
           strictlines: prefs.strictlines,
           syntaxcheck: prefs.syntaxcheck,
           tabsize: prefs.tabsize,
           tabmode: prefs.tabmode,
           tabshowspace: prefs.tabshowspace,
           tabarrow: prefs.tabarrow,
           theme: prefs.theme,
           trimonsave: prefs.trimonsave
         }
        });
    this._component.setContent(this.load());
  },

  load: function () {
    var file = this.fullPath;
    if (!file.exists()) {
      this.save();
      return "";
    }
    return FileIO.read(file, this.CHARSET);
  },

  save: function () {
    FileIO.write(this.fullPath, this._component.getContent(), 'w', this.CHARSET);
  },
  
  saveAs: function (path) {    
    var newFile = FileIO.open(path);
    FileIO.write(newFile, this._component.getContent(), 'w', this.CHARSET);
    this.filename = path;
  }
};
