const request = require("request");
const cheerio = require("cheerio");
const axios = require("axios");
const highestScore = async(url) => {
  const html = await axios.get(url);
  const ans = handleHighestScore(html.data);
  return ans;
};

const handleHighestScore = (html) => {
    var arr = [];
  const $ = cheerio.load(html);
  const table = $(".ds-w-full.ds-table.ds-table-xs.ds-table-auto.ds-w-full.ds-overflow-scroll.ds-scrollbar-hide");
  const body = $(table[0]).find("tbody");
  const trArr = $(body).find("tr");
  for (let i = 0; i < 5; i++) {
    const allCol = $(trArr[i]).find("td");
    var playerName = $(allCol[0]).text();
    var run = $(allCol[1]).text();
    var sr = $(allCol[6]).text();

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
