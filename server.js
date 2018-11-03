const express = require('express');
const app = express();

var hbs = require('hbs');

const port = process.env.PORT || 3000;
//hacer una carpeta de dominio publico
app.use(express.static(__dirname + '/public'));

//express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine','hbs');

//helpers
hbs.registerHelper('getAnio',()=>{
	return new Date().getFullYear();
})
app.get('/',(req,res)=>{
	
	res.render('home',{
		nombre:'Luis Yerko',
	});
});

app.get('/about',function(req,res){
	res.render('about');
});

app.listen(port,()=>{
	console.log(`escuchando peticiones en el puerto ${port}`);
});