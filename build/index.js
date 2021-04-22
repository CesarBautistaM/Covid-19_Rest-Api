"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import './database'
var PORT = process.env.PORT || 3000;

_app["default"].listen(PORT, function (err) {
  if (err) throw err;
  console.log("%c Server running", "color: green");
});

console.log('Server listen on port', PORT);