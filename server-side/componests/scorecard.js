const request = require("request");
const cheerio = require("cheerio");
const axios = require("axios");
const scorecard = async (url) => {
  const html = await axios.get(url);
  const ans = handleScoreCard(html.data);
  return ans;
};

function handleScoreCard(html) {
  const $ = cheerio.load(html);
  let batting1 = [];
  let batting2 = [];
  let bowler1 = [];
  let bowler2 = [];
  let scoreTables = $(".ds-w-full.ds-table.ds-table-md.ds-table-auto ");
  for (let j = 0; j < scoreTables.length; j++) {
    var body = $(scoreTables[j]).find("tbody");
    var rowArr = $(body).find("tr");
    if (j === 0) {
      for (let i = 0; i < rowArr.length; i = i + 1) {
        const allCol = $(rowArr[i]).find("td");
        if (
          $(allCol[0]).hasClass(
            "ds-w-0 ds-whitespace-nowrap ds-min-w-max ds-flex ds-items-center"
          )
        ) {
          const playerName = $(allCol[0]).text();
          const wicketTaker = $(allCol[1]).text();
          const run = $(allCol[2]).text();
          const ball = $(allCol[3]).text();
          const fours = $(allCol[5]).text();
          const sixs = $(allCol[6]).text();
          const sr = $(allCol[7]).text();
          let obj = {
            playerName,
            wicketTaker,
            run,
            ball,
            fours,
            sixs,
            sr,
          };
          batting1.push(obj);
        }
      }
      let n = batting1.length;
      batting1 = batting1.slice(0, n);
    } else if (j === 1) {
      for (let i = 0; i < rowArr.length; i = i + 1) {
        const allCol = $(rowArr[i]).find("td");
        if ($(allCol[0]).hasClass("ds-flex ds-items-center")) {
          const playerName = $(allCol[0]).text();
          const over = $(allCol[1]).text();
          const run = $(allCol[3]).text();
          const wicket = $(allCol[4]).text();
          const economy = $(allCol[5]).text();
          let obj = {
            playerName: playerName,
            over: over,
            run: run,
            wicket: wicket,
            economy: economy,
          };
          bowler1.push(obj);
        }
      }
      // console.log(bowler1);
    } else if (j === 3) {
      for (let i = 0; i < rowArr.length; i = i + 1) {
        const allCol = $(rowArr[i]).find("td");
        if ($(allCol[0]).hasClass("ds-flex ds-items-center")) {
          const playerName = $(allCol[0]).text();
          const over = $(allCol[1]).text();
          const run = $(allCol[3]).text();
          const wicket = $(allCol[4]).text();
          const economy = $(allCol[5]).text();
          let obj = {
            playerName: playerName,
            over: over,
            run: run,
            wicket: wicket,
            economy: economy,
          };
          bowler2.push(obj);
        }
      }
      // console.log(bowler2);
    } else if (j === 2) {
      console.log(rowArr.length);
      for (let i = 0; i < rowArr.length; i = i + 1) {
        const allCol = $(rowArr[i]).find("td");
        if (
          $(allCol[0]).hasClass(
            "ds-w-0 ds-whitespace-nowrap ds-min-w-max ds-flex ds-items-center"
          )
        ) {
          const playerName = $(allCol[0]).text();
          const wicketTaker = $(allCol[1]).text();
          const run = $(allCol[2]).text();
          const ball = $(allCol[3]).text();
          const fours = $(allCol[5]).text();
          const sixs = $(allCol[6]).text();
          const sr = $(allCol[7]).text();
          let obj = {
            playerName: playerName,
            wicketTaker: wicketTaker,
            run: run,
            ball: ball,
            fours: fours,
            sixs: sixs,
            sr: sr,
          };
          batting2.push(obj);
        }
      }
      let n = batting2.length;
      batting2 = batting2.slice(0, n);
      // console.log(batting2);
    }
  }
  let finalObject = {
    batting1: batting1,
    batting2: batting2,
    bowler1: bowler1,
    bowler2: bowler2,
  };
  return finalObject;

  // console.log(object);
}

module.exports = { scorecard };
