import mongoose from "mongoose";

const TipoDineroShema = mongoose.Schema({
    Nombre: {
        type: String,
        required: true,
        trim:true
    },
    Edad: {
        type: String,
        required: true,
        trim:true
    },
    nacionalidad: {
        type: String,
        required: true,
        trim:true
    },
    Presupuesto: {
        type: String,
        required: true,
        trim:true
    },
},
{
    timestamps: true,
})

const TipoDinero = mongoose.model("tipoDineros", TipoDineroShema)

export default TipoDinero