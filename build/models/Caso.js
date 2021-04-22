"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var CasoSchema = new _mongoose.Schema({
  Caso: {
    type: String
  },
  Departamento: {
    type: _mongoose.Schema.ObjectId,
    ref: "Departamento"
  },
  Ciudad_municipio: {
    type: String
  },
  Edad: {
    type: String
  },
  unidad_medida: {
    type: String
  },
  Sexo: {
    type: String
  },
  Fuente_tipo_contagio: {
    type: String
  },
  Estado: {
    type: String
  },
  Recuperado: {
    type: String
  },
  Fecha_inicio_sintomas: {
    type: String
  },
  Fecha_muerte: {
    type: String
  },
  Fecha_diagnostico: {
    type: String
  },
  Fecha_recuperado: {
    type: String
  },
  Tipo_recuperacion: {
    type: String
  },
  per_etn_: {
    type: String
  }
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)('Caso', CasoSchema);

exports["default"] = _default;