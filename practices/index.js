const express = require('express');
const jwt = require('jsonwebtoken')

const jwtPassword = "123abc456"

const app = express()
app.use(express.json())

const USERS = [
    {
        username: "adarsh07@gmail.com",
        password: "12345678",
        name: 'adarsh',
    },
    {
        username: "singh2aman@gmail.com",
        password: "singh2aman",
        name: "aman",
    },
    {
        username: "medicalaman0@gmail.com",
        password: "chappal",
        name: "latrine",
    },
]


const validateuser = (username, password) => {
    let userexists = false
    for(let i=0; i<USERS.length; i++){
      if(USERS[i].username == username && USERS[i].password == password) 
        userexists = true;
        break
      
    }

    return userexists;
}

app.post("/signin", (req,res) => {
    const username = req.body.username
    const password = req.body.password

    if(!validateuser(username,password)) {
      res.status(403).json({
        msg: "user doesn't exist",
      })
    }
    var token = jwt.sign( {username: username }, jwtPassword )
     return res.json({
        token,
    })
})

app.get('/users', (req,res) => {
    
    const token = req.headers.authorization;
    const decode = jwt.verify(token, jwtPassword)
    const username = decode.username
     
    USERS.map( (data) => {
         if(data.username == username){
           return res.send(data.password)
         }
    })
})

app.listen(9000);