/*!
 * name: @jswork/next-filesize
 * description: Get filesize based on filesize lib.
 * homepage: https://github.com/afeiship/next-filesize
 * version: 1.0.0
 * date: 2020-11-22 12:24:17
 * license: MIT
 */

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
    return options.trim ? res.replace(/\s+/, '') : res;
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.filesize;
  }
})();
