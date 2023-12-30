const {Router} = require('express');
const {getTagsOfTheNote, addTagInTheNote, deleteTagOfTheNote} = require('../controllers/belongs_to.controller');


const belongs_toRouter = Router();

belongs_toRouter.get('/:idNote/:idTag', getTagsOfTheNote);

belongs_toRouter.post('/:idNote/:idTag', addTagInTheNote);

belongs_toRouter.delete('/:idNote/:idTag', deleteTagOfTheNote);

module.exports = belongs_toRouter;