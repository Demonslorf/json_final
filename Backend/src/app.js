const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

app.set('port', 9100);
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(require('./Routes/proyecto'));
app.use(require('./Routes/user'));
app.use(require('./Routes/anteproyecto'));
app.use(require('./Routes/correccion'));
app.use((req, res, next)=>{
    res.status(404).send('404 not found');
})

module.exports = app;