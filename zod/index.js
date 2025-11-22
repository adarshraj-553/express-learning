const express = require('express')
const zod = require('zod')
const app = express()

const schema = zod.array(zod.string())

app.use(express.json())

app.post('/home', (req,res) => {
    const data = req.body.text;
    const response = schema.safeParse(data)
    res.send({
        response
    })
    
    console.log(response)
    
})

app.listen(1000)