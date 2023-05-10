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
  const table = $(".ds-w-full.ds-table.ds-table-xs.ds-table-auto.ds-w-full.ds-overflow-scroll.ds-scrollbar-hide");
  const body = $(table[0]).find("tbody");
  const trArr = $(body).find("tr");
  for (let i = 0; i < 5; i++) {
    const allCol = $(trArr[i]).find("td");
    

    var playerName = $(allCol[0]).text();
    var matches = $(allCol[1]).text();
    var run = $(allCol[4]).text();
    var wicket = $(allCol[5]).text();
    var avg = $(allCol[7]).text();

    var obj = {
      playerName : playerName,
      matches,
      run,
      wicket,
      avg,
      
    };
    arr.push(obj);
    // console.log(obj);
    // console.log(` ${playerName} || ${matches} || ${run} || ${avg} || ${fifty} || ${hundreds}` );
  }
  return arr;
};

module.exports = { bestBowlingAvg };
