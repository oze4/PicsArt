const express= require('express')
const handlebars = require('express-handlebars')
const jquery = require('jquery')

const addController = require('./controllers/add')

const app = express()
app.use(express.static('public'))

app.engine('hbs',handlebars({
    layoutsDir : __dirname + '/views/layouts',
    defaultLayout : "mainLayout",
    extname : "hbs",
    partialsDir : __dirname + '/views/partial/'
}))

app.set('view engine','hbs') 

app.listen(3000,() => {
    console.log("server started")
})

app.use("/add",addController)

app.use("/",addController)

