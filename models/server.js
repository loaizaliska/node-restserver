import express from 'express'
import cors from "cors";
import router from "../routes/user.js";

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;


    //Middlewares
    this.middelwares();

    //Routes

    this.userPath = '/api/users';
    this.routes();

  }

  middelwares() {

    this.app.use( cors() );

    this.app.use( express.json() ); 

    this.app.use( express.static('public') );
  }

  routes() {
      this.app.use( this.userPath, router );
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server running in port', this.port)
    })
  }

}
export default  Server;