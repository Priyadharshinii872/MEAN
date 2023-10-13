const express =require('express')
const router = express.Router()

const userfunctions = require('../controller/users/index')

let routes = (app)=>
{

    //save
    router.post('/save',userfunctions.save);
    //getall
    router.get('/get',userfunctions.get);


    app.use("/api",router);
}


module.exports= routes;