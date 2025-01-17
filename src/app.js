import express from 'express'
import routes from './routes.js'
import { resolve } from 'path'
import cors from 'cors'

import './database/index.js'

const corsOptions = {
  origin: 'https://front-hamburgueria-ten.vercel.app',
  credentials: true
 }

class App {
  constructor() {
    this.app = express()

    this.app.use(cors(corsOptions)) // passando o vercel o acesso do app

    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express.json())
    this.app.use(
      '/product-file',
      express.static(resolve(__dirname, '..', 'uploads'))
    )

    this.app.use(
      '/category-file',
      express.static(resolve(__dirname, '..', 'uploads'))
    )
  }

  routes() {
    this.app.use(routes)
  }
}
export default new App().app