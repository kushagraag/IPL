const express = require("express");
const { point } = require("./componests/point");
const {schedule} = require("./componests/schedule");
const {livescore} = require("./componests/livescore")
const app = express();
const cors = require("cors");

app.use(cors({origin:"http://localhost:3000" , }))

app.get("/pointstable", (req, res) => {
  const data = point();
  res.send(data);
});

app.get("/schedule", (req, res) => {
  
  var data1 = schedule();
  res.send(data1);
});

app.get("/livescore", (req,res)=>{
  var data = livescore();
  res.send(data);
});

app.listen(5000, () => {
  console.log("server started");
});
