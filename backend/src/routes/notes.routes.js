const {Router} = require('express');
const {getNotes, createNote, getNote, deleteNote, updateNote, archiveNote, unarchiveNote, getArchiveNote, getAllArchiveNotes} = require('./../controllers/notes.controller');

const notesRouter = Router();

notesRouter.get('/', getNotes);

notesRouter.post('/', createNote);

notesRouter.get('/:id', getNote);

notesRouter.delete('/:id', deleteNote);

notesRouter.put('/:id', updateNote);

notesRouter.post("/archived/:id", archiveNote);

notesRouter.post("/unarchived/:id", unarchiveNote);

notesRouter.get("/archived/:id", getArchiveNote);


module.exports = notesRouter;