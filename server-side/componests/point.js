const request = require("request");
const cheerio = require("cheerio");
var ans = [];
const point = () => {
  
  request(
    "https://www.espncricinfo.com/series/indian-premier-league-2023-1345038/points-table-standings",
    (err, res, html) => {
      if (err) {
        console.error(err);
      } else {
        handlePoints(html);
      }
    }
  );
  return ans;
};

const handlePoints = (html) => {
  var arr = [];
  const $ = cheerio.load(html);
  const tableArr = $(".ds-w-full");
  const table = $(tableArr[2]);
  const body = $(table).find(".ds-text-center");
  //.ds-text-tight-s
  const rowArr = $(body).find("tr");
  for (let i = 0; i < rowArr.length; i = i + 2) {
    // .ds-text-tight-s.ds-font-bold.ds-uppercase.ds-text-left
    const allCol = $(rowArr[i]).find("td");
    const name = $(allCol[0]).text();
    const match = $(allCol[1]).text();
    const win = $(allCol[2]).text();
    const lost = $(allCol[3]).text();
    const tie = $(allCol[4]).text();
    const netRun = $(allCol[7]).text();
    let obj = {
      Team: name,
      match: match,
      win: win,
      lost: lost,
      tie: tie,
      net_run_rate: netRun,
    };

    arr.push(obj);

    // console.log(`name  ${name} | match  ${match} | win  ${win} | lost  ${lost} | tie | ${tie} | nerRun  ${netRun}`  );
  }
  ans = arr;
  // console.log(ans);
  // return ans;
};

module.exports = { point };
