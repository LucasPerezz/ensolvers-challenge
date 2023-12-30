const {Router} = require('express');
const {getTags, createTags, getTag, deleteTag} = require('../controllers/tags.controller');

const tagsRouter = Router();

tagsRouter.get('/', getTags);

tagsRouter.post('/', createTags);

tagsRouter.get('/:id', getTag);

tagsRouter.delete('/:id', deleteTag);

module.exports = tagsRouter;