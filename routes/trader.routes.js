import express from "express";

const router = express.Router()

import {obtenerTraders,obtenerUnaTrader,agregarTrader,borrarTrader,actualizarTrader} from "../controllers/trader.controller.js"

router.get("/all",obtenerTraders )
router.get("seatch/:id", obtenerUnaTrader)
router.post("/add", agregarTrader)
router.delete("/del/:id",borrarTrader )
router.patch("/upd/:id", actualizarTrader )

export default router