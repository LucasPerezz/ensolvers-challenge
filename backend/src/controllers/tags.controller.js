const {getConnection} = require('../dao/connection');
const sql = require('mssql');

const getTags = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query("SELECT * FROM Tags");
        res.json(result.recordset);
    } catch (error) {
        console.log(error);
        res.status(500).send({msg: "Error al obtener las etiquetas"});
    }
}

const createTags = async (req, res) => {
    try {
        const {category} = req.body;
        if(!category){
            return res.status(400).send({msg: "Verificar los datos ingresados"});
        }
        const pool = await getConnection();
        await pool.request()
        .input("category", sql.VarChar, category)
        .query("INSERT INTO Tags VALUES (@category)");
        res.send({msg: "Etiqueta creada"});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Error al agregar una etiqueta"});
    }
}

const deleteTag = async (req, res) => {
    try {
        const id = req.params.id;
        const pool = await getConnection();
        await pool.request()
        .input("id", sql.Int, id)
        .query("DELETE FROM Tags WHERE Tags.id = @id");
        res.send({msg: "Etiqueta eliminada"});
    } catch (error) {
        console.log(error);
    }
}

const getTag = async (req, res) => {
    try {
        const id = req.params.id;
        const pool = await getConnection();
        const result = await pool.request()
        .input("id", sql.Int, id)
        .query("SELECT * FROM Tags WHERE Tags.id = @id");
        res.send(result.recordset);
    } catch (error) {
        console.log(error);
        res.status(500).send({msg: "No se encontro la etiqueta"});
    }
}

module.exports = {
    getTags,
    createTags,
    deleteTag,
    getTag
}