const axios = require("axios");
const cheerio = require("cheerio");
const schedule = async() => {
  const html = await axios.get("https://www.espncricinfo.com/series/indian-premier-league-2023-1345038/match-schedule-fixtures-and-results")
  const ans = handleSchedule(html.data);
  return ans;
};
const handleSchedule = (html) => {
    const arr = [];
    let j = 0;
    let k = 0;
    const $ = cheerio.load(html);
    const table = $(".ds-p-4");
    
    for(let i = 0 ; i<70 ; i++){
      const dateArr = $(table).find(".ds-text-compact-xs.ds-font-bold.ds-w-24");
      const date = $(dateArr[i]).text();
      // .ds-grow.ds-px-4.ds-border-r.ds-border-line-default-translucent .ds-text-tight-xs.ds-font-bold.ds-uppercase.ds-leading-5
      // const timeArr = $(table).find(".ds-grow.ds-px-4.ds-border-r.ds-border-line-default-translucent .ds-text-tight-xs.ds-font-bold.ds-uppercase.ds-leading-5");
      const timeArr =$(".ds-text-tight-xs.ds-truncate.ds-text-typo-mid3");
      const time = $(timeArr[i]).text();
      const placeArr = $(table).find(".ds-text-compact-xxs .ds-relative .ds-flex.ds-justify-between.ds-items-center .ds-text-tight-xs.ds-truncate.ds-text-typo-mid3");
      const place = $(placeArr[i]).text();
      const teamArr = $(table).find(".ds-text-tight-m.ds-font-bold.ds-capitalize.ds-truncate");
      const team1 = $(teamArr[j++]).text();
      const team_score_Arr = $(".ci-team-score.ds-flex.ds-justify-between.ds-items-center.ds-text-typo.ds-my-1 .ds-text-compact-s.ds-text-typo.ds-text-right.ds-whitespace-nowrap");
      const team1_score = $(team_score_Arr[k++]).text();
      const team2 = $(teamArr[j++]).text();
      const team2_score = $(team_score_Arr[k++]).text();
      // .ds-text-tight-s.ds-font-regular.ds-line-clamp-2.ds-text-typo
      const resultArr = $(table).find(".ds-text-tight-s.ds-font-regular.ds-line-clamp-2.ds-text-typo");
      
      const results = $(resultArr[i]).text();
      let obj = {
        date : date ,
        time,
        place,
        team1,
        team2,
        results,
        team1_score,
        team2_score
      }
      
      arr.push(obj);
      
    }
    return arr;
};

module.exports = { schedule };