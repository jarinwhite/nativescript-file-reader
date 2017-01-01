"use strict";
var fs = require('file-system');
var documents = fs.knownFolders.currentApp();
var FileReader = (function () {
    function FileReader() {
    }
    FileReader.readJSON = function (path) {
        var jsonFile = documents.getFile(path);
        return new Promise(function (resolve, reject) {
            jsonFile.readText().then(function (content) {
                var data = JSON.parse(content);
                resolve(data);
            })["catch"](function (err) {
                reject(err);
            });
        });
    };
    return FileReader;
}());
exports.FileReader = FileReader;
