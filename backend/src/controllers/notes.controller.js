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

const archiveNote = async (req, res) => {
    try {
        const id = req.params.id;
        const {title, description} = req.body;
        const pool = await getConnection()
        pool.request()
        .input("idNote", sql.Int, id)
        .input("title", sql.VarChar, title)
        .input("description", sql.VarChar, description)
        .query("INSERT INTO NoteArchived VALUES (@idNote, @title, @description)")
        
        pool.request()
        .input("id", sql.Int, id)
        .query("DELETE FROM Notes WHERE Notes.id = @id")
        res.send({msg: "nota archivada"});
    } catch (error) {
        console.log(error);
    }
}

const unarchiveNote = async (req, res) => {
    try {
        const id = req.params.id;
        const {title, description} = req.body;
        const pool = await getConnection();
        

        // Insert the note into the Notes table
        await pool
            .request()
            .input("title", sql.VarChar, title)
            .input("description", sql.VarChar, description)
            .query("INSERT INTO Notes (title, description) VALUES (@title, @description)");
            console.log(title, description);
        // Delete the note from the NoteArchived table
        await pool
            .request()
            .input("id", sql.Int, id)
            .query("DELETE FROM NoteArchived WHERE NoteArchived.idNote = @id");

        res.send({ msg: "Nota desarchivada" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "Internal Server Error" });
    }
};


const getArchiveNote = async (req, res) => {
    try {
        const id = req.params.id;
        const pool = await getConnection();
        const response = await pool.request()
        .input("id", sql.Int, id)
        .query("SELECT * FROM NoteArchived WHERE NoteArchived.idNote = @id")
        res.send(response.recordset);
    } catch (error) {
        console.log(error);
    }
}

const getAllArchiveNotes = async (req, res) => {
    try {
        const pool = await getConnection();
        const response = await pool.request().query("SELECT * FROM NoteArchived");
        res.send(response.recordset);
    } catch (error) {
        console.log(error);
    }
}

const deleteArchiveNote = async (req, res) => {
    try {
        const id = req.params.id;
        const pool = await getConnection();
        pool.request()
        .input("id", sql.Int, id)
        .query("DELETE FROM NoteArchived WHERE NoteArchived.idNote = @id");
        res.send({msg: "Nota eliminada"});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getNotes,
    createNote,
    getNote,
    deleteNote,
    updateNote,
    archiveNote,
    unarchiveNote,
    getArchiveNote,
    getAllArchiveNotes,
    deleteArchiveNote
}