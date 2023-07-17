import express from "express"
import cors from "cors"
import AccionesRouter from "../routes/acciones.routes.js"
import DineroRouter from "../routes/dinero.routes.js"
import TipoDineroRrouter from "../routes/tipoDinero.routes.js"
import TraderRouter from "../routes/trader.routes.js"
import conectarDb from "./conexion.js"

class Server{
    
    constructor(){
        this.app = express()
        this.app.use(express.json())
        this.port = process.env.PORT
        this.userPath = '/API'
        this.middleware()
        this.routes()
    }

    middleware(){
        this.app.use(cors())
        this.app.use(express.static('Public'))
    }

    routes(){
        this.app.use(`${this.userPath}/acciones`, AccionesRouter)
        this.app.use(`${this.userPath}/dinero`, DineroRouter)
        this.app.use(`${this.userPath}/tipoDinero`, TipoDineroRrouter)
        this.app.use(`${this.userPath}/trader`, TraderRouter)
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server running on port ${this.port}`);
        })
    }

    databaseCnx(){
        conectarDb()
    }

}

export default Server