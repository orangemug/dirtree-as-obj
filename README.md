# dirtree-as-obj
[![Build Status](https://travis-ci.org/orangemug/dirtree-as-obj.svg?branch=master)](https://travis-ci.org/orangemug/dirtree-as-obj)
[![Code Climate](https://codeclimate.com/github/orangemug/dirtree-as-obj/badges/gpa.svg)](https://codeclimate.com/github/orangemug/dirtree-as-obj)

Turns an object of directory keys into a nested object

    dirtreeAsObj({
      "some/path/file2.txt": "contents1",
      "some/other/path/file1.txt": "contents2"
    })

Becomes

    {
      "some": {
        "path": {
          "file1.txt": "contents1"
        },
        "other": {
          "path": {
            "file2.txt": "contents2"
          }
        }
      }
    }

Remove the file extensions with `{removeExt: true}`


## License
MIT
