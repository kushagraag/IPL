const request = require("request");
const cheerio = require("cheerio");
var ans = [];
const schedule = () => {
request(
    "https://www.espncricinfo.com/series/indian-premier-league-2023-1345038/match-schedule-fixtures-and-results",
    (err, res, html) => {
      if (err) {
        console.error(err);
      } else {
        handleSchedule(html);
      }
    }
  );
  console.log(ans);
  return ans;
};
const handleSchedule = (html) => {
    var arr = [];
    var j = 0;
    const $ = cheerio.load(html);
    const table = $(".ds-p-4");
    
    for(let i = 0 ; i<70 ; i++){
      const dateArr = $(table).find(".ds-text-compact-xs.ds-font-bold.ds-w-24");
      const date = $(dateArr[i]).text();
      // .ds-grow.ds-px-4.ds-border-r.ds-border-line-default-translucent .ds-text-tight-xs.ds-font-bold.ds-uppercase.ds-leading-5
      const timeArr = $(table).find(".ds-grow.ds-px-4.ds-border-r.ds-border-line-default-translucent .ds-text-tight-xs.ds-font-bold.ds-uppercase.ds-leading-5");
      const time = $(timeArr[i]).text();
      const placeArr = $(table).find(".ds-text-compact-xxs .ds-relative .ds-flex.ds-justify-between.ds-items-center .ds-text-tight-xs.ds-truncate.ds-text-typo-mid3");
      const place = $(placeArr[i]).text();
      const teamArr = $(table).find(".ds-text-tight-m.ds-font-bold.ds-capitalize.ds-truncate");
      const team1 = $(teamArr[j++]).text();
      const team2 = $(teamArr[j++]).text();
      // .ds-text-tight-s.ds-font-regular.ds-line-clamp-2.ds-text-typo
      const resultArr = $(table).find(".ds-text-tight-s.ds-font-regular.ds-line-clamp-2.ds-text-typo");
      // const resultArr = $(table).find(".ds-text-tight-s.ds-font-regular.ds-line-clamp-2.ds-text-typo");
      const results = $(resultArr[i]).text();
      // console.log(results);
      let obj = {
        date : date,
        time : time,
        place : place,
        team1 : team1,
        team2 : team2,
        result : results,
      }
      arr.push(obj);
      
    }
    ans = arr;
    
};

module.exports = { schedule };