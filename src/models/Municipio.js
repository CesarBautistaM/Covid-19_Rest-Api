import { Schema, model } from 'mongoose'

const MunicipioSchema = new Schema({
    nombre: {
        type: String,
        unique: true,
        required: true,
    },
    codigo_DIVIPOLA: {
        type: String,
        unique: true,
        required: true,
    }
}, {
    timestamps: true
})

export default model('Municipio', MunicipioSchema)