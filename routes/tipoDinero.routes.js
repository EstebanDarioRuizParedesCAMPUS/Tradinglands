import express from "express";

const router = express.Router()

import {obtenerTipoDinero,obtenerUnaTipoDinero,agregarTipoDinero,borrarTipoDinero,actualizarTipoDinero} from "../controllers/tipoDinero.controller.js"

router.get("/all", obtenerTipoDinero)
router.get("seatch/:id", obtenerUnaTipoDinero)
router.post("/add", agregarTipoDinero)
router.delete("/del/:id", borrarTipoDinero)
router.patch("/upd/:id", actualizarTipoDinero)

export default router