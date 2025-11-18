

const express = require('express');
const app = express()

const sample = require('./routes/sample')
const api = require('./routes/api')

app.use('/sample', sample)
app.use('/api', api)

app.listen(3000)
