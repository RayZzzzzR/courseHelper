const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const notesRoutes = require('./routes/notes');
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/notes', notesRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
