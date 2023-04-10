const request = require("request");
const cheerio = require("cheerio");
const axios = require("axios");
const highestStrikeRate = async(url) => {
  // request(url, (err, res, html) => {
  //   if (err) {
  //     console.error(err);
  //   } else {
  //     handleHighestStrikeRate(html);
  //   }
  // });
  const html = await axios.get(url);
  const ans = handleHighestStrikeRate(html.data);
  return ans;
};

const handleHighestStrikeRate = (html) => {
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
    var sr = $(allCol[8]).text();

    var obj = {
      playerName: playerName,
      matches: matches,
      run: run,
      sr: sr,
      team: team,
    };
    arr.push(obj);
    
    // console.log(` ${playerName} || ${matches} || ${run} || ${avg} || ${fifty} || ${hundreds}` );
  }
  return arr;
};

module.exports = { highestStrikeRate };