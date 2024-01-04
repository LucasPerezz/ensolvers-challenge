const {Router} = require('express');
const {archiveNote, getArchiveNote, getAllArchiveNotes, deleteArchiveNote} = require('./../controllers/notes.controller');

const archiveRouter = Router();

archiveRouter.post("/:id", archiveNote);

archiveRouter.get("/:id", getArchiveNote);

archiveRouter.get('/', getAllArchiveNotes);

archiveRouter.delete('/:id', deleteArchiveNote);

module.exports = archiveRouter;