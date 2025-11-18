const express = require('express')
const app = express();

const userInfo = (req,res,next) => {
    const username = req.headers.user
    const password = req.headers.pass

    if(username != 'AdarshRaj' || password != 'Adarsh@123'){
       res.status(401).json({msg: 'error logging in'}) 
    }
    else {
        // req.username = username;
        next()
    }
}


app.get('/', userInfo, (req,res) => {
    // res.send(`Hi, ${username} you are loggen in`)
    const username  = req.headers.user
    res.send(`Hi, ${username} you are logged in`)
})

app.listen(4000 ,() => {
    console.log('listening on port 4000')
});