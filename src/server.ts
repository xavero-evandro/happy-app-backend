import express, { json } from 'express'

const app = express()

app.get("/",(req,res) => {
    return res.json('OK')
})

app.listen(3333)