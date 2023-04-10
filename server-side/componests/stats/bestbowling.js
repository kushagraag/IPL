const request = require("request");
const cheerio = require("cheerio");
const axios = require("axios");
const highestBestBowling = async(url) => {

  const html = await axios.get(url);
  const ans = handleHighestBestBowling(html.data);
  return ans;
};

const handleHighestBestBowling = (html) => {
  var arr = [];
  const $ = cheerio.load(html);
  const table = $(".engineTable");
  const body = $(table[0]).find("tbody");
  const trArr = $(body).find("tr");
  for (let i = 0; i < 5; i = i + 1) {
    const allCol = $(trArr[i]).find(".data1 td");
    var team = $(allCol[7]).text();
    var playerName = $(allCol[0]).text();
    var over = $(allCol[1]).text();
    var wicket = $(allCol[4]).text();
    var economy = $(allCol[5]).text();

    var obj = {
      playerName: playerName,
      over: over,
      wicket: wicket,
      economy: economy,
      team: team,
    };
    arr.push(obj);
    // console.log(obj);
    // console.log(` ${playerName} || ${matches} || ${run} || ${avg} || ${fifty} || ${hundreds}` );
  }
  return arr;
};

module.exports = { highestBestBowling };