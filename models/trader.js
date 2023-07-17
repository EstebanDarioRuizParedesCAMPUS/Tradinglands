import mongoose from "mongoose";

const TraderShema = mongoose.Schema({
    Nombre: {
        type: String,
        require: true,
        trim:true
    },
    Edad: {
        type: String,
        require: true,
        trim:true
    },
    nacionalidad: {
        type: String,
        require: true,
        trim:true
    },
    Presupuesto: {
        type: String,
        require: true,
        trim:true
    },
},
{
    timestamps: true,
})

const Trader = mongoose.model("traders", TraderShema)

export default Trader