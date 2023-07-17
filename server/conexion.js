import mongoose from "mongoose";

const conectarDb = async ()=>{
    try {
        const conexionDB = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        const check = `Conectando a MongoDB en el server ${conexionDB.connection.host} - En el puerto ${conexionDB.connection.port}`
        console.log(check);
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}

export default conectarDb