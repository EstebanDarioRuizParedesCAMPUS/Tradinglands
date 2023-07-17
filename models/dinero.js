import mongoose from "mongoose";

const DineroShema = mongoose.Schema({
    CryptoMoenda: {
        type: String,
        require: true,
        trim:true
    },
    DineroFiat: {
        type: String,
        require: true,
        trim:true
    },
    Valoracion: {
        type: Number,
        require: true,
        trim:true
    },
    Inflacion: {
        type: Number,
        require: true,
        trim:true
    },
},
{
    timestamps: true,
})

const Dinero = mongoose.model("dineros", DineroShema)

export default Dinero
