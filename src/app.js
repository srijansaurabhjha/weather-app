const path=require('path');
const express=require('express');
const app=express();
const hbs=require('hbs');

const port=8000;

//public static path
const publicpath=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
const partial_path=path.join(__dirname,"../templates/partials");

app.set('view engine', 'hbs');
app.set('views',template_path);
hbs.registerPartials(partial_path);

app.use(express.static(publicpath));


//Routing through express
app.get("/",(req,res)=>{
    res.render('index');
})

app.get("/weather",(req,res)=>{
    res.render("weather");
})

app.get("/about",(req,res)=>{
    res.render('about');
})

app.get("*",(req,res)=>{
    res.render("error404",{
        errorMsg:'OOPS Page not found'  
    });
})

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
});

