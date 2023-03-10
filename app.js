const express = require('express') //Importamos la dependencia.
const app = express() //Declaramos una App de Express
const port = process.env.Port || 3000;
app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/person/:id', (req, res) => {
    const id = req.params.id;
  res.render('person', {ID: req.params.id});
});

app.get('/api', (req, res) => {
  res.json({firstname: 'Fernando', lastname: 'Chacón'});
});

app.get('/personas', (req, res) => {
  res.render('personas', {data})
});

let data = [
  {id: 1, nombre: "Luis", apellido: "Chacón Manzo", edad: 21},
  {id: 2, nombre: "Ricardo", apellido: "Alfonso Kamey", edad: 19},
  {id: 3, nombre: "Alejandro", apellido: "Chacón Manzo", edad: 23}
]

app.listen(port);