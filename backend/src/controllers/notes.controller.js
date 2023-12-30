const {getConnection} = require('../dao/connection');
const sql = require('mssql');

const getNotes = async (_req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query("SELECT * FROM Notes");
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        console.log(error);
        res.status(500).send({msg: "Error al obtener las notas"});
    }
    
}

const createNote = async (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ msg: "Verificar los datos ingresados" });
    }

    try {
        const pool = await getConnection();
        await pool
            .request()
            .input('title', sql.VarChar, title)
            .input('description', sql.VarChar, description)
            .query('INSERT INTO Notes (title, description) VALUES (@title, @description)');

        res.json("Nota agregada");
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al agregar la nota" });
    }
}

const getNote = async (req, res) => {
    try {
        const id = req.params.id;
        const pool = await getConnection();
        const result = await pool.request().query(`SELECT * FROM Notes WHERE Notes.id = ${id}`);
        res.json(result.recordset);
    } catch (error) {
        console.log(error)
    }
}

const deleteNote = async (req, res) => {
    try {
        const id = req.params.id;
        const pool = await getConnection();

        await pool
        .request()
        .input("id", sql.Int, id)
        .query(`DELETE FROM Notes Where Notes.id = @id`);
        res.send({msg: "Nota eliminada"});
    } catch (error) {
        console.log(error);
        res.status(400).send({msg: "No se encontro la nota"});
    }
}

const updateNote = async (req, res) => {
    try {
        const { title, description } = req.body;
        const id = req.params.id;
        if (!title || !description) {
        return res.status(400).json({ msg: "Verificar los datos ingresados" });
        }
        const pool = await getConnection();
        await pool.request()
        .input('title', sql.VarChar, title)
        .input('description', sql.VarChar, description)
        .input("id", sql.Int, id)
        .query(`UPDATE Notes SET title = @title, description = @description WHERE id = @id`);
        res.send({msg: "Nota actualizada"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al actualizar la nota" });
    }
    

}


module.exports = {
    getNotes,
    createNote,
    getNote,
    deleteNote,
    updateNote
}