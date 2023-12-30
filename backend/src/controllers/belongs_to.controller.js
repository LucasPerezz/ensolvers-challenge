const {getConnection} = require('../dao/connection');
const sql = require('mssql');


const getTagsOfTheNote = async (req, res) => {
    try {
        const tag = req.params.idTag;
        const note = req.params.idNote;
        const pool = await getConnection();
        const result = await pool.request().input("idTag", sql.Int, tag).input("idNote", sql.Int, note).query("SELECT * FROM Belongs_to JOIN Notes ON Belongs_to.idNote = Notes.id JOIN Tags on Tags.id = Belongs_to.idTag WHERE idTag = @idTag and idNote = @idNote");
        res.json(result.recordset);
    } catch (error) {
        console.log(error);
    }
}

const addTagInTheNote = async (req, res) => {
    try {
        const tag = req.params.idTag;
        const note = req.params.idNote;
        const pool = await getConnection();
        await pool.request()
        .input('idTag', sql.Int, tag)
        .input('idNote', sql.Int, note)
        .query("INSERT INTO Belongs_to VALUES (@idNote, @idTag)");
        res.send({msg: "Etiqueta agregada a la nota"});

    } catch (error) {
        console.log(error);
    }
}

const deleteTagOfTheNote = async (req, res) => {
    try {
        const tag = req.params.idTag;
        const note = req.params.idNote;
        const pool = await getConnection();
        await pool.request()
        .input('idTag', sql.Int, tag)
        .input('idNote', sql.Int, note)
        .query("DELETE FROM Belongs_to WHERE idTag = @idTag AND idNote = @idNote");
        res.send({msg: "Etiqueta eliminada"});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getTagsOfTheNote,
    addTagInTheNote,
    deleteTagOfTheNote
}