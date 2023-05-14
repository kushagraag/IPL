const request = require("request");
const cheerio = require("cheerio");
const axios = require("axios");
const mostrun = async(url) => {
  // request(url, (err, res, html) => {
  //   if (err) {
  //     console.error(err);
  //   } else {
  //     handleMostRun(html);
  //   }
  // });
  // return ans;
  const html = await axios.get(url);
  const ans = handleMostRun(html.data);
  return ans;
};

const handleMostRun = (html) => {
    var arr = [];
  const $ = cheerio.load(html);
  const table = $(".ds-w-full.ds-table.ds-table-xs.ds-table-auto.ds-w-full.ds-overflow-scroll.ds-scrollbar-hide");
  const body = $(table).find("tbody");
  const trArr = $(body).find("tr");
  for (let i = 0; i < 5; i++) {
    const allCol = $(trArr[i]).find(".ds-bg-ui-fill-translucent td");
    
    
      var playerName = $(allCol[0]).text();
      var matches = $(allCol[1]).text();
      var run = $(allCol[4]).text();
      var avg = $(allCol[6]).text();
      var fifty = $(allCol[10]).text();
      var hundreds = $(allCol[9]).text();
    

    var obj = {
      playerName: playerName,
      matches: matches,
      run: run,
      avg: avg,
      fifty: fifty,
      hundreds: hundreds,
    };
    arr.push(obj);
    
    // console.log(` ${playerName} || ${matches} || ${run} || ${avg} || ${fifty} || ${hundreds}` );
  }
  return arr
//   console.log(arr);
};

module.exports = { mostrun };
