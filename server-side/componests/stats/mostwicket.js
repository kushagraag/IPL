const request = require("request");
const cheerio = require("cheerio");
const axios = require("axios");
const highestMostWicket = async(url) => {
  // request(url, (err, res, html) => {
  //   if (err) {
  //     console.error(err);
  //   } else {
  //     handleHighestMostWicket(html);
  //   }
  // });
  const html = await axios.get(url);
  const ans = handleHighestMostWicket(html.data);
  return ans;
};

const handleHighestMostWicket = (html) => {
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
    var wikect = $(allCol[6]).text();
    var economy = $(allCol[9]).text();

    var obj = {
      playerName: playerName,
      matches: matches,
      wikect: wikect,
      economy: economy,
      team: team,
    };
    arr.push(obj);
    // console.log(obj);
    // console.log(` ${playerName} || ${matches} || ${run} || ${avg} || ${fifty} || ${hundreds}` );
  }
  return arr;
};

module.exports = { highestMostWicket };