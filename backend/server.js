import dotenv from 'dotenv'
import express from 'express'
import ConnectDB from './db/Database.js'
import router from './routes/todo.route.js'
import cors from 'cors'
import path from "path"

const app = express()
const port = process.env.PORT || 5000
const __dirname = path.resolve()
app.use(express.json())
app.use(cors())

dotenv.config()

app.use("/", router)

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});


app.listen(port, ()=>{
    console.log(`server running on ${port}`)
    ConnectDB()
})