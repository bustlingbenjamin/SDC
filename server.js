const express = require("express");
require('dotenv').config();
const app = express();
const path = require("path");
const PORT = 3004;
const db = require("./db/queries");
const cors = require("cors");

var body = require('body-parser');

app.use(express.static(path.join(__dirname, "./frontend/dist")));
app.use(body.urlencoded({extended: false}));
app.use(body.json());
app.use(cors());

app.get('/itemreview', (req, res) => {
  res.sendFile(path.join(`${__dirname}/frontend/dist/bundle.js`))
});

app.get("/targets/poop", (req, res) => {
  // run your query here
  db.query('EXPLAIN ANALYZE SELECT * FROM poop', (err, data) => {
      if(err){
        console.log(err);
      } else {
        // console.log(data);
        res.send(data);
      }
  })
});


app.get("/targets/:name", (req, res) => {
  // run your query here
  let id =req.params.name;
  console.log(id);
  db.query('SELECT * FROM products WHERE name=$1', [id], (err, data) => {
      if(err){
        console.log(err);
      } else {
        // console.log(data);
        res.send(data);
      }
  })
});

app.listen(PORT, () => {
  console.log(`server is running and listening on port ${PORT}`);
});
