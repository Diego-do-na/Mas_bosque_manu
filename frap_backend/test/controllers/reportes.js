const db = require("../db_connection");
const reporteSchema = require("../schemas/reporte");

async function crearReporte(req, res){
    const parseResult = reporteSchema.safeParse(req.body);

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
        const sql_lugar = "INSERT INTO lugar (nombre) VALUES (?)";
        const values_lugar = [datos.lugar_nombre];
        const [resultado_lugar] = await db.query(sql, values);
        const lugar_id = resultado_lugar.insertId;
        /*
        return res.status(201).json({
            success: true,
            message: "Lugar_reporte insertado con exito",
            id: lugar_id
        });
        */
        const sql_signos = "INSERT INTO signos (nombre) VALUES (?)"; // por cambiar de aqui pa abajo
        const values = [datos.lugar_nombre];
        const [resultado_signos] = await db.query(sql, values);
        const signos_id = resultado_lugar.insertId;

        return res.status(201).json({
            success: true,
            message: "Lugar_reporte insertado con exito",
            id: lugar_id
        });


    }catch (err){
        console.error("Error en el controlador de paciente:", err);
        return res.status(500).json({
            success: false,
            message: "Error interno del servidor"
        });

    }
}

module.exports = crearReporte;