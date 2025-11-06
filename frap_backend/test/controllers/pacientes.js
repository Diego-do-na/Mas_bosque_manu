const db = require("../db_connection");
const { z } = require("zod");
const pacienteSchema = require("../schemas/paciente");

async function crearPaciente(req, res){
    const parseResult = pacienteSchema.safeParse(req.body);

    if (!parseResult.success) {
        const errores = z.treeifyError(parseResult.error);
        return res.status(400).json({
            success: false,
            message: "Datos ingresados son invalidos",
            errors: errores
        }); 
    }

    const datos = parseResult.data;

    try{
        const sql = "INSERT INTO paciente (nombre, edad, genero) VALUES (?, ?, ?)";
        const values = [datos.nombre, datos.edad, datos.genero];
        const [resultado] = await db.query(sql, values);

        return res.status(201).json({
            success: true,
            message: "Paciente creado con exito",
            id: resultado.insertId
        });

    }catch (err){
        console.error("Error en el controlador de paciente:", err);
        return res.status(500).json({
            success: false,
            message: "Error interno del servidor"
        });

    }
}

module.exports = crearPaciente;