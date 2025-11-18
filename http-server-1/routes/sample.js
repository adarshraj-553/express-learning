const express = require('express');
const router = express.Router()

const sum = (a,b) => {
 const ans = a+b;

  return ans;
}


router.get('/', (req,res) => {
  const n1 = parseInt(req.query.n1);
  const n2 = parseInt(req.query.n2);
  const ans = sum(n1,n2);
  res.send("the sum is " + ans)
})

router.post('/pst', (req,res) => {
  res.sendFile('../text.js', {root:__dirname})
})

router.put('/pt', (req,res) => {
  res.send("this is a put req")
})

router.delete('/dlt', (req,res) => {
  res.send("this is a delete request")
})

module.exports = router