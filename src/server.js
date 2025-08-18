import express from "express"
import reservasRouter from "./routers/reservation.routes.js"

const app = express()

app.use(express.json())

app.use("/api", reservasRouter)


app.listen(3000,()=> {
    console.log(`Servidor caminando en el puerto ${3000}`)
})