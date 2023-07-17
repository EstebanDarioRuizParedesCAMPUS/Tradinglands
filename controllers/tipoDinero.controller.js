import TipoDinero from "../models/TipoDinero.js";

const obtenerTipoDinero = async (req,res) => {
    try {
        const tipoDinero = await TipoDinero.find()
        res.json(tipoDinero)
    } catch (error) {
        console.log(error);
    }
}

const obtenerUnaTipoDinero = async (req,res) => {
    try {
        const tipoDinero = await TipoDinero.findOne({_id:req.params.id})
        res.json(tipoDinero)
    } catch (error) {
        res.status(404)
        res.send({error:"Tipo de Dinero no existe"})
        console.log(error);
    }
}

const agregarTipoDinero= async (req,res) => {
    const tipoDinero = new TipoDinero(req.body)
    try {
        const nuevaTipodinero = await tipoDinero.save()
        res.json(nuevaTipodinero)
    } catch (error) {
        console.log(error);
    }
}

const borrarTipoDinero= async (req,res) => {
    try {
        await TipoDinero.deleteOne({_id:req.params.id})
        res.status(204).send()
    } catch (error) {
        res.status(404)
        res.send({error:"Tipo de Dinero no existe"})
        console.log(error);
    }
}

const actualizarTipoDinero= async (req,res) => {
    try {
        const tipoDinero = await TipoDinero.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        res.json(tipoDinero)
    } catch (error) {
        console.log(error);
    }
}

export {obtenerTipoDinero,
    obtenerUnaTipoDinero,
    agregarTipoDinero,
    borrarTipoDinero,
    actualizarTipoDinero}