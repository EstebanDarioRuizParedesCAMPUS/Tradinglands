import mongoose from "mongoose";

const TraderShema = mongoose.Schema({
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

const Trader = mongoose.model("traders", TraderShema)

export default Trader