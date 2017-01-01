"use strict";
var fs = require('file-system');
var documents = fs.knownFolders.currentApp();
var JsonReader = (function () {
    function JsonReader() {
    }
    JsonReader.readJSON = function (path) {
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
    return JsonReader;
}());

module.exports = JsonReader;
