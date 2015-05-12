var path = require("path");

module.exports = function toNestedObj(files, opts) {
  var out = {};
  opts = opts || {};

  Object.keys(files).forEach(function(filepath) {
    var tmp = out;
    var parts = filepath.split(path.sep);
    parts.forEach(function(part, idx) {
      if(idx === parts.length -1) {
        if(opts.removeExt) {
          part = part.replace(/\.[^.]+/, "");
        }

        tmp[part] = files[filepath];
      } else {
        tmp = (tmp[part] = tmp[part] || {});
      }
    });
  });
  return out;
};
