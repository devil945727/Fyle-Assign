const express = require('express')
const app = express()
const port = process.env.PORT ||3000

app.set('view engine','ejs')
app.use(express.static("public"))


app.get('/index', (req, res) => {
  res.sendFile('templates/index.html',{root: __dirname})
})
app.get('/login', (req, res) => {
  res.sendFile('templates/login.html',{root: __dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})