"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _process$env = process.env,
    MONGODB_HOST = _process$env.MONGODB_HOST,
    MONGODB_DATABASE = _process$env.MONGODB_DATABASE,
    MONGODB_PASS = _process$env.MONGODB_PASS,
    MONGODB_USER = _process$env.MONGODB_USER;
var MONGODB_URI = "mongodb://".concat(MONGODB_USER, ":").concat(MONGODB_PASS).concat(MONGODB_HOST, "/").concat(MONGODB_DATABASE);

_mongoose["default"].connect(MONGODB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true
}).then(function (db) {
  return console.log("Mongo conected");
})["catch"](function (error) {
  return console.log(error);
});