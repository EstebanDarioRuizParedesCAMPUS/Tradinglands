import Dinero from "../models/dinero.js";

const obtenerDinero = async (req,res) => {
    try {
        const dinero = await Dinero.find()
        res.json(dinero)
    } catch (error) {
        console.log(error);
    }
}

const obtenerUnDinero = async (req,res) => {
    try {
        const dinero = await Dinero.findOne({_id:req.params.id})
        res.json(dinero)
    } catch (error) {
        res.status(404)
        res.send({error:"Dinero no existe"})
        console.log(error);
    }
}

const agregarDinero= async (req,res) => {
    const dinero = new Dinero(req.body)
    try {
        const nuevadinero = await dinero.save()
        res.json(nuevadinero)
    } catch (error) {
        console.log(error);
    }
}

const borrarDinero= async (req,res) => {
    try {
        await Dinero.deleteOne({_id:req.params.id})
        res.status(204).send()
    } catch (error) {
        res.status(404)
        res.send({error:"Dinero no existe"})
        console.log(error);
    }
}

const actualizarDinero= async (req,res) => {
    try {
        const dinero = await Dinero.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        res.json(dinero)
    } catch (error) {
        console.log(error);
    }
}

export {obtenerDinero,
    obtenerUnDinero,
    agregarDinero,
    borrarDinero,
    actualizarDinero}