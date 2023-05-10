const cheerio = require("cheerio");
const axios = require("axios");
const bestBowlingSr = async (url) => {
  const html = await axios.get(url);
  const ans = handleBestBowlingSr(html.data);
  return ans;
};

const handleBestBowlingSr = (html) => {
  var arr = [];
  const $ = cheerio.load(html);
  const table = $(".ds-w-full.ds-table.ds-table-xs.ds-table-auto.ds-w-full.ds-overflow-scroll.ds-scrollbar-hide");
  const body = $(table[0]).find("tbody");
  const trArr = $(body).find("tr");
  for (let i = 0; i < 5; i++) {
    const allCol = $(trArr[i]).find("td");

    var playerName = $(allCol[0]).text();
    var matches = $(allCol[1]).text();
    var wicket = $(allCol[6]).text();
    var sr = $(allCol[11]).text();

    var obj = {
      playerName,
      matches,
      wicket,
      sr,
      
    };
    arr.push(obj);
    
    // console.log(` ${playerName} || ${matches} || ${run} || ${avg} || ${fifty} || ${hundreds}` );
  }
  return arr;
};

module.exports = { bestBowlingSr };