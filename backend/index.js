const express = require('express');
const notesRouter = require('./src/routes/notes.routes.js');
const tagsRouter = require('./src/routes/tags.routes.js');
const belongs_toRouter = require('./src/routes/belongs_to.routes.js');
const config = require('./config/config.js');
const cors = require('cors');
const archiveRouter = require('./src/routes/archive.routes.js');
const unarchivedRouter = require('./src/routes/unarchived.routes.js');


const app = express();
const PORT = config.port;
app.use(express.json());
app.use(cors());

app.use('/api/notes', notesRouter);
app.use('/api/archived', archiveRouter);
app.use('/api/unarchived', unarchivedRouter);

app.listen(PORT, () => {
    console.log(`Escuchando el puerto ${PORT}`);
}); 
