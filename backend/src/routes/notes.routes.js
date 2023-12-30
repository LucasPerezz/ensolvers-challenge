const {Router} = require('express');
const {getNotes, createNote, getNote, deleteNote, updateNote} = require('./../controllers/notes.controller');

const notesRouter = Router();

notesRouter.get('/', getNotes);

notesRouter.post('/', createNote);

notesRouter.get('/:id', getNote);

notesRouter.delete('/:id', deleteNote);

notesRouter.put('/:id', updateNote);


module.exports = notesRouter;