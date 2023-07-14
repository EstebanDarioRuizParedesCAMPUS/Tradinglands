import express from "express";

const router = express.Router()

import {obtenerAcciones,obtenerUnaAccion,agregarAccion,borrarAccion,actualizarAccion} from "../controllers/acciones.controller.js"

router.get("/all", obtenerAcciones)
router.get("seatch/:id", obtenerUnaAccion)
router.post("/add", agregarAccion)
router.delete("/del/:id", borrarAccion)
router.patch("/upd/:id", actualizarAccion)

export default router