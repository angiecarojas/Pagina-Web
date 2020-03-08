//console.log('Server work!');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();



//Configuracion de express
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
//utilizar extension html pero procesado por ejs
app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'ejs');

//Middlewares
app.use(morgan('dev'));

//Rutas (localhost:3000)
app.use(require('./routes'));


//Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//Escuchando el server 
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
  });

