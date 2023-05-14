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
const usersRoutes = require("./routes/userRoutes");
const matchRoute = require("./routes/matchesRoute");
const bookingRoutes = require("./routes/bookingRoutes");
const app = express();
require('dotenv').config();
const cors = require("cors");

const dbConfig = require("./config/dbConfig");

const { logger, setEndpointAsService } = require('./logger')

app.use(cors({origin:"http://localhost:3000" , }))

app.get("/pointstable", setEndpointAsService, async(req, res) => {
  try {
    const data = await point();
    res.send(data);
    logger.info(`API request successful for ${req.url}`, { endpoint: req.url.slice(1) });
  } catch (error) {
    logger.error(`API request failed for ${req.url}`, { endpoint: req.url.slice(1), error });
    console.log(`API request failed for ${req.url}`, error);
    res.status(500).send({ error: 'Internal server error' });
  }
});


app.get("/schedule", setEndpointAsService, async (req, res) => {
  try {
    const data = await schedule();
    logger.info(`API request successful for ${req.url}`, { endpoint: req.url.slice(1) });
    res.send(data);
  } catch (error) {
    logger.error(`API request failed for ${req.url}`, { endpoint: req.url.slice(1), error });
    console.log(`API request failed for ${req.url}`, error);
    res.status(500).send({ error: 'Internal server error' });
  }
});


app.get("/livescore", setEndpointAsService, async (req, res) => {
  try {
    const data = await livescore();
    logger.info(`API request successful for ${req.url}`, { endpoint: req.url.slice(1) });
    res.send(data);
  } catch (error) {
    logger.error(`API request failed for ${req.url}`, { endpoint: req.url.slice(1), error });
    console.log(`API request failed for ${req.url}`, error);
    res.status(500).send({ error: 'Internal server error' });
  }
});

app.get("/stats/mostrun", setEndpointAsService, async(req,res)=>{
  try {
    var data = await mostrun("https://www.espncricinfo.com/records/tournament/batting-most-runs-career/indian-premier-league-2023-15129");
    logger.info(`API request successful for ${req.url}`, { endpoint: req.url.slice(1) });
    res.send(data);
  } catch (error) {
    logger.error(`API request failed for ${req.url}`, { endpoint: req.url.slice(1), error });
    console.log(`API request failed for ${req.url}`, error);
    res.status(500).send({ error: 'Internal server error' });
  }
});

app.get("/stats/highestscore", setEndpointAsService, async(req,res)=>{
  try {
    var data = await highestScore("https://www.espncricinfo.com/records/tournament/batting-most-runs-innings/indian-premier-league-2023-15129");
    logger.info(`API request successful for ${req.url}`, { endpoint: req.url.slice(1) });
    res.send(data);
  } catch (error) {
    logger.error(`API request failed for ${req.url}`, { endpoint: req.url.slice(1), error });
    console.log(`API request failed for ${req.url}`, error);
    res.status(500).send({ error: 'Internal server error' });
  }
});

app.get("/stats/highestavg", setEndpointAsService, async (req, res) => {
  try {
    var data = await highestAverage("https://www.espncricinfo.com/records/tournament/batting-highest-career-batting-average/indian-premier-league-2023-15129");
    logger.info(`API request successful for ${req.url}`, { endpoint: req.url.slice(1) });
    res.send(data);
  } catch (error) {
    logger.error(`API request failed for ${req.url}`, { endpoint: req.url.slice(1), error });
    res.status(500).send({ error: 'Internal server error' });
  }
});

app.get("/stats/mostfifty", setEndpointAsService, async (req, res) => {
  try {
    var data = await mostFifty("https://stats.espncricinfo.com/ci/engine/records/batting/most_fifties_career.html?id=15129;type=tournament");
    logger.info(`API request successful for ${req.url}`, { endpoint: req.url.slice(1) });
    res.send(data);
  } catch (error) {
    logger.error(`API request failed for ${req.url}`, { endpoint: req.url.slice(1), error });
    console.log(`API request failed for ${req.url}`, error);
    res.status(500).send({ error: 'Internal server error' });
  }
});

app.get("/stats/mostwicket", setEndpointAsService, async (req, res) => {
  try {
    var data = await highestMostWicket("https://stats.espncricinfo.com/ci/engine/records/bowling/most_wickets_career.html?id=15129;type=tournament");
    logger.info(`API request successful for ${req.url}`, { endpoint: req.url.slice(1) });
    res.send(data);
  } catch (error) {
    logger.error(`API request failed for ${req.url}`, { endpoint: req.url.slice(1), error });
    console.log(`API request failed for ${req.url}`, error);
    res.status(500).send({ error: 'Internal server error' });
  }
});

app.get("/stats/bestbowling", setEndpointAsService, async (req, res) => {
  try {
    var data = await highestBestBowling("https://stats.espncricinfo.com/ci/engine/records/bowling/best_figures_innings.html?id=15129;type=tournament");
    logger.info(`API request successful for ${req.url}`, { endpoint: req.url.slice(1) });
    res.send(data);
  } catch (error) {
    logger.error(`API request failed for ${req.url}`, { endpoint: req.url.slice(1), error });
    console.log(`API request failed for ${req.url}`, error);
    res.status(500).send({ error: 'Internal server error' });
  }
});

app.get("/stats/bestbowlingavg", setEndpointAsService, async (req, res) => {
  try {
    var data = await bestBowlingAvg("https://stats.espncricinfo.com/ci/engine/records/bowling/best_career_bowling_average.html?id=15129;type=tournament");
    logger.info(`API request successful for ${req.url}`, { endpoint: req.url.slice(1) });
    res.send(data);
  } catch (error) {
    logger.error(`API request failed for ${req.url}`, { endpoint: req.url.slice(1), error });
    console.log(`API request failed for ${req.url}`, error);
    res.status(500).send({ error: 'Internal server error' });
  }
});


app.get("/stats/bestbowlingsr", setEndpointAsService, async (req, res) => {
  try {
    var data = await bestBowlingSr("https://stats.espncricinfo.com/ci/engine/records/bowling/best_career_strike_rate.html?id=15129;type=tournament");
    logger.info(`API request successful for ${req.url}`, { endpoint: req.url.slice(1) });
    res.send(data);
  } catch (error) {
    logger.error(`API request failed for ${req.url}`, { endpoint: req.url.slice(1), error });
    console.log(`API request failed for ${req.url}`, error);
    res.status(500).send({ error: 'Internal server error' });
  }
});

//-------------------------------------------------------------------------------------
//----
app.use(express.json());

app.use("/user" , usersRoutes);
app.use('/matches', matchRoute);
app.use("/bookings",bookingRoutes);
app.listen(5000, () => {
  console.log("server started");
});

module.exports = app;
