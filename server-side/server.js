const express = require("express");
const { point } = require("./componests/point");
const {schedule} = require("./componests/schedule");
const {livescore} = require("./componests/livescore");
const {stats} = require("./componests/stats");
const {mostrun} = require("./componests/stats/mostrun.js");
const {highestScore} = require("./componests/stats/highestscore.js");
const {highestAverage} = require("./componests/stats/highestavg");
const {highestStrikeRate} = require("./componests/stats/highestsr");
const { mostFifty } = require("./componests/stats/mostfifty");
const {highestMostWicket} = require("./componests/stats/mostwicket");
const {highestBestBowling} = require("./componests/stats/bestbowling");
const {bestBowlingAvg} = require("./componests/stats/bestbowlingavg");
const {bestEconomyRate} = require("./componests/stats/besteconomy");
const {bestBowlingSr} = require("./componests/stats/bestbowlingsr");
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
app.get("/stats/mostrun", async(req,res)=>{
  var data = await mostrun("https://stats.espncricinfo.com/ci/engine/records/batting/most_runs_career.html?id=15129;type=tournament");
  res.send(data);
});
app.get("/stats/highestscore", async(req,res)=>{
  var data = await highestScore("https://stats.espncricinfo.com/ci/engine/records/batting/most_runs_innings.html?id=15129;type=tournament");
  res.send(data);
});
app.get("/stats/highestavg", async(req,res)=>{
  var data = await highestAverage("https://stats.espncricinfo.com/ci/engine/records/batting/highest_career_batting_average.html?id=15129;type=tournament");
  res.send(data);
});
app.get("/stats/highestsr", async(req,res)=>{
  var data = await highestStrikeRate("https://stats.espncricinfo.com/ci/engine/records/batting/highest_career_strike_rate.html?id=15129;type=tournament");
  res.send(data);
});
// https://stats.espncricinfo.com/ci/engine/records/batting/most_fifties_career.html?id=15129;type=tournament
app.get("/stats/mostfifty", async(req,res)=>{
  var data = await mostFifty("https://stats.espncricinfo.com/ci/engine/records/batting/most_fifties_career.html?id=15129;type=tournament");
  res.send(data);
});
app.get("/stats/mostwicket", async(req,res)=>{
  var data = await highestMostWicket("https://stats.espncricinfo.com/ci/engine/records/bowling/most_wickets_career.html?id=15129;type=tournament");
  res.send(data);
});
app.get("/stats/bestbowling", async(req,res)=>{
  var data = await highestBestBowling("https://stats.espncricinfo.com/ci/engine/records/bowling/best_figures_innings.html?id=15129;type=tournament");
  res.send(data);
});
app.get("/stats/bestbowlingavg", async(req,res)=>{
  var data = await bestBowlingAvg("https://stats.espncricinfo.com/ci/engine/records/bowling/best_career_bowling_average.html?id=15129;type=tournament");
  res.send(data);
});
app.get("/stats/bestbowlingeconomy", async(req,res)=>{
  var data = await bestEconomyRate("https://stats.espncricinfo.com/ci/engine/records/bowling/best_career_economy_rate.html?id=15129;type=tournament");
  res.send(data);
});
app.get("/stats/bestbowlingsr", async(req,res)=>{
  // const limit = req.query.limit || 5
  var data = await bestBowlingSr("https://stats.espncricinfo.com/ci/engine/records/bowling/best_career_strike_rate.html?id=15129;type=tournament");
  res.send(data);
});
app.listen(5000, () => {
  console.log("server started");
});
