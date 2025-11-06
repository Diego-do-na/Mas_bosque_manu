const { z } = require("zod");

const paramedicoSchema = z.object({
    nombre: z.string().max(50),
    correoInst: z.email().max(50),
    correoEsc: z.email().max(50),
    usuario: z.string().min(8).max(50),
    contraseña: z.string().min(8),
    firma_paramedico: z.string()
});

module.exports = paramedicoSchema;