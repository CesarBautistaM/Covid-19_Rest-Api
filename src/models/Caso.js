import { Schema, model } from 'mongoose'

const CasoSchema = new Schema({
    Caso: {
        type: String,
    },
    Departamento: {
        type: Schema.ObjectId,
        ref: "Departamento",
    },
    Ciudad_municipio: {
        type: String,
    },
    Edad: {
        type: String,
    },
    unidad_medida: {
        type: String,
    },
    Sexo: {
        type: String,
    },
    Fuente_tipo_contagio: {
        type: String,
    },
    Estado: {
        type: String,
    },
    Recuperado: {
        type: String,
    },
    Fecha_inicio_sintomas: {
        type: String,
    },
    Fecha_muerte: {
        type: String,
    },
    Fecha_diagnostico: {
        type: String,
    },
    Fecha_recuperado: {
        type: String,
    },
    Tipo_recuperacion: {
        type: String,
    },
    per_etn_: {
        type: String,
    }
}, {
    timestamps: true
})

export default model('Caso', CasoSchema)