"use strict";
var fs = require('file-system');
var JsonReader = (function () {
    function JsonReader() {
    }
    JsonReader.readJSON = function (path) {
        var jsonFile = fs.File.fromPath(path);
        return new Promise(function (resolve, reject) {
            jsonFile.readText().then(function (content) {
                var data = JSON.parse(content);
                resolve(data);
            })["catch"](function (err) {
                reject(err);
            });
        });
    };
    return JsonReader;
}());

module.exports = JsonReader;
