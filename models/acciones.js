import mongoose from "mongoose";

const accionesShema = mongoose.Schema({
    tipoAccion: {
        type: String,
        required: true,
        trim:true
    },
    valorAccion: {
        type: String,
        required: true,
        trim:true
    },
    porcentajeAccion: {
        type: String,
        required: true,
        trim:true
    },
},
{
    timestamps: true,
})

const Acciones = mongoose.model("acciones", accionesShema)

export default Acciones


