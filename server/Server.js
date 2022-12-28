const cors = require('cors')
const express = require('express')
require('dotenv').config();

const {db} = require('../database/dbconfig')

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.routes = {};

        this.databaseConnection();
        this.middlewares();
        // this.routes();

    }

    async databaseConnection(){
        try{
            db.authenticate();
            console.log("database connected")
        }catch(error){
            console.error(error)
            throw new Error("database connection failed");
        }
    }
    

    middlewares(){

        // CORS
        this.app.use( cors() );

        // PUBLIC
        this.app.use( express.static("public") )

        // JSON
        this.app.use( express.json() )
    }

    // routes(){
    //     // TODO: Rutas
    // }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Running in port:${this.port}`)
        })
    }

}

module.exports = Server;