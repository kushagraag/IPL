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

const logger = require('./logger')

app.use(cors({origin:"http://localhost:3000" , }))

app.get("/pointstable", async(req, res) => {
  try {
    const data = await point();
    res.send(data);
    const endpoint = 'pointstable';
    logger.info(`API request successful for ${endpoint}`, { endpoint });
    console.log(`API request successful for ${endpoint}`); // add a console.log statement to debug
  } catch (error) {
    const endpoint = 'pointstable';
    logger.error(`API request failed for ${endpoint}`, { endpoint, error });
    console.log(`API request failed for ${endpoint}`, error); // add a console.log statement to debug
    res.status(500).send({ error: 'Internal server error' });
  }
});

app.get("/schedule", async (req, res) => {
  try {
    const data = await schedule();
    const endpoint = 'schedule';
    logger.info(`API request successful for ${endpoint}`, { endpoint });
    res.send(data);
  } catch (error) {
    const endpoint = 'schedule';
    logger.error(`API request failed for ${endpoint}`, { endpoint, error });
    console.log(`API request failed for ${endpoint}`, error); // add a console.log statement to debug
    res.status(500).send({ error: 'Internal server error' });
  }
});

app.get("/livescore", async (req, res) => {
  try {
    const data = await livescore();
    const endpoint = 'livescore';
    logger.info(`API request successful for ${endpoint}`, { endpoint });
    res.send(data);
  } catch (error) {
    const endpoint = 'livescore';
    logger.error(`API request failed for ${endpoint}`, { endpoint, error });
    console.log(`API request failed for ${endpoint}`, error); // add a console.log statement to debug
    res.status(500).send({ error: 'Internal server error' });
  }
});

app.get("/stats", async (req, res) => {
  try {
    const data = await stats();
    const endpoint = 'stats';
    logger.info(`API request successful for ${endpoint}`, { endpoint });
    res.send(data);
  } catch (error) {
    const endpoint = 'stats';
    logger.error(`API request failed for ${endpoint}`, { endpoint, error });
    console.log(`API request failed for ${endpoint}`, error); // add a console.log statement to debug
    res.status(500).send({ error: 'Internal server error' });
  }
});

app.get("/stats/mostrun", async(req,res)=>{
  try {
    const data = await mostrun("https://stats.espncricinfo.com/ci/engine/records/batting/most_runs_career.html?id=15129;type=tournament");
    const endpoint = 'stats/mostrun';
    logger.info(`API request successful for ${endpoint}`, { endpoint });
    res.send(data);
  } catch (error) {
    const endpoint = 'stats/mostrun';
    logger.error(`API request failed for ${endpoint}`, { endpoint, error });
    console.log(`API request failed for ${endpoint}`, error); // add a console.log statement to debug
    res.status(500).send({ error: 'Internal server error' });
  }
});

app.get("/stats/highestscore", async(req,res)=>{
  try {
    const data = await highestScore("https://stats.espncricinfo.com/ci/engine/records/batting/most_runs_innings.html?id=15129;type=tournament");
    const endpoint = 'stats/highestscore';
    logger.info(`API request successful for ${endpoint}`, { endpoint });
    res.send(data);
  } catch (error) {
    const endpoint = 'stats/highestscore';
    logger.error(`API request failed for ${endpoint}`, { endpoint, error });
    console.log(`API request failed for ${endpoint}`, error); // add a console.log statement to debug
    res.status(500).send({ error: 'Internal server error' });
  }
});

app.get("/stats/highestavg", async (req, res) => {
  try {
    const data = await highestAverage("https://stats.espncricinfo.com/ci/engine/records/batting/highest_career_batting_average.html?id=15129;type=tournament");
    const endpoint = 'stats/highestavg';
    logger.info(`API request successful for ${endpoint}`, { endpoint });
    res.send(data);
  } catch (error) {
    const endpoint = 'stats/highestavg';
    logger.error(`API request failed for ${endpoint}`, { endpoint, error });
    console.log(`API request failed for ${endpoint}`, error);
    res.status(500).send({ error: 'Internal server error' });
  }
});

app.get("/stats/highestsr", async (req, res) => {
  try {
    const data = await highestStrikeRate("https://stats.espncricinfo.com/ci/engine/records/batting/highest_career_strike_rate.html?id=15129;type=tournament");
    const endpoint = 'stats/highestsr';
    logger.info(`API request successful for ${endpoint}`, { endpoint });
    res.send(data);
  } catch (error) {
    const endpoint = 'stats/highestsr';
    logger.error(`API request failed for ${endpoint}`, { endpoint, error });
    console.log(`API request failed for ${endpoint}`, error);
    res.status(500).send({ error: 'Internal server error' });
  }
});

app.get("/stats/mostfifty", async (req, res) => {
  try {
    const data = await mostFifty("https://stats.espncricinfo.com/ci/engine/records/batting/most_fifties_career.html?id=15129;type=tournament");
    const endpoint = 'stats/mostfifty';
    logger.info(`API request successful for ${endpoint}`, { endpoint });
    res.send(data);
  } catch (error) {
    const endpoint = 'mostfifty';
    logger.error(`API request failed for ${endpoint}`, { endpoint, error });
    console.log(`API request failed for ${endpoint}`, error); // add a console.log statement to debug
    res.status(500).send({ error: 'Internal server error' });
  }
});

app.get("/stats/mostwicket", async (req, res) => {
  try {
    const data = await highestMostWicket("https://stats.espncricinfo.com/ci/engine/records/bowling/most_wickets_career.html?id=15129;type=tournament");
    const endpoint = 'stats/mostwicket';
    logger.info(`API request successful for ${endpoint}`, { endpoint });
    res.send(data);
  } catch (error) {
    const endpoint = 'mostwicket';
    logger.error(`API request failed for ${endpoint}`, { endpoint, error });
    console.log(`API request failed for ${endpoint}`, error); // add a console.log statement to debug
    res.status(500).send({ error: 'Internal server error' });
  }
});

app.get("/stats/bestbowling", async (req, res) => {
  try {
    const data = await highestBestBowling("https://stats.espncricinfo.com/ci/engine/records/bowling/best_figures_innings.html?id=15129;type=tournament");
    const endpoint = 'stats/bestbowling';
    logger.info(`API request successful for ${endpoint}`, { endpoint });
    res.send(data);
  } catch (error) {
    const endpoint = 'bestbowling';
    logger.error(`API request failed for ${endpoint}`, { endpoint, error });
    console.log(`API request failed for ${endpoint}`, error); // add a console.log statement to debug
    res.status(500).send({ error: 'Internal server error' });
  }
});

app.get("/stats/bestbowlingavg", async (req, res) => {
  try {
    const data = await bestBowlingAvg("https://stats.espncricinfo.com/ci/engine/records/bowling/best_career_bowling_average.html?id=15129;type=tournament");
    const endpoint = 'stats/bestbowlingavg';
    logger.info(`API request successful for ${endpoint}`, { endpoint });
    res.send(data);
  } catch (error) {
    const endpoint = 'bestbowlingavg';
    logger.error(`API request failed for ${endpoint}`, { endpoint, error });
    console.log(`API request failed for ${endpoint}`, error); // add a console.log statement to debug
    res.status(500).send({ error: 'Internal server error' });
  }
});

app.get("/stats/bestbowlingeconomy", async (req, res) => {
  try {
    const data = await bestEconomyRate("https://stats.espncricinfo.com/ci/engine/records/bowling/best_career_economy_rate.html?id=15129;type=tournament");
    const endpoint = 'stats/bestbowlingeconomy';
    logger.info(`API request successful for ${endpoint}`, { endpoint });
    res.send(data);
  } catch (error) {
    const endpoint = 'bestbowlingeconomy';
    logger.error(`API request failed for ${endpoint}`, { endpoint, error });
    console.log(`API request failed for ${endpoint}`, error); // add a console.log statement to debug
    res.status(500).send({ error: 'Internal server error' });
  }
});

app.get("/stats/bestbowlingsr", async (req, res) => {
  try {
    const data = await bestBowlingSr("https://stats.espncricinfo.com/ci/engine/records/bowling/best_career_strike_rate.html?id=15129;type=tournament");
    const endpoint = 'stats/bestbowlingsr';
    logger.info(`API request successful for ${endpoint}`, { endpoint });
    res.send(data);
  } catch (error) {
    const endpoint = 'bestbowlingsr';
    logger.error(`API request failed for ${endpoint}`, { endpoint, error });
    console.log(`API request failed for ${endpoint}`, error); // add a console.log statement to debug
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
