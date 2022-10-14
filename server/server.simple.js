const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: 'test123'   //Check req.username against the datase, send back 
  });
});



//add other API calls

app.listen(3000, () => console.log('API is running on http://localhost:3000/login'));