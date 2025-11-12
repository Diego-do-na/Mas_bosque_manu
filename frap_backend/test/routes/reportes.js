const express = require("express");
const router = express.Router();
const { crearReporte } = require("../controllers/reporte")

router.post("/", crearReporte);

module.exports = router;