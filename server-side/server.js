const express = require("express");
const { point } = require("./componests/point");
const {schedule} = require("./componests/schedule");
const {livescore} = require("./componests/livescore");
const {stats} = require("./componests/stats")
const app = express();
const cors = require("cors");

app.use(cors({origin:"http://localhost:3000" , }))

app.get("/pointstable", async(req, res) => {
  const data = await point();
  res.send(data);
});

app.get("/schedule", async(req, res) => {
  
  var data1 = await schedule();
  res.send(data1);
});

app.get("/livescore", async(req,res)=>{
  var data = await livescore();
  res.send(data);
});

app.get("/stats", async(req,res)=>{
  var data = await stats();
  res.send(data);
});

app.listen(5000, () => {
  console.log("server started");
});
