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

app.get("/stats", setEndpointAsService, async (req, res) => {
  try {
    const data = await stats();
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
    const data = await mostrun("https://stats.espncricinfo.com/ci/engine/records/batting/most_runs_career.html?id=15129;type=tournament");
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
    const data = await highestScore("https://stats.espncricinfo.com/ci/engine/records/batting/most_runs_innings.html?id=15129;type=tournament");
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
    const data = await highestAverage("https://stats.espncricinfo.com/ci/engine/records/batting/highest_career_batting_average.html?id=15129;type=tournament");
    logger.info(`API request successful for ${req.url}`, { endpoint: req.url.slice(1) });
    res.send(data);
  } catch (error) {
    logger.error(`API request failed for ${req.url}`, { endpoint: req.url.slice(1), error });
    res.status(500).send({ error: 'Internal server error' });
  }
});

app.get("/stats/highestsr", setEndpointAsService, async (req, res) => {
  try {
    const data = await highestStrikeRate("https://stats.espncricinfo.com/ci/engine/records/batting/highest_career_strike_rate.html?id=15129;type=tournament");
    logger.info(`API request successful for ${req.url}`, { endpoint: req.url.slice(1) });
    res.send(data);
  } catch (error) {
        console.log(`API request failed for ${req.url}`, error);
    res.status(500).send({ error: 'Internal server error' });
  }
});

app.get("/stats/mostfifty", setEndpointAsService, async (req, res) => {
  try {
    const data = await mostFifty("https://stats.espncricinfo.com/ci/engine/records/batting/most_fifties_career.html?id=15129;type=tournament");
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
    const data = await highestMostWicket("https://stats.espncricinfo.com/ci/engine/records/bowling/most_wickets_career.html?id=15129;type=tournament");
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
    const data = await highestBestBowling("https://stats.espncricinfo.com/ci/engine/records/bowling/best_figures_innings.html?id=15129;type=tournament");
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
    const data = await bestBowlingAvg("https://stats.espncricinfo.com/ci/engine/records/bowling/best_career_bowling_average.html?id=15129;type=tournament");
    logger.info(`API request successful for ${req.url}`, { endpoint: req.url.slice(1) });
    res.send(data);
  } catch (error) {
    logger.error(`API request failed for ${req.url}`, { endpoint: req.url.slice(1), error });
    console.log(`API request failed for ${req.url}`, error);
    res.status(500).send({ error: 'Internal server error' });
  }
});

app.get("/stats/bestbowlingeconomy", setEndpointAsService, async (req, res) => {
  try {
    const data = await bestEconomyRate("https://stats.espncricinfo.com/ci/engine/records/bowling/best_career_economy_rate.html?id=15129;type=tournament");
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
    const data = await bestBowlingSr("https://stats.espncricinfo.com/ci/engine/records/bowling/best_career_strike_rate.html?id=15129;type=tournament");
    logger.info(`API request successful for ${req.url}`, { endpoint: req.url.slice(1) });
    res.send(data);
  } catch (error) {
    logger.error(`API request failed for ${req.url}`, { endpoint: req.url.slice(1), error });
    console.log(`API request failed for ${req.url}`, error);
    res.status(500).send({ error: 'Internal server error' });
  }
});


//-------------------------------------------------------------------------------------
app.use(express.json());

app.use("/user" , usersRoutes);
app.use('/matches', matchRoute);
app.use("/bookings",bookingRoutes);
app.listen(5000, () => {
  console.log("server started");
});
