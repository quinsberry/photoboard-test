import express, { Response } from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()

import { ImagesCtrl, BoardsCtrl } from './controllers'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.get('/api/images/board/:name', ImagesCtrl.addTags)
app.delete('/api/images/board/:name', ImagesCtrl.removeAllTags)
app.get('/api/images/board', ImagesCtrl.showBoard)
app.get('/api/images', ImagesCtrl.all)
app.post('/api/images', ImagesCtrl.create)
app.post('/api/images/array', ImagesCtrl.addArray)

app.get('/api/boards', BoardsCtrl.all)
app.get('/api/boards/:id', BoardsCtrl.show)
app.post('/api/boards', BoardsCtrl.create)

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'dist', 'client')))

  app.get('*', (_, res: Response) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'client', 'index.html'))
  })
}

const PORT: number = Number(process.env.PORT) || 3001
async function start() {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server has been started on port ${PORT}..`)
    })
  } catch (e) {
    console.log(`Server Error: ${e.message}`)
    process.exit(1)
  }
}

start()
