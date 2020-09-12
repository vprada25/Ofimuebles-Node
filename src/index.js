const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const path = require('path');

//Seteamos el puerto
app.set('port', process.env.PORT || 4000);

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Rutas
app.use(require('./routes/index'));

// Motor de Vistas Handlebars
app.set('views', path.join(__dirname, './views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    partialsDir: path.join(__dirname, './views/layouts/partials'),
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

//Archivos estaticos
app.use(express.static(path.join(__dirname, './public')));

app.listen(app.get('port'), () => {
    console.log('Servidor escuchando en el puerto: ', app.get('port'))
});

