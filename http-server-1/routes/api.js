const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.send("GET by api")
})

router.post('/', (req,res) => {
    res.sendFile("../text.js", {root:__dirname})
    res.send("in post")
})

router.put('/', (req,res) => {
    res.json({
        x:1,
        y:2,
        z:3,
        str: "by put"
    })
})
router.delete('/', (req,res) => {
    res.send("del by api")
})

module.exports = router