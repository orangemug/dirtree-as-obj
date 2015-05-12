var assert = require("assert");
var dirtreeAsObj = require("../");

var files = {
  "some/other/path/file1.txt": 1,
  "some/path/file1.txt": 2,
  "some/path/file2.txt": 3,
  "totally/diff/path.txt": 4
};


describe("dirtree-as-obj", function() {
  it("turn a dirtree as an object", function() {
    var out = dirtreeAsObj(files);
    assert.deepEqual(out, {
      "some": {
        "path": {
          "file1.txt": 2,
          "file2.txt": 3
        },
        "other": {
          "path": {
            "file1.txt": 1
          }
        }
      },
      "totally": {
        "diff": {
          "path.txt": 4
        }
      }
    })
  });

  it("turn a dirtree as an object (without ext)", function() {
    var out = dirtreeAsObj(files, {removeExt: true});
    assert.deepEqual(out, {
      "some": {
        "path": {
          "file1": 2,
          "file2": 3
        },
        "other": {
          "path": {
            "file1": 1
          }
        }
      },
      "totally": {
        "diff": {
          "path": 4
        }
      }
    })
  })
});
