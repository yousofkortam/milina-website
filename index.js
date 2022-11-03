const express = require('express');
const app = express();
const port = 8000;
const mainRouter = require('./Routes/index');

app.set('view engine', 'ejs');
app.use(express.static('Public'));
app.use('/', mainRouter);

app.listen(port, function() {
    console.log(`Server running on http://localhost:${port} ...`);
});