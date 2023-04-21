const request = require("request");
const cheerio = require("cheerio");
const axios = require("axios");
const highestScore = async(url) => {
  // request(url, (err, res, html) => {
  //   if (err) {
  //     console.error(err);
  //   } else {
  //     handleHighestScore(html);
  //   }
  // });
  const html = await axios.get(url);
  const ans = handleHighestScore(html.data);
  return ans;
};

const handleHighestScore = (html) => {
    var arr = [];
  const $ = cheerio.load(html);
  const table = $(".engineTable");
  const body = $(table[0]).find("tbody");
  const trArr = $(body).find("tr");
  for (let i = 0; i < 5; i++) {
    const allCol = $(trArr[i]).find(".data1 td");
    var playerName = $(allCol[0]).text();
    var run = $(allCol[1]).text();
    var sr = $(allCol[5]).text();

    var obj = {
      playerName: playerName,
      run: run,
      sr: sr,
    };
    arr.push(obj);
    
  }
  return arr;
};

module.exports = { highestScore };
