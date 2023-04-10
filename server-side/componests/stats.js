const axios = require("axios");
const cheerio = require("cheerio");
const {mostrun} = require("./stats/mostrun");
const {highestAverage} = require("./stats/highestavg");
const {highestScore} = require("./stats/highestscore");
const {highestStrikeRate} = require("./stats/highestsr");
const { mostFifty } = require("./stats/mostfifty");
const {highestMostWicket} = require("./stats/mostwicket");
const {highestBestBowling} = require("./stats/bestbowling");
const {bestBowlingAvg} = require("./stats/bestbowlingavg");
const {bestEconomyRate} = require("./stats/besteconomy");
const {bestBowlingSr} = require("./stats/bestbowlingsr");
var url =
  "https://www.espncricinfo.com/ci/engine/series/1345038.html?view=records";
const stats = async() => {
  const html = await axios.get(url);
  const ans = handleStats(html.data);
  return ans;
};

const handleStats = async(html) => {
  const $ = cheerio.load(html);
  const tables = $(".recordsTable");

  const tr1 = $(tables[1]).find(".heading .Record li");
  const mostRunUrl =
    "https://stats.espncricinfo.com" +
    $(tr1[0]).find(".RecordLinks").attr("href");
  const highestScoreUrl =
    "https://stats.espncricinfo.com" +
    $(tr1[1]).find(".RecordLinks").attr("href");
  const highestAverageUrl =
    "https://stats.espncricinfo.com" +
    $(tr1[2]).find(".RecordLinks").attr("href");
  const highestSrUrl =
    "https://stats.espncricinfo.com" +
    $(tr1[3]).find(".RecordLinks").attr("href");
  const mostFiftyUrl =
    "https://stats.espncricinfo.com" +
    $(tr1[4]).find(".RecordLinks").attr("href");

    const tr2 = $(tables[2]).find(".heading .Record li");
    const mostWicketUrl =
    "https://stats.espncricinfo.com" +
    $(tr2[0]).find(".RecordLinks").attr("href");
  const bestBowlingUrl =
    "https://stats.espncricinfo.com" +
    $(tr2[1]).find(".RecordLinks").attr("href");
  const bestAverageUrl =
    "https://stats.espncricinfo.com" +
    $(tr2[2]).find(".RecordLinks").attr("href");
  const bestEconomyUrl =
    "https://stats.espncricinfo.com" +
    $(tr2[3]).find(".RecordLinks").attr("href");
  const bestSrUrl =
    "https://stats.espncricinfo.com" +
    $(tr2[4]).find(".RecordLinks").attr("href");
  

  const mostruns = await mostrun(mostRunUrl);
  const highestScores = await highestScore(highestScoreUrl);
  const highestAverages = await highestAverage(highestAverageUrl);
  const highestStrikeRates = await highestStrikeRate(highestSrUrl);
  const mostFiftys = await mostFifty(mostFiftyUrl);
  const highestMostWickets = await highestMostWicket(mostWicketUrl);
  const highestBestBowlings = await highestBestBowling(bestBowlingUrl);
  const bestBowlingAvgs = await bestBowlingAvg(bestAverageUrl);
  const bestEconomyRates = await bestEconomyRate(bestEconomyUrl);
  const bestBowlingSrs = await bestBowlingSr(bestSrUrl);
  return {
    mostruns,
    highestScores,
    highestAverages,
    highestStrikeRates,
    mostFiftys,
    highestMostWickets,
    highestBestBowlings,
    bestBowlingAvgs,
    bestEconomyRates,
    bestBowlingSrs
  }
   
  
};

module.exports = { stats };
