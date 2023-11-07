'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('Nama : Jennifer Vanny Winata \n NIM : 51022008 \n Jurusan : Sistem Informasi \n')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
