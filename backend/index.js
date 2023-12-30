const express = require('express');
const notesRouter = require('./src/routes/notes.routes.js');
const tagsRouter = require('./src/routes/tags.routes.js');
const belongs_toRouter = require('./src/routes/belongs_to.routes.js');



const app = express();
const PORT = 3000;
app.use(express.json());

app.use('/api/notes', notesRouter);
app.use('/api/tags', tagsRouter);
app.use('/api/belongs_to', belongs_toRouter);

app.listen(PORT, () => {
    console.log(`Escuchando el puerto ${PORT}`);
}); 
