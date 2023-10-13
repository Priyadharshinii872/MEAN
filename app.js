const app = require('express')()
const body = require('body-parser')
app.use(body.urlencoded({extended:true}))
app.use(body.json())
const cors = require ('cors');
app.use(cors());

require('dotenv').config()
require('./config/db')
require('./routes/routes')(app)

const port = 4052;

app.listen(port , ()=>
{
    console.log(`The server is listening on port: ${port}`);
})