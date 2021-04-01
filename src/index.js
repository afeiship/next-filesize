(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var filesize = require('filesize');
  var fs = require('fs');
  var DEFAULT_OPTIONS = { trim: true, format: true };

  nx.filesize = function (inFilename, inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var stats = fs.statSync(inFilename);
    if (!options.format) return stats.size;
    var res = filesize(stats.size, inOptions);
    return options.trim ? res.replace(/\s+/, '') : res;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.filesize;
  }
})();
