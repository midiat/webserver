
const express = require('express');
const app = express();
const hbs = require('hbs');
 

 
app.use(express.static(__dirname + '/public'));

//Expres HBS engine
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

//Helpers
hbs.registerHelper('getAnio', ()=>{
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto)=>{
    let palabras = texto.split(' ');
    
    palabras.forEach((palabra, index)=>{
        palabras[index]=palabra.charAt(0).toUpperCase() + palabra.slice(1).toLocaleLowerCase();
    });
    return palabras.join(' ');
});



app.get('/',  (req, res) => {
 
    
    res.render('home', {
        nombre: 'Midiat',
        anio: new Date().getFullYear()
    });
     
     
});

app.get('/about',  (req, res) => {
 
    
    res.render('about', {
        anio: new Date().getFullYear()
    });
     
     
});


app.get('/data',  (req, res) => {
  res.send('Hola DAta')
      
});
 
app.listen(8080, ()=>{
    console.log('Escuchando peticiones en el puerto 8080');
});