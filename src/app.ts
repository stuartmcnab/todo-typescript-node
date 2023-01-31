import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import todoRoutes from "./routes"

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(express.json())
app.use(todoRoutes)

const uri: string = `mongodb+srv://nodeAccess:${process.env.MONGO_PASSWORD}@cluster0.zp3axvn.mongodb.net/?retryWrites=true&w=majority`
const options = {}

mongoose
  .connect(uri, options)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  })