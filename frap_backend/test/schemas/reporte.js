const { z } = require("zod");

const reporteSchema = z.object({
     fecha_hora: z.iso.datetime(),
     observaciones: z.string().optional(),
     recomendaciones: z.string().optional(),
     traslado_aceptado: z.boolean(),
     // esta bugeada esta columna numero_unidad: z.string()  
     nombre_operador: z.string().optional(),
     firma_operador: z.string().optional(),
     firma_paciente: z.string(),
     nombre_testigo: z.string().optional(),
     firma_testigo: z.string().optional(),
     //ver como trabajar con fk 
     lugar_nombre: z.string(),
     //signos_id: z.number().int(),
     //nivel_conciencia_id: z.number().int()
});

module.exports = reporteSchema;