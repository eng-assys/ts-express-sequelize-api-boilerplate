import * as express from "express"
import * as bodyParser from "body-parser"
import { Routes } from "./config/routes"

class App {
  public app: express.Application
  public appRoutes: Routes = new Routes()

  constructor() {
    this.app = express()
    this.config()
    this.appRoutes.routes(this.app)
  }

  private config(): void {
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: false }))
    // enable corse for all origins
    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*")
      res.header("Access-Control-Expose-Headers", "x-total-count")
      res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH")
      res.header("Access-Control-Allow-Headers", "Content-Type,authorization")

      next()
    })
  }
}

export default new App().app