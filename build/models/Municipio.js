"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var MunicipioSchema = new _mongoose.Schema({
  nombre: {
    type: String,
    unique: true,
    required: true
  },
  codigo_DIVIPOLA: {
    type: String,
    unique: true,
    required: true
  }
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)('Municipio', MunicipioSchema);

exports["default"] = _default;