import Trader from "../models/trader.js";

const obtenerTraders = async (req,res) => {
    try {
        const rtrader = await Trader.find()
        res.json(rtrader)
    } catch (error) {
        console.log(error);
    }
}

const obtenerUnaTrader = async (req,res) => {
    try {
        const rtrader = await Trader.findOne({_id:req.params.id})
        res.json(rtrader)
    } catch (error) {
        res.status(404)
        res.send({error:"Trader no existe"})
        console.log(error);
    }
}

const agregarTrader = async (req,res) => {
    const rtrader = new Trader(req.body)
    try {
        const nuevartrader = await rtrader.save()
        res.json(nuevartrader)
    } catch (error) {
        console.log(error);
    }
}

const borrarTrader = async (req,res) => {
    try {
        await Trader.deleteOne({_id:req.params.id})
        res.status(204).send()
    } catch (error) {
        res.status(404)
        res.send({error:"Trader no existe"})
        console.log(error);
    }
}

const actualizarTrader = async (req,res) => {
    try {
        const accion = await Trader.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        res.json(accion)
    } catch (error) {
        console.log(error);
    }
}

export {obtenerTraders,
    obtenerUnaTrader,
    agregarTrader,
    borrarTrader,
    actualizarTrader}