const express = require('express');
require('dotenv').config();
const todosRouter = require('./routes/todos');

const app = express();
app.use(express.json());

app.use('/', todosRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("BACKEND RUNNING ON PORT " + PORT);
});
