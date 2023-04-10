const {scorecard} = require("./scorecard");
const axios = require("axios");
const cheerio = require("cheerio");

const score = async(url) => {
  const html = await axios.get(url)
  const ans = handleLiveScore(html.data);
  return ans;
};

async function handleLiveScore(html){
    const $ =  cheerio.load(html);
    const teamArr = $(".ds-text-tight-l.ds-font-bold.ds-text-typo.ds-block.ds-truncate");
    const scoreArr = $(".ds-text-compact-m.ds-text-typo.ds-text-right.ds-whitespace-nowrap");
    let status = $(".ds-text-tight-m.ds-font-regular.ds-truncate.ds-text-typo").text();
    let crrArr = $(".ds-text-tight-s.ds-font-regular.ds-overflow-x-auto.ds-scrollbar-hide.ds-whitespace-nowrap.ds-mt-1.ds-text-typo-mid3").text();
    let team1 = $(teamArr[0]).text();
    let team2 = $(teamArr[1]).text();
    let score1 = $(scoreArr[0]).text();
    let score2 = $(scoreArr[1]).text();
    let crr = crrArr.split("•")[0];
    let rrr = crrArr.split("•")[1];
    let newUrlArr = $(".ds-flex.ds-justify-center.ds-h-10");
    let newUrl = $(newUrlArr[1]).attr("href");
    let finalUrl = "https://www.espncricinfo.com" + newUrl; 
    let obj1 = {
      team1 : team1,
      score1 : score1,
      team2 : team2,
      score2 : score2,
      crr : crr,
      rrr : rrr, 
      status : status
    }
    let obj2 = await scorecard(finalUrl);

    let data = {
      ...obj1,
      ...obj2
    }
    return data;
    
}

module.exports = { score };