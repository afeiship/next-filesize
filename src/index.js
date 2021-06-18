(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var filesize = require('filesize');
  var fs = require('fs');
  var DEFAULT_OPTIONS = { trim: true };

  nx.filesize = function (inFilename, inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var stats = fs.statSync(inFilename);
    var res = filesize(stats.size, inOptions);
    var sizeOf = options.trim ? res.replace(/\s+/, '') : res;
    return { size: stats.size, sizeOf };
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.filesize;
  }
})();
