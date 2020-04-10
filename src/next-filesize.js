(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var filesize = require('filesize');
  var fs = require('fs');

  nx.filesize = function (inFilename, inOptions) {
    var stats = fs.statSync(inFilename);
    return filesize(stats.size, inOptions);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.filesize;
  }
})();
