import mongoose from "mongoose";

const DineroShema = mongoose.Schema({
    CryptoMoenda: {
        type: String,
        required: true,
        trim:true
    },
    DineroFiat: {
        type: String,
        required: true,
        trim:true
    },
    Valoracion: {
        type: Number,
        required: true,
        trim:true
    },
    Inflacion: {
        type: Number,
        required: true,
        trim:true
    },
},
{
    timestamps: true,
})

const Dinero = mongoose.model("dineros", DineroShema)

export default Dinero
