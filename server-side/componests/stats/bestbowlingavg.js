const request = require("request");
const cheerio = require("cheerio");
const axios = require("axios");
const bestBowlingAvg = async (url) => {
  const html = await axios.get(url);
  const ans = handleBestBowlingAvg(html.data);
  return ans;
};

const handleBestBowlingAvg = (html) => {
  var arr = [];
  const $ = cheerio.load(html);
  const table = $(".engineTable");
  const body = $(table[0]).find("tbody");
  const trArr = $(body).find("tr");
  for (let i = 0; i < 10; i = i + 2) {
    const allCol = $(trArr[i]).find(".data2 td");
    var team = $(trArr[i + 1])
      .find(".note td")
      .text();

    var playerName = $(allCol[0]).text();
    var matches = $(allCol[1]).text();
    var run = $(allCol[4]).text();
    var wicket = $(allCol[5]).text();
    var avg = $(allCol[7]).text();

    var obj = {
      playerName,
      matches,
      run,
      wicket,
      avg,
      team: team,
    };
    arr.push(obj);
    // console.log(obj);
    // console.log(` ${playerName} || ${matches} || ${run} || ${avg} || ${fifty} || ${hundreds}` );
  }
  return arr;
};

module.exports = { bestBowlingAvg };
