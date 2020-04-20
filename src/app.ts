import * as express from "express"
import cors from 'cors'
import { Routes } from "./config/routes"

class App {
  public app: express.Application
  public appRoutes: Routes = new Routes()

  constructor() {
    this.app = express()
    this.middlewares()
    this.appRoutes.routes(this.app)
  }

  private middlewares(): void {
    this.app.use(express.json())
    this.app.use(cors())
  }
}

export default new App().app