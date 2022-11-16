const express = require('express')
const cors = require('cors');
const app = express()
app.use(cors({
    origin: 'https://herehavetheseflowers.com'
  }));

app.use(express.json())

app.post("/auth", function (req, res) {
  const  { login, password } = req.body;
  if(!login || !password) {
    res.status(418).send({ message: 'Provide a login and a password' });
  }
  if(login !== process.env.LOGIN || password !== process.env.PASSWORD) {
    res.status(404).send({ message: 'Wrong password' });
  }
  res.status(200).send({ message: 'Molodec' })
})

app.listen(process.env.PORT || 3000)