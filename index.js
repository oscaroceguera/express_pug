var express = require('express')
var path = require('path')
var router = express.Router()


var app = express()

app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'pug')

app.get('/', function(req, res){
  res.render('index', {
    title: 'Express con pug',
    message: 'Hola estamos en el home'
  })
})

app.get('/panel', function(req, res){
  res.render('index', {
    title: 'Express con pug',
    message: 'Hola en el dashboard'
  })
})

app.use(function(req, res, next){
  res.status(404).send("Sorry taht route does not exist")
})


app.listen(3000, function (){
  console.log('Server starts: 3000');
})
