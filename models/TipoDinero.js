import mongoose from "mongoose";

const TipoDineroShema = mongoose.Schema({
    dineroFiat: {
        type: String,
        required: true,
        trim:true
    },
    CryptoDinero: {
        type: String,
        required: true,
        trim:true
    }
},
{
    timestamps: true,
})

const TipoDinero = mongoose.model("tipoDineros", TipoDineroShema)

export default TipoDinero