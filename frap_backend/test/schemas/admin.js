const { z } = require("zod");

const adminSchema = z.object({
    usuario: z.string(),
    contraseña: z.string(),
    correo: z.email()
}); 

module.exports = adminSchema;