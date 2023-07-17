import mongoose from "mongoose";

const accionesShema = mongoose.Schema({
    porcentajeAccion: {
        type: String,
        require: true,
        trim:true,
    },
    valorAccion: {
        type: String,
        require:true,
        trim:true,
    },
    tipoAccion :{
        type: String,
        require:true,
        trim:true,  
    }
},
{
    timestamps: true,
})

const Acciones = mongoose.model("acciones", accionesShema)

export default Acciones


