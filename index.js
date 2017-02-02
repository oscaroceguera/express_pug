const express = require('express')
const path = require('path')
const pug = require('pug')
const pdf = require('html-pdf')
const app = express()

app.get('/', (req, res) => {
  var compiler = pug.compileFile(path.join(__dirname, '/views/index.pug'))
  var html = compiler({
    title: 'jojojt',
    message: 'hola mundito feli',
    email: 'osacr@email.com'
  })

  const pdfOptions = {
    format: 'Letter',
    phantomPath: "./node_modules/phantomjs-prebuilt/bin/phantomjs",
  };

  pdf.create(html, pdfOptions).toBuffer((err, response) => {
    res.attachment('filename.pdf')
    res.send(response)
  })

})

app.use( (req, res, next) => {
  res.status(404).send("Sorry taht route does not exist")
})


app.listen(3000, () => {
  console.log('Server starts: 3000');
})
