require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const connectDB = require('./config/db')
const authRouter = require('./routes/authRoutes')
const app = express()
const port = process.env.PORT || 3000

connectDB()

app.use(express.json())
app.use(cors({
  origin:process.env.ORIGIN,
  credentials:true
}))
app.use(cookieParser())

app.get('/', (req, res) => {
  res.status(200).json({message:"Api working.",success:true})   
})

app.use("/api/auth",authRouter)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})