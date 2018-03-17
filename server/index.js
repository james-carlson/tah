require ('dotenv').config();

const express = require('express')
, massive = require('massive')
, bodyParser = require('body-parser')
, session = require('express-session')




const app = express();

app.get('/api/getmenu', function(req, res, next){
    console.log("API Hit")
    var menu = {menuitem: "Stuff", seconditem: "More Stuff"}
    res.status(200).send(menu);
})

const port = process.env.PORT
const server = app.listen(port, () => console.log("Server on 3001"))
