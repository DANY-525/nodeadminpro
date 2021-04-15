require('dotenv').config();
const express = require('express');
const cors = require('cors');
const {dbConnection} = require('./database/config')
const app = express();
dbConnection();
app.use(cors());

//Rutas
app.get('/',(req,res) =>{

    res.json({
        ok:true,
        msg:`hola`

    })

});


app.listen(process.env.PORT,() =>{

    console.log('Servidor corriendo en puesto'+3000);

})