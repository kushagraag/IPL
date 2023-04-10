const axios = require("axios");
const cheerio = require("cheerio");
const point = async() => {
  const html = await axios.get("https://www.espncricinfo.com/series/indian-premier-league-2023-1345038/points-table-standings")
  const ans = handlePoints(html.data);
  return ans;
  
};

const handlePoints = (html) => {
  var arr = [];
  const $ = cheerio.load(html);
  const tableArr = $(".ds-w-full");
  const table = $(tableArr[2]);
  const body = $(table).find(".ds-text-center");
  const rowArr = $(body).find("tr");
  for (let i = 0; i < rowArr.length; i = i + 2) {
    const allCol = $(rowArr[i]).find("td");
    const name = $(allCol[0]).text();
    const match = $(allCol[1]).text();
    const win = $(allCol[2]).text();
    const lost = $(allCol[3]).text();
    const tie = $(allCol[4]).text();
    const point = $(allCol[6]).text();
    const netRun = $(allCol[7]).text();
    let obj = {
      Team: name,
      match,
      win: win,
      lost: lost,
      tie: tie,
      point: point,
      net_run_rate: netRun,
    };
    arr.push(obj);
  }
  return arr;
  
};

module.exports = { point };
