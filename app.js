const express=require('express');
const path=require('path');
const app=express();
const port=80;

//express specific Stuff
app.use('/static',express.static('static')); //For Serving static files
app.use(express.urlencoded());

//PUG specific Stuff
//view engine = pug
app.set('view engine','pug'); //Set the template engine as pug
//directory=views
app.set('views',path.join(__dirname,'views')) //Set the views

//Endpoints
//index PUG
app.get('/',(req,res)=>{
    const params={};
    res.status(200).render('index.pug',params);
})

//Start the Server
app.listen(port,()=>{
    console.log(`the application started at ${port}`);
})