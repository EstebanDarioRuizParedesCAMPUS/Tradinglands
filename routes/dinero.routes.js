import express from "express";

const router = express.Router()

import {obtenerDinero,obtenerUnDinero,agregarDinero,borrarDinero,actualizarDinero} from "../controllers/dinero.controller.js"

router.get("/all",obtenerDinero )
router.get("seatch/:id", obtenerUnDinero)
router.post("/add", agregarDinero)
router.delete("/del/:id", borrarDinero)
router.patch("/upd/:id", actualizarDinero)

export default router