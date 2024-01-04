const {Router} = require('express');
const {unarchiveNote} = require('./../controllers/notes.controller');

const unarchivedRouter = Router();

unarchivedRouter.post("/:id", unarchiveNote);

module.exports = unarchivedRouter;