const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./models/user');

app.set("view engine" , "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname , 'public')));

app.get('/' , (req, res)=>{
    res.render("index")
})
app.get('/read' , (req, res)=>{
    res.render('read')
})
app.post('/create' , function(req , res){
    let {name , email , image } = req.body;
    let newUser = userModel.create({
        name,
        email,
        image
    });
})
app.listen(3000)